import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CourseAccordion from "@/components/course/CourseAccordion";
import Testimonials from "@/components/course/Testimonials";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/data/courses";
import Link from "next/link";
import Image from "next/image";

import CourseBrochure from "@/components/course/CourseBrochure";

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | iSeeQ Academy",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | iSeeQ Academy`,
    description: course.description,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} | iSeeQ Academy`,
      description: course.description,
      url: `/courses/${course.slug}`,
    },
  };
}

export default async function SingleCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const courseSections = course.sections.map((section) => ({
    ...section,
    content: (
      <div className="space-y-4">
        {section.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    ),
  }));

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Breadcrumbs />

      {/* HERO */}
      <section className="relative flex h-[450px] w-full items-center overflow-hidden bg-gray-900">
        {/* Course image */}
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-white md:px-8">
          <div className="max-w-2xl bg-white/90 p-8 text-black shadow-lg backdrop-blur-sm md:p-12">
            <h1 className="mb-4 text-3xl tracking-tight md:text-5xl">
              {course.title}
            </h1>

            <p className="text-base text-gray-700 md:text-lg">
              {course.description}
            </p>
          </div>
        </div>
      </section>

      {/* STICKY NAVIGATION */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 shadow-sm md:px-8">
        <nav className="hidden space-x-8 text-sm text-gray-500 md:flex">
          <Link href="#key-info" className="transition-colors hover:text-black">
            Key information
          </Link>

          {course?.roles && course.roles.length > 0 && (
            <Link href="#career" className="transition-colors hover:text-black">
              Career Opportunities
            </Link>
          )}

          <Link href="#about" className="transition-colors hover:text-black">
            About the course
          </Link>

          <Link href="#lead" className="transition-colors hover:text-black">
            Lead
          </Link>

          <Link
            href="#testimonials"
            className="transition-colors hover:text-black"
          >
            Testimonials
          </Link>
        </nav>

        {/* <button className="border-2 border-black px-6 py-2 text-sm transition-colors hover:bg-black hover:text-white">
          Course brochure
        </button> */}

        <CourseBrochure slug={course.slug} title={course.title} action="view" />
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-12 md:px-8">
        {/* KEY INFORMATION */}
        <section
          id="key-info"
          className="grid grid-cols-1 gap-8 lg:grid-cols-3 scroll-mt-24"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {/* Price */}
            <div className="border border-gray-200 p-6">
              <p className="mb-1 text-sm text-gray-500">Price</p>

              <p className="text-xl">{course.price}</p>
            </div>

            {/* Duration */}
            <div className="border border-gray-200 p-6">
              <p className="mb-1 text-sm text-gray-500">Duration</p>

              <p className="text-xl">{course.duration}</p>
            </div>

            {/* Commitment */}
            <div className="border border-gray-200 p-6">
              <p className="mb-1 text-sm text-gray-500">Commitment</p>

              <p className="text-xl">{course.commitment}</p>
            </div>

            {/* Study Mode */}
            <div className="border border-gray-200 p-6">
              <p className="mb-1 text-sm text-gray-500">Study mode</p>

              <p className="text-xl">{course.studyMode}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 lg:col-span-1">
            {/* <button className="w-full bg-black py-4 text-white shadow-md transition-colors hover:bg-gray-800">
              Download Brochure
            </button> */}
            <CourseBrochure
              slug={course.slug}
              title={course.title}
              action="download"
            />

            <button className="w-full border-2 border-black py-4 text-black transition-colors hover:bg-gray-50">
              Request a call
            </button>
          </div>
        </section>

        {/* what you'll become */}
        {course?.roles && course.roles.length > 0 && (
          <section id="career" className="max-w-4xl scroll-mt-24">
            <h2 className="mb-8 text-3xl text-gray-900">
              Career Opportunities
            </h2>

            <ul className="flex flex-wrap gap-3">
              {course.roles.map((role, index) => (
                <li
                  key={index}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800"
                >
                  {role}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ABOUT COURSE */}
        <section id="about" className="max-w-4xl scroll-mt-24">
          <h2 className="mb-8 text-3xl text-gray-900">About the course</h2>

          <CourseAccordion items={courseSections} />
        </section>

        {/* COURSE LEAD */}
        <section id="lead" className="max-w-4xl scroll-mt-24">
          <h2 className="mb-8 text-3xl text-gray-900">Academic staff</h2>

          <div className="flex flex-col items-start border border-gray-200 bg-white p-8 sm:flex-row sm:space-x-8">
            {/* Instructor Image */}
            {course.lead.image ? (
              <Image
                src={course.lead.image}
                alt={course.lead.name}
                width={128}
                height={128}
                className="mb-4 h-32 w-32 flex-shrink-0 rounded-full object-cover sm:mb-0"
              />
            ) : (
              <div
                className="mb-4 h-32 w-32 flex-shrink-0 rounded-full bg-gray-200 sm:mb-0"
                aria-hidden="true"
              />
            )}

            {/* Instructor Details */}
            <div>
              <h3 className="mb-2 inline-block border-b border-black text-xl text-black">
                {course.lead.name}
              </h3>

              <p className="mb-4 text-sm text-gray-600">{course.lead.role}</p>

              <p className="text-sm leading-relaxed text-gray-700">
                {course.lead.bio}
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="scroll-mt-24">
          <h2 className="mb-8 text-3xl text-gray-900">
            What our learners are saying
          </h2>

          <Testimonials testimonials={course.testimonials} />
        </section>

        {/* RELATED COURSES */}
        <section id="related-courses" className="border-t border-gray-200 pt-8">
          <h2 className="mb-6 text-2xl text-gray-900">Related courses</h2>

          <div>
            {course.relatedCourses && course.relatedCourses.length > 0 ? (
              <div className="space-y-6">
                {/* 2-Column Grid for Courses */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {course.relatedCourses.map((relatedCourse, index) => (
                    <div
                      key={index}
                      className="group relative flex aspect-video items-end overflow-hidden rounded-lg bg-gray-100 p-6 shadow-sm"
                    >
                      <Link
                        href={`/courses/${relatedCourse?.slug}`}
                        className="absolute inset-0 flex items-end p-6"
                      >
                        {/* Related course image */}
                        <Image
                          src={relatedCourse?.image}
                          alt={relatedCourse?.title || "Related course"}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />

                        {/* Course title */}
                        <h3 className="relative z-10 max-w-xs text-lg font-medium text-white">
                          {relatedCourse?.title}
                        </h3>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Long button underneath when courses are present */}
                <Link
                  href={`/courses?filter=${course.category}`}
                  className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white py-4 text-center text-sm font-regular text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1"
                >
                  Show All Related Courses
                </Link>
              </div>
            ) : (
              /* Large takeover button when NO courses are given */
              <Link
                href={`/courses?filter=${course.category}`}
                className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-8 text-center transition-all hover:border-gray-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1"
              >
                <span className="text-3xl font-regular text-gray-900">
                  Show All Related Courses
                </span>
                <span className="mt-1 text-sm text-gray-500">
                  Explore the complete catalog of related topics
                </span>
              </Link>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
