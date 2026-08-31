export interface Course {
  slug: string;
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  category: string;
  nextStartDate: string;
  commitment: string;
  studyMode: string;

  lead: {
    name: string;
    role: string;
    bio: string;
    image?: string;
  };

  sections: {
    id: string;
    title: string;
    content: string[];
  }[];

  testimonials: CourseTestimonial[];

  relatedCourses: {
    title: string;
    image: string;
  }[];
}

export interface CourseTestimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
}
