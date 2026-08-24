"use client";

import React from "react";
import { 
  CheckCircle2, X, ArrowRight, ArrowRightCircle, Target, 
  MonitorPlay, Briefcase, Users, LayoutDashboard, ShieldCheck, 
  MessageCircle, Rocket, Settings, ChevronRight, Award, Quote, Compass, Check, FileText
} from "lucide-react";

export default function CareerAccelerationSection() {
  return (
    <section 
      className="bg-[#f8fafc] w-full min-h-screen text-slate-900 overflow-hidden py-12"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* 1. HERO SECTION */}
      <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="space-y-6 relative z-10">
            <div className="inline-block bg-teal-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
              3-Month Crash Program + 6-Month Internship
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              From Degree Holder <br className="hidden lg:block"/>
              to Job-Ready <span className="text-teal-500">Full-Stack Engineer</span>
            </h1>
            
            <p className="text-lg lg:text-xl font-medium text-slate-700">
              The Practical Exposure You Didn't Get in University. The Confidence You Need for Your Career.
            </p>
            
            <p className="text-slate-600 leading-relaxed max-w-xl">
              A 3-month intensive crash program to bridge the gap between theory and real-world practice, 
              followed by a 6-month industry internship with job placement support.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 py-4">
              <div className="flex items-center gap-3">
                <MonitorPlay className="text-teal-500 w-6 h-6 shrink-0" />
                <span className="text-sm font-semibold">Intensive 3-Month<br/>Crash Training</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-teal-500 w-6 h-6 shrink-0" />
                <span className="text-sm font-semibold">6-Month Industry<br/>Internship</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-teal-500 w-6 h-6 shrink-0" />
                <span className="text-sm font-semibold">Mentorship, Monitoring<br/>& Career Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-teal-500 w-6 h-6 shrink-0" />
                <span className="text-sm font-semibold">Job Placement<br/>Assistance</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors">
                Apply Now <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-slate-200 hover:border-teal-500 text-slate-700 font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors">
                <MessageCircle className="w-5 h-5 text-teal-500" /> Talk to an Advisor
              </button>
            </div>
          </div>

          {/* Hero Right Content (Graphic / Image Overlay) */}
          <div className="relative h-full min-h-[450px]">
            <div className="absolute inset-0 bg-teal-100 rounded-full blur-3xl opacity-40 z-0"></div>
            
            {/* Floating Tech Badges */}
            <div className="absolute top-6 right-8 bg-white p-3 rounded-full shadow-lg z-20 text-teal-500 font-bold font-mono text-sm">{"</>"}</div>
            <div className="absolute top-1/2 right-2 bg-white p-3 rounded-full shadow-lg z-20 text-teal-500 font-bold font-mono text-sm">{"{ }"}</div>
            <div className="absolute bottom-1/3 left-6 bg-white p-3 rounded-full shadow-lg z-20 text-teal-500"><LayoutDashboard className="w-6 h-6"/></div>

            {/* Main Image Container */}
            <div className="relative z-10 w-full h-full flex items-end justify-center">
              <div className="w-[380px] h-[460px] bg-slate-200 rounded-b-full overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center text-slate-400 font-medium">
                [ Male Engineer Photo ]
              </div>
            </div>

            {/* Overlapping "Our Mission" Card */}
            <div className="absolute -bottom-8 -left-4 lg:-left-12 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl z-30 max-w-xs border-t-4 border-teal-500">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-teal-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-base mb-2">Our Mission</h3>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Bridge the gap.</li>
                    <li>• Build practical skills.</li>
                    <li>• Create confident engineers.</li>
                    <li>• Place you in the right opportunities.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. REALITY VS SOLUTION SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-[#0f172a] rounded-[2rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden relative">
          
          <div className="flex-1 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-2">The Reality</h3>
            <p className="text-slate-400 mb-6 font-medium text-sm">You have the degree.<br/>But you still feel...</p>
            
            <ul className="space-y-4">
              {[
                "Not confident with real projects",
                "Don't know industry tools & workflows",
                "Struggle to apply for jobs",
                "Worried about your future"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                  <X className="w-5 h-5 text-red-500 shrink-0" strokeWidth={3} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center justify-center -ml-4 z-10 relative">
            <div className="bg-slate-800 p-2 rounded-full shadow-xl">
              <ArrowRightCircle className="w-8 h-8 text-white fill-slate-700" strokeWidth={1} />
            </div>
          </div>

          <div className="flex-1 p-8 lg:p-12 bg-slate-800/40">
            <h3 className="text-2xl font-bold text-teal-400 mb-2">The Solution</h3>
            <p className="text-slate-300 mb-6 font-medium text-sm">We help you move forward.<br/>With practical training, mentorship & real experience.</p>
            
            <ul className="space-y-4">
              {[
                "Gain hands-on skills in real projects",
                "Learn industry tools & best practices",
                "Work with experts & get mentored",
                "Complete internship & get placed"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" strokeWidth={3} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/3 bg-teal-600 p-8 lg:p-12 flex flex-col justify-center">
            <h4 className="text-xl lg:text-2xl font-bold text-white leading-snug mb-6">
              We don't blame anyone.<br/>
              We bridge the gap.<br/>
              Together.
            </h4>
            <div className="pt-4 border-t border-teal-500/50">
              <p className="text-teal-100 text-xs font-semibold">Your effort + Our support =</p>
              <p className="text-white font-bold text-base">Your successful career</p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. 6-MONTH PATHWAY */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-slate-900 mb-16">
          The <span className="text-teal-500">6-Month</span> Career Acceleration Pathway
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 relative">
          
          {/* Phase 1 Card */}
          <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative flex flex-col">
            <div className="absolute top-6 -left-2 bg-slate-900 text-white px-4 py-1 rounded-r-full text-xs font-bold uppercase">
              Phase 1
            </div>
            
            <div className="ml-16 mb-6">
              <h3 className="text-lg font-bold text-slate-900">3-Month <span className="text-teal-600">Intensive Crash Program</span></h3>
              <p className="text-xs font-bold text-slate-700 mt-0.5">Learn. Practice. Build.</p>
            </div>
            
            <p className="text-slate-600 text-xs mb-8">
              A high-intensity, hands-on program designed for IT / Software Engineering graduates who lack practical exposure.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8 flex-grow">
              <div className="flex flex-col items-center gap-2">
                <Settings className="w-7 h-7 text-teal-500" />
                <span className="text-xs font-semibold text-slate-700">Real-World<br/>Projects</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Settings className="w-7 h-7 text-teal-500" />
                <span className="text-xs font-semibold text-slate-700">Industry Tools<br/>& Technologies</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Settings className="w-7 h-7 text-teal-500" />
                <span className="text-xs font-semibold text-slate-700">Best Practices<br/>& Workflows</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-7 h-7 text-teal-500" />
                <span className="text-xs font-semibold text-slate-700">Confidence<br/>& Mindset</span>
              </div>
            </div>
            
            <div className="bg-teal-50 text-teal-800 text-xs font-bold py-2.5 px-4 rounded-full text-center mt-auto border border-teal-100">
              Outcome: Industry-Ready Skills
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center w-8 z-10 -mx-7">
            <div className="bg-teal-500 rounded-full p-1.5 text-white shadow-md">
              <ChevronRight className="w-5 h-5" strokeWidth={3} />
            </div>
          </div>

          {/* Phase 2 Card */}
          <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative flex flex-col">
            <div className="absolute top-6 -left-2 bg-slate-900 text-white px-4 py-1 rounded-r-full text-xs font-bold uppercase">
              Phase 2
            </div>
            
            <div className="ml-16 mb-6">
              <h3 className="text-lg font-bold text-slate-900">6-Month <span className="text-teal-600">Industry Internship</span></h3>
              <p className="text-xs font-bold text-slate-700 mt-0.5">Apply. Experience. Grow.</p>
            </div>
            
            <p className="text-slate-600 text-xs mb-8">
              Work on real projects in a professional environment and gain valuable industry exposure with expert guidance.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8 flex-grow">
              <div className="flex flex-col items-center gap-2">
                <Briefcase className="w-7 h-7 text-teal-500" />
                <span className="text-xs font-semibold text-slate-700">Real Project<br/>Experience</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="w-7 h-7 text-teal-500" />
                <span className="text-xs font-semibold text-slate-700">Team Collaboration<br/>& Agile</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MessageCircle className="w-7 h-7 text-teal-500" />
                <span className="text-xs font-semibold text-slate-700">Mentorship &<br/>Code Reviews</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Target className="w-7 h-7 text-teal-500" />
                <span className="text-xs font-semibold text-slate-700">Professional<br/>Work Culture</span>
              </div>
            </div>
            
            <div className="bg-teal-50 text-teal-800 text-xs font-bold py-2.5 px-4 rounded-full text-center mt-auto border border-teal-100">
              Outcome: 6-Month Internship Certification
            </div>
          </div>

          {/* Outcome Card */}
          <div className="lg:w-1/4 bg-[#0f172a] rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center text-center">
            <Award className="w-14 h-14 text-teal-400 mb-4" strokeWidth={1.5} />
            <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-widest text-xs">The Outcome</h4>
            <h3 className="text-white text-xl font-bold leading-tight mb-4">
              Job-Ready<br/>Confident<br/>Employable
            </h3>
            <p className="text-slate-300 text-xs font-medium">
              With strong practical skills, experience & certification to work anywhere.
            </p>
          </div>

        </div>
      </div>

      {/* 4. TECHNOLOGIES & TOOLS */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Technologies & Tools You Will Master</h3>
        
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-6">
          {[
            { name: "HTML5", color: "text-orange-500" },
            { name: "CSS3", color: "text-blue-500" },
            { name: "JavaScript", color: "text-yellow-500" },
            { name: "TypeScript", color: "text-blue-600" },
            { name: "React", color: "text-cyan-400" },
            { name: "Next.js", color: "text-slate-900" },
            { name: "Node.js", color: "text-green-600" },
            { name: "Express", color: "text-slate-700" },
            { name: "REST APIs", color: "text-slate-600" },
            { name: "MySQL", color: "text-blue-800" },
            { name: "Git & GitHub", color: "text-orange-600" },
            { name: "Docker", color: "text-blue-500" },
            { name: "AWS (Basics)", color: "text-amber-500" }
          ].map((tech, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center">
                <FileText className={`w-6 h-6 ${tech.color}`} />
              </div>
              <span className="text-[11px] font-bold text-slate-700">{tech.name}</span>
            </div>
          ))}
        </div>
        
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Modern • In-Demand • Industry Relevant
        </p>
      </div>

      {/* 5. WE DON'T JUST TRAIN */}
      <div className="max-w-7xl mx-auto px-4 py-16 border-t border-slate-200">
        <h3 className="text-2xl lg:text-3xl font-extrabold text-center text-slate-900 mb-12">
          We Don't Just Train. We <span className="text-teal-500">Transform.</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: <MonitorPlay className="w-6 h-6"/>, title: "Counselling & Guidance", desc: "Build the right mindset and clarity for your career journey." },
            { icon: <Users className="w-6 h-6"/>, title: "Personalised Mentoring", desc: "Learn from industry experts who guide you at every step." },
            { icon: <Target className="w-6 h-6"/>, title: "Continuous Monitoring", desc: "Regular feedback, progress tracking and performance support." },
            { icon: <MessageCircle className="w-6 h-6"/>, title: "Career Consulting", desc: "Resume, LinkedIn, interview prep and career planning for success." },
            { icon: <ShieldCheck className="w-6 h-6"/>, title: "Job Placement Support", desc: "We connect you with opportunities and help you get hired." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4">
              <div className="text-teal-500 mb-3 bg-teal-50 p-3.5 rounded-2xl border border-teal-100">{item.icon}</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. TARGET AUDIENCE & TAKEAWAYS */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-teal-600 mb-6">Who Is This Program For?</h3>
            <ul className="space-y-4">
              {[
                "Degree holders in IT / Software Engineering",
                "Lack practical exposure and real project experience",
                "Want to start their career with confidence",
                "Motivated to learn, grow and succeed"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-100 border border-slate-200 p-8 rounded-3xl flex flex-col justify-center items-center text-center relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-slate-300" />
            <h4 className="text-base font-bold text-slate-900 mb-3 z-10">
              "It's not about the university.<br/>It's about your next step."
            </h4>
            <p className="text-xs text-slate-600 font-medium z-10">
              Your future is in your hands.<br/>We are here to help you shape it.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">What You Will <span className="text-teal-600">Walk Away With</span></h3>
            <ul className="space-y-3 z-10">
              {[
                "Strong practical skills & confidence",
                "Real-world project portfolio",
                "6-Month Internship Certification",
                "Industry experience & professional network",
                "Job placement assistance",
                "Ready to work anywhere in the world"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* 7. WHY CHOOSE THIS PATHWAY */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-xl font-bold text-center text-slate-900 mb-8">Why Choose This Pathway?</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: <Target className="w-5 h-5"/>, text: "Bridges the gap between theory and practice" },
            { icon: <Settings className="w-5 h-5"/>, text: "Save time with an intensive 3-month program" },
            { icon: <Briefcase className="w-5 h-5"/>, text: "Gain industry exposure with 6-month internship" },
            { icon: <Users className="w-5 h-5"/>, text: "Build confidence with mentorship & support" },
            { icon: <Rocket className="w-5 h-5"/>, text: "Increase your chances with job placement help" },
            { icon: <Compass className="w-5 h-5"/>, text: "Start your career on the right path" }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="text-teal-500 shrink-0">{item.icon}</div>
              <p className="text-[11px] font-bold text-slate-700 leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. FOOTER BANNER */}
      <div className="bg-[#0f172a] text-white pt-12 pb-8 px-4 rounded-t-[2.5rem] mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 px-4 lg:px-8">
            <h2 className="text-xl lg:text-3xl font-normal leading-relaxed max-w-2xl text-center lg:text-left">
              Don't let a lack of practical experience hold you back. <br className="hidden lg:block"/>
              <span className="text-teal-400 font-bold">Upgrade</span> your skills. <span className="text-teal-400 font-bold">Gain</span> real experience. <span className="text-teal-400 font-bold">Get</span> placed.
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-4 shrink-0">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors text-sm">
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-transparent border border-slate-600 hover:border-slate-400 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors text-sm">
                Talk to an Advisor <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-6">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4 text-xs font-semibold text-slate-400 px-4">
              <div className="flex items-center gap-2"><Settings className="w-4 h-4 text-teal-500"/> 3-Month Crash Program</div>
              <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-teal-500"/> 6-Month Internship</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-teal-500"/> Mentorship & Support</div>
              <div className="flex items-center gap-2"><Target className="w-4 h-4 text-teal-500"/> Job Placement Assistance</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}