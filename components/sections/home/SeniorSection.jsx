import { ArrowRight } from "lucide-react";
import Image from "next/image";

const seniorImg = "/fallback-avatar";

export default function Seniors() {
  return (
    <section className="relative overflow-hidden bg-amber-50/40 py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-8 lg:grid-cols-2 lg:gap-x-12">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-100/60 px-3 py-1 text-xs font-normal uppercase tracking-wider text-amber-900">
              Digital Inclusion
            </div>

            <h2 className="mt-3 text-3xl font-normal leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              No one should be left behind by technology.
            </h2>

            <p className="mt-3 text-base text-slate-600 sm:text-lg sm:leading-relaxed">
              A warm, patient classroom for our parents and grandparents — taught
              at their pace, in their language.
            </p>

            {/* Features */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ["📱", "Use smartphones confidently"],
                ["💬", "Stay connected with family"],
                ["🏛️", "Access online services"],
                ["🛡️", "Stay safe online"],
                ["✨", "Understand AI tools"],
                ["☕", "At a pace that feels human"],
              ].map(([emoji, text]) => (
                <div
                  key={text}
                  className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-secondary hover:shadow-md"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl"
                    aria-hidden="true"
                  >
                    {emoji}
                  </span>
                  <span className="text-sm font-normal text-slate-800">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8">
              <a
                href="#enroll-seniors"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-normal text-white shadow-md shadow-amber-600/20 transition-all hover:bg-amber-700 hover:shadow-lg hover:shadow-amber-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 active:scale-95"
              >
                Learn About Senior Classes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-amber-200/50 opacity-70 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/senior-2.jpg"
                alt="Senior gentleman using a smartphone with confidence"
                loading="lazy"
                width={1024}
                height={1536}
                className="h-full w-full max-h-[450px] object-cover object-center sm:max-h-[500px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}