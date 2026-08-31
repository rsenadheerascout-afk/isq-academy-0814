import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  MessageCircle,
  Settings,
  Target,
  Users,
} from "lucide-react";

function CareerCTA() {
  return (
    <section className="bg-white pt-4 pb-16 lg:px-40 md:px-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#292727] rounded-3xl overflow-hidden">
          <div className="px-7 py-10 md:px-10 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl text-white leading-relaxed mb-3">
                  Don't let a lack of practical experience
                  hold you back.
                </h2>

                <p className="text-gray-400 text-sm md:text-base">
                  <span className="text-primary">
                    Upgrade
                  </span>{" "}
                  your skills.{" "}
                  <span className="text-primary">
                    Gain
                  </span>{" "}
                  real experience.{" "}
                  <span className="text-primary">
                    Get
                  </span>{" "}
                  placed.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full hover:bg-[#00aaa0] transition-colors text-sm"
                >
                  Apply Now
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-gray-600 text-white px-7 py-3 rounded-full hover:border-primary transition-colors text-sm"
                >
                  Talk to an Advisor
                  <MessageCircle size={17} />
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Feature
                  icon={<Settings size={16} />}
                  text="3-Month Crash Program"
                />

                <Feature
                  icon={<Briefcase size={16} />}
                  text="6-Month Internship"
                />

                <Feature
                  icon={<Users size={16} />}
                  text="Mentorship & Support"
                />

                <Feature
                  icon={<Target size={16} />}
                  text="Job Placement Assistance"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-gray-400 text-sm">
      <span className="text-primary">
        {icon}
      </span>

      {text}
    </div>
  );
}

export default CareerCTA;