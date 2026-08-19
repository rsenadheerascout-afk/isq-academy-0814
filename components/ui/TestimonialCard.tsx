"use client"

import Image from "next/image";
import React, { useState } from "react";

export interface testimonial {
  text: string;
  author: {
    name: string;
    avatarUrl: string;
    company: string;
  };
}

export interface testimonialProps {
  testimonial: testimonial;
}

const TestimonialCard = ({ testimonial }: testimonialProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="relative max-w-sm rounded-2xl bg-white shadow-lg border border-gray-200 flex flex-col items-center">
      {/* Top Section - Testimonial Text & Quote Icon */}
      <div className="flex-1 p-8 text-left relative w-full bg-slate-50 border border-slate-200/80 rounded-t-2xl shadow-sm transition-all duration-200">
      {/* Decorative SVG Quote Icon - subtler and contained */}
      <svg
        className="absolute top-6 right-6 w-12 h-12 text-slate-200 pointer-events-none select-none"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Testimonial Text */}
      <blockquote className="relative z-10 pr-8">
        <p
          className={`text-slate-700 text-base leading-relaxed font-normal transition-all duration-300 ${
            !isExpanded ? "line-clamp-3" : ""
          }`}
        >
          “{testimonial.text}”
        </p>

        {/* Read More / Show Less Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-sm text-blue-600 hover:text-blue-700 focus:outline-none focus:underline flex items-center gap-1 cursor-pointer"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      </blockquote>
    </div>

      {/* Bottom Section - Blue Background with Author Info */}
      <div className="flex-none w-full bg-primary rounded-b-2xl p-2 ps-4 text-left flex items-center gap-4">
        {/* Avatar - Left aligned */}
        <Image
          src={testimonial.author?.avatarUrl || "/fallback-avatar.jpg"}
          alt={testimonial.author?.name}
          width={56}
          height={56}
          className="w-10 h-10 rounded-full border-4 border-white shadow-md object-cover flex-shrink-0"
        />

        {/* Name & Company - Stacked on the right */}
        <div className="flex flex-col justify-center">
          <h3 className="text-white text-lg font-normal uppercase tracking-wider mb-1">
            {testimonial.author?.name}
          </h3>
          <p className="text-blue-100 text-sm font-medium">
            {testimonial.author?.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
