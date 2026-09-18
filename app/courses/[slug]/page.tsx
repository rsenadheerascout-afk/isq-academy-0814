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
    <main className="relative min-h-screen bg-slate-50/50 font-sans text-gray-900">
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[30%] -left-40 h-125 w-125 rounded-full bg-primary/50 blur-3xl" />
        <div className="absolute top-[10%] -right-40 h-125 w-125 rounded-full bg-secondary/80 blur-3xl" />
        <div className="absolute top-[70%] -right-40 h-125 w-125 rounded-full bg-primary blur-3xl" />
      </div>

      <Breadcrumbs />

      {/* HERO SECTION */}
      <section className="relative h-120 w-full overflow-hidden bg-gray-900">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-8">
          <div className="max-w-xl bg-white/95 p-6 shadow-2xl backdrop-blur-md md:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
              {course.category || "Foundation Program"}
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">
              {course.title}
            </h1>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed md:text-base">
              {course.description}
            </p>
          </div>
        </div>
      </section>

      {/* STICKY NAVIGATION */}
      <div className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <nav className="hidden space-x-8 text-sm font-medium text-gray-600 md:flex">
            <Link
              href="#key-info"
              className="transition-colors hover:text-black"
            >
              Key Info
            </Link>

            {course?.roles && course.roles.length > 0 && (
              <Link
                href="#career"
                className="transition-colors hover:text-black"
              >
                Career Opportunities
              </Link>
            )}

            <Link href="#about" className="transition-colors hover:text-black">
              About the Course
            </Link>

            <Link href="#lead" className="transition-colors hover:text-black">
              Academic Staff
            </Link>

            <Link
              href="#testimonials"
              className="transition-colors hover:text-black"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex gap-3">
            <CourseBrochure
              slug={course.slug}
              title={course.title}
              action="view"
            />

            <CourseBrochure
              slug={course.slug}
              title={course.title}
              action="download"
            />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 md:px-8">
        {/* KEY INFORMATION */}
        <section id="key-info" className="scroll-mt-24 space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Key information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className=" border border-gray-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Price
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {course.price}
              </p>
            </div>

            <div className=" border border-gray-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Commitment
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {course.commitment}
              </p>
            </div>

            <div className=" border border-gray-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Duration
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {course.duration}
              </p>
            </div>

            <div className=" border border-gray-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Study mode
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {course.studyMode}
              </p>
            </div>
          </div>

          <button className="w-full bg-black py-3.5 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-gray-800">
            Request a call
          </button>
        </section>

        {/* CAREER OPPORTUNITIES */}
        {course?.roles && course.roles.length > 0 && (
          <section id="career" className="scroll-mt-24">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Career Opportunities
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {course.roles.map((role, index) => (
                <span
                  key={index}
                  className="rounded-full border border-gray-200/80 bg-white/80 px-4 py-2 text-xs font-medium text-gray-800 shadow-sm backdrop-blur-sm"
                >
                  {role}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ABOUT COURSE */}
        <section id="about" className="scroll-mt-24">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            About the course
          </h2>
          <CourseAccordion items={courseSections} />
        </section>

        {/* ACADEMIC STAFF */}
        <section id="lead" className="scroll-mt-24">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            Academic staff
          </h2>
          <div className="relative overflow-hidden rounded-2xl bg-black p-6 md:p-8 text-white shadow-xl">
            {/* Ambient Lighting FX */}
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary blur-3xl" />
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-secondary blur-3xl" />

            <div className="relative z-10 flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              {course.lead.image ? (
                <Image
                  src={course.lead.image}
                  alt={course.lead.name}
                  width={112}
                  height={112}
                  className="h-28 w-28 shrink-0 rounded-full object-cover border-2 border-white/20 shadow-md"
                />
              ) : (
                <div className="h-28 w-28 shrink-0 rounded-full bg-gray-800 border-2 border-white/20" />
              )}

              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-lg font-bold text-white">{course.lead.name} </h3>
                <p className="text-xs font-medium text-gray-400">
                   {course.lead.role}
                </p>
                <p className="text-sm leading-relaxed text-gray-300 pt-1">
                  {course.lead.bio}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* TESTIMONIALS (FULL-WIDTH DARK SECTION) */}
      <section
        id="testimonials"
        className="scroll-mt-24 bg-black py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="mb-8 text-2xl font-bold text-white">
            What our learners are saying
          </h2>
          <Testimonials testimonials={course.testimonials} />
        </div>
      </section>

      {/* RELATED COURSES */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <section id="related-courses" className="scroll-mt-24">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            Related courses
          </h2>
          {course.relatedCourses && course.relatedCourses.length > 0 ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {course.relatedCourses.map((relatedCourse, index) => (
                  <div
                    key={index}
                    className="group relative h-48 overflow-hidden rounded-xl bg-gray-900 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Link
                      href={`/courses/${relatedCourse?.slug}`}
                      className="block h-full w-full"
                    >
                      <Image
                        src={relatedCourse?.image}
                        alt={relatedCourse?.title || "Related course"}
                        fill
                        className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 transition-all bg-linear-to-t from-black/80 via-black/20 to-transparent group-hover:bg-black/30" />
                      <div className="group absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                        <h3 className="text-base font-semibold text-white truncate">
                          {relatedCourse?.title}
                        </h3>

                        {/* Circle with Arrow */}
                        <div className="flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white backdrop-blur-sm opacity-0 -translate-x-6 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <Link
                href={`/courses?filter=${course.category}`}
                className="flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
              >
                Show All Related Courses
              </Link>
            </div>
          ) : (
            <Link
              href={`/courses?filter=${course.category}`}
              className="flex min-h-[160px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center transition-all hover:border-gray-400 hover:bg-gray-50"
            >
              <span className="text-lg font-semibold text-gray-900">
                Show All Related Courses
              </span>
              <span className="mt-1 text-xs text-gray-500">
                Explore the complete catalog of related topics
              </span>
            </Link>
          )}
        </section>
      </div>
    </main>
  );
}
