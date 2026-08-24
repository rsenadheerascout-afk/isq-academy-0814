"use client";

import Link from "next/link";
import Image from "next/image";

const discoverLinks = [
  ["Explore courses", "/courses"],
  ["About", "/#about"],
  ["Blog", "/#blog"],
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
    <footer className="relative overflow-hidden border-t-[6px] border-[#00beb2] bg-[#1a1a1a] lg:px-40 md:px-20 px-6 py-8 font-normal text-white">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
        {/* Discover Courses */}
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-wider text-[#00beb2]">
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
          <h4 className="mb-4 text-xs uppercase tracking-wider text-[#00beb2]">
            For Organizations
          </h4>
          <Link
            href="/#organizations"
            className={`text-sm text-gray-300 ${linkClass}`}
          >
            Learning and Development for your organization
          </Link>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-wider text-[#00beb2]">
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

          <div className="flex gap-4">
            {["f", "in", "X"].map((social) => (
              <div
                key={social}
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white text-xs text-black transition-colors hover:bg-[#00beb2]"
              >
                {social}
              </div>
            ))}
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