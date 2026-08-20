import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OngoingProgramsSection() {
  const programHighlights = [
    'Hands-on live workshops & interactive cohorts',
    'Real-world portfolio projects mentored by industry leaders',
    'Direct networking with global peers & recruiters',
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="relative rounded-[2.5rem] overflow-visible bg-gradient-to-r from-teal-600 via-primary to-secondary p-8 md:p-14 text-white shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Program Information */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <h2 className="text-3xl md:text-5xl font-normal leading-tight tracking-wide">
              Level Up with Active Bootcamps & Ongoing Programs!
            </h2>
            
            <p className="text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-xl">
              Join our live cohort-based learning tracks at iSeeQ Academy. Work on practical industry challenges, earn verified credentials, and connect directly with hiring partners.
            </p>

            {/* Feature Checklist */}
            <ul className="space-y-3 py-2">
              {programHighlights.map((highlight, index) => (
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
                href="/programs"
                className="inline-block bg-white text-gray-900 px-7 py-3.5 rounded-md font-normal text-sm md:text-base hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore Active Programs
              </Link>
            </div>
          </div>

          {/* Right Column: Lanyard & ID Card Feature */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0 min-h-[380px]">
            
            {/* Lanyard Strap hanging from top */}
            {/* <div className="absolute -top-14 right-1/2 lg:right-28 transform translate-x-1/2 z-20 flex flex-col items-center">
              <div className="w-6 h-24 bg-black text-white text-[9px] font-mono flex items-center justify-center tracking-widest [writing-mode:vertical-lr] border-x border-white/20">
                iSeeQ ACADEMY
              </div>
              <div className="w-4 h-4 border-2 border-white rounded-full bg-gray-400 -mt-1 shadow-md"></div>
            </div> */}

            {/* Layered Cards Container */}
            <div className="relative w-72 h-[350px] pt-6">
              
              {/* Back Dark Badge Card */}
              <div className="absolute inset-0 bg-neutral-900 rounded-2xl shadow-xl transform rotate-3 lg:translate-x-15 translate-x-5 lg:translate-y-20 translate-y-14 p-5 border border-white/10 flex flex-col justify-end text-white lg:scale-125 scale-110 ">
                <div className="text-2xl font-normal tracking-widest opacity-40 uppercase mb-4">
                  iSeeQ
                </div>
              </div>

              {/* Front Main Badge Card */}
              <div className="absolute inset-0 bg-white text-black rounded-2xl shadow-2xl transform rotate-3 p-4 flex flex-col justify-between border border-gray-100 z-10 lg:scale-150">
                {/* Photo Area */}
                <div className="relative w-full h-44 bg-gray-200 rounded-xl overflow-hidden">
                  <img
                    src="/courses/communication.jpg"
                    alt="Active Student"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Badge Details */}
                <div className="pt-3 pb-1">
                  <h3 className="text-xl font-normal leading-tight text-gray-900">
                    Ongoing Student
                  </h3>
                  <p className="text-xs text-gray-500 font-normal mt-0.5">
                    Full-Stack AI Cohort
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-100 text-[11px] text-gray-400 font-normal">
                  <span>Verified Learner</span>
                  <span>ID 0814</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}