import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CourseAccordion from "@/components/course/CourseAccordion";
import Testimonials from "@/components/course/Testimonials";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/data/courses";

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
      // Uncomment when you have course-specific images:
      // images: [course.image],
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

      {/* Hero */}
      <section className="relative flex h-[450px] w-full items-center overflow-hidden bg-gray-900">
        {/* Uncomment when course images are ready:
        <img
          src={course.image}
          alt={course.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        */}

        <div className="absolute inset-0 bg-black/40" />

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

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 shadow-sm md:px-8">
        <nav className="hidden space-x-8 text-sm text-gray-500 md:flex">
          <a href="#key-info" className="transition-colors hover:text-black">
            Key information
          </a>
          <a href="#about" className="transition-colors hover:text-black">
            About the course
          </a>
          <a href="#lead" className="transition-colors hover:text-black">
            Lead
          </a>
          <a
            href="#testimonials"
            className="transition-colors hover:text-black"
          >
            Testimonials
          </a>
        </nav>

        <button className="border-2 border-black px-6 py-2 text-sm transition-colors hover:bg-black hover:text-white">
          Course brochure
        </button>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-12 md:px-8">

        {/* Key Information */}
        <section
          id="key-info"
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            <div className="border border-gray-200 p-6">
              <p className="mb-1 text-sm text-gray-500">Price</p>
              <p className="text-xl">{course.price}</p>
            </div>

            <div className="border border-gray-200 p-6">
              <p className="mb-1 text-sm text-gray-500">Duration</p>
              <p className="text-xl">{course.duration}</p>
            </div>

            <div className="border border-gray-200 p-6">
              <p className="mb-1 text-sm text-gray-500">Commitment</p>
              <p className="text-xl">{course.commitment}</p>
            </div>

            <div className="border border-gray-200 p-6">
              <p className="mb-1 text-sm text-gray-500">Study mode</p>
              <p className="text-xl">{course.studyMode}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 lg:col-span-1">
            <button className="w-full bg-black py-4 text-white shadow-md transition-colors hover:bg-gray-800">
              Download Brochure
            </button>

            <button className="w-full border-2 border-black py-4 text-black transition-colors hover:bg-gray-50">
              Request a call
            </button>
          </div>
        </section>

        {/* About Course */}
        <section id="about" className="max-w-4xl">
          <h2 className="mb-8 text-3xl text-gray-900">
            About the course
          </h2>

          <CourseAccordion items={courseSections} />
        </section>

        {/* Course Lead */}
        <section id="lead" className="max-w-4xl">
          <h2 className="mb-8 text-3xl text-gray-900">
            Academic staff
          </h2>

          <div className="flex flex-col items-start border border-gray-200 bg-white p-8 sm:flex-row sm:space-x-8">
            {/* Add lead image later:
            <img
              src={course.lead.image}
              alt={course.lead.name}
              className="mb-4 h-32 w-32 flex-shrink-0 rounded-full object-cover sm:mb-0"
            />
            */}

            <div className="mb-4 h-32 w-32 flex-shrink-0 rounded-full bg-gray-200 sm:mb-0" />

            <div>
              <h3 className="mb-2 inline-block border-b border-black text-xl text-black">
                {course.lead.name}
              </h3>

              <p className="mb-4 text-sm text-gray-600">
                {course.lead.role}
              </p>

              <p className="text-sm leading-relaxed text-gray-700">
                {course.lead.bio}
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <h2 className="mb-8 text-3xl text-gray-900">
            What our learners are saying
          </h2>

          <Testimonials />
        </section>

        {/* Related Courses */}
        <section
          id="related-courses"
          className="border-t border-gray-200 pt-8"
        >
          <h2 className="mb-6 text-2xl text-gray-900">
            Related context
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="group relative flex aspect-video items-end overflow-hidden bg-gray-100 p-6">
              {/* Replace with course.relatedCourses[0].image later */}

              <div className="absolute inset-0 bg-gray-300 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30" />

              <h3 className="relative z-10 max-w-xs text-lg text-white">
                Related learning and professional development
              </h3>
            </div>

            <div className="group relative flex aspect-video items-end overflow-hidden bg-gray-100 p-6">
              {/* Replace with course.relatedCourses[1].image later */}

              <div className="absolute inset-0 bg-gray-300 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30" />

              <h3 className="relative z-10 max-w-xs text-lg text-white">
                Explore more skills and opportunities
              </h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}