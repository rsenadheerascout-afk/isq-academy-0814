import { Course } from "../course-types";

export const existingProfessionalCourses: Course[] = [
  {
    slug: "compelling-communication",
    title: "Compelling Communication",
    description:
      "Develop practical communication skills to communicate clearly, confidently, and effectively in professional environments.",
    image: "/courses/communication.jpg",
    price: "LKR 5000",
    duration: "6 weeks",
    nextStartDate: "2026-11-08",
    category: "Business Upskilling",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / Self-paced",

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

    testimonials: [
      {
        id: "compelling-communication-1",
        name: "Course Participant",
        role: "Business Professional",
        quote:
          "The course helped me communicate my ideas more clearly and confidently in meetings, presentations, and everyday workplace conversations.",
        image: "/testimonials/communication-stud.jpg",
      },
      {
        id: "compelling-communication-2",
        name: "Course Participant",
        role: "Team Leader",
        quote:
          "The practical communication techniques helped me become more confident when speaking with colleagues and stakeholders.",
      },
      {
        id: "compelling-communication-3",
        name: "Course Participant",
        role: "Professional",
        quote:
          "I particularly valued the practical exercises because I could immediately apply what I learned in my workplace.",
      },
    ],

    relatedCourses: [
      {
        slug: "",
        title: "Business Essentials for Workplace Readiness",
        image: "/courses/business-essentials.jpg",
      },
      {
        slug: "",
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
    nextStartDate: "2026-10-01",
    category: "Business Upskilling",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / Self-paced",

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

    testimonials: [
      {
        id: "business-essentials-1",
        name: "Course Participant",
        role: "Graduate",
        quote:
          "The course helped me understand how businesses operate and gave me practical skills that I can apply in the workplace.",
      },
      {
        id: "business-essentials-2",
        name: "Course Participant",
        role: "Working Professional",
        quote:
          "The workplace-focused activities helped me become more confident in professional communication and problem solving.",
      },
      {
        id: "business-essentials-3",
        name: "Course Participant",
        role: "Career Starter",
        quote:
          "The programme gave me a clearer understanding of professional expectations and helped me prepare for the workplace.",
      },
    ],

    relatedCourses: [
      {
        slug: "",
        title: "Compelling Communication",
        image: "/courses/communication.jpg",
      },
      {
        slug: "",
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
    nextStartDate: "2026-10-01",
    category: "Business Upskilling",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / Self-paced",

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

    testimonials: [
      {
        id: "business-essentials-1",
        name: "Course Participant",
        role: "Graduate",
        quote:
          "The course helped me understand how businesses operate and gave me practical skills that I can apply in the workplace.",
      },
      {
        id: "business-essentials-2",
        name: "Course Participant",
        role: "Working Professional",
        quote:
          "The workplace-focused activities helped me become more confident in professional communication and problem solving.",
      },
      {
        id: "business-essentials-3",
        name: "Course Participant",
        role: "Career Starter",
        quote:
          "The programme gave me a clearer understanding of professional expectations and helped me prepare for the workplace.",
      },
    ],

    relatedCourses: [
      {
        slug: "",
        title: "Compelling Communication",
        image: "/courses/communication.jpg",
      },
      {
        slug: "",
        title: "Generative AI in Business",
        image: "/courses/generative-ai.jpg",
      },
    ],
  },

  {
    slug: "esg-risk",
    title: "ESG Risk Management",
    description:
      "Understand environmental, social, and governance risks and how organizations can identify, assess, and manage them.",
    image: "/courses/esg-risk.jpg",
    price: "Contact us",
    duration: "8 weeks",
    nextStartDate: "2026-10-01",
    category: "Business Upskilling",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / Self-paced",

    lead: {
      name: "Course Instructor",
      role: "ESG & Risk Management Specialist",
      bio:
        "Develop practical understanding of ESG concepts, organizational risk, stakeholder expectations, and responsible business practices.",
      image: "/instructors/esg.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Environmental, social, and governance considerations increasingly influence business decisions and organizational risk.",
          "This course introduces practical approaches for understanding and managing ESG-related risks.",
        ],
      },
      {
        id: "modules",
        title: "Modules and assessment",
        content: [
          "Module 1: ESG fundamentals",
          "Module 2: Environmental risks",
          "Module 3: Social risks and stakeholder considerations",
          "Module 4: Governance and organizational responsibility",
          "Module 5: ESG risk identification and assessment",
          "Module 6: ESG risk management planning",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Suitable for business professionals, managers, and graduates.",
          "No previous ESG qualification is required.",
        ],
      },
    ],

    testimonials: [
      {
        id: "esg-risk-1",
        name: "Course Participant",
        role: "Business Professional",
        quote:
          "The programme gave me a practical understanding of ESG risks and how they can affect organizational decision-making.",
      },
      {
        id: "esg-risk-2",
        name: "Course Participant",
        role: "Risk Professional",
        quote:
          "The structured approach helped me understand how environmental, social, and governance factors can be identified and assessed.",
      },
      {
        id: "esg-risk-3",
        name: "Course Participant",
        role: "Business Manager",
        quote:
          "I found the practical risk-management exercises particularly useful for connecting ESG concepts with real organizational challenges.",
      },
    ],

    relatedCourses: [
      {
        slug: "",
        title: "Business Essentials for Workplace Readiness",
        image: "/courses/business-essentials.jpg",
      },
      {
        slug: "",
        title: "Digital Transformation Programs",
        image: "/courses/digital-transformation.jpg",
      },
    ],
  },
]