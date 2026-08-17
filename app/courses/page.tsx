import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function CoursesPage() {
  const courses = [
    { id: 'business-essentials', title: 'Business Essentials for Workplace Readiness', date: '16 Oct 2026', duration: '6 weeks', category: 'Business' },
    { id: 'gen-ai', title: 'Generative AI in Business', date: '16 Oct 2026', duration: '8 weeks', category: 'Technology' },
    { id: 'communication', title: 'Compelling Communication Skills', date: '23 Oct 2026', duration: '6 weeks', category: 'Communication' },
    { id: 'esg-risk', title: 'ESG Risk Management', date: '05 Nov 2026', duration: '8 weeks', category: 'Management' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-black font-normal">
      <Breadcrumbs />
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl mb-4">Short Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Develop your skills and advance your career with our flexible, industry-led online courses.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4">
          <h2 className="text-xl mb-6 border-b border-gray-200 pb-2">Filter by</h2>
          <div className="mb-8">
            <h3 className="mb-3">Subject Area</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center space-x-2 cursor-pointer hover:text-[#00beb2]">
                <input type="checkbox" className="accent-[#00beb2]" />
                <span>Business & Management</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:text-[#00beb2]">
                <input type="checkbox" className="accent-[#00beb2]" />
                <span>Technology & AI</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:text-[#00beb2]">
                <input type="checkbox" className="accent-[#00beb2]" />
                <span>Communication</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Course Grid */}
        <main className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Link
              href={`/courses/${course.id}`}
              key={course.id}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col group cursor-pointer"
            >
              <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                <div className="absolute inset-0 bg-[#00beb2]/20 mix-blend-multiply"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs text-[#00beb2] uppercase tracking-wider mb-2 block">
                    {course.category}
                  </span>
                  <h3 className="text-xl mb-3 group-hover:underline decoration-[#00beb2] decoration-2 underline-offset-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Gain the fundamental skills required to thrive in modern industry environments.
                  </p>
                </div>
                <div className="text-sm border-t border-gray-100 pt-4 flex justify-between items-center">
                  <div>
                    <span className="block text-gray-500 text-xs">
                      Next start date
                    </span>
                    {course.date}
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-500 text-xs">
                      Duration
                    </span>
                    {course.duration}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}