import type { Metadata } from "next";

import HeroSection from "@/components/sections/home/HeroSection";
import WhyLearnSection from "@/components/sections/home/WhyLearnSection";
import FeaturedCoursesSection from "@/components/sections/home/FeaturedCoursesSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import AboutSection from "@/components/sections/home/AboutSection";
import OrganizationsSection from "@/components/sections/home/OrganizationsSection";
import ContactSection from "@/components/sections/home/ContactSection";
import OngoingProgramsSection from "@/components/sections/home/OngoingProgramsSection";
import WomenSection from "@/components/sections/home/WomenSection";
import SeniorSection from "@/components/sections/home/SeniorSection";

import { featuredCourses, testimonials, } from "@/data/home";
import WhyISeeQ from "@/components/sections/home/WhyISeeQ";

export const metadata: Metadata = {
  title: "iSeeQ Academy | Professional Learning & Courses",
  description:
    "Develop practical digital, AI, business, and professional skills through flexible courses led by industry experts at iSeeQ Academy in Sri Lanka.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "iSeeQ Academy | Professional Learning & Courses",
    description:
      "Develop practical digital, AI, business, and professional skills through flexible courses led by industry experts.",
    url: "/",
    siteName: "iSeeQ Academy",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "iSeeQ Academy professional learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iSeeQ Academy | Professional Learning & Courses",
    description:
      "Flexible courses in digital, AI, business, and professional skills.",
    images: ["/opengraph-image.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "iSeeQ Academy",
  url: "https://www.iseeq.lk",
  logo: "https://www.iseeq.lk/isq-aca-logo.png",
  description:
    "iSeeQ Academy offers professional learning courses in digital, AI, business, and professional skills, led by industry experts.",
  sameAs: [
    "https://www.facebook.com/iseeqacademy",
    "https://twitter.com/iseeqacademy",
    "https://www.linkedin.com/school/iseeq-academy/",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main className="min-h-screen bg-white text-black font-sans font-normal overflow-hidden">
        <HeroSection imageLink="/about-academy.jpg" />

        <WomenSection />

        <SeniorSection />

        <OngoingProgramsSection />

        <WhyISeeQ />

        <WhyLearnSection />

        <FeaturedCoursesSection featuredCourses={featuredCourses} />

        <TestimonialsSection testimonials={testimonials} />

        <AboutSection />

        <OrganizationsSection />

        <ContactSection />
      </main>
    </>
  );
}