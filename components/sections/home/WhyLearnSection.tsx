import React from "react";

export interface BenefitItem {
  title: string;
  desc: string;
}

// Define the component's props interface
interface WhyLearnSectionProps {
  benefits: BenefitItem[];
}

// Destructure `benefits` from props
function WhyLearnSection({ benefits }: WhyLearnSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl mb-16">Why learn with iSeeQ Academy Online?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
        {benefits?.map((item, i) => (
          <div key={i} className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-[#00beb2] text-white flex items-center justify-center mb-4 text-xl">
              {i + 1}
            </div>
            <h3 className="text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyLearnSection;