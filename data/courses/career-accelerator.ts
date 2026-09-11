import { Course } from "../course-types";

export const careerAcceleratorCourses: Course[] = [
  {
    slug: "full-stack-web-development-react-track",
    title: "Full-Stack Web Development — React Track",
    description:
      "A job-ready front-to-back web developer able to build and deploy real applications using one of the most in-demand stacks in the industry — moving straight from training into a live internship placement.",
    image: "/courses/full-stack-web-development-react-track.jpg",
    price: "Contact us",
    duration: "6 Months + 3-Month Internship",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "8–10 hours per week",
    studyMode: "Tutor guided / project & internship based",

    lead: {
      name: "Course Instructor",
      role: "Lead Full-Stack Web Architect",
      bio: "Specializes in modern JavaScript, React ecosystem architecture, serverless backends, and full-stack software delivery.",
      image: "/instructors/react-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "React remains the standard framework for front-end web application development globally.",
          "This intensive track takes you from JavaScript fundamentals to full-stack application development, covering state management, REST APIs, database design, and automated testing.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Industry-aligned curriculum + guaranteed 3-month internship placement; a deployed project portfolio to show employers.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Modern JavaScript & React fundamentals",
          "Component-based front-end architecture",
          "Back-end APIs & databases",
          "Version control & deployment",
          "Real client-style project builds",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Completion of Programming Fundamentals or equivalent coding experience.",
          "Familiarity with HTML, CSS, and basic JavaScript concepts.",
        ],
      },
    ],

    testimonials: [
      {
        id: "react-1",
        name: "Course Participant",
        role: "Junior Full-Stack Engineer",
        quote:
          "The practical project build and subsequent internship placement gave me real-world experience that made all the difference in my career.",
      },
    ],

    relatedCourses: [
      {
        slug: "full-stack-web-development-dotnet-track",
        title: "Full-Stack Web Development — .NET Track",
        image: "/courses/full-stack-web-development-dotnet-track.jpg",
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        image: "/courses/ui-ux-design.jpg",
      },
    ],
  },
  {
    slug: "full-stack-web-development-dotnet-track",
    title: "Full-Stack Web Development — .NET Track",
    description:
      "An enterprise-ready full-stack developer skilled in the Microsoft technology stack widely used by banks, corporates, and government systems — with a direct route into a paid or unpaid internship.",
    image: "/courses/full-stack-web-development-dotnet-track.jpg",
    price: "Contact us",
    duration: "6 Months + 3-Month Internship",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "8–10 hours per week",
    studyMode: "Tutor guided / project & internship based",

    lead: {
      name: "Course Instructor",
      role: "Enterprise .NET Systems Architect",
      bio: "Focuses on enterprise application architecture, C#, ASP.NET Core APIs, and microservices design.",
      image: "/instructors/dotnet-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Enterprise platforms around the world rely on C# and .NET for scalable, secure back-end infrastructure.",
          "Learn to build resilient web APIs, connect structured relational databases, implement robust security patterns, and develop modern front-end interfaces.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Industry-aligned curriculum + guaranteed 3-month internship placement; a deployed project portfolio.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "C# & .NET fundamentals",
          "Enterprise application architecture",
          "Databases & APIs",
          "Version control & deployment",
          "Real project-based development",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Understanding of object-oriented programming fundamentals.",
          "Basic familiarity with database concepts.",
        ],
      },
    ],

    testimonials: [
      {
        id: "dotnet-1",
        name: "Course Participant",
        role: ".NET Software Developer",
        quote:
          "Mastering .NET architecture and entity frameworks opened opportunities for me in corporate software engineering teams.",
      },
    ],

    relatedCourses: [
      {
        slug: "full-stack-web-development-react-track",
        title: "Full-Stack Web Development — React Track",
        image: "/courses/full-stack-web-development-react-track.jpg",
      },
      {
        slug: "software-architecture-product-design",
        title: "Software Architecture & Product Design",
        image: "/courses/software-architecture-product-design.jpg",
      },
    ],
  },
  {
    slug: "cybersecurity-ai-threat-intelligence",
    title: "Cybersecurity & AI Threat Intelligence",
    description:
      "A security-ready professional trained not just in traditional defense but in how AI is changing both attacks and defenses — one of the fastest-growing specializations in the field.",
    image: "/courses/cybersecurity-ai-threat-intelligence.jpg",
    price: "Contact us",
    duration: "Basics → Industry Certification",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "6–8 hours per week",
    studyMode: "Tutor guided / hands-on lab",

    lead: {
      name: "Course Instructor",
      role: "Threat Intelligence & Cyber Defense Lead",
      bio: "Specializes in SOC operations, vulnerability assessment, threat modeling, and AI-driven security automation.",
      image: "/instructors/cyber-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Cyber threats are escalating in complexity as automated and AI-driven attack tools become widespread.",
          "This track equips you with practical threat intelligence skills, incident response tactics, machine-learning-enhanced security monitoring, and industry certification readiness.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Structured pathway to recognized industry certification; hands-on labs and simulated threat scenarios.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Network & systems security",
          "Threat detection & incident response",
          "AI-driven threat intelligence tools",
          "Security operations basics",
          "Industry certification exam preparation",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Solid understanding of computer networking protocols and operating system principles.",
        ],
      },
    ],

    testimonials: [
      {
        id: "threat-1",
        name: "Course Participant",
        role: "SOC Analyst",
        quote:
          "The simulated threat scenarios and focus on AI toolsets prepared me directly for industry certification and operational defense roles.",
      },
    ],

    relatedCourses: [
      {
        slug: "devsecops-cloud-security-ai-driven",
        title: "DevSecOps & Cloud Security (AI-Driven)",
        image: "/courses/devsecops-cloud-security-ai-driven.jpg",
      },
    ],
  },
  {
    slug: "data-science-analytics",
    title: "Data Science & Analytics",
    description:
      "A practicing data analyst/scientist able to clean, model, and present data to drive real decisions — one of the most consistently in-demand and highest-paid tech roles.",
    image: "/courses/data-science-analytics.jpg",
    price: "Contact us",
    duration: "Basics → Industry Certification",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "6–8 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Lead Data Scientist",
      bio: "Expert in statistical modeling, Python data stacks, predictive analytics, and enterprise data visualization.",
      image: "/instructors/data-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Data-driven decisions power modern competitive organizations.",
          "Master Python for data analysis, SQL database querying, statistical hypothesis testing, interactive dashboarding, and introductory machine learning algorithms.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Structured pathway to recognized industry certification; a portfolio of real analysis projects.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Python/statistics for data",
          "Data wrangling & visualization",
          "Machine learning fundamentals",
          "Real dataset projects",
          "Industry certification exam preparation",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic programming knowledge (Python preferred) and foundational mathematical/statistical literacy.",
        ],
      },
    ],

    testimonials: [
      {
        id: "ds-1",
        name: "Course Participant",
        role: "Data Analyst",
        quote:
          "Working with messy, real-world datasets helped me transition from theoretical knowledge to building actual business insights.",
      },
    ],

    relatedCourses: [
      {
        slug: "ai-machine-learning",
        title: "AI & Machine Learning",
        image: "/courses/ai-machine-learning.jpg",
      },
    ],
  },
  {
    slug: "ai-augmented-software-testing-qa",
    title: "AI-Augmented Software Testing & QA",
    description:
      "A quality assurance professional fluent in both classic QA discipline and the AI-driven testing tools now standard in modern development teams.",
    image: "/courses/ai-augmented-software-testing-qa.jpg",
    price: "Contact us",
    duration: "Basics → Industry Certification",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "6–8 hours per week",
    studyMode: "Tutor guided / hands-on lab",

    lead: {
      name: "Course Instructor",
      role: "QA Automation & Test Engineering Lead",
      bio: "Focuses on test automation frameworks, CI/CD regression testing, and AI-assisted bug detection.",
      image: "/instructors/qa-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Modern software quality assurance requires combining fundamental test strategies with automated, AI-driven validation tools.",
          "Learn test planning, automation frameworks, API testing, bug reporting, and leveraging generative AI to create test cases efficiently.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Structured pathway to recognized industry certification; hands-on automation project work.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Manual & automated testing fundamentals",
          "AI-assisted test automation tools",
          "Defect tracking & reporting",
          "QA in Agile teams",
          "Industry certification exam preparation",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic understanding of software development lifecycles and general computer proficiency.",
        ],
      },
    ],

    testimonials: [
      {
        id: "qa-1",
        name: "Course Participant",
        role: "QA Automation Engineer",
        quote:
          "Integrating AI tools into test generation doubled my testing speed and gave me a massive edge in team workflows.",
      },
    ],

    relatedCourses: [
      {
        slug: "it-project-management",
        title: "IT Project Management",
        image: "/courses/it-project-management.jpg",
      },
    ],
  },
  {
    slug: "it-project-management",
    title: "IT Project Management",
    description:
      "Able to plan, run, and deliver real technical projects — a role in constant demand as every company runs more of its work as digital projects.",
    image: "/courses/it-project-management.jpg",
    price: "Contact us",
    duration: "Basics → Industry Certification",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "5–7 hours per week",
    studyMode: "Tutor guided / workshop based",

    lead: {
      name: "Course Instructor",
      role: "Senior IT Project Program Director",
      bio: "Specializes in Agile/Scrum delivery frameworks, risk management, and digital transformation projects.",
      image: "/instructors/pm-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Delivering technology projects on time and within scope requires structured project management methodologies.",
          "Learn Agile, Scrum, and traditional project management frameworks, resource estimation, risk mitigation, and team leadership.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Structured pathway to recognized industry certification.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Agile & traditional project frameworks",
          "Planning & scheduling",
          "Stakeholder & risk management",
          "Project tools in practice",
          "Industry certification exam preparation",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Prior workplace experience or familiarity with general IT project lifecycle environments.",
        ],
      },
    ],

    testimonials: [
      {
        id: "pm-1",
        name: "Course Participant",
        role: "Associate Project Manager",
        quote:
          "The practical exposure to Agile sprint management and risk tracking helped me transition into a project lead role.",
      },
    ],

    relatedCourses: [
      {
        slug: "ai-augmented-software-testing-qa",
        title: "AI-Augmented Software Testing & QA",
        image: "/courses/ai-augmented-software-testing-qa.jpg",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "A professional-level product designer able to research, design, and prototype real digital products — ready to join a design team or freelance.",
    image: "/courses/ui-ux-design.jpg",
    price: "Contact us",
    duration: "Career Track",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "6–8 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Lead Product Designer & UX Researcher",
      bio: "Expert in user-centered product design, interactive prototyping, usability testing, and design systems.",
      image: "/instructors/ux-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "User experience and interface design directly drive product engagement and digital customer satisfaction.",
          "Master end-to-end design methodologies including user research, wireframing, high-fidelity Figma prototyping, micro-interactions, and usability testing.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Industry-aligned curriculum; a professional case-study portfolio.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "User research & testing",
          "Wireframing & prototyping",
          "Visual & interaction design",
          "Design systems",
          "Real client-style product projects",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic familiarity with design fundamentals or completion of graphic design introductory coursework.",
        ],
      },
    ],

    testimonials: [
      {
        id: "uiux-1",
        name: "Course Participant",
        role: "UI/UX Product Designer",
        quote:
          "Building a complete, end-to-end case study during the course gave me the confidence and portfolio needed for client interviews.",
      },
    ],

    relatedCourses: [
      {
        slug: "full-stack-web-development-react-track",
        title: "Full-Stack Web Development — React Track",
        image: "/courses/full-stack-web-development-react-track.jpg",
      },
    ],
  },
  {
    slug: "devsecops-cloud-security-ai-driven",
    title: "DevSecOps & Cloud Security (AI-Driven)",
    description:
      "A cloud and security professional able to build secure, automated infrastructure pipelines — one of the highest-paying and fastest-growing specializations as companies move critical systems to the cloud.",
    image: "/courses/devsecops-cloud-security-ai-driven.jpg",
    price: "Contact us",
    duration: "Basics → Industry Certification",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "6–8 hours per week",
    studyMode: "Tutor guided / hands-on lab",

    lead: {
      name: "Course Instructor",
      role: "Cloud Infrastructure & DevSecOps Lead",
      bio: "Focuses on cloud architecture, CI/CD security automation, infrastructure as code, and container security.",
      image: "/instructors/devsecops-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Modern cloud engineering demands integrating security practices directly into automated CI/CD deployment pipelines.",
          "Learn cloud platforms, container orchestration, automated security scanners, Infrastructure as Code (IaC), and AI-driven monitoring.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Structured pathway to recognized industry certification; hands-on cloud lab environments.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Cloud infrastructure fundamentals",
          "CI/CD pipelines",
          "Security automation & AI-driven tooling",
          "Cloud security best practices",
          "Industry certification exam preparation",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Experience with Linux environments, basic scripting, and fundamental networking knowledge.",
        ],
      },
    ],

    testimonials: [
      {
        id: "devsec-1",
        name: "Course Participant",
        role: "Cloud Security Engineer",
        quote:
          "The hands-on labs with automated security tooling in deployment pipelines gave me skills I use daily in my cloud engineering job.",
      },
    ],

    relatedCourses: [
      {
        slug: "cybersecurity-ai-threat-intelligence",
        title: "Cybersecurity & AI Threat Intelligence",
        image: "/courses/cybersecurity-ai-threat-intelligence.jpg",
      },
    ],
  },
  {
    slug: "software-architecture-product-design",
    title: "Software Architecture & Product Design",
    description:
      "Able to design the structure behind real software systems and products — a step toward senior developer, architect, or technical lead roles.",
    image: "/courses/software-architecture-product-design.jpg",
    price: "Contact us",
    duration: "Career Track",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "6–8 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "Principal Software Architect",
      bio: "Specializes in high-scale distributed systems, microservice patterns, cloud architecture, and technical product design.",
      image: "/instructors/architect-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Designing reliable, scalable software applications requires a deep understanding of architectural principles and design trade-offs.",
          "Learn microservices, domain-driven design, system performance optimization, trade-off evaluation, and aligning software design with business strategy.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Industry-aligned curriculum; a system design portfolio piece.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "System design principles",
          "Architecture patterns",
          "Scalability & performance thinking",
          "Product design fundamentals",
          "Applied design projects",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Strong background in software development and understanding of database systems.",
        ],
      },
    ],

    testimonials: [
      {
        id: "arch-1",
        name: "Course Participant",
        role: "Senior Software Engineer",
        quote:
          "Understanding large-scale system trade-offs transformed the way I design complex enterprise applications.",
      },
    ],

    relatedCourses: [
      {
        slug: "full-stack-web-development-dotnet-track",
        title: "Full-Stack Web Development — .NET Track",
        image: "/courses/full-stack-web-development-dotnet-track.jpg",
      },
    ],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    description:
      "Able to build, train, and deploy real machine learning models — the skill set behind the fastest-growing category of tech jobs today.",
    image: "/courses/ai-machine-learning.jpg",
    price: "Contact us",
    duration: "Career Track",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "6–8 hours per week",
    studyMode: "Tutor guided / project based",

    lead: {
      name: "Course Instructor",
      role: "AI & Machine Learning Lead",
      bio: "Expert in deep learning, natural language processing, model optimization, and deployment pipeline architecture.",
      image: "/instructors/ml-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Machine learning models drive intelligent decision-making, natural language interfaces, and automated perception systems.",
          "Learn supervised/unsupervised learning, neural networks, model training techniques, feature engineering, and deploying AI models into production.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Industry-aligned curriculum; a deployed model project for your portfolio.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Machine learning fundamentals",
          "Model training & evaluation",
          "Practical AI application building",
          "Deployment basics",
          "Real-world model projects",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Proficiency in Python programming, linear algebra basics, and introductory statistics.",
        ],
      },
    ],

    testimonials: [
      {
        id: "ml-1",
        name: "Course Participant",
        role: "ML Engineer",
        quote:
          "Building and deploying an end-to-end model pipeline provided real practical skills beyond theoretical algorithms.",
      },
    ],

    relatedCourses: [
      {
        slug: "data-science-analytics",
        title: "Data Science & Analytics",
        image: "/courses/data-science-analytics.jpg",
      },
    ],
  },
  {
    slug: "undergraduate-internship-program",
    title: "Undergraduate Internship Program",
    description:
      "Workplace-experienced with a real employer, backed by six months of targeted technical training — the combination employers say closes the \"no experience\" gap for new graduates.",
    image: "/courses/undergraduate-internship-program.jpg",
    price: "Contact for Placement Details",
    duration: "6-Month Learning + 3-Month Internship (Paid / Unpaid options)",
    nextStartDate: "2026-10-01",
    category: "Career Accelerator Tracks",
    commitment: "8–12 hours per week",
    studyMode: "Tutor guided / industry placement",

    lead: {
      name: "Course Instructor",
      role: "Industry Placement Director",
      bio: "Connects students with industry partner organizations, overseeing practical workplace onboarding and mentorship.",
      image: "/instructors/placement-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Bridging the gap between academic education and industry performance requires real workplace exposure.",
          "This program combines intensive skill specialization with structured mentorship and guaranteed placement within active technology teams.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Verified internship placement + reference-ready work experience on your CV.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Chosen technical specialization (aligned to available tracks)",
          "Workplace professionalism",
          "Real project delivery",
          "Direct employer exposure",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Undergraduate status or recent graduate ready for full-time/part-time internship commitments.",
        ],
      },
    ],

    testimonials: [
      {
        id: "intern-1",
        name: "Course Participant",
        role: "Former Intern",
        quote:
          "The internship placement directly led to a permanent software engineering offer before I even graduated.",
      },
    ],

    relatedCourses: [
      {
        slug: "full-stack-web-development-react-track",
        title: "Full-Stack Web Development — React Track",
        image: "/courses/full-stack-web-development-react-track.jpg",
      },
    ],
  },
];