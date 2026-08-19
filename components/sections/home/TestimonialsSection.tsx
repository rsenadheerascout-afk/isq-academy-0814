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
  return (
    <section className="py-20 lg:px-40 md:px-20 px-6 mx-auto text-center">
      <h2 className="text-3xl  mb-12">What our learners are saying</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard 
            key={testimonial.text || i} 
            testimonial={testimonial} 
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;