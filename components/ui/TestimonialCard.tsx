"use client";

import Image from "next/image";
import React, { memo, useState } from "react";

export interface Testimonial {
  text: string;
  author: {
    name: string;
    avatarUrl: string;
    company: string;
  };
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  isDuplicate?: boolean;
}

const QuoteIcon = () => (
  <svg
    className="absolute top-6 right-6 w-12 h-12 text-slate-200 pointer-events-none select-none"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const TestimonialCard = memo(function TestimonialCard({
  testimonial,
  isDuplicate = false,
}: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { text, author } = testimonial;

  return (
    <article className="relative max-w-sm rounded-2xl bg-white shadow-lg border border-gray-200 flex flex-col items-center">
      {/* Testimonial */}
      <div className="flex-1 p-8 text-left relative w-full bg-slate-50 border border-slate-200/80 rounded-t-2xl shadow-sm">
        <QuoteIcon />

        <blockquote className="relative z-10 pr-8">
          <p
            className={`
              text-slate-700
              text-base
              leading-relaxed
              font-normal
              ${
                !isExpanded
                  ? "line-clamp-3"
                  : ""
              }
            `}
          >
            “{text}”
          </p>

          {!isDuplicate && (
            <button
              type="button"
              onClick={() => setIsExpanded((expanded) => !expanded)}
              className="mt-3 text-sm text-blue-600 hover:text-blue-700 focus:outline-none focus:underline flex items-center gap-1 cursor-pointer"
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </blockquote>
      </div>

      {/* Author */}
      <div className="flex-none w-full bg-primary rounded-b-2xl p-2 ps-4 text-left flex items-center gap-4">
        {author.avatarUrl ? (
          <Image
            src={author.avatarUrl}
            alt=""
            width={40}
            height={40}
            sizes="40px"
            className="w-10 h-10 rounded-full border-4 border-white shadow-md object-cover flex-shrink-0"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full border-4 border-white shadow-md bg-slate-200 flex-shrink-0"
            aria-hidden="true"
          />
        )}

        <div className="flex flex-col justify-center">
          <h3 className="text-white text-lg font-normal uppercase tracking-wider mb-1">
            {author.name}
          </h3>

          <p className="text-blue-100 text-sm font-medium">
            {author.company}
          </p>
        </div>
      </div>
    </article>
  );
});

export default TestimonialCard;
