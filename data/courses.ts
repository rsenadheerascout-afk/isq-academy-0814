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

  relatedCourses: {
    title: string;
    image: string;
  }[];
}

export const courses: Course[] = [

  // CHILDREN & TEENS
  {
    slug: "life-skills",
    title: "Life Skills for Future Leaders",
    description:
      "Develop confidence, communication, teamwork, problem-solving, digital responsibility, and leadership skills for school and future life.",
    image: "/courses/life-skills.jpg",
    price: "Contact us",
    duration: "8 weeks",
    nextStartDate: "2026-10-01",
    category: "Children & Teens",
    commitment: "2–4 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "Youth Development & Leadership Specialist",
      bio:
        "A practical learning experience designed to help young learners develop confidence, communication, teamwork, decision-making, and responsible digital habits.",
      image: "/instructors/life-skills.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Young people need more than academic knowledge to succeed in a rapidly changing world.",
          "This course develops practical life and leadership skills through activities, discussions, teamwork, presentations, and real-world scenarios.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: Self-awareness and confidence",
          "Module 2: Communication and active listening",
          "Module 3: Teamwork and collaboration",
          "Module 4: Problem solving and decision making",
          "Module 5: Digital responsibility and online safety",
          "Module 6: Leadership and future readiness",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Suitable for school-age learners.",
          "No previous technical knowledge is required.",
          "Learners should be willing to participate in practical activities and group discussions.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "O/L ICT",
        image: "/courses/ol-ict.jpg",
      },
      {
        title: "AI for Everyday Life",
        image: "/courses/ai-everyday.jpg",
      },
    ],
  },

  // SCHOOL EDUCATION
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

    relatedCourses: [
      {
        title: "A/L ICT Pathway",
        image: "/courses/al-ict.jpg",
      },
      {
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

    relatedCourses: [
      {
        title: "O/L ICT",
        image: "/courses/ol-ict.jpg",
      },
      {
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

    relatedCourses: [
      {
        title: "Cambridge ICT",
        image: "/courses/cambridge-ict.jpg",
      },
      {
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

    relatedCourses: [
      {
        title: "Pearson ICT",
        image: "/courses/pearson-ict.jpg",
      },
      {
        title: "A/L ICT Pathway",
        image: "/courses/al-ict.jpg",
      },
    ],
  },

  // CAREER TRACKS
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

  // WOMEN EMPOWERMENT
  {
    slug: "cyber-security",
    title: "Women in Cyber Security",
    description:
      "Build foundational cybersecurity knowledge and practical digital security skills while exploring career opportunities in cybersecurity.",
    image: "/courses/cyber-security.jpg",
    price: "Contact us",
    duration: "10 weeks",
    nextStartDate: "2026-10-01",
    category: "Women Empowerment",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "Cybersecurity Specialist",
      bio:
        "Develop practical cybersecurity awareness and foundational technical knowledge through guided exercises and real-world scenarios.",
      image: "/instructors/cybersecurity.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Cybersecurity is an increasingly important field with diverse career opportunities.",
          "This programme introduces practical security concepts while helping learners understand pathways into the cybersecurity profession.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: Cybersecurity fundamentals",
          "Module 2: Online threats and attack techniques",
          "Module 3: Passwords, authentication, and access control",
          "Module 4: Network and application security",
          "Module 5: Security awareness and incident response",
          "Module 6: Cybersecurity careers and practical activities",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No previous cybersecurity experience is required.",
          "Basic computer literacy is recommended.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "DevSecOps with AI",
        image: "/courses/devsecops.jpg",
      },
      {
        title: "AI for Women Professionals",
        image: "/courses/ai-professionals.jpg",
      },
    ],
  },

  {
    slug: "entrepreneurship",
    title: "Digital Entrepreneurship for Women",
    description:
      "Learn how to use digital tools, online platforms, AI, and modern business practices to build and grow entrepreneurial opportunities.",
    image: "/courses/entrepreneurship.jpg",
    price: "Contact us",
    duration: "8 weeks",
    category: "Women Empowerment",
    nextStartDate: "2026-10-01",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "Digital Entrepreneurship Specialist",
      bio:
        "Learn practical approaches to developing digital business ideas, building an online presence, reaching customers, and using technology effectively.",
      image: "/instructors/business.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Digital platforms provide new opportunities for entrepreneurs to create, market, and grow businesses.",
          "This programme provides practical guidance for turning ideas into digitally enabled business opportunities.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: Entrepreneurial mindset",
          "Module 2: Identifying digital business opportunities",
          "Module 3: Business models and value propositions",
          "Module 4: Digital marketing",
          "Module 5: AI and productivity tools",
          "Module 6: Building a practical business plan",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No previous business qualification is required.",
          "Suitable for aspiring and existing women entrepreneurs.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "AI for Women Professionals",
        image: "/courses/ai-professionals.jpg",
      },
      {
        title: "Women Leadership Through Technology",
        image: "/courses/leadership.jpg",
      },
    ],
  },

  {
    slug: "ai-professionals",
    title: "AI for Women Professionals",
    description:
      "Learn how modern AI tools can improve productivity, research, communication, analysis, and professional workflows.",
    image: "/courses/ai-professionals.jpg",
    price: "Contact us",
    duration: "6 weeks",
    nextStartDate: "2026-10-01",
    category: "Women Empowerment",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "AI & Digital Productivity Specialist",
      bio:
        "Explore practical and responsible ways to integrate AI into everyday professional tasks and workflows.",
      image: "/instructors/ai.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "AI tools are becoming part of everyday professional work.",
          "This course focuses on practical applications of AI for productivity, communication, research, analysis, and professional development.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: Understanding modern AI",
          "Module 2: Effective prompting",
          "Module 3: AI for communication and content",
          "Module 4: AI for research and analysis",
          "Module 5: AI productivity workflows",
          "Module 6: Responsible and ethical AI usage",
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
        title: "Generative AI in Business",
        image: "/courses/generative-ai.jpg",
      },
      {
        title: "Digital Entrepreneurship for Women",
        image: "/courses/entrepreneurship.jpg",
      },
    ],
  },

  {
    slug: "leadership",
    title: "Women Leadership Through Technology",
    description:
      "Develop leadership, digital decision-making, communication, and technology skills for modern professional environments.",
    image: "/courses/leadership.jpg",
    price: "Contact us",
    duration: "8 weeks",
    nextStartDate: "2026-10-01",
    category: "Women Empowerment",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "Leadership & Digital Transformation Specialist",
      bio:
        "Develop leadership capabilities while learning how technology and data can support modern decision-making.",
      image: "/instructors/leadership.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Modern leadership increasingly requires confidence with digital technologies and data-driven decision making.",
          "This programme combines leadership development with practical digital skills.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: Leadership foundations",
          "Module 2: Communication and influence",
          "Module 3: Digital decision making",
          "Module 4: Technology-enabled teams",
          "Module 5: AI and modern leadership",
          "Module 6: Personal leadership development plan",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Suitable for professionals and aspiring leaders.",
          "No technical background is required.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "AI for Women Professionals",
        image: "/courses/ai-professionals.jpg",
      },
      {
        title: "Digital Entrepreneurship for Women",
        image: "/courses/entrepreneurship.jpg",
      },
    ],
  },

  // SENIOR CITIZENS
  {
    slug: "digital-confidence",
    title: "Digital Confidence for Seniors",
    description:
      "Build confidence using computers, smartphones, digital services, communication tools, and everyday online platforms.",
    image: "/courses/digital-confidence.jpg",
    price: "Contact us",
    duration: "6 weeks",
    nextStartDate: "2026-10-01",
    category: "Senior Citizens",
    commitment: "2–4 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "Digital Literacy Educator",
      bio:
        "A supportive, practical programme designed to help senior learners use digital technology with greater confidence and independence.",
      image: "/instructors/digital-literacy.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Digital services are increasingly part of everyday life.",
          "This programme provides patient, practical guidance for seniors who want to become more confident using everyday technology.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: Understanding computers and smartphones",
          "Module 2: Managing files and applications",
          "Module 3: Email and digital communication",
          "Module 4: Online services",
          "Module 5: Digital safety",
          "Module 6: Everyday digital practice",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No previous technical knowledge is required.",
          "Learners may use their own smartphone or computer during practical sessions.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "Smartphone Essentials",
        image: "/courses/smartphone-essentials.jpg",
      },
      {
        title: "Safe Internet Usage",
        image: "/courses/safe-internet.jpg",
      },
    ],
  },

  {
    slug: "smartphone-essentials",
    title: "Smartphone Essentials",
    description:
      "Learn how to confidently use smartphone features, applications, communication tools, photos, settings, and essential digital services.",
    image: "/courses/smartphone-essentials.jpg",
    price: "Contact us",
    duration: "4 weeks",
    nextStartDate: "2026-10-01",
    category: "Senior Citizens",
    commitment: "2–3 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "Digital Literacy Educator",
      bio:
        "Practical smartphone training focused on everyday tasks, communication, safety, and confidence.",
      image: "/instructors/digital-literacy.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Smartphones can simplify communication, information access, entertainment, and everyday services.",
          "This course helps learners understand and confidently use the essential features of modern smartphones.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: Smartphone basics",
          "Module 2: Calls, contacts, and messaging",
          "Module 3: Camera and photo management",
          "Module 4: Useful applications",
          "Module 5: Settings and privacy",
          "Module 6: Safe smartphone usage",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Learners should bring their own smartphone where possible.",
          "No previous smartphone training is required.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "Digital Confidence for Seniors",
        image: "/courses/digital-confidence.jpg",
      },
      {
        title: "Safe Internet Usage",
        image: "/courses/safe-internet.jpg",
      },
    ],
  },

  {
    slug: "safe-internet",
    title: "Safe Internet Usage",
    description:
      "Learn practical online safety habits including recognizing scams, protecting accounts, managing privacy, and using online services safely.",
    image: "/courses/safe-internet.jpg",
    price: "Contact us",
    duration: "4 weeks",
    nextStartDate: "2026-10-01",
    category: "Senior Citizens",
    commitment: "2–3 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "Digital Safety Specialist",
      bio:
        "Learn practical techniques for identifying online risks and protecting personal information while using digital services.",
      image: "/instructors/cybersecurity.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Safe internet usage is increasingly important as more everyday activities move online.",
          "This course focuses on practical digital safety habits that learners can apply immediately.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: Understanding online risks",
          "Module 2: Passwords and account security",
          "Module 3: Recognizing scams and phishing",
          "Module 4: Privacy and personal information",
          "Module 5: Safe online shopping and services",
          "Module 6: Responding to suspicious activity",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No technical background is required.",
          "Basic smartphone or computer familiarity is helpful.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "Smartphone Essentials",
        image: "/courses/smartphone-essentials.jpg",
      },
      {
        title: "AI for Everyday Life",
        image: "/courses/ai-everyday.jpg",
      },
    ],
  },

  {
    slug: "ai-everyday",
    title: "AI for Everyday Life",
    description:
      "Discover practical ways AI tools can support everyday tasks, information discovery, communication, learning, and productivity.",
    image: "/courses/ai-everyday.jpg",
    price: "Contact us",
    duration: "4 weeks",
    nextStartDate: "2026-10-01",
    category: "Senior Citizens",
    commitment: "2–3 hours per week",
    studyMode: "Tutor guided / practical",

    lead: {
      name: "Course Instructor",
      role: "AI & Digital Literacy Educator",
      bio:
        "An approachable introduction to practical AI tools and responsible everyday use.",
      image: "/instructors/ai.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "AI tools can assist with many everyday tasks when used carefully and responsibly.",
          "This programme introduces practical examples of AI that are accessible to everyday users.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: What is AI?",
          "Module 2: Asking AI useful questions",
          "Module 3: AI for information and learning",
          "Module 4: AI for communication and everyday tasks",
          "Module 5: Privacy and responsible AI use",
          "Module 6: Practical everyday AI activities",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No previous AI knowledge is required.",
          "Basic smartphone or computer familiarity is helpful.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "Safe Internet Usage",
        image: "/courses/safe-internet.jpg",
      },
      {
        title: "Digital Confidence for Seniors",
        image: "/courses/digital-confidence.jpg",
      },
    ],
  },

  // BUSINESS UPSKILLING
  {
    slug: "ai-productivity",
    title: "AI Productivity for Teams",
    description:
      "Help teams use AI tools to improve productivity, communication, research, documentation, and everyday workflows.",
    image: "/courses/ai-productivity.jpg",
    price: "Contact us",
    duration: "6 weeks",
    nextStartDate: "2026-10-01",
    category: "Business Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / workplace focused",

    lead: {
      name: "Course Instructor",
      role: "AI & Business Productivity Specialist",
      bio:
        "Learn practical ways teams can integrate AI into everyday workflows while maintaining responsible usage and human oversight.",
      image: "/instructors/ai.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "AI can help teams reduce repetitive work, improve communication, organize information, and accelerate knowledge work.",
          "This programme focuses on practical workplace applications rather than purely theoretical AI concepts.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: AI in modern workplaces",
          "Module 2: Prompting and AI-assisted workflows",
          "Module 3: AI for communication and documentation",
          "Module 4: AI for research and analysis",
          "Module 5: Team productivity workflows",
          "Module 6: Responsible AI adoption",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No technical AI background is required.",
          "Suitable for teams, managers, and knowledge workers.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "Generative AI in Business",
        image: "/courses/generative-ai.jpg",
      },
      {
        title: "Leadership in AI Era",
        image: "/courses/ai-leadership.jpg",
      },
    ],
  },

  {
    slug: "cyber-awareness",
    title: "Cyber Awareness Training",
    description:
      "Develop practical cybersecurity awareness and help employees recognize and respond to common digital security risks.",
    image: "/courses/cyber-awareness.jpg",
    price: "Contact us",
    duration: "4 weeks",
    nextStartDate: "2026-10-01",
    category: "Business Upskilling",
    commitment: "2–3 hours per week",
    studyMode: "Tutor guided / workplace focused",

    lead: {
      name: "Course Instructor",
      role: "Cybersecurity Awareness Specialist",
      bio:
        "Practical cybersecurity awareness training designed around common workplace risks and everyday employee behaviour.",
      image: "/instructors/cybersecurity.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Employees are an important part of an organization's cybersecurity strategy.",
          "This programme helps teams recognize common threats and develop safer digital habits.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: Cybersecurity fundamentals",
          "Module 2: Phishing and social engineering",
          "Module 3: Passwords and account security",
          "Module 4: Device and data protection",
          "Module 5: Safe email and internet usage",
          "Module 6: Incident reporting and response",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No technical cybersecurity background is required.",
          "Designed for employees and workplace teams.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "Women in Cyber Security",
        image: "/courses/cyber-security.jpg",
      },
      {
        title: "DevSecOps with AI",
        image: "/courses/devsecops.jpg",
      },
    ],
  },

  {
    slug: "digital-transformation",
    title: "Digital Transformation Programs",
    description:
      "Understand how organizations can use digital technologies, data, automation, and AI to improve business processes.",
    image: "/courses/digital-transformation.jpg",
    price: "Contact us",
    duration: "8 weeks",
    nextStartDate: "2026-10-01",
    category: "Business Upskilling",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / workplace focused",

    lead: {
      name: "Course Instructor",
      role: "Digital Transformation Specialist",
      bio:
        "Explore practical approaches to identifying digital opportunities and planning technology-enabled improvements within organizations.",
      image: "/instructors/transformation.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Digital transformation is about more than adopting new software. It involves improving processes, people, customer experiences, and decision-making through technology.",
          "This programme introduces practical approaches for planning and implementing digital transformation initiatives.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: Digital transformation fundamentals",
          "Module 2: Process analysis and improvement",
          "Module 3: Data and digital decision making",
          "Module 4: Automation and AI",
          "Module 5: Digital customer experiences",
          "Module 6: Transformation roadmap development",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Suitable for managers, professionals, and business teams.",
          "No advanced technical background is required.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "AI Productivity for Teams",
        image: "/courses/ai-productivity.jpg",
      },
      {
        title: "Leadership in AI Era",
        image: "/courses/ai-leadership.jpg",
      },
    ],
  },

  {
    slug: "ai-leadership",
    title: "Leadership in AI Era",
    description:
      "Develop the knowledge and strategic thinking required to lead teams and organizations through AI-driven change.",
    image: "/courses/ai-leadership.jpg",
    price: "Contact us",
    duration: "8 weeks",
    nextStartDate: "2026-10-01",
    category: "Business Upskilling",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / workplace focused",

    lead: {
      name: "Course Instructor",
      role: "AI Strategy & Leadership Specialist",
      bio:
        "Explore how leaders can understand AI opportunities, manage change, support teams, and make responsible technology decisions.",
      image: "/instructors/leadership.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "AI is changing how organizations operate, compete, and make decisions.",
          "This programme helps leaders understand AI opportunities and challenges while developing practical strategies for responsible adoption.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Module 1: AI and the changing workplace",
          "Module 2: AI opportunities for organizations",
          "Module 3: Leading AI-enabled teams",
          "Module 4: Change management",
          "Module 5: Responsible and ethical AI",
          "Module 6: Developing an AI adoption roadmap",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Designed for managers, team leaders, business professionals, and decision makers.",
          "No technical AI background is required.",
        ],
      },
    ],

    relatedCourses: [
      {
        title: "Generative AI in Business",
        image: "/courses/generative-ai.jpg",
      },
      {
        title: "Digital Transformation Programs",
        image: "/courses/digital-transformation.jpg",
      },
    ],
  },

  // EXISTING PROFESSIONAL COURSES
  {
    slug: "compelling-communication",
    title: "Compelling Communication",
    description:
      "Develop practical communication skills to communicate clearly, confidently, and effectively in professional environments.",
    image: "/courses/communication.jpg",
    price: "US$500",
    duration: "6 weeks",
    nextStartDate: "2026-10-01",
    category: "Business Upskilling",
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
    nextStartDate: "2026-10-01",
    category: "Business Upskilling",
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
    nextStartDate: "2026-10-01",
    category: "Business Upskilling",
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
    studyMode: "Tutor guided / online",

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

    relatedCourses: [
      {
        title: "Business Essentials for Workplace Readiness",
        image: "/courses/business-essentials.jpg",
      },
      {
        title: "Digital Transformation Programs",
        image: "/courses/digital-transformation.jpg",
      },
    ],
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}