import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section className="bg-black text-white py-24 px-40 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl mb-6">iSeeQ Academy Online</h1>
        <div className="w-12 h-1 bg-[#00beb2] mb-6"></div>
        <p className="text-xl max-w-2xl mb-10 leading-relaxed text-gray-300">
          Improve your professional thinking and performance through flexible
          online learning led by industry experts.
        </p>
        <Link 
          href="/courses"
          className="inline-block bg-[#00beb2] text-black px-8 py-3 hover:bg-[#fdc806] transition-colors duration-300"
        >
          Browse courses
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
