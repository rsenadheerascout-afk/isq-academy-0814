import TestimonialCard from "@/components/ui/TestimonialCard";

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

function TestimonialsSection({
  testimonials = [],
}: TestimonialsProps) {
  const isSlider = testimonials.length > 3;

  return (
    <section
      className="relative mx-auto overflow-hidden bg-white py-5 pb-20 lg:px-40 md:px-20 px-4 text-center"
      aria-labelledby="testimonials-heading"
    >
      {/* Top fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 to-white"
      />

      {/* Indigo patch */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"
      />

      <div className="relative z-10">
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl mb-12"
        >
          What our{" "}
          <span className="font-serif italic text-primary">
            learners
          </span>{" "}
          are saying
        </h2>

        {!isSlider ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.author.name}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        ) : (
          <div
            className="relative w-full overflow-hidden"
            aria-label="Learner testimonials"
          >
            <div className="testimonial-marquee">
              <div className="testimonial-marquee-track">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`original-${index}`}
                    className="w-[280px] sm:w-[350px] shrink-0 text-left"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}

                {/* Duplicate only for visual looping */}
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="w-[280px] sm:w-[350px] shrink-0 text-left"
                    aria-hidden="true"
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      isDuplicate
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TestimonialsSection;
