'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  return (
    <nav className={`backdrop-premium sticky top-0 z-50 border-b border-gray-200/20 transition-all duration-300 ${
      isScrolled ? 'shadow-lg bg-white/95' : 'bg-white/80'
    }`}>
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-lg">QS</span>
            </div>
            <div>
              <span className="text-xl font-black text-gray-900">Quad Sports</span>
              <div className="text-xs text-gray-500 font-medium">Youth Sports League</div>
            </div>
          </Link>

          {/* Desktop Navigation - Registration Focused */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Primary Actions */}
            <div className="flex items-center space-x-2 mr-6">
              <Link href="/register" className="btn-primary text-sm px-6 py-2.5">
                🏈 Register Player
              </Link>
              <Link href="/volunteer" className="btn-secondary text-sm px-6 py-2.5">
                👥 Volunteer
              </Link>
            </div>

            {/* User Account */}
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/80 hover:bg-white border border-gray-200/50 transition-all duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">👤</span>
                </div>
                <span className="text-gray-700 font-medium text-sm">My Account</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200/50 backdrop-blur-xl">
                  <div className="p-4 border-b border-gray-100">
                    <div className="font-semibold text-gray-900">Welcome back!</div>
                    <div className="text-sm text-gray-500">Manage your registrations</div>
                  </div>
                  <div className="p-2">
                    <Link href="/dashboard" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-lg">📊</span>
                      <div>
                        <div className="font-medium text-gray-900">My Dashboard</div>
                        <div className="text-xs text-gray-500">View all registrations</div>
                      </div>
                    </Link>
                    <Link href="/my-teams" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-lg">🏆</span>
                      <div>
                        <div className="font-medium text-gray-900">My Teams</div>
                        <div className="text-xs text-gray-500">Team schedules & standings</div>
                      </div>
                    </Link>
                    <Link href="/payments" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-lg">💳</span>
                      <div>
                        <div className="font-medium text-gray-900">Payments</div>
                        <div className="text-xs text-gray-500">View invoices & payments</div>
                      </div>
                    </Link>
                    <Link href="/profile" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-lg">⚙️</span>
                      <div>
                        <div className="font-medium text-gray-900">Settings</div>
                        <div className="text-xs text-gray-500">Account preferences</div>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2 border-t border-gray-100">
                    <button className="w-full text-left flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors">
                      <span className="text-lg">🚪</span>
                      <span className="font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Secondary Navigation */}
            <div className="flex items-center space-x-6 ml-6 pl-6 border-l border-gray-200/50">
              <Link href="/locations" className="text-gray-600 hover:text-red-600 font-medium transition-colors text-sm">
                📍 Locations
              </Link>
              <Link href="/schedules" className="text-gray-600 hover:text-red-600 font-medium transition-colors text-sm">
                📅 Schedules
              </Link>
              <Link href="/standings" className="text-gray-600 hover:text-red-600 font-medium transition-colors text-sm">
                🏆 Standings
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-red-600 font-medium transition-colors text-sm">
                📞 Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden mobile-menu-button p-3 rounded-xl text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`lg:hidden mobile-menu fixed inset-0 z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-black text-sm">QS</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Quad Sports</div>
                    <div className="text-xs text-gray-500">Youth Sports League</div>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto">
              {/* Primary Actions */}
              <div className="p-6 space-y-4">
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Quick Actions</div>
                <Link 
                  href="/register" 
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  onClick={closeMenu}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏈</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Register Player</div>
                    <div className="text-red-100 text-sm">Join our sports programs</div>
                  </div>
                </Link>
                
                <Link 
                  href="/volunteer" 
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  onClick={closeMenu}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Volunteer</div>
                    <div className="text-blue-100 text-sm">Help with teams & events</div>
                  </div>
                </Link>
              </div>

              {/* User Account Section */}
              <div className="px-6 pb-6">
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">My Account</div>
                <div className="space-y-2">
                  <Link 
                    href="/dashboard" 
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    onClick={closeMenu}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-lg">📊</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">My Dashboard</div>
                      <div className="text-sm text-gray-600">View all registrations</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/my-teams" 
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    onClick={closeMenu}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-lg">🏆</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">My Teams</div>
                      <div className="text-sm text-gray-600">Team schedules & standings</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/payments" 
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    onClick={closeMenu}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-lg">💳</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Payments</div>
                      <div className="text-sm text-gray-600">View invoices & payments</div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Secondary Navigation */}
              <div className="px-6 pb-6">
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Information</div>
                <div className="grid grid-cols-2 gap-3">
                  <Link 
                    href="/locations" 
                    className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors text-center"
                    onClick={closeMenu}
                  >
                    <span className="text-2xl mb-2">📍</span>
                    <div className="font-medium text-gray-900 text-sm">Locations</div>
                  </Link>
                  
                  <Link 
                    href="/schedules" 
                    className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors text-center"
                    onClick={closeMenu}
                  >
                    <span className="text-2xl mb-2">📅</span>
                    <div className="font-medium text-gray-900 text-sm">Schedules</div>
                  </Link>
                  
                  <Link 
                    href="/standings" 
                    className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors text-center"
                    onClick={closeMenu}
                  >
                    <span className="text-2xl mb-2">🏆</span>
                    <div className="font-medium text-gray-900 text-sm">Standings</div>
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors text-center"
                    onClick={closeMenu}
                  >
                    <span className="text-2xl mb-2">📞</span>
                    <div className="font-medium text-gray-900 text-sm">Contact</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Need help?</div>
                <Link 
                  href="/contact" 
                  className="text-red-600 font-semibold hover:text-red-700 transition-colors"
                  onClick={closeMenu}
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
