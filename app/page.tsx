import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/home/HeroSection'
import StoryFeature from '@/components/sections/home/StoryFeature'
import WhyLearnSection from '@/components/sections/home/WhyLearnSection'
import FeaturedCoursesSection from '@/components/sections/home/FeaturedCoursesSection'
import TestimonialsSection from '@/components/sections/home/TestimonialsSection'
import AboutSection from '@/components/sections/home/AboutSection'
import OrganizationsSection from '@/components/sections/home/OrganizationsSection'
import NewsletterForm from '@/components/sections/home/NewsletterForm'

export default function HomePage() {
  const featuredCourses = [
    {
      slug: 'compelling-communication',
      title: 'Compelling Communication',
      date: '16 Oct 2026',
      image: '/courses/communication.jpg',
    },
    {
      slug: 'generative-ai-in-business',
      title: 'Generative AI in Business',
      date: '16 Oct 2026',
      image: '/courses/generative-ai.jpg',
    },
    {
      slug: 'business-essentials',
      title: 'Business Essentials for Workplace Readiness',
      date: '16 Oct 2026',
      image: '/courses/business-essentials.jpg',
    },
  ];

  const benefits = [
    {
      title: 'Led by industry experts',
      desc: 'Learn from thought leaders at the forefront of technology.',
    },
    {
      title: 'Join our global community',
      desc: 'Connect with a network of peers from around the world.',
    },
    {
      title: 'Earn an online certificate',
      desc: 'Evidence your learning with an official certificate on completion.',
    },
    {
      title: 'Flexible learning for professionals',
      desc: 'Study on a schedule that suits your needs.',
    },
  ];

  const testimonials = [
    {
      text: 'The support and overall quality of content has been exactly what I expected. It instills the highest traditions and reputation of the academy.',
    },
    {
      text: 'The learning experience has been practical, engaging, and incredibly useful for my professional development.',
    },
    {
      text: 'The quality of the courses and support from the academy made the entire learning journey worthwhile.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans font-normal">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl mb-6">
            iSeeQ Academy Online
          </h1>
          <div className="w-12 h-1 bg-[#00beb2] mb-6"></div>
          <p className="text-xl max-w-2xl mb-10 leading-relaxed text-gray-300">
            Improve your professional thinking and performance through
            flexible online learning led by industry experts.
          </p>
          <Link
            href="/courses"
            className="inline-block bg-[#00beb2] text-black px-8 py-3 hover:bg-[#fdc806] transition-colors duration-300"
          >
            Browse courses
          </Link>
        </div>
      </section>

      {/* Video / Story Feature */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20 mb-20">
        <div className="bg-gray-200 aspect-video w-full relative flex items-center justify-center cursor-pointer group shadow-2xl border-4 border-white">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div className="flex flex-col items-center z-10">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform bg-black/40">
              <span className="text-white ml-1">▶</span>
            </div>
            <span className="text-white shadow-sm">
              Explore our story
            </span>
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl mb-16">
          Why learn with iSeeQ Academy Online?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {benefits.map((item, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#00beb2] text-white flex items-center justify-center mb-4 text-xl">
                {i + 1}
              </div>
              <h3 className="text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-gray-50 py-20 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-12 text-center">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col group cursor-pointer"
              >
                <div className="h-48 bg-gray-200 w-full relative">
                  <div className="absolute inset-0 bg-[#00beb2]/20 mix-blend-multiply"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl mb-4 group-hover:underline decoration-[#00beb2] decoration-2 underline-offset-4">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">
                      Master practical tools and techniques to integrate
                      strategy into your organization.
                    </p>
                  </div>
                  <div className="text-sm border-t border-gray-100 pt-4">
                    Next course:{' '}
                    <span className="text-[#00beb2]">
                      {course.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-block bg-black text-white px-8 py-3 hover:bg-[#00beb2] transition-colors"
            >
              View all courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl mb-12">
          What our learners are saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="border-2 border-gray-100 p-8 relative"
            >
              <span className="text-6xl text-[#fdc806] absolute top-4 left-6 font-serif">
                “
              </span>
              <p className="mt-8 text-gray-700 text-sm italic relative z-10">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Banner */}
      <AboutSection/>

      {/* Organizations Section */}
      <OrganizationsSection/>

      {/* Newsletter Form */}
      <NewsletterForm/>
      
    </div>
  );
}