import React from "react";

export interface testimonial{
    text: string;
}

export interface testimonialsProps{
  testimonials: testimonial[];
}

function TestimonialsSection({ testimonials }: testimonialsProps) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl mb-12">
        What our learners are saying
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {testimonials?.map((testimonial, i) => (
          <div
            key={i}
            className="border border-gray-200 border-b-4 border-b-[#00beb2] p-8 relative shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.20)] transition-all duration-300"
          >
            <span className="text-6xl text-[#fdc806] absolute top-4 left-6 font-serif">
              “
            </span>

            <p className="mt-8 text-gray-700 text-sm italic relative z-10">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
