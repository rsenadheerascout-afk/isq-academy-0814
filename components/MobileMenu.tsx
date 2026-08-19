// components/MobileMenu.tsx
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
    isOpen: boolean;
    closeMenu: () => void;
    courseCategories: any[];
}

export default function MobileMenu({ isOpen, closeMenu, courseCategories }: MobileMenuProps) {
    const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, closeMenu]);

    if (!isOpen) return null;

    const toggleCategory = (categoryId: string) => {
        setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
    };

    return (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl z-[102] flex flex-col max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col py-2">

                {/* Main Explore Courses Toggle */}
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

                    {/* Categories Accordion */}
                    {isMobileCoursesOpen && (
                        <div className="bg-gray-50 flex flex-col px-6 py-2 space-y-1">
                            {courseCategories.map((category) => (
                                <div key={category.id} className="py-1">
                                    <button
                                        onClick={() => toggleCategory(category.id)}
                                        className="w-full text-left font-medium text-black hover:text-primary py-2 flex justify-between items-center"
                                    >
                                        {category.label}
                                        <span className="text-gray-400 text-sm">
                                            {expandedCategory === category.id ? '−' : '+'}
                                        </span>
                                    </button>

                                    {/* Nested Sub-Categories */}
                                    {expandedCategory === category.id && (
                                        <div className="pl-4 border-l-2 border-primary/20 flex flex-col space-y-3 pt-2 pb-3 mt-1">
                                            {category.subCategories.map((sub: any, index: number) => (
                                                <Link
                                                    key={index}
                                                    href={sub.href}
                                                    onClick={closeMenu}
                                                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/courses"
                                onClick={closeMenu}
                                className="mt-4 border border-black px-6 py-2 text-center text-sm hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors w-full"
                            >
                                View all courses
                            </Link>
                        </div>
                    )}
                </div>

                {/* Standard Links */}
                <Link href="/organizations" onClick={closeMenu} className="px-6 py-4 border-b border-gray-100 hover:text-primary transition-colors">
                    For organizations
                </Link>
                <Link href="/about" onClick={closeMenu} className="px-6 py-4 border-b border-gray-100 hover:text-primary transition-colors">
                    About
                </Link>
                <Link href="/blog" onClick={closeMenu} className="px-6 py-4 border-b border-gray-100 hover:text-primary transition-colors">
                    Blog
                </Link>
                <Link href="/contact" onClick={closeMenu} className="px-6 py-4 border-b border-gray-100 hover:text-primary transition-colors">
                    Contact us
                </Link>

                {/* Login Button */}
                <div className="px-6 py-6">
                    <button className="w-full bg-black text-white px-6 py-3 text-sm hover:bg-primary transition-colors rounded-lg">
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
}