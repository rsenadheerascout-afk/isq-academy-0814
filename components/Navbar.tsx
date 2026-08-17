'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

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
                <div className="absolute top-full left-0 w-64 bg-white  border border-gray-200 shadow-xl py-4 flex flex-col z-[101]">
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
              href="/organizations"
              className="hover:text-[#00beb2] transition-colors"
            >
              For organizations ▼
            </Link>
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
              href="/contact"
              className="hover:text-[#00beb2] transition-colors"
            >
              Contact us
            </Link>
          </nav>

          <button className="bg-black text-white px-6 py-2 text-sm hover:bg-[#00beb2] transition-colors rounded-lg">
            Log in
          </button>
        </div>
      </header>
    </>
  );
}