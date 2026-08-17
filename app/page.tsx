import React from 'react';
import Link from 'next/link';
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
      <HeroSection/>

      {/* Video / Story Feature */}
      <StoryFeature/>

      {/* Why Learn Section */}
      <WhyLearnSection benefits={benefits}/>

      {/* Featured Courses Section */}
      <FeaturedCoursesSection featuredCourses={featuredCourses}/>

      {/* Testimonials */}
     <TestimonialsSection testimonials={testimonials}/>

      {/* About Banner */}
      <AboutSection/>

      {/* Organizations Section */}
      <OrganizationsSection/>

      {/* Newsletter Form */}
      <NewsletterForm/>
      
    </div>
  );
}