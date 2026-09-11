import { Course } from "../course-types";

export const digitalInclusionCourses: Course[] = [
  {
    slug: "bridging-the-digital-gender-gap",
    title: "Bridging the Digital Gender Gap",
    description:
      "Digitally confident and equipped with skills to access education, work, and opportunity online.",
    image: "/courses/bridging-the-digital-gender-gap.jpg",
    price: "Free / Community Funded",
    duration: "2 Months",
    nextStartDate: "2026-10-01",
    category: "Digital Inclusion",
    commitment: "3–4 hours per week",
    studyMode: "Community workshops / mentor led",

    lead: {
      name: "Program Coordinator",
      role: "Digital Inclusion & Community Lead",
      bio: "Dedicated to closing the gender digital divide through accessible technology literacy, empowerment, and online safety programs.",
      image: "/instructors/gender-gap-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Ensuring equal access to digital literacy opens vital pathways to independent learning, workforce participation, and economic mobility.",
          "This initiative equips participants with foundational web navigation, safe digital identity management, and essential software tools to access online opportunity.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Certificate of Completion; community-recognized program.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Core digital literacy",
          "Online safety",
          "Practical device & internet skills",
          "Confidence building",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "No prior digital background required.",
          "Open to all learners seeking foundational computer confidence.",
        ],
      },
    ],

    testimonials: [
      {
        id: "bdgg-1",
        name: "Program Participant",
        role: "Community Learner",
        quote:
          "Learning how to navigate digital platforms safely gave me the confidence to apply for online learning programs on my own.",
      },
    ],

    relatedCourses: [
      {
        slug: "digital-competency-training-youth",
        title: "Digital Competency Training — Youth",
        image: "/courses/digital-competency-training-youth.jpg",
      },
      {
        slug: "empowering-women-in-cybersecurity",
        title: "Empowering Women in Cybersecurity",
        image: "/courses/empowering-women-in-cybersecurity.jpg",
      },
    ],
  },
  {
    slug: "empowering-women-in-cybersecurity",
    title: "Empowering Women in Cybersecurity",
    description:
      "Introduced to a real pathway into the cybersecurity field, in one of tech's most in-demand and underrepresented specializations.",
    image: "/courses/empowering-women-in-cybersecurity.jpg",
    price: "Free / Community Funded",
    duration: "3 Months",
    nextStartDate: "2026-10-01",
    category: "Digital Inclusion",
    commitment: "4–5 hours per week",
    studyMode: "Mentor guided / hands-on lab",

    lead: {
      name: "Program Coordinator",
      role: "Cybersecurity Mentor & Advocate",
      bio: "Passionate about encouraging gender diversity within information security, threat defense, and digital risk management.",
      image: "/instructors/women-cyber-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Cybersecurity remains one of the fastest-growing technology domains with a critical shortage of female professionals.",
          "This entry-level pathway introduces core security concepts, network fundamentals, ethical defense strategies, and industry career pathways.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Certificate of Completion; direct pathway into our full Cybersecurity career track.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Cybersecurity fundamentals",
          "Career pathway guidance",
          "Hands-on introductory security skills",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Basic computer literacy.",
          "Interest in technology, system defense, or digital security.",
        ],
      },
    ],

    testimonials: [
      {
        id: "ewc-1",
        name: "Program Participant",
        role: "Security Trainee",
        quote:
          "This course demystified cybersecurity and showed me a clear, actionable career path I never thought was accessible.",
      },
    ],

    relatedCourses: [
      {
        slug: "cybersecurity-awareness",
        title: "Cybersecurity Awareness",
        image: "/courses/cybersecurity-awareness.jpg",
      },
      {
        slug: "bridging-the-digital-gender-gap",
        title: "Bridging the Digital Gender Gap",
        image: "/courses/bridging-the-digital-gender-gap.jpg",
      },
    ],
  },
  {
    slug: "digital-competency-training-seniors",
    title: "Digital Competency Training — Seniors",
    description:
      "Comfortable and self-sufficient using everyday digital tools and staying safely connected.",
    image: "/courses/digital-competency-training-seniors.jpg",
    price: "Free / Community Funded",
    duration: "6 Weeks",
    nextStartDate: "2026-10-01",
    category: "Digital Inclusion",
    commitment: "2–3 hours per week",
    studyMode: "Paced workshops / hands-on support",

    lead: {
      name: "Program Coordinator",
      role: "Senior Digital Literacy Instructor",
      bio: "Specializes in patient, step-by-step guidance to help mature adults gain independence with personal devices and online communication.",
      image: "/instructors/seniors-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Digital connectedness is key to staying in touch with family, managing daily services, and maintaining personal independence.",
          "Designed specifically for older adults, this course provides gentle, practice-heavy instruction on mobile devices, internet safety, and messaging platforms.",
        ],
      },
      {
        id: "why-it-counts",
        title: "Why It Counts",
        content: [
          "Certificate of Completion; patient, tailored teaching pace.",
        ],
      },
      {
        id: "modules",
        title: "Modules and activities",
        content: [
          "Smartphone & device basics",
          "Safe internet use",
          "Messaging & video calls",
          "Scam & fraud awareness",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Access to a smartphone, tablet, or personal computer.",
          "No prior technical knowledge required.",
        ],
      },
    ],

    testimonials: [
      {
        id: "dcts-1",
        name: "Program Participant",
        role: "Senior Learner",
        quote:
          "The patient environment made all the difference. I now feel comfortable making video calls and recognizing suspicious online messages.",
      },
    ],

    relatedCourses: [
      {
        slug: "cybersecurity-awareness",
        title: "Cybersecurity Awareness",
        image: "/courses/cybersecurity-awareness.jpg",
      },
    ],
  },
  {
    slug: "digital-competency-training-youth",
    title: "Digital Competency Training — Youth",
    description:
      "Equipped with the baseline digital skills needed for further education and today's job market.",
    image: "/courses/digital-competency-training-youth.jpg",
    price: "Free / Community Funded",
    duration: "2 Months",
    nextStartDate: "2026-10-01",
    category: "Digital Inclusion",
    commitment: "3–4 hours per week",
    studyMode: "Interactive workshops / practical tasks",

    lead: {
      name: "Program Coordinator",
      role: "Youth Technology Educator",
      bio: "Focuses on equipping young adults with essential computing tools, digital research skills, and career entry awareness.",
      image: "/instructors/youth-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Core digital proficiency is mandatory for modern higher education and starting entry-level workplace roles.",
          "This program builds strong operational skills around productivity software, effective search, online safety, and educational opportunity platforms.",
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
          "Core digital literacy",
          "Online safety",
          "Basic productivity tools",
          "Intro to opportunity platforms (education/job portals)",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Open to all young adults looking to build foundational digital workplace skills.",
        ],
      },
    ],

    testimonials: [
      {
        id: "dcty-1",
        name: "Program Participant",
        role: "Youth Trainee",
        quote:
          "Learning how to properly use digital job portals and online productivity tools gave me a head start for my applications.",
      },
    ],

    relatedCourses: [
      {
        slug: "bridging-the-digital-gender-gap",
        title: "Bridging the Digital Gender Gap",
        image: "/courses/bridging-the-digital-gender-gap.jpg",
      },
      {
        slug: "digital-responsibility-legal-and-ethical-aspects",
        title: "Digital Responsibility, Legal & Ethical Aspects",
        image: "/courses/digital-responsibility-legal-and-ethical-aspects.jpg",
      },
    ],
  },
  {
    slug: "digital-responsibility-legal-and-ethical-aspects",
    title: "Digital Responsibility, Legal & Ethical Aspects",
    description:
      "Aware of your digital rights, responsibilities, and how to navigate the internet safely, legally, and ethically.",
    image: "/courses/digital-responsibility-legal-and-ethical-aspects.jpg",
    price: "Free / Community Funded",
    duration: "6 Weeks",
    nextStartDate: "2026-10-01",
    category: "Digital Inclusion",
    commitment: "2–3 hours per week",
    studyMode: "Seminar style / case discussions",

    lead: {
      name: "Program Coordinator",
      role: "Digital Ethics & Privacy Specialist",
      bio: "Educating citizens and professionals on data privacy rights, ethical digital citizenship, and online legal frameworks.",
      image: "/instructors/ethics-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Understanding data privacy, copyright, digital rights, and ethical conduct is crucial as society becomes increasingly connected.",
          "This course covers individual rights under data privacy laws, ethical online presence, intellectual property basics, and legal awareness.",
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
          "Digital rights & responsibilities",
          "Data privacy basics",
          "Online conduct & ethics",
          "Relevant legal awareness",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "General interest in digital ethics, online safety, or privacy rights.",
        ],
      },
    ],

    testimonials: [
      {
        id: "drlea-1",
        name: "Program Participant",
        role: "Community Member",
        quote:
          "Understanding personal data privacy rights made me far more intentional about how I manage my online presence.",
      },
    ],

    relatedCourses: [
      {
        slug: "cybersecurity-awareness",
        title: "Cybersecurity Awareness",
        image: "/courses/cybersecurity-awareness.jpg",
      },
      {
        slug: "digital-competency-training-youth",
        title: "Digital Competency Training — Youth",
        image: "/courses/digital-competency-training-youth.jpg",
      },
    ],
  },
  {
    slug: "cybersecurity-awareness",
    title: "Cybersecurity Awareness",
    description:
      "Able to recognize and avoid common online scams and security risks in everyday life.",
    image: "/courses/cybersecurity-awareness.jpg",
    price: "Free / Community Funded",
    duration: "1 Month",
    nextStartDate: "2026-10-01",
    category: "Digital Inclusion",
    commitment: "2 hours per week",
    studyMode: "Interactive workshops / self-paced exercises",

    lead: {
      name: "Program Coordinator",
      role: "Security Awareness Trainer",
      bio: "Focuses on everyday cyber hygiene, phishing prevention, and helping individuals protect personal accounts and data.",
      image: "/instructors/awareness-lead.jpg",
    },

    sections: [
      {
        id: "description",
        title: "Description",
        content: [
          "Social engineering, phishing scams, and identity theft pose everyday threats to internet users.",
          "This practical awareness module teaches proactive defense habits, credential protection, safe browsing techniques, and scam identification.",
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
          "Common online threats & scams",
          "Password & account safety",
          "Safe browsing habits",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        content: [
          "Open to all individuals seeking to protect their digital footprint.",
        ],
      },
    ],

    testimonials: [
      {
        id: "csa-1",
        name: "Program Participant",
        role: "Course Participant",
        quote:
          "The practical examples of real phishing attempts helped me protect both my personal and workplace accounts.",
      },
    ],

    relatedCourses: [
      {
        slug: "digital-responsibility-legal-and-ethical-aspects",
        title: "Digital Responsibility, Legal & Ethical Aspects",
        image: "/courses/digital-responsibility-legal-and-ethical-aspects.jpg",
      },
      {
        slug: "empowering-women-in-cybersecurity",
        title: "Empowering Women in Cybersecurity",
        image: "/courses/empowering-women-in-cybersecurity.jpg",
      },
    ],
  },
];