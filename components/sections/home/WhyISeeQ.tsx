// components/sections/home/WhyISeeQ.tsx
import React from 'react';
import { X, Check } from 'lucide-react';

export default function WhyISeeQ() {
  const traditionalPoints = [
    'Memorization',
    'Content coverage',
    'Large classes',
    'Theory-heavy lectures',
    'Technology obsession',
  ];

  const iSeeQPoints = [
    'Understanding',
    'Confidence',
    'Small batches of 15',
    'Real practice & projects',
    'Balanced living',
  ];

  return (
    <section className="bg-[#FAF9F6] min-h-screen py-16 lg:px-40 md:px-20 px-6 flex flex-col justify-center items-center font-sans text-slate-800">
      <div className="max-w-5xl w-full mx-auto text-center mb-12">
        {/* Badge */}
        <div className="inline-block mb-4">
          <span className="bg-slate-200/60 text-slate-600 text-xs font-medium px-4 py-1.5 rounded-full border border-slate-300/40">
            Why iSeeQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
          A different kind of <span className="italic font-serif text-primary">classroom.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
          Built for the way people actually grow — not the way curricula were written in the 90s.
        </p>
      </div>

      {/* Comparison Cards Grid */}
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Card 1: Traditional Education */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-lg italic tracking-wider text-slate-600 block mb-8">
              Traditional Education
            </span>
            <ul className="space-y-6">
              {traditionalPoints.map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-slate-400" />
                  </span>
                  <span className="text-slate-500 line-through decoration-slate-300 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2: The iSeeQ Approach */}
        <div className="bg-gradient-to-br from-[#0A192F] from-10% to-primary to-80%  text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-lg italic tracking-wider text-white block mb-8">
              The iSeeQ Approach
            </span>
            <ul className="space-y-6">
              {iSeeQPoints.map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <Check className="w-4 h-4 text-slate-200" />
                  </span>
                  <span className="text-white font-normal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}