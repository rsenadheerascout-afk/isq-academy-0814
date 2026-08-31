import React from "react";
import { Heart, Laptop, Zap, Clock3 } from "lucide-react";
import { whyLearnContent } from "@/data/whyLearn";

const icons = [Laptop, Zap, Clock3, Heart];

function WhyLearnSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Bottom transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-white"
      />

      {/* Matching yellow patch */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-32 -right-32 z-0 h-60 w-60 rounded-full bg-secondary/20 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-16 text-gray-800">
        
        {/* Our Belief */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full text-sm text-slate-600">
            <Heart
              size={15}
              strokeWidth={1.8}
              className="text-[#00beb2]"
            />
            <span>{whyLearnContent.label}</span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl mb-6 text-center text-gray-900">
          {whyLearnContent.title}{" "}
          <span className="text-primary italic font-serif">
            {whyLearnContent.highlightedTitle}
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-center text-gray-700 text-base md:text-lg leading-relaxed mb-16">
          {whyLearnContent.description}
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 lg:gap-y-16">
          {whyLearnContent.benefits.map((item, i) => {
            const Icon = icons[i % icons.length];

            return (
              <div
                key={item.step}
                className="flex items-start gap-5"
              >
                {/* Icon */}
                <div className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[7px] border-[#00beb2] border-r-transparent border-b-transparent -rotate-45" />

                  <div className="w-[68px] h-[68px] md:w-20 md:h-20 rounded-full bg-[#292727] flex items-center justify-center">
                    <Icon
                      size={34}
                      strokeWidth={1.8}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-0.5">
                  <div className="text-sm font-medium text-[#00beb2] mb-2">
                    {item.step}
                  </div>

                  <h3 className="text-xl mb-2 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyLearnSection;
