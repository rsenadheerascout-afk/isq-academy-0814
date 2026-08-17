"use client";
import Link from "next/link";
import { useState } from "react";
import InteractiveDots from "@/components/ui/InteractiveDots"; // Adjust path if needed

export default function HeroSection() {
  // Access the context setters
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <section className="relative bg-slate-950 text-white py-24 lg:px-40 md:px-20 px-6 overflow-hidden">
      {/* Canvas Interactive Background */}
      {/* <InteractiveBubbles /> */}
      <InteractiveDots isButtonHovered={isButtonHovered} />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Content Layer */}
      <div className="max-w-7xl mx-auto relative z-10 pointer-events-none">
        <h1 className="text-5xl mb-6">iSeeQ Academy Online</h1>
        <div className="w-12 h-1 bg-[#00beb2] mb-6 rounded-lg"></div>
        <p className="text-xl max-w-2xl mb-10 leading-relaxed text-gray-300">
          Improve your professional thinking and performance through flexible
          online learning led by industry experts.
        </p>

        <Link
          href="/courses"
          className="inline-block bg-[#00beb2] text-black px-8 py-3 hover:bg-[#fdc806] transition-colors duration-300 rounded-lg pointer-events-auto font-light"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Browse courses
        </Link>
      </div>
    </section>
  );
}
