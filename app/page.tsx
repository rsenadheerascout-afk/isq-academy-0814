import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/home/HeroSection';
import StoryVideo from '@/components/sections/home/StoryVideo';
import { GraduationCap, Users, Award, Timer } from 'lucide-react';

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
      <HeroSection />

      {/* Video / Story Feature */}
      <StoryVideo />

      {/* Why Learn Section */}
      <section className="max-w-7xl mx-auto py-16 lg:px-20 md:px-12 px-6">
        <h2 className="text-4xl md:text-5xl mb-16 md:mb-20 text-center">
          Why learn with iSeeQ Academy Online?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16 lg:gap-y-20">
          {benefits.map((item, i) => {
            const icons = [
              GraduationCap,
              Users,
              Award,
              Timer,
            ];

            const Icon = icons[i % icons.length];

            return (
              <div key={i} className="flex items-start gap-5 md:gap-6">
                <div className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[7px] border-[#00beb2] border-r-transparent border-b-transparent -rotate-45"></div>
                  <div className="w-[68px] h-[68px] md:w-20 md:h-20 rounded-full bg-[#292727] flex items-center justify-center">
                    <Icon
                      size={34}
                      strokeWidth={1.8}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="pt-0.5">
                  <h3 className="text-xl md:text-2xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
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
                className="bg-white border border-gray-200 border-b-4 border-b-[#00beb2] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.20)] transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="h-48 w-full relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#00beb2]/10"></div>
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
              className="border border-gray-200 border-b-4 border-b-[#00beb2] p-8 relative shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.20)] transition-all duration-300"
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
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 mb-24"
      >
        <div className="border border-gray-200 flex flex-col md:flex-row">
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl mb-4">
              About iSeeQ Academy
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              We deliver premium online learning experiences for
              professionals who want to advance their careers, connect
              with a network of peer learners, and gain insight from
              leaders in the field.
            </p>
            <a
              href="#"
              className="border-2 border-black px-6 py-2 text-sm w-max hover:bg-black hover:text-white transition-colors"
            >
              Read more
            </a>
          </div>
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center min-h-[250px]">
            <span className="text-4xl tracking-widest text-gray-300">
              iSeeQ
            </span>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section
        id="organizations"
        className="bg-black text-white py-20 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl mb-6">
            Learning and Development for your organization
          </h2>
          <div className="w-12 h-1 bg-[#00beb2] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Help your teams develop the practical knowledge, skills,
            and confidence they need to perform at their best.
          </p>
        </div>
      </section>

      {/* Newsletter Form */}
      <section
        id="contact"
        className="max-w-xl mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-2xl mb-2">
          Let's keep in touch
        </h2>
        <p className="text-gray-600 text-sm mb-8">
          Sign up here to receive news and updates about our courses.
        </p>
        <form className="text-left space-y-4">
          <div className="text-xs text-gray-500 mb-4">
            * Required field
          </div>
          <div>
            <label className="block text-sm mb-1">
              First name *
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 p-2 focus:outline-none focus:border-[#00beb2]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Last name *
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 p-2 focus:outline-none focus:border-[#00beb2]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Country *
            </label>
            <select
              className="w-full border border-gray-400 p-2 focus:outline-none focus:border-[#00beb2] bg-white"
            >
              <option></option>
              <option>Sri Lanka</option>
              <option>United Kingdom</option>
              <option>United States</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">
              Email address *
            </label>
            <input
              type="email"
              className="w-full border border-gray-400 p-2 focus:outline-none focus:border-[#00beb2]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Course(s) of interest (optional)
            </label>
            <select
              className="w-full border border-gray-400 p-2 focus:outline-none focus:border-[#00beb2] bg-white"
            >
              <option></option>
              <option>Compelling Communication</option>
              <option>Generative AI in Business</option>
              <option>Business Essentials</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 mt-4 hover:bg-[#00beb2] transition-colors"
          >
            Sign up
          </button>
          <p className="text-xs text-gray-400 text-center mt-4">
            By submitting this form, you agree to our Terms of Use
            and Privacy Policy.
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
}