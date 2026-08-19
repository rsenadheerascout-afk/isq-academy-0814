import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Breadcrumbs Navigation */}
      <Breadcrumbs />

      {/* 2. Hero Banner */}
      <section className="relative w-full min-h-[280px] md:min-h-[360px] overflow-hidden">
        {/* Background Image */}
        <img src="/hero-back.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* Dark/light overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl text-white tracking-tight">
            About iSeeQ Academy
          </h1>
        </div>
      </section>

      {/* 3. Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 space-y-16 text-gray-800 text-base md:text-lg leading-relaxed">

        {/* Our Mission */}
        <div>
          <h2 className="text-3xl mb-6 text-gray-900">Our Mission</h2>
          <div className="space-y-4">
            <p>
              We improve professional thinking and performance through flexible online learning led by industry experts and experienced academics.
            </p>
            <p>
              iSeeQ Academy offers a broad programme of online short courses. Our aim is to deliver premium online learning experiences for professionals who want to advance their careers, connect with a network of peer learners, and gain insight from leaders in the field.
            </p>
          </div>
        </div>

        {/* Our Courses */}
        <div>
          <h2 className="text-3xl mb-6 text-gray-900">Our Courses</h2>
          <div className="space-y-4">
            <p>
              Our offering has been designed and developed using the latest in learning design theory and technology. Our courses are fully online and offer a flexible way to fit learning around your life.
            </p>
            <p>Each course includes a balance of:</p>

            <ul className="list-disc pl-6 space-y-2 py-2">
              <li>expert-led seminars</li>
              <li>collaboration with peers</li>
              <li>individual study to challenge and support you in achieving your objectives</li>
            </ul>

            <p>
              Our courses cover a range of subject areas, but each course has a strong focus on real-world applications for individuals and businesses.
            </p>
            <p>
              Browse all our <Link href="/courses" className="text-orange-700 hover:text-orange-800 underline underline-offset-4 decoration-1">online short courses</Link>.
            </p>
          </div>
        </div>

        {/* Our Community */}
        <div>
          <h2 className="text-3xl mb-6 text-gray-900">Our Community</h2>

          {/* Quote Header */}
          <p className="mb-6">
            <span className="text-gray-900">Dr. Sarah Jenkins: </span>
            <span className="italic text-gray-600">Director of Learning, iSeeQ Academy</span>
          </p>

          {/* Quote Body */}
          <div className="space-y-4 text-gray-600 border-l-2 border-gray-200 pl-6">
            <p>
              “The iSeeQ Academy platform gives access to those who do not have the opportunity to be physically present in traditional classroom settings, enabling them to still obtain highly useful knowledge from global experts.
            </p>
            <p>
              The experience is unique in that it allows asynchronous learning, giving the learner the opportunity to go through the course at their own pace. We can provide support as and when needed, given the practical and hands-on nature of the course.
            </p>
            <p>
              We’re looking forward to launching more courses on the platform and opening up to the world the wide range of expertise we have to offer.”
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}