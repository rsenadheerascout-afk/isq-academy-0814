'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  // Desktop States
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Mobile States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

  // Function to close the desktop dropdown
  const closeDropdown = () => {
    setIsCoursesOpen(false);
    setActiveCategory(null);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileCoursesOpen(false);
  };

  const courseCategories = [
    {
      id: 'business',
      label: 'Business and Management',
      href: '/courses/business',
      subCategories: [
        { label: 'Business Essentials', href: '/courses/business/essentials' },
        { label: 'Compelling Communication', href: '/courses/business/communication' },
        { label: 'Leadership Foundations', href: '/courses/business/leadership' },
      ],
    },
    {
      id: 'tech',
      label: 'Technology and AI',
      href: '/courses/tech',
      subCategories: [
        { label: 'Generative AI in Business', href: '/courses/tech/ai' },
        { label: 'Data Science Basics', href: '/courses/tech/data' },
        { label: 'Cloud Architecture', href: '/courses/tech/cloud' },
      ],
    },
    {
      id: 'esg',
      label: 'Sustainability, Environment and Policy',
      href: '/courses/esg',
      subCategories: [
        { label: 'ESG Risk Management', href: '/courses/esg/risk' },
        { label: 'Sustainable Supply Chains', href: '/courses/esg/supply-chain' },
        { label: 'Climate Change Strategy', href: '/courses/esg/climate' },
      ],
    },
    {
      id: 'science',
      label: 'Healthcare and Sciences',
      href: '/courses/science',
      subCategories: [
        { label: 'Medical Physiology', href: '/courses/science/physiology' },
        { label: 'Functional Neuroanatomy', href: '/courses/science/neuroanatomy' },
        { label: 'Clinical Trial Design', href: '/courses/science/clinical-trials' },
      ],
    },
  ];

  return (
    <>
      <div className="bg-primary text-white text-sm py-2 px-4 text-center font-normal">
        Purchasing features are currently disabled. We are working to restore these as soon as possible.
      </div>

      <header className="sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm font-sans font-normal relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
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
            <div
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={closeDropdown}
            >
              <button className="hover:text-[#00beb2] transition-colors flex items-center py-2">
                Explore courses <span className="ml-1 text-xs">▼</span>
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 w-[320px] bg-white border border-gray-200 shadow-xl z-[101]">
                  <div className="flex flex-col py-2">
                    {courseCategories.map((category) => (
                      <div
                        key={category.id}
                        className="relative"
                        onMouseEnter={() => setActiveCategory(category.id)}
                        onMouseLeave={() => setActiveCategory(null)}
                      >
                        <Link
                          href={category.href}
                          onClick={closeDropdown}
                          className={`flex justify-between items-center px-6 py-3 transition-colors ${
                            activeCategory === category.id
                              ? 'bg-[#eef9f8] text-primary border-l-2 border-primary'
                              : 'hover:bg-gray-50 border-l-2 border-transparent'
                          }`}
                        >
                          <span>{category.label}</span>
                          <span className="text-gray-400">›</span>
                        </Link>

                        {activeCategory === category.id && (
                          <div className="absolute top-0 left-full ml-0.5 w-[300px] bg-white border border-gray-200 shadow-xl min-h-full">
                            <div className="flex flex-col py-2">
                              {category.subCategories.map((sub, index) => (
                                <Link
                                  key={index}
                                  href={sub.href}
                                  onClick={closeDropdown}
                                  className="px-6 py-3 hover:text-primary hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="p-6 flex justify-center">
                    <Link
                      href="/courses"
                      onClick={closeDropdown}
                      className="border border-black px-6 py-2 text-center hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors w-2/3"
                    >
                      View all courses
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/organizations" className="hover:text-primary transition-colors">
              For organizations ▼
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact us
            </Link>
          </nav>

          {/* Desktop Login Button */}
          <button className="hidden md:block bg-black text-white px-6 py-2 text-sm hover:bg-primary transition-colors rounded-lg">
            Log in
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex items-center p-2 text-black hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl z-[102] flex flex-col max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col py-2">
              
              {/* Mobile Accordion for Courses */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center text-black hover:text-primary transition-colors"
                  onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                >
                  Explore courses
                  <span className={`transform transition-transform ${isMobileCoursesOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {isMobileCoursesOpen && (
                  <div className="bg-gray-50 flex flex-col px-6 py-2">
                    {courseCategories.map((category) => (
                      <div key={category.id} className="py-2">
                        <Link
                          href={category.href}
                          onClick={closeMobileMenu}
                          className="block font-medium text-black hover:text-primary mb-2"
                        >
                          {category.label}
                        </Link>
                        <div className="pl-4 border-l-2 border-gray-200 flex flex-col space-y-2">
                          {category.subCategories.map((sub, index) => (
                            <Link
                              key={index}
                              href={sub.href}
                              onClick={closeMobileMenu}
                              className="text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      href="/courses"
                      onClick={closeMobileMenu}
                      className="mt-4 border border-black px-6 py-2 text-center text-sm hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors w-full"
                    >
                      View all courses
                    </Link>
                  </div>
                )}
              </div>

              {/* Standard Mobile Links */}
              <Link
                href="/organizations"
                onClick={closeMobileMenu}
                className="px-6 py-4 border-b border-gray-100 hover:text-primary transition-colors"
              >
                For organizations
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="px-6 py-4 border-b border-gray-100 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="px-6 py-4 border-b border-gray-100 hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="px-6 py-4 border-b border-gray-100 hover:text-primary transition-colors"
              >
                Contact us
              </Link>

              {/* Mobile Login Button */}
              <div className="px-6 py-6">
                <button className="w-full bg-black text-white px-6 py-3 text-sm hover:bg-primary transition-colors rounded-lg">
                  Log in
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}