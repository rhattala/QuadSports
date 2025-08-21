import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';

const ROOT = 'https://www.quadsports.org';
const OUT = 'quadsports_simple';

async function ensureDir(p) { 
  await fs.mkdir(p, { recursive: true }); 
}

function safeName(url) { 
  return url.replace(/^https?:\/\//, '').replace(/[\\/?%*:|"<>]/g, '_'); 
}

const PAGES = [
  { url: ROOT, name: 'home' },
  { url: `${ROOT}/services-5`, name: 'locations' },
  { url: `${ROOT}/about-us`, name: 'about' },
  { url: `${ROOT}/get-involved`, name: 'get-involved' },
  { url: `${ROOT}/league-news`, name: 'league-news' },
  { url: `${ROOT}/resources`, name: 'resources' },
  { url: `${ROOT}/contact`, name: 'contact' }
];

async function crawlPage(page, pageInfo) {
  console.log(`Crawling ${pageInfo.name}: ${pageInfo.url}`);
  
  try {
    // Quick load with minimal wait
    await page.goto(pageInfo.url, { 
      waitUntil: 'domcontentloaded', 
      timeout: 15000 
    });
    
    // Get the content quickly
    const content = await page.evaluate(() => {
      // Remove scripts and tracking
      document.querySelectorAll('script, style, [class*="analytics"], [id*="analytics"]').forEach(el => el.remove());
      
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content || '',
        content: document.body?.innerHTML || '',
        text: document.body?.textContent?.trim() || '',
        wordCount: document.body?.textContent?.trim().split(/\s+/).length || 0
      };
    });
    
    // Save as JSON for easier processing
    const fileName = `${pageInfo.name}.json`;
    const filePath = path.join(OUT, fileName);
    await fs.writeFile(filePath, JSON.stringify({
      url: pageInfo.url,
      name: pageInfo.name,
      ...content
    }, null, 2), 'utf8');
    
    console.log(`✓ Saved: ${fileName} (${content.wordCount} words)`);
    return { success: true, ...content };
    
  } catch (e) {
    console.warn(`✗ Failed ${pageInfo.name}:`, e.message);
    return { 
      success: false, 
      url: pageInfo.url, 
      name: pageInfo.name, 
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

  const results = [];

  for (const pageInfo of PAGES) {
    const result = await crawlPage(page, pageInfo);
    results.push(result);
    
    // Short wait between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Save summary
  await fs.writeFile(path.join(OUT, 'summary.json'), JSON.stringify(results, null, 2), 'utf8');
  
  // Create a simple HTML index
  const htmlIndex = `
<!DOCTYPE html>
<html>
<head>
  <title>QuadSports Content Audit</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; }
    .page { margin: 20px 0; padding: 20px; border: 1px solid #ccc; }
    .success { border-color: #4CAF50; }
    .failed { border-color: #f44336; }
    .word-count { color: #666; font-size: 0.9em; }
  </style>
</head>
<body>
  <h1>QuadSports Content Audit</h1>
  ${results.map(result => `
    <div class="page ${result.success ? 'success' : 'failed'}">
      <h2>${result.name || result.url}</h2>
      ${result.success ? `
        <p><strong>Title:</strong> ${result.title}</p>
        <p><strong>Description:</strong> ${result.description}</p>
        <p class="word-count"><strong>Word Count:</strong> ${result.wordCount}</p>
        <p><strong>URL:</strong> <a href="${result.url}" target="_blank">${result.url}</a></p>
      ` : `
        <p><strong>Error:</strong> ${result.error}</p>
        <p><strong>URL:</strong> <a href="${result.url}" target="_blank">${result.url}</a></p>
      `}
    </div>
  `).join('')}
</body>
</html>`;

  await fs.writeFile(path.join(OUT, 'index.html'), htmlIndex, 'utf8');

  await browser.close();
  
  console.log(`\n✅ Simple crawl complete!`);
  console.log(`📁 Saved content to ./${OUT}`);
  console.log(`📊 Summary: ${results.filter(r => r.success).length}/${results.length} pages successful`);
  console.log(`🌐 View index.html for a quick overview`);
}

main().catch(console.error);
