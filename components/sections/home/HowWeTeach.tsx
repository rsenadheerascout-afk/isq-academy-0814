// components/sections/home/HowWeTeach.tsx
import React from 'react';
import { Heart, BookOpen, GraduationCap, MessageSquare, Users, Sparkles, BookType } from 'lucide-react';

interface Principle {
  icon: React.ElementType;
  title: string;
  description: string;
  isHighlighted?: boolean;
  tag?: string;
}

export default function HowWeTeach() {
  const principles: Principle[] = [
    {
      icon: Heart,
      title: 'Learner-Centered',
      description: "Every batch is built around the learner's pace, goals, and curiosity.",
    },
    {
      icon: BookOpen,
      title: 'Real-World Relevant',
      description: 'Dynamic coursework that rapidly adapts to industry shifts, keeping your skills ahead of the curve. Matched with global standards.',
    },
    {
      icon: GraduationCap,
      title: 'Industry Vetted Experts',
      description: 'Certified practitioners actively working in their fields to bring real-world experience directly to the classroom.',
    },
    {
      icon: MessageSquare,
      title: 'Holistic Real-World Readiness',
      description: 'Our outcomes balance sharp technical mastery with strong ethics, resilience, and empathy—building well-rounded professionals, not just skilled technicians.',
    },
    {
      icon: Users,
      title: 'Small Batches',
      description: 'Maximum 15 students per batch — guaranteed attention for everyone.',
      isHighlighted: true,
      tag: 'Always 15 or fewer',
    },
    {
      icon: Sparkles,
      title: 'Outcome Focused',
      description: 'We measure confidence, capability, and real-world readiness.',
    },
  ];

  return (
    <section className="relative overflow-clip bg-[#FAF9F6] min-h-screen py-8 lg:px-40 md:px-20 px-6 flex flex-col justify-center items-center font-sans text-slate-800">
      <div
  aria-hidden="true"
  className="pointer-events-none absolute -bottom-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#00beb2]/20 blur-3xl"
/>

      {/* Header Section */}
      <div className="max-w-5xl w-full mx-auto text-center mb-12 relative z-10">
        {/* Section Label */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full text-sm text-slate-600">
              <BookType size={15} strokeWidth={1.8} className="text-primary" />
              <span>Our Approach</span>
            </div>
          </div>

        <h2 className="text-4xl sm:text-5xl  text-slate-900 tracking-tight mb-4">
          A calmer, sharper way to <span className="italic font-serif text-primary">learn.</span>
        </h2>

        <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
          Six principles that quietly run through every classroom — online or in class.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {principles.map((item, index) => {
          const IconComponent = item.icon;

          if (item.isHighlighted) {
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-primary to-[#1E3E62]  text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                    <IconComponent className="w-5 h-5 text-indigo-200" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {item.tag && (
                  <div>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>
            );
          }

          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-200/70 shadow-sm flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50/70 flex items-center justify-center mb-6">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}