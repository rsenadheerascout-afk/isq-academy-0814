import { Course } from "../course-types";

export const careerTracksCourses: Course[] = [
      {
    slug: "ai-full-stack",
    title: "AI Full-Stack Developer",
    description:
      "Build modern full-stack applications while learning how AI can be integrated into software development workflows.",
    image: "/courses/ai-full-stack.jpg",
    price: "Contact us",
    duration: "6 months",
    nextStartDate: "2026-10-01",
    category: "Career Tracks",
    commitment: "8–12 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Full-Stack & AI Development Specialist",
      bio:
        "Learn modern application development through practical projects covering frontend, backend, databases, APIs, deployment, and AI integration.",
      image: "/instructors/development.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Modern software developers increasingly work across frontend, backend, cloud, and AI technologies.",
          "This pathway introduces learners to the complete software development workflow through practical projects.",
        ],
      },
      {
        id: "modules",
        title: "Modules and projects",
        content: [
          "Module 1: Web development foundations",
          "Module 2: Modern frontend development",
          "Module 3: Backend and REST APIs",
          "Module 4: Databases and authentication",
          "Module 5: AI integration and intelligent applications",
          "Module 6: Deployment and production workflows",
          "Module 7: Capstone application",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic programming knowledge is recommended.",
          "Learners should have access to a computer suitable for development work.",
        ],
      },
    ],

    testimonials: [
      {
        id: "ai-full-stack-1",
        name: "Course Participant",
        role: "Aspiring Software Developer",
        quote:
          "The project-based approach helped me understand how frontend, backend, databases, and APIs work together in a real application.",
      },
      {
        id: "ai-full-stack-2",
        name: "Course Participant",
        role: "Junior Developer",
        quote:
          "Learning how to integrate AI into full-stack applications gave me a much better understanding of modern software development.",
      },
      {
        id: "ai-full-stack-3",
        name: "Course Participant",
        role: "Technology Professional",
        quote:
          "The practical projects helped me connect individual development concepts into a complete software development workflow.",
      },
    ],

    relatedCourses: [
      {
        title: "Software Engineering Foundation",
        image: "/courses/software-engineering.jpg",
      },
      {
        title: "DevSecOps with AI",
        image: "/courses/devsecops.jpg",
      },
    ],
  },

  {
    slug: "ui-ux",
    title: "UI/UX Designer",
    description:
      "Learn user research, information architecture, interface design, prototyping, design systems, and usability principles.",
    image: "/courses/ui-ux.jpg",
    price: "Contact us",
    duration: "4 months",
    nextStartDate: "2026-10-01",
    category: "Career Tracks",
    commitment: "6–8 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "UI/UX & Product Design Specialist",
      bio:
        "Develop practical design skills through research, wireframing, prototyping, visual design, usability testing, and portfolio projects.",
      image: "/instructors/design.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Good digital products combine usability, visual communication, accessibility, and business objectives.",
          "This programme introduces the complete UI/UX design workflow from research to high-fidelity prototypes.",
        ],
      },
      {
        id: "modules",
        title: "Modules and projects",
        content: [
          "Module 1: UX fundamentals and user research",
          "Module 2: User journeys and information architecture",
          "Module 3: Wireframing",
          "Module 4: UI design and visual systems",
          "Module 5: Prototyping and interaction design",
          "Module 6: Usability testing",
          "Module 7: Portfolio project",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No professional design experience is required.",
          "Basic computer literacy is recommended.",
        ],
      },
    ],

    testimonials: [
      {
        id: "ui-ux-1",
        name: "Course Participant",
        role: "Aspiring UI/UX Designer",
        quote:
          "The course helped me understand the design process from user research and wireframes through to prototypes and usability testing.",
      },
      {
        id: "ui-ux-2",
        name: "Course Participant",
        role: "Junior Designer",
        quote:
          "I became much more confident creating user-focused designs and explaining the decisions behind my design choices.",
      },
      {
        id: "ui-ux-3",
        name: "Course Participant",
        role: "Design Student",
        quote:
          "The portfolio project gave me practical experience that I could use to demonstrate my skills beyond theoretical knowledge.",
      },
    ],

    relatedCourses: [
      {
        title: "AI Full-Stack Developer",
        image: "/courses/ai-full-stack.jpg",
      },
      {
        title: "Software Engineering Foundation",
        image: "/courses/software-engineering.jpg",
      },
    ],
  },

  {
    slug: "devsecops",
    title: "DevSecOps with AI",
    description:
      "Learn modern software delivery, automation, cloud workflows, security practices, and AI-assisted DevSecOps techniques.",
    image: "/courses/devsecops.jpg",
    price: "Contact us",
    duration: "5 months",
    nextStartDate: "2026-10-01",
    category: "Career Tracks",
    commitment: "8–10 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "DevOps & Cybersecurity Specialist",
      bio:
        "Develop practical experience with development pipelines, automation, infrastructure, security controls, monitoring, and modern AI-assisted workflows.",
      image: "/instructors/devops.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "DevSecOps brings development, operations, automation, and security together into a continuous delivery workflow.",
          "This course introduces practical tools and workflows used to build and deliver software securely.",
        ],
      },
      {
        id: "modules",
        title: "Modules and projects",
        content: [
          "Module 1: DevOps fundamentals",
          "Module 2: Git and collaborative development",
          "Module 3: CI/CD pipelines",
          "Module 4: Containers and deployment",
          "Module 5: Application security",
          "Module 6: Monitoring and automation",
          "Module 7: AI-assisted DevSecOps workflows",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic software development or IT knowledge is recommended.",
          "Learners should be comfortable using a computer and command-line tools.",
        ],
      },
    ],

    testimonials: [
      {
        id: "devsecops-1",
        name: "Course Participant",
        role: "IT Professional",
        quote:
          "The course gave me a much clearer understanding of how development, deployment, automation, and security fit together.",
      },
      {
        id: "devsecops-2",
        name: "Course Participant",
        role: "Software Developer",
        quote:
          "The practical approach to CI/CD, containers, and security helped me understand modern software delivery much better.",
      },
      {
        id: "devsecops-3",
        name: "Course Participant",
        role: "Technology Professional",
        quote:
          "I found the AI-assisted workflows particularly useful for understanding how modern tools can support DevSecOps practices.",
      },
    ],

    relatedCourses: [
      {
        title: "AI Full-Stack Developer",
        image: "/courses/ai-full-stack.jpg",
      },
      {
        title: "Software Engineering Foundation",
        image: "/courses/software-engineering.jpg",
      },
    ],
  },

  {
    slug: "software-engineering",
    title: "Software Engineering Foundation",
    description:
      "Build a strong foundation in software engineering principles, programming, databases, APIs, version control, testing, and development workflows.",
    image: "/courses/software-engineering.jpg",
    price: "Contact us",
    duration: "6 months",
    nextStartDate: "2026-10-01",
    category: "Career Tracks",
    commitment: "8–10 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Software Engineering Specialist",
      bio:
        "Learn the foundations of professional software development through structured technical learning and practical projects.",
      image: "/instructors/development.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "A strong engineering foundation helps developers understand not only how to write code but how to design, test, maintain, and deliver software.",
          "This programme introduces learners to the core practices used in professional software development.",
        ],
      },
      {
        id: "modules",
        title: "Modules and projects",
        content: [
          "Module 1: Programming fundamentals",
          "Module 2: Object-oriented programming",
          "Module 3: Databases and SQL",
          "Module 4: Web applications and APIs",
          "Module 5: Git and collaborative development",
          "Module 6: Testing and debugging",
          "Module 7: Software engineering project",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No professional software engineering experience is required.",
          "Basic computer literacy is recommended.",
        ],
      },
    ],

    testimonials: [
      {
        id: "software-engineering-1",
        name: "Course Participant",
        role: "Aspiring Software Engineer",
        quote:
          "The programme gave me a strong foundation in programming, databases, APIs, testing, and the practices used by professional developers.",
      },
      {
        id: "software-engineering-2",
        name: "Course Participant",
        role: "Junior Developer",
        quote:
          "I became much more confident not only writing code but also understanding how software should be tested, maintained, and delivered.",
      },
      {
        id: "software-engineering-3",
        name: "Course Participant",
        role: "Technology Student",
        quote:
          "The practical project helped me bring together everything I learned and approach software development in a more structured way.",
      },
    ],

    relatedCourses: [
      {
        title: "AI Full-Stack Developer",
        image: "/courses/ai-full-stack.jpg",
      },
      {
        title: "DevSecOps with AI",
        image: "/courses/devsecops.jpg",
      },
    ],
  },
]