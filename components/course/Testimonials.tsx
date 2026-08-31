import Image from "next/image";
import type { CourseTestimonial } from "@/data/course-types";

interface TestimonialsProps {
  testimonials: CourseTestimonial[];
}

export default function Testimonials({
  testimonials,
}: TestimonialsProps) {
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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 font-montserrat font-normal">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="border border-gray-200 p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Quote mark */}
          <span className="text-5xl text-gray-300 font-serif leading-none mb-2">
            “
          </span>

          {/* Testimonial Image */}
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
          ) : (
            <div
              className="w-16 h-16 bg-gray-200 rounded-full mb-4"
              aria-hidden="true"
            />
          )}

          {/* Name */}
          <h4 className="text-gray-900 font-medium">
            {testimonial.name}
          </h4>

          {/* Role */}
          <p className="text-xs text-gray-500 mb-6">
            {testimonial.role}
          </p>

          {/* Quote */}
          <p className="text-sm text-gray-700 italic leading-relaxed">
            "{testimonial.quote}"
          </p>
        </div>
      ))}
    </div>
  );
}