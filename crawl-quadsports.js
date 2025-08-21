import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

const ROOT = 'https://www.quadsports.org';
const OUT = 'quadsports_rendered';

async function ensureDir(p) { 
  await fs.mkdir(p, { recursive: true }); 
}

function safeName(url) { 
  return url.replace(/^https?:\/\//, '').replace(/[\\/?%*:|"<>]/g, '_'); 
}

async function getSitemapUrls() {
  const candidates = [`${ROOT}/sitemap.xml`, `${ROOT}/sitemap-index.xml`];
  const urls = new Set([
    ROOT, 
    `${ROOT}/services-5`, 
    `${ROOT}/about-us`, 
    `${ROOT}/get-involved`, 
    `${ROOT}/league-news`, 
    `${ROOT}/resources`, 
    `${ROOT}/contact`
  ]); // fallbacks
  
  for (const u of candidates) {
    try {
      const { data } = await axios.get(u, { timeout: 10000 });
      const parser = new XMLParser();
      const xml = parser.parse(data);
      const locs = []
        .concat(xml?.urlset?.url || [])
        .concat(xml?.sitemapindex?.sitemap || [])
        .map(x => x.loc)
        .filter(Boolean);
      locs.forEach(l => { 
        if (String(l).startsWith(ROOT)) urls.add(String(l).split('#')[0]); 
      });
    } catch (e) {
      console.log(`No sitemap found at ${u}:`, e.message);
    }
  }
  return Array.from(urls);
}

async function downloadAssets(page, url, outDir) {
  try {
    // Create assets directory
    const assetsDir = path.join(outDir, 'assets');
    await ensureDir(assetsDir);
    
    // Get all images and CSS
    const assets = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt || '',
        type: 'image'
      }));
      
      const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => ({
        href: link.href,
        type: 'css'
      }));
      
      return [...images, ...stylesheets];
    });
    
    // Download assets
    for (const asset of assets) {
      if (asset.src || asset.href) {
        const assetUrl = asset.src || asset.href;
        if (assetUrl.startsWith('http')) {
          try {
            const response = await axios.get(assetUrl, { 
              responseType: 'arraybuffer',
              timeout: 10000 
            });
            
            const fileName = path.basename(assetUrl.split('?')[0]);
            const filePath = path.join(assetsDir, fileName);
            await fs.writeFile(filePath, response.data);
            console.log(`Downloaded: ${fileName}`);
          } catch (e) {
            console.warn(`Failed to download ${assetUrl}:`, e.message);
          }
        }
      }
    }
  } catch (e) {
    console.warn('Asset download failed:', e.message);
  }
}

async function crawlPage(page, url, outDir) {
  console.log('Rendering', url);
  try {
    // Try with a shorter timeout and different wait strategy
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Wait a bit more for any dynamic content
    await page.waitForTimeout(3000);
    
    // Get page metadata
    const metadata = await page.evaluate(() => {
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content || '',
        wordCount: document.body?.textContent?.trim().split(/\s+/).length || 0,
        lastModified: document.querySelector('meta[http-equiv="last-modified"]')?.content || ''
      };
    });
    
    // Download assets for this page
    await downloadAssets(page, url, outDir);
    
    // Strip script tags for safer static review
    await page.evaluate(() => {
      document.querySelectorAll('script').forEach(s => s.remove());
      // Also remove any tracking/analytics elements
      document.querySelectorAll('[class*="analytics"], [id*="analytics"], [class*="tracking"], [id*="tracking"]').forEach(el => el.remove());
    });
    
    const html = await page.content();
    const fileName = safeName(url) + '.html';
    const filePath = path.join(outDir, fileName);
    await fs.writeFile(filePath, html, 'utf8');
    
    console.log(`✓ Saved: ${fileName}`);
    
    return {
      url,
      fileName,
      ...metadata
    };
    
  } catch (e) {
    console.warn('Failed:', url, e.message);
    return {
      url,
      fileName: safeName(url) + '.html',
      title: 'Failed to load',
      description: '',
      wordCount: 0,
      lastModified: '',
      error: e.message
    };
  }
}

async function main() {
  await ensureDir(OUT);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  const targets = await getSitemapUrls();
  console.log('Found URLs to crawl:', targets);

  const siteMap = [];

  for (const url of targets) {
    const result = await crawlPage(page, url, OUT);
    siteMap.push(result);
    
    // Be respectful - wait between requests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  // Save site map as CSV
  const csvContent = [
    'URL,FileName,Title,Description,WordCount,LastModified,Error',
    ...siteMap.map(page => 
      `"${page.url}","${page.fileName}","${page.title}","${page.description}","${page.wordCount}","${page.lastModified}","${page.error || ''}"`.replace(/"/g, '""')
    )
  ].join('\n');
  
  await fs.writeFile(path.join(OUT, 'site-map.csv'), csvContent, 'utf8');
  
  // Save site map as JSON for easier processing
  await fs.writeFile(path.join(OUT, 'site-map.json'), JSON.stringify(siteMap, null, 2), 'utf8');

  await browser.close();
  console.log(`\n✅ Crawl complete!`);
  console.log(`📁 Saved rendered pages to ./${OUT}`);
  console.log(`📊 Site map saved as site-map.csv and site-map.json`);
  console.log(`\n📋 Summary:`);
  siteMap.forEach(page => {
    console.log(`  ${page.title} (${page.wordCount} words) - ${page.fileName}`);
  });
}

main().catch(console.error);
