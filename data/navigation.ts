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
    id: 'career-tracks',
    label: 'Career Tracks',
    href: '/courses?filter=Career%20Tracks',
    subCategories: [
      { label: 'AI Full-Stack Developer', href: '/courses/ai-full-stack' },
      { label: 'UI/UX Designer', href: '/courses/ui-ux' },
      { label: 'DevSecOps with AI', href: '/courses/devsecops' },
      { label: 'Software Engineering Foundation', href: '/courses/software-engineering' },
    ],
  },
  {
    id: 'business-upskilling',
    label: 'Business Upskilling',
    href: '/courses?filter=Business%20Upskilling',
    subCategories: [
      { label: 'AI Productivity for Teams', href: '/courses/ai-productivity' },
      { label: 'Cyber Awareness Training', href: '/courses/cyber-awareness' },
      { label: 'Digital Transformation Programs', href: '/courses/digital-transformation' },
      { label: 'Leadership in AI Era', href: '/courses/ai-leadership' },
    ],
  },
  {
    id: 'women-empowerment',
    label: 'Women Empowerment',
    href: '/courses?filter=Women%20Empowerment',
    subCategories: [
      { label: 'Women in Cyber Security', href: '/courses/cyber-security' },
      { label: 'Digital Entrepreneurship for Women', href: '/courses/entrepreneurship' },
      { label: 'AI for Women Professionals', href: '/courses/ai-professionals' },
      { label: 'Women Leadership Through Technology', href: '/courses/leadership' },
    ],
  },
  {
    id: 'senior-citizens',
    label: 'Senior Citizens',
    href: '/courses?filter=Senior%20Citizens',
    subCategories: [
      { label: 'Digital Confidence for Seniors', href: '/courses/digital-confidence' },
      { label: 'Smartphone Essentials', href: '/courses/smartphone-essentials' },
      { label: 'Safe Internet Usage', href: '/courses/safe-internet' },
      { label: 'AI for Everyday Life', href: '/courses/ai-everyday' },
    ],
  },
  {
    id: 'other-courses',
    label: 'Other Courses',
    href: '/courses?filter=School%20Education',
    subCategories: [
      { label: 'Life Skills for Future Leaders', href: '/courses/life-skills' },
      { label: 'Pearson ICT', href: '/courses/pearson-ict' },
      { label: 'Cambridge ICT', href: '/courses/cambridge-ict' },
      { label: 'A/L ICT Pathway', href: '/courses/al-ict' },
      { label: 'O/L ICT', href: '/courses/ol-ict' },
    ]
  },
];