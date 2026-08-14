import React from 'react';
import Footer from '@/components/Footer';

export default function SingleCoursePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      
      {/* Course Hero Section */}
      <section className="bg-black text-white py-20 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-1 bg-[#00beb2] mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Business Essentials for Workplace Readiness
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Equip yourself with the core competencies and strategic thinking required to navigate and succeed in today's fast-paced corporate environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#00beb2] text-black font-bold px-8 py-3 hover:bg-[#fdc806] transition-colors duration-300">
                Enroll now
              </button>
              <button className="border-2 border-white text-white font-bold px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300">
                Download prospectus
              </button>
            </div>
          </div>
          
          {/* Quick Facts Card overlaying hero */}
          <div className="bg-white text-black p-8 shadow-2xl lg:ml-auto max-w-sm w-full">
            <h3 className="font-bold text-xl mb-6 border-b border-gray-200 pb-4">Course Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-500">Next intake:</span>
                <span className="font-semibold">16 Oct 2026</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">Duration:</span>
                <span className="font-semibold">6 weeks online</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">Time commitment:</span>
                <span className="font-semibold">6-8 hours per week</span>
              </li>
              <li className="flex justify-between border-t border-gray-200 pt-4 mt-2">
                <span className="text-gray-500">Fee:</span>
                <span className="font-bold text-lg">£1,800</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sticky Course Navigation */}
      <div className="sticky top-[73px] z-40 bg-gray-50 border-b border-gray-200 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex space-x-8 text-sm font-semibold">
            <li><a href="#overview" className="block py-4 border-b-2 border-[#00beb2] text-[#00beb2]">Overview</a></li>
            <li><a href="#modules" className="block py-4 border-b-2 border-transparent hover:text-[#00beb2] hover:border-[#00beb2] transition-all">Modules</a></li>
            <li><a href="#faculty" className="block py-4 border-b-2 border-transparent hover:text-[#00beb2] hover:border-[#00beb2] transition-all">Faculty</a></li>
            <li><a href="#certification" className="block py-4 border-b-2 border-transparent hover:text-[#00beb2] hover:border-[#00beb2] transition-all">Certification</a></li>
          </ul>
        </div>
      </div>

      {/* Course Content Body */}
      <section id="overview" className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-8">Course Overview</h2>
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              Transitioning into a new role or looking to solidify your foundational business knowledge? This course provides a comprehensive overview of the essential mechanics of modern business operations.
            </p>
            <p>
              Through a blend of theoretical frameworks and practical case studies, you will learn how to communicate effectively with stakeholders, understand basic financial statements, and contribute meaningfully to strategic objectives.
            </p>
            
            <h3 className="text-2xl font-bold text-black mt-12 mb-6">What you will learn</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#00beb2] mr-3 mt-1">✔</span>
                Identify and apply key management frameworks to everyday business challenges.
              </li>
              <li className="flex items-start">
                <span className="text-[#00beb2] mr-3 mt-1">✔</span>
                Develop compelling communication strategies for both internal teams and external clients.
              </li>
              <li className="flex items-start">
                <span className="text-[#00beb2] mr-3 mt-1">✔</span>
                Analyze basic financial data to make informed operational decisions.
              </li>
            </ul>
          </div>
        </div>
        
        {/* Right Sidebar for standard content */}
        <div className="md:w-1/3">
          <div className="bg-[#fdc806]/10 border border-[#fdc806] p-8">
            <h3 className="font-bold text-xl mb-4">Who is this for?</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Ideal for early-to-mid career professionals, technical specialists transitioning into management, and recent graduates preparing to enter the corporate workforce.
            </p>
            <button className="w-full bg-black text-white font-bold py-3 hover:bg-[#00beb2] transition-colors">
              Check entry requirements
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}