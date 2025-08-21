import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get Involved */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Get Involved</h3>
            <div className="space-y-2">
              <Link href="/register" className="block text-blue-400 hover:text-white transition-colors">
                Register to Play
              </Link>
              <Link href="/volunteer" className="block text-blue-400 hover:text-white transition-colors">
                Register to Volunteer
              </Link>
              <Link href="/donate" className="block text-blue-400 hover:text-white transition-colors">
                Donate Today
              </Link>
            </div>
          </div>

          {/* League News */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">League News</h3>
            <div className="space-y-2">
              <Link href="/football-standing-and-schedule" className="block text-blue-400 hover:text-white transition-colors">
                Football Standings and Schedule
              </Link>
              <Link href="/soccer-standing-and-schedule" className="block text-blue-400 hover:text-white transition-colors">
                Soccer Standings and Schedule
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="/league-rules-and-forms" className="block text-blue-400 hover:text-white transition-colors">
                League Rules and Forms
              </Link>
              <Link href="/faq" className="block text-blue-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-blue-400">
                Phone: <a href="tel:832-280-7660" className="hover:text-white transition-colors">832-280-7660</a>
              </p>
              <p className="text-blue-400">
                Email: <a href="mailto:quadsportsinfo@gmail.com" className="hover:text-white transition-colors">quadsportsinfo@gmail.com</a>
              </p>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/quadsportstx/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/quadsportstx/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 9.781c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/QuadSportsTX" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Quad Sports. All rights reserved. | Premier youth sports league serving Katy, Richmond, Rosenberg and Fulshear, Texas.
          </p>
        </div>
      </div>
    </footer>
  );
}
