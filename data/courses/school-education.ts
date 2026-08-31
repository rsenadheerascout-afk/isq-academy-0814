import { Course } from "../course-types";

export const schoolEducationCourses: Course[] = [
  {
    slug: "ol-ict",
    title: "O/L ICT",
    description:
      "Build a strong foundation in Information and Communication Technology for school examinations and practical digital skills.",
    image: "/courses/ol-ict.jpg",
    price: "Contact us",
    duration: "6 months",
    nextStartDate: "2026-10-01",
    category: "School Education",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / classroom",

    lead: {
      name: "Course Instructor",
      role: "ICT Education Specialist",
      bio:
        "Learn ICT concepts through structured lessons, practical exercises, examination preparation, and real-world applications.",
      image: "/instructors/ict.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "This programme provides a structured foundation in ICT concepts and practical digital skills for students preparing for O/L ICT.",
          "Students develop both theoretical understanding and practical confidence through guided activities.",
        ],
      },
      {
        id: "modules",
        title: "Modules and assessment",
        content: [
          "Module 1: Introduction to ICT",
          "Module 2: Computer systems and digital technology",
          "Module 3: Data representation and information",
          "Module 4: Networks and internet technologies",
          "Module 5: Productivity and digital applications",
          "Module 6: Practical ICT activities and examination preparation",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Suitable for students preparing for O/L ICT.",
          "Basic computer literacy is helpful but not essential.",
        ],
      },
    ],

    testimonials: [
      {
        id: "ol-ict-1",
        name: "Course Participant",
        role: "O/L Student",
        quote:
          "The lessons helped me understand ICT concepts more clearly and gave me more confidence with practical activities.",
      },
      {
        id: "ol-ict-2",
        name: "Course Participant",
        role: "School Student",
        quote:
          "The structured approach made it easier to prepare for examinations while improving my practical computer skills.",
      },
      {
        id: "ol-ict-3",
        name: "Course Participant",
        role: "O/L ICT Student",
        quote:
          "I found the practical exercises especially useful because they helped me connect what I learned in class with real computer tasks.",
      },
    ],

    relatedCourses: [
      {
        slug: "",
        title: "A/L ICT Pathway",
        image: "/courses/al-ict.jpg",
      },
      {
        slug: "",
        title: "Life Skills for Future Leaders",
        image: "/courses/life-skills.jpg",
      },
    ],
  },

  {
    slug: "al-ict",
    title: "A/L ICT Pathway",
    description:
      "Develop advanced ICT knowledge, problem-solving ability, programming fundamentals, and examination readiness for A/L students.",
    image: "/courses/al-ict.jpg",
    price: "Contact us",
    duration: "12 months",
    nextStartDate: "2026-10-01",
    category: "School Education",
    commitment: "6–8 hours per week",
    studyMode: "Tutor guided / classroom",

    lead: {
      name: "Course Instructor",
      role: "ICT & Software Development Educator",
      bio:
        "A structured pathway combining ICT theory, practical activities, programming fundamentals, database concepts, and examination preparation.",
      image: "/instructors/ict.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "The A/L ICT Pathway prepares students for advanced ICT learning while developing practical technology skills.",
          "Students work through theoretical concepts alongside practical exercises and problem-solving activities.",
        ],
      },
      {
        id: "modules",
        title: "Modules and assessment",
        content: [
          "Module 1: Information systems",
          "Module 2: Programming fundamentals",
          "Module 3: Data structures and algorithms",
          "Module 4: Database systems",
          "Module 5: Networking and web technologies",
          "Module 6: Practical projects and examination preparation",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Designed for A/L ICT students.",
          "Basic computer knowledge is recommended.",
        ],
      },
    ],

    testimonials: [
      {
        id: "al-ict-1",
        name: "Course Participant",
        role: "A/L ICT Student",
        quote:
          "The programme helped me understand difficult ICT concepts while giving me practical experience with programming and databases.",
      },
      {
        id: "al-ict-2",
        name: "Course Participant",
        role: "A/L Student",
        quote:
          "The combination of theory, practical exercises, and examination preparation made my ICT studies much more organized.",
      },
      {
        id: "al-ict-3",
        name: "Course Participant",
        role: "A/L ICT Student",
        quote:
          "I became more confident solving ICT problems and applying programming concepts to practical situations.",
      },
    ],

    relatedCourses: [
      {
        slug: "",
        title: "O/L ICT",
        image: "/courses/ol-ict.jpg",
      },
      {
        slug: "",
        title: "Software Engineering Foundation",
        image: "/courses/software-engineering.jpg",
      },
    ],
  },

  {
    slug: "pearson-ict",
    title: "Pearson ICT",
    description:
      "Develop internationally relevant ICT knowledge and practical digital skills through a structured Pearson-focused learning pathway.",
    image: "/courses/pearson-ict.jpg",
    price: "Contact us",
    duration: "6 months",
    nextStartDate: "2026-10-01",
    category: "School Education",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "ICT Education Specialist",
      bio:
        "Build practical ICT knowledge through structured learning, guided exercises, and project-based activities.",
      image: "/instructors/ict.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "This pathway introduces learners to practical ICT concepts and digital technologies through structured learning.",
          "The programme focuses on developing transferable technology skills alongside academic understanding.",
        ],
      },
      {
        id: "modules",
        title: "Modules and assessment",
        content: [
          "Module 1: Digital technology fundamentals",
          "Module 2: Computer systems",
          "Module 3: Digital applications",
          "Module 4: Networks and online technologies",
          "Module 5: Digital projects",
          "Module 6: Assessment and practical preparation",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Suitable for students following a Pearson ICT pathway.",
          "Basic computer literacy is recommended.",
        ],
      },
    ],

    testimonials: [
      {
        id: "pearson-ict-1",
        name: "Course Participant",
        role: "Pearson ICT Student",
        quote:
          "The course gave me a clear understanding of ICT concepts while allowing me to develop practical digital skills.",
      },
      {
        id: "pearson-ict-2",
        name: "Course Participant",
        role: "Student",
        quote:
          "The guided exercises helped me understand how the technology I study is applied in real-world situations.",
      },
      {
        id: "pearson-ict-3",
        name: "Course Participant",
        role: "ICT Student",
        quote:
          "The structured learning approach made it easier to stay focused and build confidence with different ICT applications.",
      },
    ],

    relatedCourses: [
      {
        slug: "",
        title: "Cambridge ICT",
        image: "/courses/cambridge-ict.jpg",
      },
      {
        slug: "",
        title: "O/L ICT",
        image: "/courses/ol-ict.jpg",
      },
    ],
  },

  {
    slug: "cambridge-ict",
    title: "Cambridge ICT",
    description:
      "Build ICT knowledge and practical digital capabilities through a structured Cambridge-focused learning pathway.",
    image: "/courses/cambridge-ict.jpg",
    price: "Contact us",
    duration: "6 months",
    nextStartDate: "2026-10-01",
    category: "School Education",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "ICT Education Specialist",
      bio:
        "Develop practical technology skills and conceptual understanding through guided learning and project-based exercises.",
      image: "/instructors/ict.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "This programme supports students following a Cambridge ICT pathway with structured theoretical and practical learning.",
          "Students develop digital skills through hands-on activities and guided projects.",
        ],
      },
      {
        id: "modules",
        title: "Modules and assessment",
        content: [
          "Module 1: ICT systems and concepts",
          "Module 2: Data and information",
          "Module 3: Digital applications",
          "Module 4: Networks and internet technologies",
          "Module 5: Practical ICT projects",
          "Module 6: Examination and assessment preparation",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Suitable for students following a Cambridge ICT programme.",
          "Basic computer literacy is recommended.",
        ],
      },
    ],

    testimonials: [
      {
        id: "cambridge-ict-1",
        name: "Course Participant",
        role: "Cambridge ICT Student",
        quote:
          "The practical projects helped me understand ICT concepts beyond the textbook and apply them with greater confidence.",
      },
      {
        id: "cambridge-ict-2",
        name: "Course Participant",
        role: "Student",
        quote:
          "The course provided a good balance between theory and practical learning, which made studying ICT much more engaging.",
      },
      {
        id: "cambridge-ict-3",
        name: "Course Participant",
        role: "ICT Student",
        quote:
          "I especially appreciated the structured approach to assessment preparation and practical ICT activities.",
      },
    ],

    relatedCourses: [
      {
        slug: "",
        title: "Pearson ICT",
        image: "/courses/pearson-ict.jpg",
      },
      {
        slug: "",
        title: "A/L ICT Pathway",
        image: "/courses/al-ict.jpg",
      },
    ],
  },

];
