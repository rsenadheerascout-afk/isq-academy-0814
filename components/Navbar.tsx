'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#00beb2] text-white text-sm py-2 px-4 text-center font-normal">
        Purchasing features are currently disabled. We are working to restore these as soon as possible.
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm font-sans font-normal">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/isq-aca-logo.png"
              alt="iSeeQ Academy"
              width={180}
              height={40}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm items-center text-black">
            {/* Dropdown Container */}
            <div
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button className="hover:text-[#00beb2] transition-colors flex items-center py-2">
                Explore courses <span className="ml-1 text-xs">▼</span>
              </button>

              {/* Dropdown Menu */}
              {isCoursesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-xl py-4 flex flex-col z-[101]">
                  <Link
                    href="/courses"
                    className="px-6 py-2 hover:bg-gray-50 hover:text-[#00beb2] transition-colors"
                  >
                    View all courses
                  </Link>
                  <Link
                    href="/courses/business"
                    className="px-6 py-2 hover:bg-gray-50 hover:text-[#00beb2] transition-colors"
                  >
                    Business & Management
                  </Link>
                  <Link
                    href="/courses/tech"
                    className="px-6 py-2 hover:bg-gray-50 hover:text-[#00beb2] transition-colors"
                  >
                    Technology & AI
                  </Link>
                  <Link
                    href="/courses/communication"
                    className="px-6 py-2 hover:bg-gray-50 hover:text-[#00beb2] transition-colors"
                  >
                    Communication
                  </Link>
                  <Link
                    href="/courses/esg-risk"
                    className="px-6 py-2 hover:bg-gray-50 hover:text-[#00beb2] transition-colors"
                  >
                    ESG & Risk
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="hover:text-[#00beb2] transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#00beb2] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="hover:text-[#00beb2] transition-colors"
            >
              Contact us
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center">
            <button className="bg-black text-white px-6 py-2 text-sm hover:bg-[#00beb2] transition-colors rounded-lg">
              Log in
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#00beb2] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                /* Close (X) Icon */
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-6 pt-2 pb-6 space-y-4">
            {/* Mobile Courses Accordion */}
            <div>
              <button
                onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                className="w-full text-left py-2 text-gray-800 font-medium flex justify-between items-center"
              >
                <span>Explore courses</span>
                <span className={`text-xs transition-transform ${isMobileCoursesOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {isMobileCoursesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#00beb2] flex flex-col text-sm">
                  <Link
                    href="/courses"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-1 text-gray-600 hover:text-[#00beb2]"
                  >
                    View all courses
                  </Link>
                  <Link
                    href="/courses/business"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-1 text-gray-600 hover:text-[#00beb2]"
                  >
                    Business & Management
                  </Link>
                  <Link
                    href="/courses/tech"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-1 text-gray-600 hover:text-[#00beb2]"
                  >
                    Technology & AI
                  </Link>
                  <Link
                    href="/courses/communication"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-1 text-gray-600 hover:text-[#00beb2]"
                  >
                    Communication
                  </Link>
                  <Link
                    href="/courses/esg-risk"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-1 text-gray-600 hover:text-[#00beb2]"
                  >
                    ESG & Risk
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-gray-800 hover:text-[#00beb2] transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-gray-800 hover:text-[#00beb2] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-gray-800 hover:text-[#00beb2] transition-colors"
            >
              Contact us
            </Link>

            <div className="pt-2">
              <button className="w-full bg-black text-white px-6 py-2.5 text-sm hover:bg-[#00beb2] transition-colors rounded-lg">
                Log in
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}