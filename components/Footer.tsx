"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaFacebook, FaFacebookF } from 'react-icons/fa';

const discoverLinks = [
  ["Explore courses", "/courses"],
  ["About", "/about"],
  ["Blog", "#"],
  ["Contact us", "/#contact"],
  ["FAQs", "#"],
];

const legalLinks = [
  ["Policies", "#"],
  ["Terms of use", "#"],
  ["Cancel your order", "#"],
  ["Terms of purchase", "#"],
  ["Privacy notice", "#"],
  ["Accessibility", "#"],
];

const linkClass = "hover:text-white underline";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-[6px] border-primary bg-[#1a1a1a] lg:px-40 md:px-20 px-6 py-8 font-normal text-white">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
        {/* Discover Courses */}
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-wider text-primary">
            Discover Courses
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {discoverLinks.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Organizations */}
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-wider text-primary">
            For Organizations
          </h4>
          <Link
            href="/courses?filter=Business%20Upskilling"
            className={`text-sm text-gray-300 ${linkClass}`}
          >
            Learning and Development for your organization
          </Link>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-wider text-primary">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {legalLinks.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branding */}
        <div className="flex flex-col items-start md:items-end">
          <Link href="/" className="mb-4">
            <Image
              src="/isq-aca-whlogo.png"
              alt="iSeeQ Academy"
              width={180}
              height={40}
              className="h-15 w-auto object-contain"
            />
          </Link>
          {/* Social Media icons */}
          <div className="flex gap-4">
            {[
              { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/company/iseeq-academy" },
              { name: "Instagram", icon: FaInstagram, url: "#" },
              { name: "Facebook", icon: FaFacebookF, url: "#" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank" rel="noopener noreferrer" aria-label={social.name}
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-primary text-black transition duration-100 hover:bg-secondary hover:text-black"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright - Bottom Left */}
      <div className="relative z-10 mx-auto mt-8 max-w-7xl">
        <p className="text-xs text-gray-400">
          © Copyright 2026 iSeeQ Academy
        </p>
      </div>
    </footer>
  );
}