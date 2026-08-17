import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-6 border-t-[6px] border-[#00beb2] font-normal">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Discover Courses */}
        <div>
          <h4 className="text-[#00beb2] text-xs uppercase tracking-wider mb-4">
            Discover Courses
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/courses" className="hover:text-white underline">
                Explore courses
              </Link>
            </li>
            <li>
              <a href="/#about" className="hover:text-white underline">
                About
              </a>
            </li>
            <li>
              <a href="/#blog" className="hover:text-white underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-white underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Organizations */}
        <div>
          <h4 className="text-[#00beb2] text-xs uppercase tracking-wider mb-4">
            For Organizations
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/#organizations" className="hover:text-white underline">
                Learning and Development for your organization
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[#00beb2] text-xs uppercase tracking-wider mb-4">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white underline">
                Policies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white underline">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white underline">
                Cancel your order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white underline">
                Terms of purchase
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white underline">
                Privacy notice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white underline">
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Branding */}
        <div className="flex flex-col items-start md:items-end">
          <Link href="/" className="flex items-center mb-4">
            <Image
              src="/isq-aca-whlogo.png"
              alt="iSeeQ Academy"
              width={180}
              height={40}
              className="h-15 w-auto object-contain"
            />
          </Link>

          {/* Copyright */}
          <p className="text-xs text-gray-400 mb-4">
            © Copyright 2026 iSeeQ Academy
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs cursor-pointer hover:bg-[#00beb2] transition-colors">
              f
            </div>
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs cursor-pointer hover:bg-[#00beb2] transition-colors">
              in
            </div>
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs cursor-pointer hover:bg-[#00beb2] transition-colors">
              X
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}