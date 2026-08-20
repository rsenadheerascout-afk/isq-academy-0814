"use client";

import TestimonialCard from "@/components/ui/TestimonialCard";
import React from "react";

export interface Testimonial {
  text: string;
  author: {
    name: string;
    avatarUrl: string;
    company: string;
  };
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

function TestimonialsSection({ testimonials = [] }: TestimonialsProps) {
  const isSlider = testimonials.length > 3;

  // Duplicate list to allow a seamless infinite loop animation
  const displayTestimonials = isSlider
    ? [...testimonials, ...testimonials]
    : testimonials;

  return (
    <section className="py-20 lg:px-40 md:px-20 px-4 mx-auto text-center overflow-hidden">
      <h2 className="text-3xl mb-12">What our learners are saying</h2>

      {!isSlider ? (
        // Standard layout: 1 column on mobile, 3 columns on tablet/desktop
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.text || i}
              testimonial={testimonial}
            />
          ))}
        </div>
      ) : (
        // Slider layout for mobile and desktop when > 3 items
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max gap-4 sm:gap-8 animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {displayTestimonials.map((testimonial, i) => (
              <div 
                key={i} 
                className="w-[280px] sm:w-[350px] shrink-0 text-left"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default TestimonialsSection;