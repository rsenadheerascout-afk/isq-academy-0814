import { Course } from "../course-types";

export const foundationProgramsCourses: Course[] = [
  {
    slug: "diploma-in-ict",
    title: "Diploma in ICT (DICT)",
    description:
      "Job-ready for entry-level ICT support, junior technical, or administrative-tech roles — and set up to progress directly into our Career Accelerator tracks or university-level computing.",
    image: "/courses/diploma-in-ict.jpg",
    price: "Contact us",
    duration: "6 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "ICT & Computing Fundamentals Specialist",
      bio: "Empowering students with foundational technical, networking, and productivity skills for academic and workplace success.",
      image: "/instructors/ict-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Essential computing skills form the backbone of modern business operations and higher technical education.",
          "This program provides a comprehensive grounding in computer systems, basic software engineering concepts, digital security, and core workplace software.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Academy Diploma on completion, plus a foundation that satisfies prerequisites for our advanced Career Accelerator programs.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Computer systems & networks",
          "Office & productivity software",
          "Introductory programming",
          "Digital communication tools",
          "Basic troubleshooting",
          "Workplace digital etiquette",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No prior computing experience required.",
          "Basic interest in technology and problem-solving.",
        ],
      },
    ],

    testimonials: [
      {
        id: "dict-1",
        name: "Course Participant",
        role: "ICT Student",
        quote:
          "The program gave me a solid technical foundation. I went from having basic computer knowledge to troubleshooting systems confidently.",
      },
    ],
    relatedCourses: [
      {
        slug: "programming-fundamentals-1-2",
        title: "Programming Fundamentals I & II",
        image: "/courses/programming-fundamentals.jpg",
      },
      {
        slug: "cybersecurity-foundations",
        title: "Cybersecurity Foundations",
        image: "/courses/cybersecurity-foundations.jpg",
      },
    ],
  },
  {
    slug: "programming-fundamentals-1-2",
    title: "Programming Fundamentals I & II",
    description:
      "Confident writing and reading real code — ready for university computing courses or an entry point into our Full-Stack Web Development tracks.",
    image: "/courses/programming-fundamentals.jpg",
    price: "Contact us",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Software Engineering Lead",
      bio: "Specializes in building robust programming logic, algorithms, and practical code structures for beginner engineers.",
      image: "/instructors/programming-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Mastering computational thinking and core syntax opens doors across every technology field.",
          "This course walks students through variables, logical execution, problem breakdown, debugging, and building algorithmic scripts.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Certificate of Completion; portfolio of small coding projects to show at university or job interviews.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Programming logic & control structures",
          "Variables, functions & data structures",
          "Problem-solving with code",
          "Intro to at least one modern language",
          "Debugging basics",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic computer operational skills.",
          "Analytical mindset and curiosity for problem solving.",
        ],
      },
    ],

    testimonials: [
      {
        id: "pf-1",
        name: "Course Participant",
        role: "Junior Developer",
        quote:
          "Breaking down algorithms step-by-step made learning to code much less intimidating. Highly practical lessons!",
      },
    ],
    relatedCourses: [
      {
        slug: "diploma-in-ict",
        title: "Diploma in ICT (DICT)",
        image: "/courses/diploma-in-ict.jpg",
      },
      {
        slug: "data-science-foundations",
        title: "Data Science Foundations",
        image: "/courses/data-science-foundations.jpg",
      },
    ],
  },
  {
    slug: "3d-printing-vr-ar",
    title: "3D Printing, Virtual & Augmented Reality",
    description:
      "Equipped to work with the tools reshaping design, manufacturing, and immersive media — an early foothold in the growing spatial computing and additive manufacturing job market.",
    image: "/courses/3d-printing-vr-ar.jpg",
    price: "Contact us",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / hands-on lab",

    lead: {
      name: "Course Instructor",
      role: "Spatial Computing & Prototyping Specialist",
      bio: "Focuses on additive manufacturing, 3D spatial modeling, and immersive interactive software design.",
      image: "/instructors/3d-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Immersive media and 3D prototyping are transforming engineering, healthcare, and product design.",
          "Learn how to create 3D models, operate additive manufacturing printers, and develop basic augmented/virtual reality interactions.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Certificate of Completion; a physical/digital prototype portfolio piece.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "3D modeling basics",
          "Additive manufacturing workflow",
          "AR/VR platforms & devices",
          "Prototyping principles",
          "Hands-on print and build projects",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Familiarity with standard computer operation.",
          "No prior 3D modeling experience needed.",
        ],
      },
    ],

    testimonials: [
      {
        id: "3d-1",
        name: "Course Participant",
        role: "Hardware Enthusiast",
        quote:
          "Seeing my digital 3D model come to life on a physical 3D printer was an amazing experience.",
      },
    ],
    relatedCourses: [
      {
        slug: "graphic-design-ui-ux-foundations",
        title: "Graphic Design & UI/UX Foundations",
        image: "/courses/graphic-design-ui-ux.jpg",
      },
    ],
  },
  {
    slug: "spoken-english-it-essentials",
    title: "Spoken English & IT Essentials",
    description:
      "Able to communicate confidently in English in professional and academic settings, backed by solid everyday IT skills — the two most-cited gaps employers report in entry-level hires.",
    image: "/courses/spoken-english-it.jpg",
    price: "Contact us",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "Professional Communications Trainer",
      bio: "Dedicated to helping students master workplace English, articulate ideas clearly, and adopt digital tools.",
      image: "/instructors/english-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Effective verbal communication paired with tech proficiency bridges the gap to entry-level career success.",
          "This practical course focuses on conversation, formal correspondence, presentation skills, and standard workplace software.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Certificate of Completion recognized across our academy's professional programs.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Workplace spoken English & interview skills",
          "Email & professional writing",
          "Core computer literacy",
          "Common software tools",
          "Digital communication etiquette",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: ["Basic understanding of spoken and written English."],
      },
    ],

    testimonials: [
      {
        id: "english-1",
        name: "Course Participant",
        role: "Student",
        quote:
          "My interview confidence skyrocketed after doing the mock presentations and professional email writing exercises.",
      },
    ],
    relatedCourses: [
      {
        slug: "life-employability-skills",
        title: "Life & Employability Skills",
        image: "/courses/life-employability.jpg",
      },
    ],
  },
  {
    slug: "digital-marketing-foundations",
    title: "Digital Marketing Foundations",
    description:
      "Able to run a basic digital marketing campaign — a skill in demand from every small business to global brand, and a strong freelancing entry point.",
    image: "/courses/digital-marketing.jpg",
    price: "Contact us",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Digital Marketing Strategist",
      bio: "Experienced brand strategist specializing in audience acquisition, SEO, paid social campaigns, and growth analytics.",
      image: "/instructors/marketing-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Modern marketing relies heavily on digital distribution, targeted campaigns, and data analytics.",
          "Learn how to build digital marketing strategies, manage channels, track metrics, and optimize conversions.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Certificate of Completion; a mini-campaign case study for your portfolio.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Social media marketing basics",
          "Search & content fundamentals",
          "Audience targeting",
          "Basic analytics & reporting",
          "Campaign planning",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: ["No marketing experience necessary. Basic computer skills needed."],
      },
    ],

    testimonials: [
      {
        id: "dm-1",
        name: "Course Participant",
        role: "Freelance Marketer",
        quote:
          "Designing an actual ad campaign in the practical project gave me real work to show to clients right away.",
      },
    ],
    relatedCourses: [
      {
        slug: "business-startup-entrepreneurship",
        title: "Business Startup & Entrepreneurship",
        image: "/courses/business-startup.jpg",
      },
    ],
  },
  {
    slug: "life-employability-skills",
    title: "Life & Employability Skills",
    description:
      "Interview-ready with the communication, teamwork, and workplace-readiness skills employers consistently rank above technical skills for entry-level hires.",
    image: "/courses/life-employability.jpg",
    price: "Contact us",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / interactive workshops",

    lead: {
      name: "Course Instructor",
      role: "Career Readiness Coach",
      bio: "Focuses on workplace psychology, soft-skill development, professional etiquette, and interview techniques.",
      image: "/instructors/career-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Technical capability gets you interviews, but interpersonal skills land and keep jobs.",
          "Develop strong time management habits, conflict resolution tactics, CV creation skills, and high workplace professionalism.",
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
          "Communication & teamwork",
          "Time management",
          "Workplace professionalism",
          "Interview & CV skills",
          "Problem-solving under pressure",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: ["Open to all students preparing to enter the professional job market."],
      },
    ],

    testimonials: [
      {
        id: "life-1",
        name: "Course Participant",
        role: "Job Seeker",
        quote:
          "The CV rewriting session and mock interview prep completely transformed my job application strategy.",
      },
    ],
    relatedCourses: [
      {
        slug: "spoken-english-it-essentials",
        title: "Spoken English & IT Essentials",
        image: "/courses/spoken-english-it.jpg",
      },
    ],
  },
  {
    slug: "graphic-design-ui-ux-foundations",
    title: "Graphic Design & UI/UX Foundations",
    description:
      "Able to design and present real visual and interface work — a foundation for design careers or a direct route into our full UI/UX Design career track.",
    image: "/courses/graphic-design-ui-ux.jpg",
    price: "Contact us",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Visual & Interface Designer",
      bio: "Passionate about typography, layout geometry, digital branding, and user interface fundamentals.",
      image: "/instructors/design.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Aesthetic understanding combined with user-centered thinking forms the core of modern product design.",
          "Learn visual composition, wireframing tools, color theory, and user journey mapping to start your creative design portfolio.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: ["Certificate of Completion; a starter design portfolio."],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Design principles & visual theory",
          "Industry design tools",
          "Wireframing & prototyping basics",
          "User experience fundamentals",
          "Portfolio piece development",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic digital skills.",
          "An eye for visual detail and creativity.",
        ],
      },
    ],

    testimonials: [
      {
        id: "design-1",
        name: "Course Participant",
        role: "Design Beginner",
        quote:
          "Learning wireframing and basic design principles gave me the exact foundation I needed to start creating web layouts.",
      },
    ],
    relatedCourses: [
      {
        slug: "3d-printing-vr-ar",
        title: "3D Printing, Virtual & Augmented Reality",
        image: "/courses/3d-printing-vr-ar.jpg",
      },
    ],
  },
  {
    slug: "cybersecurity-foundations",
    title: "Cybersecurity Foundations",
    description:
      "Conversant in core security concepts and threats — the entry point into one of the fastest-growing, highest-demand tech fields, and a direct feeder into our full Cybersecurity career track.",
    image: "/courses/cybersecurity-foundations.jpg",
    price: "Contact us",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Cybersecurity & Defense Specialist",
      bio: "Focuses on threat mitigation, system defense, network security protocols, and security awareness training.",
      image: "/instructors/security-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Protecting digital assets, data integrity, and system infrastructure is critical in today's threat environment.",
          "This program covers core security principles, common attack vectors, defensive best practices, and network threat awareness.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Certificate of Completion; prerequisite pathway into our Cybersecurity & AI Threat Intelligence career track.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Core security concepts",
          "Common threats & attack types",
          "Security best practices",
          "Intro to networks & systems security",
          "Security mindset & awareness",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: ["Basic understanding of operating systems and networking concepts."],
      },
    ],

    testimonials: [
      {
        id: "cyber-1",
        name: "Course Participant",
        role: "IT Assistant",
        quote:
          "It completely changed how I look at everyday system vulnerabilities and network security protocols.",
      },
    ],
    relatedCourses: [
      {
        slug: "diploma-in-ict",
        title: "Diploma in ICT (DICT)",
        image: "/courses/diploma-in-ict.jpg",
      },
    ],
  },
  {
    slug: "ai-literacy",
    title: "AI Literacy",
    description:
      "Able to use today's AI tools effectively, responsibly, and confidently — a baseline skill now expected across almost every modern job, regardless of field.",
    image: "/courses/ai-literacy.jpg",
    price: "Contact us",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "3–5 hours per week",
    studyMode: "Tutor guided / practical workshops",

    lead: {
      name: "Course Instructor",
      role: "AI & Automation Consultant",
      bio: "Educating professionals and students on practical generative AI integration, prompt engineering, and ethical AI execution.",
      image: "/instructors/ai-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Generative AI tools are reshaping productivity across all industries.",
          "Learn how modern large language models work, master prompt engineering techniques, and apply AI tools responsibly to optimize daily work.",
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
          "How modern AI tools actually work",
          "Prompt writing & effective use",
          "Responsible & ethical AI use",
          "Applying AI to study, work & everyday tasks",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: ["General computer literacy and web browsing knowledge."],
      },
    ],

    testimonials: [
      {
        id: "ai-1",
        name: "Course Participant",
        role: "Operations Specialist",
        quote:
          "Learning systematic prompt engineering saved me hours of repetitive work every week.",
      },
    ],
    relatedCourses: [
      {
        slug: "data-science-foundations",
        title: "Data Science Foundations",
        image: "/courses/data-science-foundations.jpg",
      },
    ],
  },
  {
    slug: "data-science-foundations",
    title: "Data Science Foundations",
    description:
      "Able to read, interpret, and present data-driven insights — the first step toward one of the highest-paid, most in-demand tech career paths.",
    image: "/courses/data-science-foundations.jpg",
    price: "Contact us",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Data Analyst & Educator",
      bio: "Specializes in data visualization, statistical analysis, and transforming raw datasets into actionable insights.",
      image: "/instructors/data-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Data-driven decision making is an essential core skill across business, tech, and research domains.",
          "Understand how to structure raw data, analyze trends using spreadsheet tools, apply introductory statistics, and build visual dashboards.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Certificate of Completion; direct pathway into our full Data Science & Analytics career track.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Data fundamentals & types",
          "Data visualization basics",
          "Introductory statistics",
          "Spreadsheet & data tool skills",
          "Intro to data-driven thinking",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: ["Basic math/algebra skills and computer literacy."],
      },
    ],

    testimonials: [
      {
        id: "data-1",
        name: "Course Participant",
        role: "Junior Analyst",
        quote:
          "The practical approach to building visual dashboards made complex analytical concepts easy to understand.",
      },
    ],
    relatedCourses: [
      {
        slug: "programming-fundamentals-1-2",
        title: "Programming Fundamentals I & II",
        image: "/courses/programming-fundamentals.jpg",
      },
      {
        slug: "ai-literacy",
        title: "AI Literacy",
        image: "/courses/ai-literacy.jpg",
      },
    ],
  },
  {
    slug: "business-startup-entrepreneurship",
    title: "Business Startup & Entrepreneurship",
    description:
      "Equipped with the practical basics to test and launch your own business idea.",
    image: "/courses/business-startup.jpg",
    price: "Contact us",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Foundation Programs",
    commitment: "4–6 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "Startup Advisor & Founder",
      bio: "Guides early-stage entrepreneurs through business model validation, lean startup execution, and financial budgeting.",
      image: "/instructors/business-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Turning an innovative idea into a viable business requires strategic planning and disciplined execution.",
          "This course covers customer validation, lean business modeling, financial budgeting, and introductory sales strategies for founders.",
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
          "Idea validation",
          "Basic business planning",
          "Budgeting fundamentals",
          "Intro to marketing & sales for founders",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: ["An entrepreneurial interest or business concept in mind."],
      },
    ],

    testimonials: [
      {
        id: "biz-1",
        name: "Course Participant",
        role: "Startup Founder",
        quote:
          "Validating my business idea before spending capital saved me months of wasted effort.",
      },
    ],
    relatedCourses: [
      {
        slug: "digital-marketing-foundations",
        title: "Digital Marketing Foundations",
        image: "/courses/digital-marketing.jpg",
      },
    ],
  },
];