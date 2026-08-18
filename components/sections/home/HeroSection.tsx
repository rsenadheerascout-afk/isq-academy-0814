"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  {
    id: 1,
    image: "/courses/communication.jpg",
    alt: "Compelling Communication",
  },
  {
    id: 2,
    image: "/courses/generative-ai.jpg",
    alt: "Generative AI in Business",
  },
  {
    id: 3,
    image: "/courses/business-essentials.jpg",
    alt: "Business Essentials",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1);
  };

  return (
    <section className="relative w-full aspect-[32/9] bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 flex">
        {/* Left Side - Static Hero Content */}
        <div className="relative w-1/2 h-full flex items-center bg-slate-950 z-20">
          <div className="w-full px-6 md:px-12 lg:px-20 xl:px-24">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight mb-5">
              iSeeQ Academy
            </h1>

            <div className="w-12 h-1 bg-[#00beb2] mb-5 rounded-lg" />

            <p className="text-base md:text-lg lg:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mb-8">
              Improve your professional thinking and performance through flexible online learning led by industry experts.
            </p>

            <Link
              href="/courses"
              className="inline-block bg-[#00beb2] text-black px-8 py-3 hover:bg-[#fdc806] transition-colors duration-300 rounded-lg font-normal"
            >
              Browse courses
            </Link>

          </div>
        </div>

        {/* Right Side - Fixed 16:9 Image Area */}
        <div className="relative w-1/2 h-full overflow-hidden">
          {heroImages.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={index === 0}
                sizes="50vw"
                className="object-cover"
              />
            </div>
          ))}

          {/* 10% Image Gradient */}
          <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-black to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
