import type { Metadata } from "next";
import CareerAccelerationSection from "@/components/sections/home/CareerAccelerationSection";
import CareerAccelerationHero from "@/components/sections/career-acceleration/CareerAccelerationHero";
import CareerRealitySolution from "@/components/sections/career-acceleration/CareerRealitySolution";
import CareerPathway from "@/components/sections/career-acceleration/CareerPathway";
import CareerTechnologies from "@/components/sections/career-acceleration/CareerTechnologies";
import CareerTransformation from "@/components/sections/career-acceleration/CareerTransformation";
import CareerAudience from "@/components/sections/career-acceleration/CareerAudience";
import CareerWhyChoose from "@/components/sections/career-acceleration/CareerWhyChoose";
import CareerCTA from "@/components/sections/career-acceleration/CareerCTA";

export const metadata: Metadata = {
  title: "Career Acceleration Pathway | iSeeQ Academy",
  description:
    "Bridge the gap between university knowledge and industry experience through practical training, mentorship, internship experience, and career support.",
  alternates: {
    canonical: "/career-acceleration",
  },
  openGraph: {
    title: "Career Acceleration Pathway | iSeeQ Academy",
    description:
      "A structured pathway combining intensive practical training, industry internship experience, mentorship, and career support.",
    url: "/career-acceleration",
    siteName: "iSeeQ Academy",
    type: "website",
  },
};

export default function CareerAccelerationPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans font-normal overflow-hidden">
      <CareerAccelerationHero />

      <CareerRealitySolution />

      <CareerPathway />

      <CareerTechnologies />

      <CareerTransformation />

      <CareerAudience />

      <CareerWhyChoose />

      <CareerCTA />
    </main>
  );
}