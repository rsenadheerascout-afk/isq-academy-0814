export interface Course {
  slug: string;
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
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
  relatedCourses: {
    title: string;
    image: string;
  }[];
}

export const courses: Course[] = [
  {
    slug: "compelling-communication",
    title: "Compelling Communication",
    description:
      "Develop practical communication skills to communicate clearly, confidently, and effectively in professional environments.",
    image: "/courses/communication.jpg",

    price: "US$500",
    duration: "6 weeks",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / online",

    lead: {
      name: "Course Instructor",
      role: "Communication & Professional Development Specialist",
      bio:
        "Learn from experienced professionals who bring practical communication strategies and real-world workplace experience to the course.",
      image: "/instructors/communication.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Effective communication is essential for building strong professional relationships and achieving results.",
          "This course develops practical communication skills that can be applied immediately in the workplace.",
        ],
      },
      {
        id: "modules",
        title: "Modules and assessment",
        content: [
          "Module 1: Foundations of effective communication",
          "Module 2: Communicating with confidence",
          "Module 3: Professional presentations and conversations",
          "Module 4: Practical communication assessment",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No prior technical knowledge is required.",
          "The course is suitable for professionals looking to improve their communication skills.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "Business Essentials for Workplace Readiness",
        image: "/courses/business-essentials.jpg",
      },
      {
        title: "Generative AI in Business",
        image: "/courses/generative-ai.jpg",
      },
    ],
  },

  {
    slug: "generative-ai-in-business",
    title: "Generative AI in Business",
    description:
      "Learn how to use generative AI tools to improve productivity, decision-making, and business workflows.",
    image: "/courses/generative-ai.jpg",

    price: "US$600",
    duration: "6 weeks",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / online",

    lead: {
      name: "Course Instructor",
      role: "AI & Digital Transformation Specialist",
      bio:
        "Learn practical approaches to using generative AI responsibly and effectively in modern business environments.",
      image: "/instructors/ai.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Generative AI is changing how organizations work, communicate, and make decisions.",
          "This course helps professionals understand and apply AI tools to real-world business problems.",
        ],
      },
      {
        id: "modules",
        title: "Modules and assessment",
        content: [
          "Module 1: Introduction to generative AI",
          "Module 2: AI tools for workplace productivity",
          "Module 3: Prompting and effective AI workflows",
          "Module 4: Responsible AI in business",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No previous AI experience is required.",
          "Basic computer literacy is recommended.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "Compelling Communication",
        image: "/courses/communication.jpg",
      },
      {
        title: "Business Essentials for Workplace Readiness",
        image: "/courses/business-essentials.jpg",
      },
    ],
  },

  {
    slug: "business-essentials",
    title: "Business Essentials for Workplace Readiness",
    description:
      "Gain essential business skills and knowledge to succeed in today's competitive workplace.",
    image: "/courses/business-essentials.jpg",

    price: "US$450",
    duration: "6 weeks",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / online",

    lead: {
      name: "Course Instructor",
      role: "Business & Professional Skills Specialist",
      bio:
        "Build practical workplace skills through real-world examples, guided learning, and applied activities.",
      image: "/instructors/business.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Develop the essential business knowledge and professional skills needed to succeed in today's workplace.",
          "The course combines practical learning with workplace-focused activities.",
        ],
      },
      {
        id: "modules",
        title: "Modules and assessment",
        content: [
          "Module 1: Understanding the modern workplace",
          "Module 2: Professional behaviour and communication",
          "Module 3: Business problem solving",
          "Module 4: Workplace readiness assessment",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No previous business qualification is required.",
          "The course is suitable for students, graduates, and working professionals.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "Compelling Communication",
        image: "/courses/communication.jpg",
      },
      {
        title: "Generative AI in Business",
        image: "/courses/generative-ai.jpg",
      },
    ],
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}