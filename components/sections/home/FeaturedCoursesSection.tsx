import Link from "next/link";
import React from "react";
import Image from "next/image";

export interface featureCourse {
  slug: string;
  title: string;
  date: string;
  image: string;
}

export interface featureCourseSectionProps{
  featuredCourses: featureCourse[];
}

function FeaturedCoursesSection({ featuredCourses }: featureCourseSectionProps) {
  return (
    <section className="bg-gray-50 py-20 px-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-12 text-center">
          Featured Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses?.map((course) => (
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
                    Master practical tools and techniques to integrate strategy
                    into your organization.
                  </p>
                </div>

                <div className="text-sm border-t border-gray-100 pt-4">
                  Next course:{" "}
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
  );
}

export default FeaturedCoursesSection;
