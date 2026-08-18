"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

function StoryFeature() {
  const carouselItems = [
    {
      id: 1,
      title: "Compelling Communication",
      description: "Master the art of clear, impactful messaging to influence and lead effectively in any professional environment.",
      image: "/courses/communication.jpg",
      link: "/courses/compelling-communication",
    },
    {
      id: 2,
      title: "Generative AI in Business",
      description: "Discover how to leverage AI tools to drive innovation, streamline workflows, and create new value for your organization.",
      image: "/courses/generative-ai.jpg",
      link: "/courses/generative-ai-in-business",
    },
    {
      id: 3,
      title: "Business Essentials",
      description: "Build a strong foundation in core business principles, from financial literacy to strategic planning, for workplace readiness.",
      image: "/courses/business-essentials.jpg",
      link: "/courses/business-essentials",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  // Auto-play timer logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Changes slide every 5 seconds

    return () => clearInterval(interval); // Clean up timer on unmount/re-render
  }, [currentIndex, isPaused]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 mb-12">
      {/* Container pauses autoplay on hover */}
      <div 
        className="relative w-full bg-black flex overflow-hidden min-h-[450px] md:min-h-[550px] shadow-2xl rounded-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* IMAGE CONTAINER */}
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <img
            src={carouselItems[currentIndex].image}
            alt={carouselItems[currentIndex].title}
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* CONTENT OVERLAY CONTAINER */}
        <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-between px-6 md:px-16 py-12 text-white">
          
          {/* TOP ZONE: ROWS 1 & 2 */}
          <div className="flex-1 flex flex-col basis-80 justify-start gap-4 overflow-hidden pr-4 mb-6">
            <h2 className="text-3xl md:text-5xl font-normal tracking-wide leading-tight">
              {carouselItems[currentIndex].title}
            </h2>

            <p className="text-base md:text-lg font-normal text-gray-300 leading-relaxed line-clamp-4">
              {carouselItems[currentIndex].description}
            </p>
          </div>
          
          {/* BOTTOM ZONE: ROWS 3, 4 & 5 */}
          <div className="flex-none bottom-0 flex flex-col gap-6">
            
            {/* Row 3: Explore Courses Button */}
            <div>
              <Link 
                href={carouselItems[currentIndex].link}
                className="inline-block border border-white px-8 py-3 text-sm md:text-base font-normal uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-full"
              >
                Explore Course
              </Link>
            </div>

            {/* Row 4: Carousel Controls */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-full hover:border-white transition-colors"
                aria-label="Previous Course"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-full hover:border-white transition-colors"
                aria-label="Next Course"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
            
            {/* Row 5: Carousel Dot Indicators */}
            <div className="flex space-x-3">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-white" : "w-4 bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default StoryFeature;