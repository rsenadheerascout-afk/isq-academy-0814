import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Start and grow businesses online",
  "Sell globally with confidence",
  "Learn cyber security fundamentals",
  "Step into technology careers",
  "Lead teams in the AI era",
];

export default function Women() {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-8 lg:grid-cols-2 lg:gap-x-12">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-teal-100 opacity-70 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl">
              <Image
                src="/women.jpg"
                alt="Woman entrepreneur learning at iSeeQ Academy"
                loading="lazy"
                width={1024}
                height={1536}
                className="h-full w-full max-h-[450px] object-cover object-center sm:max-h-[500px]"
              />
            </div>

            {/* Stats */}
            <div className="absolute -bottom-4 right-4 max-w-[220px] rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md transition-transform hover:scale-[1.02] sm:-bottom-5 sm:-right-5">
              <div className="text-2xl font-semibold tracking-tight text-teal-600">
                3,500+
              </div>
              <p className="mt-1 text-xs font-medium leading-tight text-slate-600">
                Women trained across Sri Lanka in digital &amp; AI skills
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-normal uppercase tracking-wider text-teal-700">
              Women in Technology
            </div>

            <h2 className="mt-3 text-3xl font-normal leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Bridging the Digital Gender Gap, One woman at a time.
            </h2>

            <p className="mt-3 text-base text-slate-600 sm:text-lg sm:leading-relaxed">
              From kitchen tables to global marketplaces — we help women build
              businesses online, defend them with cyber skills, and lead in the
              AI era.
            </p>

            {/* Benefits */}
            <ul className="mt-6 space-y-3">
              {benefits.map((text) => (
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

            {/* CTA */}
            <div className="mt-6 sm:mt-8">
              <Link
                href="/courses?filter=Women%20Empowerment"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-normal text-white shadow-md shadow-teal-600/20 transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 active:scale-95"
              >
                Explore Women&apos;s Pathway
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}