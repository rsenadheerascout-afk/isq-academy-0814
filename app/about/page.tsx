import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about iSeeQ Academy, our mission, online learning approach, professional courses, and commitment to flexible education.",
  alternates: {
    canonical: "/about",
  },
};

export interface Advisor {
  id: string;
  country: string;
  role: string;
  organization?: string;
  expertise: string[];
}

export const advisors: Advisor[] = [
  {
    id: "1",
    country: "USA",
    role: "Leading Scientist & Professor",
    expertise: ["AI", "Machine Learning", "Data Science"],
  },
  {
    id: "2",
    country: "UK",
    role: "Leading System Solutions Architect",
    organization: "LSEG",
    expertise: ["Linux", "Cloud Computing"],
  },
  {
    id: "3",
    country: "Sri Lanka",
    role: "Senior Software Architect",
    expertise: [".NET", "Full Stack Development", "System Architecture"],
  },
  {
    id: "4",
    country: "Sri Lanka",
    role: "Senior Lecturer, Software Consultant & Serial Entrepreneur",
    expertise: [
      "Complete Software Life Cycle",
      "Project Management",
      "QA",
      "Secure Software",
      "AI in Software",
      "Business & Teaching/Learning",
      "Research",
      "Entrepreneurship & Startups",
    ],
  },
  {
    id: "5",
    country: "Sri Lanka",
    role: "Cyber Security Expert",
    expertise: ["Professional Certifications", "Information Security"],
  },
  {
    id: "6",
    country: "Sri Lanka",
    role: "Digital Marketing Expert",
    expertise: ["Digital Marketing", "Growth Strategies"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs />
      {/* Hero Banner */}
      <section className="relative w-full min-h-[280px] md:min-h-[360px] overflow-hidden">
        <Image
          src="/hero-back.jpg"
          alt="About iSeeQ Academy"
          className="absolute inset-0 w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl text-white tracking-tight">
            About iSeeQ Academy
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative overflow-hidden">
        {/* Background Color Spots */}
        {/* Animated Background Color Spots */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-spot-one"
        />
        <div
          aria-hidden="true"
          className="absolute top-[45%] -right-32 w-80 h-80 rounded-full bg-secondary/20 blur-3xl animate-spot-two"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-16 space-y-16 text-gray-800 text-base md:text-lg leading-relaxed">
          {/* Our Mission */}
          <div>
            <h2 className="text-3xl mb-6 text-gray-900">Our Mission</h2>
            <div className="space-y-4">
              <p>
                We improve professional thinking and performance through
                flexible online learning led by industry experts and experienced
                academics.
              </p>
              <p>
                iSeeQ Academy offers a broad programme of online short courses.
                Our aim is to deliver premium online learning experiences for
                professionals who want to advance their careers, connect with a
                network of peer learners, and gain insight from leaders in the
                field.
              </p>
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <h2 className="text-3xl mb-6 text-gray-900">Our Courses</h2>

            <div className="space-y-4">
              <p>
                Our offering has been designed and developed using the latest in
                learning design theory and technology. Our courses are fully
                online and offer a flexible way to fit learning around your
                life.
              </p>
              <p>Each course includes a balance of:</p>
              <ul className="list-disc pl-6 space-y-2 py-2">
                <li>expert-led seminars</li>
                <li>collaboration with peers</li>
                <li>
                  individual study to challenge and support you in achieving
                  your objectives
                </li>
              </ul>

              <p>
                Our courses cover a range of subject areas, but each course has
                a strong focus on real-world applications for individuals and
                businesses.
              </p>
              <p>
                Browse all our{" "}
                <Link
                  href="/courses"
                  className="text-orange-700 hover:text-orange-800 underline underline-offset-4 decoration-1"
                >
                  online short courses
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Our Instructors */}
          <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl mb-6 text-gray-900 font-normal">
              Our Advisors
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                Our programs are guided by a world-class panel of international
                advisors and experts, bringing cutting-edge industry insights
                and academic excellence directly to your learning experience.
              </p>

              {/* Dynamic Grid Mapping over the Advisors Array */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 pt-4 border-t border-gray-200">
                {advisors.map((advisor) => (
                  <div
                    key={advisor.id}
                    className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-2.5 py-1 text-xs font-normal bg-blue-100 text-blue-800 rounded-full">
                          {advisor.country}
                        </span>
                        {advisor.organization && (
                          <span className="text-xs font-medium text-gray-500">
                            {advisor.organization}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-normal text-gray-900">
                        {advisor.role}
                      </h3>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {advisor.expertise.map((item, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Community */}
          <div>
            <h2 className="text-3xl mb-6 text-gray-900">Our Community</h2>
            <p className="mb-6">
              <span className="text-gray-900">Dr. Sarah Jenkins: </span>
              <span className="italic text-gray-600">
                Director of Learning, iSeeQ Academy
              </span>
            </p>

            <div className="space-y-4 text-gray-600 border-l-2 border-gray-200 pl-6">
              <p>
                “The iSeeQ Academy platform gives access to those who do not
                have the opportunity to be physically present in traditional
                classroom settings, enabling them to still obtain highly useful
                knowledge from global experts.{" "}
              </p>
              <p>
                The experience is unique in that it allows asynchronous
                learning, giving the learner the opportunity to go through the
                course at their own pace. We can provide support as and when
                needed, given the practical and hands-on nature of the
                course.{" "}
              </p>
              <p>
                We’re looking forward to launching more courses on the platform
                and opening up to the world the wide range of expertise we have
                to offer.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
