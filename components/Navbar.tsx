// components/Navbar.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

interface SubCategory {
  label: string;
  href: string;
}

interface Category {
  id: string;
  label: string;
  href: string;
  subCategories: SubCategory[];
}

const courseCategories: Category[] = [
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

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLHeadingElement>(null);

  const closeDropdowns = () => {
    setIsCoursesOpen(false);
    setIsOrgOpen(false);
    setActiveCategory(null);
  };

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeDropdowns();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="bg-primary text-white text-sm py-2 px-4 text-center font-normal">
        Purchasing features are currently disabled. We are working to restore these as soon as possible.
      </div>

      <header ref={navRef} className="sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm font-sans font-normal">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Brand Logo */}
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/isq-aca-logo.png"
              alt="iSeeQ Academy"
              width={180}
              height={40}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm items-center text-black">

            {/* Explore Courses Dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={isCoursesOpen}
                aria-haspopup="true"
                onClick={() => {
                  setIsCoursesOpen((prev) => !prev);
                  setIsOrgOpen(false);
                }}
                className="cursor-pointer hover:text-primary transition-colors flex items-center py-2 font-medium"
              >
                Explore courses
                <span className={`ml-1 text-xs transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
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
                          onClick={closeDropdowns}
                          className={`flex justify-between items-center px-6 py-3 transition-colors ${activeCategory === category.id
                              ? 'bg-[#eef9f8] text-primary border-l-2 border-primary'
                              : 'hover:bg-gray-50 border-l-2 border-transparent'
                            }`}
                        >
                          <span>{category.label}</span>
                          <span className="text-gray-400">›</span>
                        </Link>

                        {activeCategory === category.id && (
                          <div className="absolute top-0 left-full w-[300px] bg-white border border-gray-200 shadow-xl min-h-full">
                            <div className="flex flex-col py-2">
                              {category.subCategories.map((sub, index) => (
                                <Link
                                  key={index}
                                  href={sub.href}
                                  onClick={closeDropdowns}
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

                  <div className="p-6 flex justify-center border-t border-gray-100">
                    <Link
                      href="/courses"
                      onClick={closeDropdowns}
                      className="border border-black px-6 py-2 text-center hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors w-full rounded-md font-medium"
                    >
                      View all courses
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* For Organizations Dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={isOrgOpen}
                aria-haspopup="true"
                onClick={() => {
                  setIsOrgOpen((prev) => !prev);
                  setIsCoursesOpen(false);
                }}
                className="cursor-pointer hover:text-primary transition-colors flex items-center py-2 font-medium"
              >
                For organizations
                <span className={`ml-1 text-xs transition-transform duration-200 ${isOrgOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {isOrgOpen && (
                <div className="absolute top-full left-0 mt-1 w-[280px] bg-white border border-gray-200 shadow-xl py-2 z-[101]">
                  <Link
                    href="/organizations"
                    onClick={closeDropdowns}
                    className="block px-6 py-3 text-sm hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    Learning and Development for your organisation
                  </Link>
                </div>
              )}
            </div>

            {/* Standard Links */}
            <Link href="/about" className="hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/blog" className="hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors font-medium">
              Contact us
            </Link>
          </nav>

          {/* Desktop Login Action */}
          <button className="hidden md:block bg-black text-white px-6 py-2 text-sm hover:bg-primary transition-colors rounded-lg font-medium">
            Log in
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden flex items-center p-2 text-black hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          closeMenu={() => setIsMobileMenuOpen(false)}
          courseCategories={courseCategories}
        />
      </header>
    </>
  );
}