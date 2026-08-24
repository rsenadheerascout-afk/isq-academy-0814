// components/Navbar.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import { courseCategories } from '@/data/navigation'; // Adjust path if necessary

export default function Navbar() {
  const [activeMenus, setActiveMenus] = useState({ courses: false, org: false, mobile: false });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navRef = useRef<HTMLHeadingElement>(null);

  const closeAll = () => {
    setActiveMenus({ courses: false, org: false, mobile: false });
    setActiveCategory(null);
  };

  const toggleMenu = (menu: 'courses' | 'org' | 'mobile') => {
    setActiveMenus(prev => ({ courses: false, org: false, mobile: false, [menu]: !prev[menu] }));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeAll();
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
          
          <Link href="/" className="flex items-center" onClick={closeAll}>
            <Image src="/isq-aca-logo.png" alt="iSeeQ Academy" width={180} height={40} priority className="h-12 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex space-x-8 text-sm items-center text-black">
            {/* Explore Courses */}
            <div className="relative">
              <button onClick={() => toggleMenu('courses')} className="flex items-center py-2 font-medium hover:text-primary transition-colors">
                Explore courses <span className={`ml-1 text-xs transition-transform ${activeMenus.courses ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {activeMenus.courses && (
                <div className="absolute top-full left-0 w-[320px] bg-white border border-gray-200 shadow-xl z-[101]">
                  <div className="flex flex-col py-2">
                    {courseCategories.map((cat) => (
                      <div key={cat.id} className="relative" onMouseEnter={() => setActiveCategory(cat.id)} onMouseLeave={() => setActiveCategory(null)}>
                        <Link href={cat.href} onClick={closeAll} className={`flex justify-between items-center px-6 py-3 transition-colors ${activeCategory === cat.id ? 'bg-[#eef9f8] text-primary border-l-2 border-primary' : 'hover:bg-gray-50 border-l-2 border-transparent'}`}>
                          <span>{cat.label}</span><span className="text-gray-400">›</span>
                        </Link>
                        
                        {activeCategory === cat.id && (
                          <div className="absolute top-0 left-full w-[300px] bg-white border border-gray-200 shadow-xl min-h-full py-2">
                            {cat.subCategories.map((sub, i) => (
                              <Link key={i} href={sub.href} onClick={closeAll} className="block px-6 py-3 hover:text-primary hover:bg-gray-50 border-b border-gray-50 last:border-0">
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <Link href="/courses" onClick={closeAll} className="block border border-black py-2 text-center rounded-md font-medium hover:bg-primary/10 hover:border-primary hover:text-primary">
                      View all courses
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* For Organizations */}
            {/* <div className="relative">
              <button onClick={() => toggleMenu('org')} className="flex items-center py-2 font-medium hover:text-primary transition-colors">
                For organizations <span className={`ml-1 text-xs transition-transform ${activeMenus.org ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeMenus.org && (
                <div className="absolute top-full left-0 mt-1 w-[280px] bg-white border border-gray-200 shadow-xl py-2 z-[101]">
                  <Link href="#" onClick={closeAll} className="block px-6 py-3 text-sm hover:bg-gray-50 hover:text-primary">
                    Learning and Development for your organisation
                  </Link>
                </div>
              )}
            </div> */}

            <Link href="/about" className="hover:text-primary font-medium">About</Link>
            {/* <Link href="/blog" className="hover:text-primary font-medium">Blog</Link> */}
            <Link href="/#contact" onClick={closeAll} className="hover:text-primary font-medium">Contact us</Link>
          </nav>

          <Link href="https://wa.me/94777789898" target="_blank" className="hidden md:flex bg-black text-white px-6 py-2 text-sm hover:bg-primary transition-colors rounded-full font-medium">
            Chat with Us
          </Link>

          <button onClick={() => toggleMenu('mobile')} className="md:hidden p-2 text-black hover:text-primary">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeMenus.mobile ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        <MobileMenu isOpen={activeMenus.mobile} closeMenu={closeAll} courseCategories={courseCategories} />
      </header>
    </>
  );
}