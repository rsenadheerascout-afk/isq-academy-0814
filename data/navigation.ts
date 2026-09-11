// data/navigation.ts

export interface SubCategory {
  label: string;
  href: string;
}

export interface Category {
  id: string;
  label: string;
  href: string;
  subCategories: SubCategory[];
}

export const courseCategories: Category[] = [
  {
    id: "foundation-programs",
    label: "Foundation Programs",
    href: "/courses?filter=Foundation%20Programs",
    subCategories: [
      { label: "Diploma in ICT (DICT)", href: "/courses/diploma-in-ict" },
      {
        label: "Programming Fundamentals I & II",
        href: "/courses/programming-fundamentals-1-2",
      },
      {
        label: "3D Printing, Virtual & Augmented Reality",
        href: "/courses/3d-printing-vr-ar",
      },
      {
        label: "Spoken English & IT Essentials",
        href: "/courses/spoken-english-it-essentials",
      },
      {
        label: "Digital Marketing Foundations",
        href: "/courses/digital-marketing-foundations",
      },
      {
        label: "Life & Employability Skills",
        href: "/courses/life-employability-skills",
      },
      {
        label: "Graphic Design & UI/UX Foundations",
        href: "/courses/graphic-design-ui-ux-foundations",
      },
      {
        label: "Cybersecurity Foundations",
        href: "/courses/cybersecurity-foundations",
      },
      { label: "AI Literacy", href: "/courses/ai-literacy" },
      {
        label: "Data Science Foundations",
        href: "/courses/data-science-foundations",
      },
      {
        label: "Business Startup & Entrepreneurship",
        href: "/courses/business-startup-entrepreneurship",
      },
    ],
  },
  {
    id: "career-accelerator-tracks",
    label: "Career Accelerator Tracks",
    href: "/courses?filter=Career%20Accelerator%20Tracks",
    subCategories: [
      {
        label: "Full-Stack Web Development — React Track",
        href: "/courses/full-stack-web-development-react-track",
      },
      {
        label: "Full-Stack Web Development — .NET Track",
        href: "/courses/full-stack-web-development-dotnet-track",
      },
      {
        label: "Cybersecurity & AI Threat Intelligence",
        href: "/courses/cybersecurity-ai-threat-intelligence",
      },
      {
        label: "Data Science & Analytics",
        href: "/courses/data-science-analytics",
      },
      {
        label: "AI-Augmented Software Testing & QA",
        href: "/courses/ai-augmented-software-testing-qa",
      },
      {
        label: "IT Project Management",
        href: "/courses/it-project-management",
      },
      { label: "UI/UX Design", href: "/courses/ui-ux-design" },
      {
        label: "DevSecOps & Cloud Security (AI-Driven)",
        href: "/courses/devsecops-cloud-security-ai-driven",
      },
      {
        label: "Software Architecture & Product Design",
        href: "/courses/software-architecture-product-design",
      },
      { label: "AI & Machine Learning", href: "/courses/ai-machine-learning" },
      {
        label: "Undergraduate Internship Program",
        href: "/courses/undergraduate-internship-program",
      },
    ],
  },
  {
    id: "professional-upskilling",
    label: "Professional Upskilling",
    href: "/courses?filter=Professional%20Upskilling",
    subCategories: [
      {
        label: "AI for Working Professionals",
        href: "/courses/ai-for-working-professionals",
      },
      {
        label: "AI for Business (Entrepreneurs & Managers)",
        href: "/courses/ai-for-business-entrepreneurs-and-managers",
      },
      {
        label: "AI for Teachers & People in Academia",
        href: "/courses/ai-for-teachers-and-people-in-academia",
      },
      {
        label: "Cybersecurity Industry Certification",
        href: "/courses/cybersecurity-industry-certification",
      },
      { label: "Digital Navigator", href: "/courses/digital-navigator" },
      {
        label: "Business Startup & Entrepreneurship",
        href: "/courses/business-startup-and-entrepreneurship",
      },
      {
        label: "Professional Communication & Teamwork",
        href: "/courses/professional-communication-and-teamwork",
      },
      { label: "Professional English", href: "/courses/professional-english" },
      {
        label: "Financial Literacy & Digital Finance Tools",
        href: "/courses/financial-literacy-and-digital-finance-tools",
      },
      { label: "Digital Marketing", href: "/courses/digital-marketing" },
      { label: "Life Skills", href: "/courses/life-skills" },
    ],
  },
  {
    id: "digital-inclusion",
    label: "Digital Inclusion",
    href: "/courses?filter=Digital%20Inclusion",
    subCategories: [
      {
        label: "Bridging the Digital Gender Gap",
        href: "/courses/bridging-the-digital-gender-gap",
      },
      {
        label: "Empowering Women in Cybersecurity",
        href: "/courses/empowering-women-in-cybersecurity",
      },
      {
        label: "Digital Competency Training — Seniors",
        href: "/courses/digital-competency-training-seniors",
      },
      {
        label: "Digital Competency Training — Youth",
        href: "/courses/digital-competency-training-youth",
      },
      {
        label: "Digital Responsibility, Legal & Ethical Aspects",
        href: "/courses/digital-responsibility-legal-and-ethical-aspects",
      },
      {
        label: "Cybersecurity Awareness",
        href: "/courses/cybersecurity-awareness",
      },
    ],
  },
  {
    id: "young-innovators",
    label: "Young Innovators",
    href: "/courses?filter=Young%20Innovators",
    subCategories: [
      { label: "Local O/L & A/L ICT", href: "/courses/local-ol-and-al-ict" },
      { label: "London O/L & A/L ICT", href: "/courses/london-ol-and-al-ict" },
      {
        label: "Grade 6–9 School Curriculum Support",
        href: "/courses/grade-6-9-school-curriculum-support",
      },
      { label: "Digital Whiz Kids", href: "#/courses/digital-whiz-kids" },
      { label: "Digital Whiz Teens", href: "#/courses/digital-whiz-teens" },
      { label: "Spoken English", href: "/courses/spoken-english" },
      { label: "Life Skills", href: "/courses/life-skills" },
    ],
  },
];