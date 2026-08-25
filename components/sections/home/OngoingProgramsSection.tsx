'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {BrainCircuit} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

import { PROGRAM_DATA } from '@/data/ongoingPrograms';

export default function OngoingProgramsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const activeProgram = PROGRAM_DATA[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % PROGRAM_DATA.length
    );
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? PROGRAM_DATA.length - 1
        : prevIndex - 1
    );
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(handleNext, 5000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);

    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;

    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="max-w-7xl mx-auto lg:px-40 md:px-20 px-6 py-6">
      {/* Section Label */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full text-sm text-slate-600">
          <BrainCircuit size={15} strokeWidth={1.8} className="text-primary" />
          <span>Workshops & Industry Training</span>
        </div>
      </div>
      <div
        className="relative overflow-visible rounded-[2.5rem] bg-gradient-to-r from-teal-600 via-primary to-secondary px-8 py-4 md:px-14 md:py-8 text-white shadow-2xl transition-all duration-500 ease-in-out"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]">

          {/* Program Information */}
          <div key={activeProgram.id} className="lg:col-span-7 space-y-6 z-10 transition-opacity duration-300">
            <h2 className="text-3xl md:text-5xl font-normal leading-tight tracking-wide">
              {activeProgram.title}
            </h2>
            <p className="text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-xl">
              {activeProgram.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-3 py-2">
              {activeProgram.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center space-x-3 text-sm md:text-base font-normal">
                  <span
                    className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center flex-shrink-0 text-xs"
                  >
                    ➔
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-normal text-white/80 pt-1">
              Limited seats available for the current active cohort!
            </p>

            {/* CTA */}
            {/* <div className="pt-2">
              <Link
                href={activeProgram.ctaLink}
                className="inline-block bg-white text-gray-900 px-7 py-3.5 rounded-md font-normal text-sm md:text-base hover:bg-gray-100 transition-colors shadow-lg">
                {activeProgram.ctaText}
              </Link>
            </div> */}
          </div>
          {/* ID Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0 min-h-[380px]">
            <div className="relative w-72 h-[350px] pt-6">
              {/* Back Card */}
              <div className="absolute inset-0 bg-neutral-900 rounded-2xl shadow-xl transform rotate-3 lg:translate-x-15 translate-x-5 lg:translate-y-20 translate-y-8 p-5 border border-white/10 flex flex-col justify-end text-white lg:scale-125 scale-110">
                <div className="text-2xl font-normal tracking-widest opacity-40 uppercase mb-4">
                  iSeeQ
                </div>
              </div>

              {/* Front Card */}
              <div
                key={activeProgram.id}
                className="absolute inset-0 bg-white text-black rounded-2xl shadow-2xl transform rotate-3 p-4 flex flex-col justify-between border border-gray-100 z-10 lg:scale-150 transition-transform duration-300">
                {/* Program Image */}
                <div className="relative w-full h-44 bg-gray-200 rounded-xl overflow-hidden">
                  <Image
                    src={activeProgram.imageSrc}
                    alt={activeProgram.badgeRole}
                    fill
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                {/* Badge Details */}
                <div className="pt-3 pb-1">
                  <h3 className="text-xl font-normal leading-tight text-gray-900">
                    {activeProgram.badgeRole}
                  </h3>
                  <p className="text-xs text-gray-500 font-normal mt-0.5">
                    {activeProgram.badgeTrack}
                  </p>
                </div>
                {/* Verification */}
                <div className="flex justify-between items-center pt-2 border-t border-gray-100 text-[11px] text-gray-400 font-normal">
                  {/* <span>Verified Learner</span> */}
                  <span>{activeProgram.studentId}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-4 border-t border-white/20 gap-4">
          {/* Indicators */}
          <div className="flex items-center space-x-2">
            {PROGRAM_DATA.map((program, index) => (
              <button key={program.id} onClick={() => setCurrentIndex(index)} aria-label={`Go to ${program.title}`}
                className={`h-2.5 rounded-full transition-all duration-300
                  ${
                    index === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }
                `}
              />
            ))}
          </div>
          {/* Navigation */}
          <div className="flex items-center space-x-3">
            <button onClick={handlePrev} aria-label="Previous Course" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm">
              ❮
            </button>
            <button onClick={handleNext} aria-label="Next Course" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm">
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}