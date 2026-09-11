import { Course } from "../course-types";

export const professionalUpskillingCourses: Course[] = [
  {
    slug: "ai-for-working-professionals",
    title: "AI for Working Professionals",
    description:
      "Able to use AI tools daily to save hours of routine work and make faster, better-informed decisions at your job.",
    image: "/courses/ai-for-working-professionals.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "AI Productivity & Automation Specialist",
      bio: "Helping working professionals leverage generative AI tools to streamline workplace workflows and boost daily productivity.",
      image: "/instructors/ai-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Artificial Intelligence is rapidly changing how daily professional work gets done across every industry.",
          "This course provides practical, hands-on techniques for applying modern generative AI tools to automate routine tasks, draft communications, analyze data, and accelerate problem-solving.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Practical AI tools for everyday tasks",
          "Prompt writing for real work scenarios",
          "Workflow automation basics",
          "Responsible AI use at work",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic computer literacy and web browsing experience.",
          "No prior coding or AI knowledge required.",
        ],
      },
    ],

    testimonials: [
      {
        id: "ai-wp-1",
        name: "Course Participant",
        role: "Operations Manager",
        quote:
          "The practical prompt engineering techniques immediately saved me hours on weekly reporting and email drafts.",
      },
    ],

    relatedCourses: [
      {
        slug: "ai-for-business-entrepreneurs-and-managers",
        title: "AI for Business (Entrepreneurs & Managers)",
        image: "/courses/ai-for-business-entrepreneurs-and-managers.jpg",
      },
    ],
  },
  {
    slug: "ai-for-business-entrepreneurs-and-managers",
    title: "AI for Business (Entrepreneurs & Managers)",
    description:
      "Able to apply AI strategically across operations, marketing, and decision-making — not just as a tool user but as a business leader who knows where AI creates real advantage.",
    image: "/courses/ai-for-business-entrepreneurs-and-managers.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "Business Strategy & AI Integration Lead",
      bio: "Advising enterprise leaders and founders on deploying artificial intelligence for market growth and operational efficiency.",
      image: "/instructors/business-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Integrating AI into business operations is no longer optional for forward-thinking leadership.",
          "Learn how to identify high-ROI AI use cases, evaluate implementation strategies, optimize marketing and customer insights, and manage organizational AI adoption safely.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "AI in business strategy",
          "Operational efficiency use cases",
          "AI-driven marketing & customer insight",
          "Practical implementation roadmap",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic understanding of business operations or management concepts.",
        ],
      },
    ],

    testimonials: [
      {
        id: "ai-biz-1",
        name: "Course Participant",
        role: "Startup Founder",
        quote:
          "This course helped us build a realistic AI implementation roadmap that cut our customer support response times significantly.",
      },
    ],

    relatedCourses: [
      {
        slug: "ai-for-working-professionals",
        title: "AI for Working Professionals",
        image: "/courses/ai-for-working-professionals.jpg",
      },
      {
        slug: "business-startup-and-entrepreneurship",
        title: "Business Startup & Entrepreneurship",
        image: "/courses/business-startup-and-entrepreneurship.jpg",
      },
    ],
  },
  {
    slug: "ai-for-teachers-and-people-in-academia",
    title: "AI for Teachers & People in Academia",
    description:
      "Confident integrating AI into teaching, research, and administration — ahead of the curve as institutions adopt AI-based tools system-wide.",
    image: "/courses/ai-for-teachers-and-people-in-academia.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "EdTech & Academic Innovation Consultant",
      bio: "Specializing in pedagogical technology integration, academic integrity policies, and AI-assisted educational design.",
      image: "/instructors/academic-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Educational institutions and research environments are being rapidly transformed by artificial intelligence.",
          "Explore how to generate engaging curriculum materials, leverage AI for research synthesis, address academic integrity, and design classroom activities that prepare students for an AI-driven world.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "AI tools for lesson planning & content",
          "AI in research & assessment",
          "Academic integrity & responsible use",
          "Classroom-ready applications",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Background in teaching, academic research, or educational administration.",
        ],
      },
    ],

    testimonials: [
      {
        id: "ai-edu-1",
        name: "Course Participant",
        role: "Educator",
        quote:
          "Designing AI-assisted lesson plans saved me hours of prep time while helping me proactively address academic integrity with my students.",
      },
    ],

    relatedCourses: [
      {
        slug: "ai-for-working-professionals",
        title: "AI for Working Professionals",
        image: "/courses/ai-for-working-professionals.jpg",
      },
    ],
  },
  {
    slug: "cybersecurity-industry-certification",
    title: "Cybersecurity Industry Certification",
    description:
      "Able to spot and avoid the everyday security risks responsible for most workplace breaches — the single most cost-effective security investment any employee can make.",
    image: "/courses/cybersecurity-awareness.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Cybersecurity Defense Specialist",
      bio: "Focusing on threat awareness, network hygiene, social engineering prevention, and corporate risk reduction.",
      image: "/instructors/security-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Human error and social engineering remain the leading causes of security breaches in modern organizations.",
          "This course delivers essential knowledge to identify phishing attempts, secure accounts, protect sensitive data, and maintain safe security habits in workplace environments.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Phishing & social engineering awareness",
          "Password & account security",
          "Safe device & data practices",
          "Workplace security policy basics",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic computer operation and familiarity with workplace digital tools.",
        ],
      },
    ],

    testimonials: [
      {
        id: "sec-1",
        name: "Course Participant",
        role: "IT Support Technician",
        quote:
          "Crucial practical training for recognizing social engineering tactics and safeguarding internal company networks.",
      },
    ],

    relatedCourses: [
      {
        slug: "digital-navigator",
        title: "Digital Navigator",
        image: "/courses/digital-navigator.jpg",
      },
    ],
  },
  {
    slug: "digital-navigator",
    title: "Digital Navigator",
    description:
      "Confident and self-sufficient navigating everyday digital platforms, services, and tools required in modern work and life.",
    image: "/courses/digital-navigator.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "Digital Literacy Facilitator",
      bio: "Empowering learners to build digital confidence, navigate cloud services, and manage workplace technology efficiently.",
      image: "/instructors/digital-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Navigating digital environments effectively is fundamental for success in any modern role.",
          "Gain confidence with cloud tools, online collaboration suites, digital safety protocols, and basic technical troubleshooting.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Core digital platforms & services",
          "Online safety basics",
          "Digital communication tools",
          "Troubleshooting everyday tech issues",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: ["No prior technical background required."],
      },
    ],

    testimonials: [
      {
        id: "dn-1",
        name: "Course Participant",
        role: "Administrative Assistant",
        quote:
          "I gained so much confidence navigating cloud storage and new collaboration platforms at my office.",
      },
    ],

    relatedCourses: [
      {
        slug: "professional-communication-and-teamwork",
        title: "Professional Communication & Teamwork",
        image: "/courses/professional-communication-and-teamwork.jpg",
      },
    ],
  },
  {
    slug: "business-startup-and-entrepreneurship",
    title: "Business Startup & Entrepreneurship",
    description:
      "Ready to plan and launch a business idea with a practical, tested framework rather than guesswork.",
    image: "/courses/business-startup-and-entrepreneurship.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "Startup Advisor & Venture Mentor",
      bio: "Guiding early-stage founders through product-market fit, practical business planning, and lean launching strategies.",
      image: "/instructors/business-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Launching a successful venture requires structured planning and market validation.",
          "This program covers market research, business model canvas design, essential budgeting, and targeted launch marketing strategies.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Idea validation & market research",
          "Business planning essentials",
          "Budgeting & basic finance",
          "Launch & marketing fundamentals",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "An entrepreneurial mindset or a business idea you wish to develop.",
        ],
      },
    ],

    testimonials: [
      {
        id: "bs-1",
        name: "Course Participant",
        role: "Small Business Owner",
        quote:
          "The market validation exercises saved me from making costly mistakes before launching my main service line.",
      },
    ],

    relatedCourses: [
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        image: "/courses/digital-marketing.jpg",
      },
      {
        slug: "financial-literacy-and-digital-finance-tools",
        title: "Financial Literacy & Digital Finance Tools",
        image: "/courses/financial-literacy-and-digital-finance-tools.jpg",
      },
    ],
  },
  {
    slug: "professional-communication-and-teamwork",
    title: "Professional Communication & Teamwork",
    description:
      "A stronger communicator and collaborator — consistently the top soft-skill gap managers report in performance reviews.",
    image: "/courses/professional-communication-and-teamwork.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "Workplace Dynamics Coach",
      bio: "Specializing in interpersonal communication, team alignment, constructive feedback, and conflict resolution.",
      image: "/instructors/career-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Strong communication and collaborative abilities are essential for career growth and organizational performance.",
          "Develop practical tools for clear workplace interactions, managing conflict constructively, collaborating across remote or hybrid teams, and delivering actionable feedback.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Workplace communication skills",
          "Conflict resolution",
          "Team collaboration practices",
          "Giving & receiving feedback",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Open to all professionals seeking to improve workplace interactions.",
        ],
      },
    ],

    testimonials: [
      {
        id: "pct-1",
        name: "Course Participant",
        role: "Project Coordinator",
        quote:
          "The conflict resolution techniques completely changed how I approach challenging discussions in team meetings.",
      },
    ],

    relatedCourses: [
      {
        slug: "professional-english",
        title: "Professional English",
        image: "/courses/professional-english.jpg",
      },
      {
        slug: "life-skills",
        title: "Life Skills",
        image: "/courses/life-skills.jpg",
      },
    ],
  },
  {
    slug: "professional-english",
    title: "Professional English",
    description:
      "Able to write and speak with the clarity and confidence expected in professional and client-facing settings.",
    image: "/courses/professional-english.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "Corporate Communications Trainer",
      bio: "Helping professionals refine business English, hone presentation clarity, and write polished correspondence.",
      image: "/instructors/english-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Polished English communication opens doors in international and corporate business environments.",
          "Master formal email etiquette, clear business report writing, professional meeting dialogue, and impactful presentation techniques.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Business writing & email etiquette",
          "Presentation & meeting English",
          "Professional vocabulary",
          "Confident spoken communication",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: ["Intermediate knowledge of spoken and written English."],
      },
    ],

    testimonials: [
      {
        id: "pe-1",
        name: "Course Participant",
        role: "Account Executive",
        quote:
          "My business emails and client presentation slides became dramatically more concise and impactful.",
      },
    ],

    relatedCourses: [
      {
        slug: "professional-communication-and-teamwork",
        title: "Professional Communication & Teamwork",
        image: "/courses/professional-communication-and-teamwork.jpg",
      },
    ],
  },
  {
    slug: "financial-literacy-and-digital-finance-tools",
    title: "Financial Literacy & Digital Finance Tools",
    description:
      "Confident managing personal or business finances using modern digital finance tools, not just spreadsheets and guesswork.",
    image: "/courses/financial-literacy-and-digital-finance-tools.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "Financial Literacy & Fintech Advisor",
      bio: "Focusing on financial planning, personal budgeting, cash flow management, and modern fintech platforms.",
      image: "/instructors/finance-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Understanding key financial principles and leveraging modern fintech tools is vital for long-term growth.",
          "Learn practical budgeting, digital payment ecosystems, cash flow planning, and introductory investment concepts for personal and business contexts.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Personal & business budgeting",
          "Digital banking & finance tools",
          "Saving & investment basics",
          "Financial planning fundamentals",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: ["Basic numerical skills and interest in financial planning."],
      },
    ],

    testimonials: [
      {
        id: "fl-1",
        name: "Course Participant",
        role: "Freelancer",
        quote:
          "Learning how to track business cash flow with digital finance software was a game changer for my personal business.",
      },
    ],

    relatedCourses: [
      {
        slug: "business-startup-and-entrepreneurship",
        title: "Business Startup & Entrepreneurship",
        image: "/courses/business-startup-and-entrepreneurship.jpg",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Able to plan and run digital marketing activity that supports real business growth, whether for your employer or your own venture.",
    image: "/courses/digital-marketing.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Digital Growth Strategist",
      bio: "Specializing in search optimization, performance marketing, content strategy, and digital analytics.",
      image: "/instructors/marketing-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Targeted digital channels are essential for acquiring and retaining customers effectively.",
          "Master social media strategy, content marketing, audience segment targeting, basic search engine marketing, and campaign performance analytics.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Social & search marketing",
          "Content strategy",
          "Audience targeting & analytics",
          "Campaign planning & budgeting",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic computer skills and familiarity with social media platforms.",
        ],
      },
    ],

    testimonials: [
      {
        id: "dm-1",
        name: "Course Participant",
        role: "Marketing Assistant",
        quote:
          "The practical approach to campaign analytics gave me clear insights into optimizing our advertising spend.",
      },
    ],

    relatedCourses: [
      {
        slug: "business-startup-and-entrepreneurship",
        title: "Business Startup & Entrepreneurship",
        image: "/courses/business-startup-and-entrepreneurship.jpg",
      },
    ],
  },
  {
    slug: "life-skills",
    title: "Life Skills",
    description:
      "Equipped with practical personal-effectiveness skills that support both career growth and everyday life.",
    image: "/courses/life-skills.jpg",
    price: "Contact us",
    duration: "Short Course",
    nextStartDate: "2026-10-01",
    category: "Professional Upskilling",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "Personal Development Coach",
      bio: "Guiding individuals to develop resilience, goal-setting habits, stress management strategies, and practical problem-solving skills.",
      image: "/instructors/career-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Personal effectiveness skills form the bedrock for long-term career growth and personal satisfaction.",
          "Build skills in structured goal setting, stress management techniques, time prioritization frameworks, and active problem-solving strategies.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Time & stress management",
          "Communication & confidence",
          "Goal setting",
          "Problem-solving skills",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Open to all individuals seeking structured personal growth and self-management.",
        ],
      },
    ],

    testimonials: [
      {
        id: "ls-1",
        name: "Course Participant",
        role: "Young Professional",
        quote:
          "The time prioritization frameworks helped me manage my workload and eliminate daily stress.",
      },
    ],

    relatedCourses: [
      {
        slug: "professional-communication-and-teamwork",
        title: "Professional Communication & Teamwork",
        image: "/courses/professional-communication-and-teamwork.jpg",
      },
    ],
  },
];