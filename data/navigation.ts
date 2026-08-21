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
    id: 'children-teens',
    label: 'Children & Teens',
    href: '/courses/children-teens',
    subCategories: [
    //   { label: 'Digital Whiz Kids', href: '/courses/children-teens/digital-whiz-kids' },
    //   { label: 'Digital Whiz Teens', href: '/courses/children-teens/digital-whiz-teens' },
      { label: 'Life Skills for Future Leaders', href: '/courses/children-teens/life-skills' },
    ],
  },
  {
    id: 'school-education',
    label: 'School Education',
    href: '/courses/school-education',
    subCategories: [
      { label: 'O/L ICT', href: '/courses/school-education/ol-ict' },
      { label: 'A/L ICT Pathway', href: '/courses/school-education/al-ict' },
      { label: 'Pearson ICT', href: '/courses/school-education/pearson-ict' },
      { label: 'Cambridge ICT', href: '/courses/school-education/cambridge-ict' },
    ],
  },
  {
    id: 'career-tracks',
    label: 'Career Tracks',
    href: '/courses/career-tracks',
    subCategories: [
      { label: 'AI Full-Stack Developer', href: '/courses/career-tracks/ai-full-stack' },
      { label: 'UI/UX Designer', href: '/courses/career-tracks/ui-ux' },
      { label: 'DevSecOps with AI', href: '/courses/career-tracks/devsecops' },
      { label: 'Software Engineering Foundation', href: '/courses/career-tracks/software-engineering' },
    ],
  },
  {
    id: 'women-empowerment',
    label: 'Women Empowerment',
    href: '/courses/women-empowerment',
    subCategories: [
      { label: 'Women in Cyber Security', href: '/courses/women-empowerment/cyber-security' },
      { label: 'Digital Entrepreneurship for Women', href: '/courses/women-empowerment/entrepreneurship' },
      { label: 'AI for Women Professionals', href: '/courses/women-empowerment/ai-professionals' },
      { label: 'Women Leadership Through Technology', href: '/courses/women-empowerment/leadership' },
    ],
  },
  {
    id: 'senior-citizens',
    label: 'Senior Citizens',
    href: '/courses/senior-citizens',
    subCategories: [
      { label: 'Digital Confidence for Seniors', href: '/courses/senior-citizens/digital-confidence' },
      { label: 'Smartphone Essentials', href: '/courses/senior-citizens/smartphone-essentials' },
      { label: 'Safe Internet Usage', href: '/courses/senior-citizens/safe-internet' },
      { label: 'AI for Everyday Life', href: '/courses/senior-citizens/ai-everyday' },
    ],
  },
  {
    id: 'business-upskilling',
    label: 'Business Upskilling',
    href: '/courses/business-upskilling',
    subCategories: [
      { label: 'AI Productivity for Teams', href: '/courses/business-upskilling/ai-productivity' },
      { label: 'Cyber Awareness Training', href: '/courses/business-upskilling/cyber-awareness' },
      { label: 'Digital Transformation Programs', href: '/courses/business-upskilling/digital-transformation' },
      { label: 'Leadership in AI Era', href: '/courses/business-upskilling/ai-leadership' },
    ],
  },
];