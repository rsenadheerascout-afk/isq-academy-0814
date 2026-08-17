import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function HomePage() {
  const featuredCourses = [
    {
      slug: 'compelling-communication',
      title: 'Compelling Communication',
      date: '16 Oct 2026',
    },
    {
      slug: 'generative-ai-in-business',
      title: 'Generative AI in Business',
      date: '16 Oct 2026',
    },
    {
      slug: 'business-essentials',
      title: 'Business Essentials for Workplace Readiness',
      date: '16 Oct 2026',
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