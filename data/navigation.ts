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
      {
        label: "3D Printing, Virtual & Augmented Reality",
        href: "/courses/3d-printing-vr-ar",
      },
      { label: "AI Literacy", href: "/courses/ai-literacy" },
      {
        label: "Business Startup & Entrepreneurship",
        href: "/courses/business-startup-entrepreneurship",
      },
      {
        label: "Cybersecurity Foundations",
        href: "/courses/cybersecurity-foundations",
      },
      {
        label: "Data Science Foundations",
        href: "/courses/data-science-foundations",
      },
      {
        label: "Digital Marketing Foundations",
        href: "/courses/digital-marketing-foundations",
      },
      { label: "Diploma in ICT (DICT)", href: "/courses/diploma-in-ict" },
      {
        label: "Graphic Design & UI/UX Foundations",
        href: "/courses/graphic-design-ui-ux-foundations",
      },
      {
        label: "Life & Employability Skills",
        href: "/courses/life-employability-skills",
      },
      {
        label: "Programming Fundamentals I & II",
        href: "/courses/programming-fundamentals-1-2",
      },
      {
        label: "Spoken English & IT Essentials",
        href: "/courses/spoken-english-it-essentials",
      },
    ],
  },
  {
    id: "career-accelerator-tracks",
    label: "Career Accelerator Tracks",
    href: "/courses?filter=Career%20Accelerator%20Tracks",
    subCategories: [
      { label: "AI & Machine Learning", href: "/courses/ai-machine-learning" },
      {
        label: "AI-Augmented Software Testing & QA",
        href: "/courses/ai-augmented-software-testing-qa",
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
        label: "DevSecOps & Cloud Security (AI-Driven)",
        href: "/courses/devsecops-cloud-security-ai-driven",
      },
      {
        label: "Full-Stack Web Development — .NET Track",
        href: "/courses/full-stack-web-development-dotnet-track",
      },
      {
        label: "Full-Stack Web Development — React Track",
        href: "/courses/full-stack-web-development-react-track",
      },
      {
        label: "IT Project Management",
        href: "/courses/it-project-management",
      },
      {
        label: "Software Architecture & Product Design",
        href: "/courses/software-architecture-product-design",
      },
      {
        label: "UI/UX Design",
        href: "/courses/ui-ux-design",
      },
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
        label: "AI for Business (Entrepreneurs & Managers)",
        href: "/courses/ai-for-business-entrepreneurs-and-managers",
      },
      {
        label: "AI for Teachers & People in Academia",
        href: "/courses/ai-for-teachers-and-people-in-academia",
      },
      {
        label: "AI for Working Professionals",
        href: "/courses/ai-for-working-professionals",
      },
      {
        label: "Business Startup & Entrepreneurship",
        href: "/courses/business-startup-and-entrepreneurship",
      },
      {
        label: "Cybersecurity Industry Certification",
        href: "/courses/cybersecurity-industry-certification",
      },
      { label: "Digital Marketing", href: "/courses/digital-marketing" },
      { label: "Digital Navigator", href: "/courses/digital-navigator" },
      {
        label: "Financial Literacy & Digital Finance Tools",
        href: "/courses/financial-literacy-and-digital-finance-tools",
      },
      { label: "Life Skills", href: "/courses/life-skills" },
      {
        label: "Professional Communication & Teamwork",
        href: "/courses/professional-communication-and-teamwork",
      },
      { label: "Professional English", href: "/courses/professional-english" },
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
        label: "Cybersecurity Awareness",
        href: "/courses/cybersecurity-awareness",
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
        label: "Empowering Women in Cybersecurity",
        href: "/courses/empowering-women-in-cybersecurity",
      },
    ],
  },
  {
    id: "young-innovators",
    label: "Young Innovators",
    href: "/courses?filter=Young%20Innovators",
    subCategories: [
      { label: "Digital Whiz Kids", href: "#/courses/digital-whiz-kids" },
      { label: "Digital Whiz Teens", href: "#/courses/digital-whiz-teens" },
      {
        label: "Grade 6–9 School Curriculum Support",
        href: "/courses/grade-6-9-school-curriculum-support",
      },
      { label: "Life Skills", href: "/courses/life-skills" },
      { label: "Local O/L & A/L ICT", href: "/courses/local-ol-and-al-ict" },
      { label: "London O/L & A/L ICT", href: "/courses/london-ol-and-al-ict" },
      { label: "Spoken English", href: "/courses/spoken-english" },
    ],
  },
];
