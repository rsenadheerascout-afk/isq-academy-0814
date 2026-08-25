import Link from "next/link";
import Image from "next/image";

export interface featureCourse {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface featureCourseSectionProps{
  featuredCourses: featureCourse[];
}

function FeaturedCoursesSection({ featuredCourses }: featureCourseSectionProps) {
  return (
    <section className="relative overflow-clip bg-gray-50 py-16 lg:px-40 md:px-20 px-6">
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">
          Featured Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses?.map((course) => (
            <Link
              key={course.slug}
              href={`/courses`}
              className="bg-white border border-gray-200 border-b-4 border-b-[#00beb2] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.20)] transition-all duration-300 flex flex-col group cursor-pointer rounded-2xl"
            >
              <div className="h-48 w-full relative overflow-hidden rounded-2xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                />

                <div className="absolute inset-0 bg-[#00beb2]/10"></div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl mb-4 group-hover:underline decoration-primary decoration-2 underline-offset-4">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6">
                    {course.description}
                  </p>
                </div>

                <div className="text-sm border-t border-gray-100 pt-4">
                  Next course:{" "}
                  <span className="text-primary">
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
            className="inline-block bg-black text-white px-8 py-3 hover:bg-primary transition-colors rounded-full"
          >
            View all courses
          </Link>
        </div>
      </div>
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#00beb2]/20 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" 
      />
    </section>
  );
}

export default FeaturedCoursesSection;
