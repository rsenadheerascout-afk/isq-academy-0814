// components/sections/home/WhyISeeQ.tsx
import React from 'react';
import { Handshake, CirclePile, Check, CircleCheckBig } from 'lucide-react';

export default function WhyISeeQ() {
  const reasons = [
    {
      icon: Handshake,
      title: 'Tailored Mentorship',
      description:
        'Guided entirely by your unique strengths, passions, and individual ambitions.',
    },
    {
      icon: CirclePile,
      title: 'Small Cohorts (5–15)',
      description:
        'Intimate batch sizes ensuring deep connection and quality over pure volume.',
    },
    {
      icon: Check,
      title: 'Multi-Specialists',
      description:
        'Every course is co-taught by a diverse team of industry professionals.',
    },
  ];

  return (
    <section className="bg-[#f8fefe] min-h-screen py-16 lg:px-40 md:px-20 px-6 flex flex-col justify-center items-center font-sans text-slate-800">
      <div className="max-w-5xl w-full mx-auto text-center mb-12">
        {/* Section Label */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full text-sm text-slate-600">
            <CircleCheckBig size={15} strokeWidth={1.8} className="text-primary" />
            <span>Why iSeeQ</span>
          </div>
        </div>
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
          Where Potential Becomes Purpose.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We don’t measure success only by what you learn, but by who you become.
          <br />
          An ecosystem where education, psychology, and industry unite for individual growth.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/70 shadow-sm flex flex-col"
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Icon
                  className="w-5 h-5 text-primary"
                  strokeWidth={1.8}
                />
              </div>
              {/* Title */}
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                {reason.title}
              </h3>
              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
      {/* Bottom Feature Pill */}
      <div className="mt-6">
        <div className="inline-flex items-center justify-center gap-8 px-8 py-3 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs sm:text-sm">

          <span className="flex items-center gap-2">
            <Check className="w-4 h-4" strokeWidth={2} />
            Global & Local Industry Exposure
          </span>

          <span className="flex items-center gap-2">
            <Check className="w-4 h-4" strokeWidth={2} />
            Learner-Driven Evaluation
          </span>

        </div>
      </div>
    </section>
  );
}
