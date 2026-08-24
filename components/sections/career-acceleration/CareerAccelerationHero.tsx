import Link from "next/link";
import Image from "next/image";
import {  ArrowRight,  Briefcase,  LayoutDashboard,  MessageCircle,  MonitorPlay,  Target,  Users,} from "lucide-react";

function CareerAccelerationHero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:px-40 md:px-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center bg-[#00beb2] text-white px-4 py-1.5 rounded-full text-xs font-medium mb-6">
              3-Month Crash Program + 6-Month Internship
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              From Degree Holder
              <br className="hidden lg:block" />
              to Job-Ready{" "}
              <span className="text-[#00beb2]">
                Full-Stack Engineer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-5">
              The practical exposure you didn't get in university.
              The confidence you need for your career.
            </p>

            <p className="text-gray-600 leading-relaxed max-w-xl mb-8">
              A 3-month intensive crash program to bridge the gap between
              theory and real-world practice, followed by a 6-month
              industry internship with job placement support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <ProgramFeature
                icon={<MonitorPlay size={22} />}
                text={
                  <>
                    Intensive 3-Month
                    <br />
                    Crash Training
                  </>
                }
              />

              <ProgramFeature
                icon={<Briefcase size={22} />}
                text={
                  <>
                    6-Month Industry
                    <br />
                    Internship
                  </>
                }
              />

              <ProgramFeature
                icon={<Users size={22} />}
                text={
                  <>
                    Mentorship, Monitoring
                    <br />
                    & Career Support
                  </>
                }
              />

              <ProgramFeature
                icon={<Target size={22} />}
                text={
                  <>
                    Job Placement
                    <br />
                    Assistance
                  </>
                }
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00beb2] text-white px-7 py-3 rounded-full hover:bg-[#00aaa0] transition-colors text-sm"
              >
                Apply Now
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-800 px-7 py-3 rounded-full hover:border-[#00beb2] transition-colors text-sm"
              >
                <MessageCircle
                  size={17}
                  className="text-[#00beb2]"
                />
                Talk to an Advisor
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative min-h-[420px] flex items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-10 bg-[#00beb2]/15 rounded-full blur-3xl"
            />

            <div className="absolute top-8 right-8 bg-white p-3 rounded-full shadow-lg z-20 text-[#00beb2] font-bold">
              {"</>"}
            </div>

            <div className="absolute top-1/2 right-0 bg-white p-3 rounded-full shadow-lg z-20 text-[#00beb2] font-bold">
              {"{ }"}
            </div>

            <div className="absolute bottom-16 left-4 bg-white p-3 rounded-full shadow-lg z-20 text-[#00beb2]">
              <LayoutDashboard size={22} />
            </div>

            <div className="relative z-10 w-[300px] sm:w-[350px] h-[390px] sm:h-[450px] bg-gray-100 rounded-b-full overflow-hidden border-8 border-white shadow-xl flex items-center justify-center">
              <span className="text-sm text-gray-400">
                Career Acceleration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramFeature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#00beb2] shrink-0">{icon}</div>

      <span className="text-sm font-medium text-gray-800">
        {text}
      </span>
    </div>
  );
}

export default CareerAccelerationHero;