"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  const getCleanFilterParam = (param: string | null) => {
    if (!param) return null;
    const decoded = decodeURIComponent(param).replace(/^"|"$/g, "").trim();
    return decoded || null;
  };

  const currentFilter = getCleanFilterParam(filterParam);

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    currentFilter ? [currentFilter] : []
  );
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

  const filteredCourses = courses.filter((course) => {
    const subjectMatch =
      selectedSubjects.length === 0 ||
      selectedSubjects.includes(course.category);

    const durationMatch =
      selectedDurations.length === 0 ||
      selectedDurations.includes(course.duration);

    return subjectMatch && durationMatch;
  });

  const toggleSubject = (subject: string, checked: boolean) => {
    setSelectedSubjects((prev) =>
      checked
        ? [...prev, subject]
        : prev.filter((item) => item !== subject)
    );
  };

  const toggleDuration = (duration: string, checked: boolean) => {
    setSelectedDurations((prev) =>
      checked
        ? [...prev, duration]
        : prev.filter((item) => item !== duration)
    );
  };

  const clearFilters = () => {
    setSelectedSubjects([]);
    setSelectedDurations([]);
  };

  const subjectFilters = [
    "Career Tracks",
    "Business Upskilling",
    "Women Empowerment",
    "Senior Citizens",
    "School Education",
    "Children & Teens",
  ];

  const durationFilters = ["6 weeks", "8 weeks"];

  return (
    <div className="min-h-screen bg-white font-sans text-black font-normal">
      <Breadcrumbs />

      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl mb-4">Courses We Offer</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Develop your skills and advance your career with our flexible,
            industry-led courses.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4">
          <div className="sticky top-28">
            <h2 className="text-xl mb-6 border-b border-gray-200 pb-2">
              Filter by
            </h2>

            {/* Subject Area */}
            <div className="mb-8">
              <h3 className="mb-3">Subject Area</h3>
              <div className="space-y-3 text-sm text-gray-700">
                {subjectFilters.map((subject) => (
                  <label
                    key={subject}
                    className="flex items-center gap-3 cursor-pointer hover:text-primary"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(subject)}
                      onChange={(e) =>
                        toggleSubject(subject, e.target.checked)
                      }
                      className="h-4 w-4 accent-primary"
                    />
                    <span>{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="mb-8">
              <h3 className="mb-3">Duration</h3>
              <div className="space-y-3 text-sm text-gray-700">
                {durationFilters.map((duration) => (
                  <label
                    key={duration}
                    className="flex items-center gap-3 cursor-pointer hover:text-primary"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDurations.includes(duration)}
                      onChange={(e) =>
                        toggleDuration(duration, e.target.checked)
                      }
                      className="h-4 w-4 accent-primary"
                    />
                    <span>{duration}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedSubjects.length > 0 ||
              selectedDurations.length > 0) && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm text-primary hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </aside>

        {/* Course Grid */}
        <main className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <Link
              href={`/courses/${course.slug}`}
              key={course.slug}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col group"
            >
              {/* Course Image */}
              <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Course Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs text-primary uppercase tracking-wider mb-2 block">
                    {course.category}
                  </span>

                  <h3 className="text-xl mb-3 group-hover:underline decoration-primary decoration-2 underline-offset-4">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Course Meta */}
                <div className="text-sm border-t border-gray-100 pt-4 flex justify-between items-center gap-4">
                  <div>
                    <span className="block text-gray-500 text-xs mb-1">
                      Next start date
                    </span>
                    <span>{course.nextStartDate}</span>
                  </div>

                  <div className="text-right">
                    <span className="block text-gray-500 text-xs mb-1">
                      Duration
                    </span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="md:col-span-2 py-16 text-center">
              <h3 className="text-xl mb-2">No courses found</h3>
              <p className="text-gray-500 text-sm mb-6">
                Try changing or clearing your filters.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-primary transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}