import {
  Briefcase,
  Compass,
  Rocket,
  Settings,
  Target,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    text: "Bridges the gap between theory and practice",
  },
  {
    icon: Settings,
    text: "Save time with an intensive 3-month program",
  },
  {
    icon: Briefcase,
    text: "Gain industry exposure with a 6-month internship",
  },
  {
    icon: Users,
    text: "Build confidence with mentorship & support",
  },
  {
    icon: Rocket,
    text: "Increase your chances with job placement help",
  },
  {
    icon: Compass,
    text: "Start your career on the right path",
  },
];

function CareerWhyChoose() {
  return (
    <section className="bg-white py-16 lg:px-40 md:px-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-10">
          Why Choose This Pathway?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.text}
                className="flex items-start gap-4 border border-gray-100 rounded-xl p-5"
              >
                <Icon
                  size={21}
                  className="text-primary shrink-0"
                  strokeWidth={1.8}
                />

                <p className="text-sm text-gray-700 leading-relaxed">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CareerWhyChoose;