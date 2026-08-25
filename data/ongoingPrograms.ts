export interface Program {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  badgeRole: string;
  badgeTrack: string;
  studentId: string;
}

export const PROGRAM_DATA: Program[] = [
  {
    id: '1',
    title: 'AI Tools for Teachers One-Day Hands-On Workshop',
    description:
      'Use your school holiday to discover practical AI tools that save you time, spark creativity, and enhance student learning. Go back to school better prepared and more confident.',
    highlights: [
      'Plan lessons faster with AI-powered tools and create engaging teaching materials',
      'Generate quizzes, tests, rubrics, and personalized learning content in minutes',
      'Use AI responsibly with practical strategies for effective classroom learning',
    ],
    ctaText: 'Register Now',
    ctaLink: '/programs/ai-tools-for-teachers',
    imageSrc: '/courses/ai-tools-for-teachers.jpg',
    badgeRole: 'School Teachers & Educators',
    badgeTrack: 'AI Tools for Teachers',
    studentId: 'ID 1015',
  },

  {
    id: '2',
    title: 'AI for Business 04Hour Practical Workshop',
    description:
      'No coding. No complicated technology. Just practical AI workflows you can use in your business to automate customer replies, create marketing content, and simplify daily operations.',
    highlights: [
      'Handle WhatsApp & Facebook messages automatically in English, Sinhala, or Tamil',
      'Generate high-converting social media captions, posts, and marketing ideas without hiring an agency',
      'Turn Sinhala/Tamil voice notes into professional business emails and formal documents',
      'Summarize daily accounts, track tasks, and draft supplier communications effortlessly',
    ],
    ctaText: 'Register Now',
    ctaLink: '/programs/ai-for-business',
    imageSrc: '/courses/ai-for-business.jpg',
    badgeRole: 'Business Owners & Entrepreneurs',
    badgeTrack: 'AI for Business',
    studentId: 'ID 1014',
  },

  {
    id: '3',
    title: 'Free Cybersecurity Awareness Training',
    description:
      'Protect your business and secure your future with free cyber security awareness training designed for micro, small, and medium business owners in Kandy.',
    highlights: [
      'Avoid phishing attacks by identifying suspicious emails and links',
      'Create and manage strong passwords with confidence',
      'Secure payments, protect customer data, and keep online transactions safe',
      'Learn practical tips to protect your business and stay safe online',
    ],
    ctaText: 'Register Now',
    ctaLink: '/programs/cyber-security-awareness-training',
    imageSrc: '/courses/cyber-security-awareness-training.jpg',
    badgeRole: 'Micro, Small & Medium Business Owners',
    badgeTrack: 'Cyber Security Awareness Training',
    studentId: 'ID 1016',
  },
];
