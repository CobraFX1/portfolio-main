import type {
  Project,
  ExperienceItem,
  EducationItem,
  TechCategory,
  ContactInfo,
  HeroData,
  NavLink,
  SiteConfig,
} from '../types';

// ============================================
// Site Configuration
// ============================================

export const siteConfig: SiteConfig = {
  name: 'Jacob Stephen',
  title: 'Jacob Stephen | Full-Stack Developer',
  description:
    'Full-Stack Developer specializing in React, Next.js, TypeScript & Node.js. Building scalable, high-performance web applications.',
  copyrightYear: 2026,
} as const;

// ============================================
// Navigation Links
// ============================================

export const navLinks: readonly NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
] as const;

// ============================================
// Hero Section Data
// ============================================

export const heroData: HeroData = {
  badgeText: 'Available for freelance & full-stack roles',
  headingPrefix: 'Building ',
  headingGradient: 'Scalable',
  headingSuffix: 'Digital Experiences',
  subtitle:
    "Software Engineer building resilient, high-performance web applications. I combine developer velocity with a QA mindset to ship reliable products from day one.",
  name: 'Jacob Stephen',
  ctaPrimary: 'Explore My Work',
  ctaSecondary: 'Get In Touch',
  techItems: [
    { name: 'Next.js', dotColor: 'bg-primary/70' },
    { name: 'Vue', dotColor: 'bg-emerald-500/70' },
    { name: 'TypeScript', dotColor: 'bg-blue-500/70' },
    { name: 'Node.js', dotColor: 'bg-green-500/70' },
    { name: 'PostgreSQL', dotColor: 'bg-blue-400/70' },
  ],
} as const;

// ============================================
// Projects
// ============================================

export const projects: readonly Project[] = [
  {
    title: 'EduVid',
    description:
      'A decentralized P2P educational video-sharing platform designed specifically for low-bandwidth environments.',
    tags: ['WebRTC', 'React'],
    liveUrl: 'https://edu-vid-one.vercel.app/',
    icon: 'video_library',
    iconLabel: 'EduVid App',
    gradientFrom: 'from-indigo-500/10',
    gradientTo: 'to-purple-500/10',
    iconColor: 'text-primary/60 dark:text-primary/40',
    hoverRotate: 'group-hover:-rotate-2',
  },
  {
    title: 'Review Pulse',
    description:
      'A full-stack SaaS platform for reputation management with automated feedback aggregation and secure user authentication.',
    tags: ['Next.js', 'Prisma', 'Supabase'],
    liveUrl: 'https://review-pulse-ruddy.vercel.app',
    icon: 'star_rate',
    iconLabel: 'SaaS Dashboard',
    gradientFrom: 'from-emerald-500/10',
    gradientTo: 'to-teal-500/10',
    iconColor: 'text-teal-500/60 dark:text-teal-500/40',
    hoverRotate: 'group-hover:rotate-1',
  },
  {
    title: 'Skycast Weather',
    description:
      'A dynamic weather forecasting application featuring real-time data, geolocation search, and interactive weather maps using OpenWeather API.',
    tags: ['JavaScript', 'REST API', 'Tailwind CSS'],
    liveUrl: 'https://cobrafx1.github.io/weather-app/',
    icon: 'partly_cloudy_day',
    iconLabel: 'Weather Dashboard',
    gradientFrom: 'from-blue-500/10',
    gradientTo: 'to-cyan-500/10',
    iconColor: 'text-blue-500/60 dark:text-cyan-500/40',
    hoverRotate: 'group-hover:-rotate-1',
  },
  {
    title: 'Tic Tac Toe',
    description:
      'A browser-based Tic Tac Toe game highlighting pure frontend logic, custom state management without libraries, and a responsive grid UI.',
    tags: ['HTML5', 'CSS3', 'Vanilla JS'],
    liveUrl: 'https://cobrafx1.github.io/Tic-Tac_Toe/',
    icon: 'grid_3x3',
    iconLabel: 'Mini Game',
    gradientFrom: 'from-indigo-500/10',
    gradientTo: 'to-red-500/10',
    iconColor: 'text-indigo-500/60 dark:text-indigo-400/40',
    hoverRotate: 'group-hover:rotate-1',
  },
  // ── Upcoming Builds (Day 4 placeholders) ──────────────
  {
    title: 'Link Analytics Platform',
    description:
      'A real-time link shortener & analytics platform with click tracking, geographic breakdown, and marketing attribution dashboards.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    icon: 'insert_link',
    iconLabel: 'Analytics',
    gradientFrom: 'from-violet-500/10',
    gradientTo: 'to-fuchsia-500/10',
    iconColor: 'text-violet-500/60 dark:text-violet-400/40',
    hoverRotate: 'group-hover:-rotate-1',
    isUpcoming: true,
  },
  {
    title: 'SaaS Dashboard + Stripe',
    description:
      'A full-stack SaaS starter with subscription billing, role-based access control, team management, and Stripe payment integration.',
    tags: ['Next.js', 'Stripe', 'Clerk', 'Prisma'],
    liveUrl: '#',
    icon: 'payments',
    iconLabel: 'SaaS Starter',
    gradientFrom: 'from-amber-500/10',
    gradientTo: 'to-orange-500/10',
    iconColor: 'text-amber-500/60 dark:text-amber-400/40',
    hoverRotate: 'group-hover:rotate-1',
    isUpcoming: true,
  },
] as const;

// ============================================
// Experience
// ============================================

export const experience: readonly ExperienceItem[] = [
  {
    title: 'Full-Stack Web Developer',
    company: 'VisionLand Schools (Remote)',
    period: '01/2025 — 05/2025',
    description:
      'Designed and deployed a custom, responsive website to digitize school information and improve parent-teacher communication.',
    icon: 'code',
    isCurrent: true,
  },
  {
    title: 'QA Tester',
    company: 'Test.io (Remote)',
    period: '2021 — Present',
    description:
      "Engineered and executed comprehensive test plans, identifying critical bugs before production. Brought a QA mindset to development: championed defensive coding practices, thorough edge-case testing, and CI/CD discipline.",
    icon: 'bug_report',
    isCurrent: false,
  },
] as const;

// ============================================
// Education
// ============================================

export const education: readonly EducationItem[] = [
  {
    degree: 'B.Sc. Software Engineering',
    institution: 'Dominion University',
    period: '10/2022 – 2026',
    location: 'Ibadan, Nigeria',
    locationIcon: 'location_on',
    accentColor: 'purple-500',
  },
  {
    degree: 'Full-Stack Certification',
    institution: 'The Odin Project',
    period: '05/2025 – 01/2026',
    location: 'Remote Curriculum',
    locationIcon: 'map',
    accentColor: 'primary',
  },
] as const;

// ============================================
// Tech Stack
// ============================================

export const techStack: readonly TechCategory[] = [
  {
    title: 'Frontend',
    icon: 'web',
    items: [
      {
        name: 'Next.js & React',
        dotColor: 'bg-blue-500',
        glowColor: '0 0 8px rgba(59, 130, 246, 0.6)',
      },
      {
        name: 'Vue 3',
        dotColor: 'bg-emerald-500',
        glowColor: '0 0 8px rgba(16, 185, 129, 0.6)',
      },
      {
        name: 'Tailwind CSS',
        dotColor: 'bg-cyan-500',
        glowColor: '0 0 8px rgba(6, 182, 212, 0.6)',
      },
    ],
  },
  {
    title: 'Backend',
    icon: 'database',
    items: [
      {
        name: 'Node.js',
        dotColor: 'bg-green-500',
        glowColor: '0 0 8px rgba(34, 197, 94, 0.6)',
      },
      {
        name: 'PostgreSQL',
        dotColor: 'bg-blue-400',
        glowColor: '0 0 8px rgba(96, 165, 250, 0.6)',
      },
      {
        name: 'Prisma ORM',
        dotColor: 'bg-indigo-500',
        glowColor: '0 0 8px rgba(99, 102, 241, 0.6)',
      },
    ],
  },
  {
    title: 'Tools',
    icon: 'build',
    items: [
      {
        name: 'Jest',
        dotColor: 'bg-red-500',
        glowColor: '0 0 8px rgba(239, 68, 68, 0.6)',
      },
      {
        name: 'Postman',
        dotColor: 'bg-orange-400',
        glowColor: '0 0 8px rgba(251, 146, 60, 0.6)',
      },
      {
        name: 'Vercel',
        dotColor: 'bg-slate-800 dark:bg-white',
        glowColor: '0 0 8px rgba(255, 255, 255, 0.4)',
      },
    ],
  },
  {
    title: 'Services',
    icon: 'lock',
    items: [
      {
        name: 'Clerk',
        dotColor: 'bg-blue-600',
        glowColor: '0 0 8px rgba(37, 99, 235, 0.6)',
      },
      {
        name: 'Supabase',
        dotColor: 'bg-emerald-400',
        glowColor: '0 0 8px rgba(52, 211, 153, 0.6)',
      },
      {
        name: 'Svix Webhooks',
        dotColor: 'bg-purple-500',
        glowColor: '0 0 8px rgba(168, 85, 247, 0.6)',
      },
    ],
  },
] as const;

// ============================================
// Contact Links
// ============================================

export const contactLinks: readonly ContactInfo[] = [
  {
    label: 'Email Me At',
    value: 'jacobstephen045@gmail.com',
    href: 'mailto:jacobstephen045@gmail.com',
    icon: 'mail',
    hoverBg: 'group-hover:bg-primary group-hover:text-white',
  },
  {
    label: 'GitHub',
    value: 'github.com/CobraFX1',
    href: 'https://github.com/CobraFX1',
    icon: 'account_tree',
    hoverBg:
      'group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/cubjthecoder',
    href: 'https://www.linkedin.com/in/cubjthecoder/',
    icon: 'person',
    hoverBg: 'group-hover:bg-[#0077b5] group-hover:text-white',
  },
] as const;
