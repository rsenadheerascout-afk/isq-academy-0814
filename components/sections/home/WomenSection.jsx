import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export default function Women() {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-slate-900 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-16">
          
          {/* Image & Floating Stats Card */}
          <div className="relative order-2 lg:order-1">
            {/* Soft Ambient Background Glow */}
            <div 
              aria-hidden="true" 
              className="absolute -inset-4 rounded-3xl bg-teal-100 opacity-70 blur-2xl" 
            />

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl">
              <Image
                src="/women.jpg"
                alt="Woman entrepreneur learning at iSeeQ Academy"
                loading="lazy"
                width={1024}
                height={1536}
                className="h-full w-full max-h-[500px] object-cover object-center sm:max-h-[600px]"
              />
            </div>

            {/* Floating Stats Badge (Forced Light Theme) */}
            <div className="absolute -bottom-4 right-4 max-w-[220px] rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md transition-transform hover:scale-[1.02] sm:-bottom-6 sm:-right-6">
              <div className="text-2xl font-semibold tracking-tight text-teal-600 sm:text-3xl">
                3,500+
              </div>
              <p className="mt-1 text-xs font-medium leading-tight text-slate-600">
                Women trained across Sri Lanka in digital &amp; AI skills
              </p>
            </div>
          </div>

          {/* Text Content Block */}
          <div className="order-1 lg:order-2">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-normal uppercase tracking-wider text-teal-700">
              Women in Technology
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.15]">
              Bridging the digital gender gap, one woman at a time.
            </h2>

            {/* Paragraph Text */}
            <p className="mt-4 text-base text-slate-600 sm:text-lg sm:leading-relaxed">
              From kitchen tables to global marketplaces — we help women build
              businesses online, defend them with cyber skills, and lead in the AI era.
            </p>

            {/* Feature Checklist */}
            <ul className="mt-8 space-y-3.5">
              {[
                "Start and grow businesses online",
                "Sell globally with confidence",
                "Learn cyber security fundamentals",
                "Step into technology careers",
                "Lead teams in the AI era",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                  <span className="text-sm font-medium text-slate-800 sm:text-base">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <div className="mt-8 sm:mt-10">
              <a
                href="#enroll"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3.5 text-sm font-normal text-white shadow-md shadow-teal-600/20 transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 active:scale-95"
              >
                Explore Women&apos;s Pathway 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}