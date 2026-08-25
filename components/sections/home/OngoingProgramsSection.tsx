'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Program {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  badgeRole: string;
  badgeTrack: string;
  studentId: string;
}

const COURSES_DATA: Program[] = [
  {
    id: '1',
    title: 'AI Tools for Teachers One-Day Hands-On Workshop',
    description:
      'Use your school holiday to discover practical AI tools that save you time, spark creativity, and enhance student learning. Go back to school better prepared and more confident.',
    highlights: [
      'Plan lessons faster with AI-powered tools and create engaging teaching materials',
      'Generate quizzes, tests, rubrics, and personalized learning content in minutes',
      'Use AI responsibly with practical strategies for effective classroom learning',
    ],
    ctaText: 'Register Now',
    ctaLink: '/courses/ai-professionals',
    imageSrc: '/ongoing/women.jpg',
    badgeRole: 'School Teachers & Educators',
    badgeTrack: 'AI Tools for Teachers',
    studentId: 'ID 1015',
  },
  {
    id: '2',
    title: 'AI for Business         4-Hour Practical Workshop',
    description:
      'No coding. No complicated technology. Just practical AI workflows you can use in your business to automate customer replies, create marketing content, and simplify daily operations.',
    highlights: [
      'Handle WhatsApp & Facebook messages automatically in English, Sinhala, or Tamil',
      'Generate high-converting social media captions, posts, and marketing ideas without hiring an agency',
      'Turn Sinhala/Tamil voice notes into professional business emails and formal documents',
      'Summarize daily accounts, track tasks, and draft supplier communications effortlessly',
    ],
    ctaText: 'Reserve Your Seat',
    ctaLink: '/courses/generative-ai-in-business',
    imageSrc: '/ongoing/man.jpg',
    badgeRole: 'Business Owners & Entrepreneurs',
    badgeTrack: 'AI for Business',
    studentId: 'ID 1014',
  },
  {
    id: '3',
    title: 'Free Cybersecurity Awareness Training',
    description:
      'Protect your business and secure your future with free cyber security awareness training designed for micro, small, and medium business owners in Kandy.',
    highlights: [
      'Avoid phishing attacks by identifying suspicious emails and links',
      'Create and manage strong passwords with confidence',
      'Secure payments, protect customer data, and keep online transactions safe',
      'Learn practical tips to protect your business and stay safe online',
    ],
    ctaText: 'Register Now',
    ctaLink: '/programs/cyber-security-awareness-training',
    imageSrc: '/courses/cyber-security-awareness-training.jpg',
    badgeRole: 'Micro, Small & Medium Business Owners',
    badgeTrack: 'Cyber Security Awareness Training',
    studentId: 'ID 1016',
  },

];

export default function OngoingProgramsCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const activeCourse = COURSES_DATA[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % COURSES_DATA.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? COURSES_DATA.length - 1 : prevIndex - 1
    );
  }, []);

  // Automatic slide interval (5 seconds, pauses on hover/interaction)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Swipe gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="max-w-7xl mx-auto lg:px-40 md:px-20 px-6 py-12">
      <div
        className="relative rounded-[2.5rem] overflow-visible bg-gradient-to-r from-teal-600 via-primary to-secondary p-8 md:p-14 text-white shadow-2xl transition-all duration-500 ease-in-out"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]">

          {/* Left Column: Program Information */}
          <div key={activeCourse.id} className="lg:col-span-7 space-y-6 z-10 transition-opacity duration-300">
            <h2 className="text-3xl md:text-5xl font-normal leading-tight tracking-wide">
              {activeCourse.title}
            </h2>

            <p className="text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-xl">
              {activeCourse.description}
            </p>

            {/* Feature Checklist */}
            <ul className="space-y-3 py-2">
              {activeCourse.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center space-x-3 text-sm md:text-base font-normal">
                  <span className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center flex-shrink-0 text-xs">
                    ➔
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-normal text-white/80 pt-1">
              Limited seats available for the current active cohort!
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href={activeCourse.ctaLink}
                className="inline-block bg-white text-gray-900 px-7 py-3.5 rounded-md font-normal text-sm md:text-base hover:bg-gray-100 transition-colors shadow-lg"
              >
                {activeCourse.ctaText}
              </Link>
            </div>
          </div>

          {/* Right Column: Lanyard & ID Card Feature */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0 min-h-[380px]">
            {/* Layered Cards Container */}
            <div className="relative w-72 h-[350px] pt-6">

              {/* Back Dark Badge Card */}
              <div className="absolute inset-0 bg-neutral-900 rounded-2xl shadow-xl transform rotate-3 lg:translate-x-15 translate-x-5 lg:translate-y-20 translate-y-8 p-5 border border-white/10 flex flex-col justify-end text-white lg:scale-125 scale-110">
                <div className="text-2xl font-normal tracking-widest opacity-40 uppercase mb-4">
                  iSeeQ
                </div>
              </div>

              {/* Front Main Badge Card */}
              <div key={activeCourse.id} className="absolute inset-0 bg-white text-black rounded-2xl shadow-2xl transform rotate-3 p-4 flex flex-col justify-between border border-gray-100 z-10 lg:scale-150 transition-transform duration-300">
                {/* Photo Area */}
                <div className="relative w-full h-54 bg-gray-200 rounded-xl overflow-hidden">
                  <Image
                    src={activeCourse.imageSrc}
                    alt={activeCourse.badgeRole}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                  />
                </div>

                {/* Badge Details */}
                <div className="pt-3 pb-1">
                  <h3 className="text-xl font-normal leading-tight text-gray-900">
                    {activeCourse.badgeRole}
                  </h3>
                  <p className="text-xs text-gray-500 font-normal mt-0.5">
                    {activeCourse.badgeTrack}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-100 text-[11px] text-gray-400 font-normal">
                  <span>Verified Learner</span>
                  <span>{activeCourse.studentId}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Carousel Controls & Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-4 border-t border-white/20 gap-4">

          {/* Pagination Indicators */}
          <div className="flex items-center space-x-2">
            {COURSES_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Course"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Course"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              ❯
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}