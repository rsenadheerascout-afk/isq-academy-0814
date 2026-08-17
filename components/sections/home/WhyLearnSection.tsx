import React from "react";
import { GraduationCap, Users, Award, Timer } from "lucide-react";

export interface BenefitItem {
  title: string;
  desc: string;
}

// Define the component's props interface
interface WhyLearnSectionProps {
  benefits: BenefitItem[];
}

// Destructure `benefits` from props
// WhyLearnSection
function WhyLearnSection({ benefits }: WhyLearnSectionProps) {
  return (
    <section className="max-w-7xl mx-auto py-16 lg:px-20 md:px-12 px-6">
      <h2 className="text-3xl mb-16 md:mb-20 text-center">
        Why learn with iSeeQ Academy Online?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16 lg:gap-y-20">
        {benefits.map((item, i) => {
          const icons = [
            GraduationCap,
            Users,
            Award,
            Timer,
          ];

          const Icon = icons[i % icons.length];

          return (
            <div key={i} className="flex items-start gap-5 md:gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[7px] border-[#00beb2] border-r-transparent border-b-transparent -rotate-45"></div>
                <div className="w-[68px] h-[68px] md:w-20 md:h-20 rounded-full bg-[#292727] flex items-center justify-center">
                  <Icon
                    size={34}
                    strokeWidth={1.8}
                    className="text-white"
                  />
                </div>
              </div>

              <div className="pt-0.5">
                <h3 className="text-xl mb-2">
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
    </section>
  );
}

export default WhyLearnSection;