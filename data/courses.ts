import type { Course } from "./course-types";

import {foundationProgramsCourses} from "@/data/courses/foundation-programs"
import { careerAcceleratorCourses } from "./courses/career-accelerator";
import { digitalInclusionCourses } from "./courses/digital-inclusion";
import { professionalUpskillingCourses } from "./courses/professional-upskilling";
import { youngInnovatorsCourses } from "./courses/young-innovators";

export const courses: Course[] = [
  ...foundationProgramsCourses,
  ...careerAcceleratorCourses,
  ...digitalInclusionCourses,
  ...professionalUpskillingCourses,
  ...youngInnovatorsCourses,
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}