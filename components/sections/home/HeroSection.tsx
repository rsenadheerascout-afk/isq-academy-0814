"use client";
import Link from "next/link";
import { useState } from "react";
import InteractiveDots from "@/components/ui/InteractiveDots"; // Adjust path if needed

export interface heroProps {
  imageLink: string;
}

export default function HeroSection({ imageLink }: heroProps) {
  // Access the context setters
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  return (
    <section className="relative bg-slate-950 text-white py-24 lg:px-40 md:px-20 px-6 overflow-hidden">
      {/* Canvas Interactive Background */}
      {/* <InteractiveBubbles /> */}
      <InteractiveDots isButtonHovered={isButtonHovered} imageUrl={imageLink} />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/0 to-black/0 pointer-events-none"></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full lg:w-1/2 pointer-events-none">
        <h1 className="text-5xl mb-6">Technology should serve your life,<br/> not become it.</h1>
        <div className="w-12 h-1 bg-primary mb-6 rounded-lg"></div>
        <p className="text-xl max-w-2xl mb-10 leading-relaxed text-gray-300">
          Learn AI, programming, cyber security, design and digital skills through a human-centered approach that builds confidence, career opportunities —<br/> and a life beyond the screen.
        </p>

        <Link
          href="/courses"
          className="inline-block bg-[#00beb2] text-black px-8 py-3 hover:bg-[#fdc806] hover:shadow-[#fdc806] hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] hover:scale-105 transition duration-150 rounded-full pointer-events-auto font-light"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Explore Programs
        </Link>
      </div>
    </section>
  );
}
