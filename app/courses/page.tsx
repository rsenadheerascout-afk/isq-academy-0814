"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter"); // Get the value of ?filter=...

  // Helper function to extract and sanitize the parameter string
  const getCleanFilterParam = (param: string | null) => {
    if (!param) return null;
    const decoded = decodeURIComponent(param).replace(/^"|"$/g, "").trim();
    return decoded || null;
  };

  const currentFilter = getCleanFilterParam(filterParam);

  // State to track the active URL filter parameter to detect route changes
  const [prevFilter, setPrevFilter] = useState<string | null>(currentFilter);

  // Active checkbox states
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    currentFilter ? [currentFilter] : [],
  );
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

  // React pattern: Reset state synchronously during render when URL query changes
  if (prevFilter !== currentFilter) {
    setPrevFilter(currentFilter);
    setSelectedSubjects(currentFilter ? [currentFilter] : []);
  }

  const filteredCourses = courses.filter((course) => {
    const subjectMatch =
      selectedSubjects.length === 0 ||
      selectedSubjects.includes(course.category);

    const durationMatch =
      selectedDurations.length === 0 ||
      selectedDurations.includes(course.duration);

    return subjectMatch && durationMatch;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-black font-normal">
      <Breadcrumbs />

      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl mb-4">Courses We Offer</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Develop your skills and advance your career with our flexible, industry-led courses.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
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
                <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes("Career Tracks")}
                    onChange={(e) => {
                      setSelectedSubjects((prev) =>
                        e.target.checked
                          ? [...prev, "Career Tracks"]
                          : prev.filter(
                            (subject) => subject !== "Career Tracks",
                          ),
                      );
                    }}
                    className="h-4 w-4 accent-primary"
                  />
                  <span>Career Tracks</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes("Business Upskilling")}
                    onChange={(e) => {
                      setSelectedSubjects((prev) =>
                        e.target.checked
                          ? [...prev, "Business Upskilling"]
                          : prev.filter(
                            (subject) => subject !== "Business Upskilling",
                          ),
                      );
                    }}
                    className="h-4 w-4 accent-primary"
                  />
                  <span>Business Upskilling</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes("Women Empowerment")}
                    onChange={(e) => {
                      setSelectedSubjects((prev) =>
                        e.target.checked
                          ? [...prev, "Women Empowerment"]
                          : prev.filter(
                            (subject) => subject !== "Women Empowerment",
                          ),
                      );
                    }}
                    className="h-4 w-4 accent-primary"
                  />
                  <span>Women Empowerment</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes("Senior Citizens")}
                    onChange={(e) => {
                      setSelectedSubjects((prev) =>
                        e.target.checked
                          ? [...prev, "Senior Citizens"]
                          : prev.filter(
                            (subject) => subject !== "Senior Citizens",
                          ),
                      );
                    }}
                    className="h-4 w-4 accent-primary"
                  />
                  <span>Senior Citizens</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes("School Education")}
                    onChange={(e) => {
                      setSelectedSubjects((prev) =>
                        e.target.checked
                          ? [...prev, "School Education"]
                          : prev.filter(
                            (subject) => subject !== "School Education",
                          ),
                      );
                    }}
                    className="h-4 w-4 accent-primary"
                  />
                  <span>School Education</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes("Children & Teens")}
                    onChange={(e) => {
                      setSelectedSubjects((prev) =>
                        e.target.checked
                          ? [...prev, "Children & Teens"]
                          : prev.filter(
                            (subject) => subject !== "Children & Teens",
                          ),
                      );
                    }}
                    className="h-4 w-4 accent-primary"
                  />
                  <span>Children & Teens</span>
                </label>
              </div>
            </div>

            {/* Duration */}
            <div className="mb-8">
              <h3 className="mb-3">Duration</h3>

              <div className="space-y-3 text-sm text-gray-700">
                <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                  <input
                    type="checkbox"
                    checked={selectedDurations.includes("6 weeks")}
                    onChange={(e) => {
                      setSelectedDurations((prev) =>
                        e.target.checked
                          ? [...prev, "6 weeks"]
                          : prev.filter((duration) => duration !== "6 weeks"),
                      );
                    }}
                    className="h-4 w-4 accent-primary"
                  />
                  <span>6 weeks</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                  <input
                    type="checkbox"
                    checked={selectedDurations.includes("8 weeks")}
                    onChange={(e) => {
                      setSelectedDurations((prev) =>
                        e.target.checked
                          ? [...prev, "8 weeks"]
                          : prev.filter((duration) => duration !== "8 weeks"),
                      );
                    }}
                    className="h-4 w-4 accent-primary"
                  />
                  <span>8 weeks</span>
                </label>
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedSubjects.length > 0 || selectedDurations.length > 0) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedSubjects([]);
                  setSelectedDurations([]);
                }}
                className="text-sm text-[#00beb2] hover:underline"
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
              className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col group cursor-pointer"
            >
              <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs text-primary uppercase tracking-wider mb-2 block">
                    {course.category}
                  </span>

                  <h3 className="text-xl mb-3 group-hover:underline decoration-primary decoration-2 underline-offset-4">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6">
                    Gain the fundamental skills required to thrive in modern
                    industry environments.
                  </p>
                </div>

                <div className="text-sm border-t border-gray-100 pt-4 flex justify-between items-center">
                  <div>
                    <span className="block text-gray-500 text-xs">
                      Next start date
                    </span>
                    {course.nextStartDate}
                  </div>

                  <div className="text-right">
                    <span className="block text-gray-500 text-xs">
                      Duration
                    </span>
                    {course.duration}
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {filteredCourses.length === 0 && (
            <div className="md:col-span-2 py-16 text-center">
              <h3 className="text-xl mb-2">No courses found</h3>

              <p className="text-gray-500 text-sm mb-6">
                Try changing or clearing your filters.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedSubjects([]);
                  setSelectedDurations([]);
                }}
                className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-[#00beb2] transition-colors"
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
