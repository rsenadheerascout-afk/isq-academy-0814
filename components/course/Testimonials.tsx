import Image from "next/image";
import type { CourseTestimonial } from "@/data/course-types";

interface TestimonialsProps {
  testimonials: CourseTestimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="border border-gray-200 p-8 text-center">
        <p className="text-gray-500">
          Testimonials from our learners will be available soon.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-12 py-8 bg-black">
      {/* Navigation Arrow - Left */}
      {/* <button
        aria-label="Previous testimonial"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button> */}

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 font-montserrat font-normal">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative bg-white pt-10 pb-8 px-6 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Teal Floating Quote Mark */}
            <span className="absolute -top-1 right-4 text-[#00a896] text-9xl scale-150 font-serif leading-none select-none">
              &rdquo;
            </span>

            {/* Testimonial Quote */}
            <p className="text-gray-900 text-sm leading-relaxed mb-6 italic">
              &rdquo;{testimonial.quote}&ldquo;
            </p>

            {/* Profile Section */}
            <div>
              {/* Divider Line */}
              <div className="border-t border-gray-100 pt-4 mb-2" />

              <div className="flex items-center gap-3">
                {/* Profile Image */}
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div
                    className="w-12 h-12 bg-gray-200 rounded-full shrink-0"
                    aria-hidden="true"
                  />
                )}

                {/* Name & Role */}
                <div className="flex flex-col">
                  <h4 className="text-gray-900 font-medium text-sm leading-snug">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 italic">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrow - Right */}
      {/* <button
        aria-label="Next testimonial"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button> */}
    </div>
  );
}