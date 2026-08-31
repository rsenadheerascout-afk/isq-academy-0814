import type { Course } from "./course-types";

import { childrenTeensCourses } from "./courses/children-teens";
import { schoolEducationCourses } from "./courses/school-education";
import { careerTracksCourses } from "./courses/career-tracks";
import { womenEmpowermentCourses } from "./courses/women-empowerment";
import { seniorCitizensCourses } from "./courses/senior-citizens";
import { businessUpskillingCourses } from "./courses/business-upskilling";
import { existingProfessionalCourses } from "./courses/existing-professional";

export const courses: Course[] = [
  ...childrenTeensCourses,
  ...schoolEducationCourses,
  ...careerTracksCourses,
  ...womenEmpowermentCourses,
  ...seniorCitizensCourses,
  ...businessUpskillingCourses,
  ...existingProfessionalCourses,
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}