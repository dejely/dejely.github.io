export const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_CONTENT = {
  eyebrow: 'Applied Software Engineer',
  title: 'Scalable Systems, Playful Interfaces.',
  copy:
    'I build production-minded software across Python, Java, C/C++, and TypeScript, from real-time computer-vision systems to finance and logistics tools.',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Get in Touch', href: '#contact' },
} as const

export const ABOUT_CARDS = [
  {
    title: 'Who I Am',
    copy:
      'Computer Science undergraduate at the University of the Philippines Visayas and founder of Popcorn Prophets.',
    tone: 'primary',
    badge: 'PROFILE',
  },
  {
    title: 'What I Do',
    copy:
      'I ship practical systems with clean architecture, measurable performance, and usable interfaces, especially in computer vision, game logic, and domain-focused apps.',
    tone: 'accent',
    badge: 'MISSION',
  },
] as const

export const STAT_BLOCKS = [
  { label: 'Years', value: '5+', tone: 'primary' },
  { label: 'Projects', value: '6+', tone: 'success' },
  { label: 'Domains', value: '5', tone: 'accent' },
  { label: 'Ideas', value: '∞', tone: 'warning' },
] as const

type ProjectTone = 'primary' | 'accent' | 'success' | 'warning'

export type PortfolioProject = {
  name: string
  summary: string
  stack: string[]
  tone: ProjectTone
  articleHref: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
  role?: string
  duration?: string
  challenge?: string
}

export const PROJECTS: PortfolioProject[] = [
  {
    name: 'Manobela',
    summary:
      'Real-time driver monitoring pipeline that processes mobile camera streams to detect drowsiness and distraction using computer-vision signals.',
    stack: ['Python', 'FastAPI', 'OpenCV', 'Mediapipe', 'WebRTC', 'React', 'TypeScript'],
    tone: 'accent',
    articleHref: 'projects/manobela/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/popcorn-prophets/manobela' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/popcorn-prophets/manobela' },
    role: 'Role: Full-stack and DevOps',
    duration: 'Duration: Startup team project, 2025-2026',
    challenge: 'Key Challenge: Keeping frame processing responsive on mobile-constrained hardware',
  },
  {
    name: 'Snakes-Blessings-and-Curses',
    summary:
      'Java OOP board-game engine with extendable rules and event-based tile effects for multiple gameplay variants.',
    stack: ['Java', 'Maven', 'OOP', 'Game Logic'],
    tone: 'primary',
    articleHref: 'projects/snakes-blessings-and-curses/index.html',
    primaryCta: {
      label: 'View Repo',
      href: 'https://github.com/dejely/Snakes-Blessings-and-Curses',
    },
    secondaryCta: {
      label: 'Open GitHub',
      href: 'https://github.com/dejely/Snakes-Blessings-and-Curses',
    },
    role: 'Role: Lead Developer',
    duration: 'Duration: Semester project',
    challenge: 'Key Challenge: Designing reusable mechanics without hard-coding board behavior',
  },
  {
    name: 'Derio',
    summary:
      'Personal finance manager that structures transactions, budgets, and monthly summaries into decision-ready views.',
    stack: ['Python', 'Data Modeling', 'Finance Tools'],
    tone: 'success',
    articleHref: 'projects/derio/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Derio' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/dejely/Derio' },
    role: 'Role: Full-stack Developer',
    duration: 'Duration: Independent build',
    challenge: 'Key Challenge: Keeping data flow simple while supporting realistic finance scenarios',
  },
  {
    name: 'Polaris',
    summary:
      'Logistics prototype that models shipment flows and supply-chain checkpoints with a domain-oriented structure.',
    stack: ['Python', 'Logistics', 'Supply Chain'],
    tone: 'warning',
    articleHref: 'projects/polaris/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Polaris' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/dejely/Polaris' },
    role: 'Role: Backend and Data Logic Developer',
    duration: 'Duration: Coursework prototype',
    challenge: 'Key Challenge: Mapping domain terminology into usable system entities and workflows',
  },
] as const

export type TechStackItem = {
  label: string
  iconSrc?: string
  fallback?: string
}

export const TECH_STACK: TechStackItem[] = [
  { label: 'Docker', iconSrc: '/tech-icons/docker.svg' },
  { label: 'AWS', iconSrc: '/tech-icons/aws.svg' },
  { label: 'C', iconSrc: '/tech-icons/c.svg' },
  { label: 'C++', iconSrc: '/tech-icons/cpp.svg' },
  { label: 'Microsoft Azure Cloud', iconSrc: '/tech-icons/azure.svg' },
  { label: 'Firebase', iconSrc: '/tech-icons/firebase.svg' },
  { label: 'Java', iconSrc: '/tech-icons/java.svg' },
  { label: 'Python', iconSrc: '/tech-icons/python.svg' },
  { label: 'MongoDB', iconSrc: '/tech-icons/mongodb.svg' },
  { label: 'Kali Linux', iconSrc: '/tech-icons/linux.svg' },
] as const

export type ContactLink = {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'accent' | 'success'
}

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'View CV', href: '/docs/dejel-cyrus-de-asis-cv.pdf', variant: 'accent' },
  { label: 'Email Me', href: 'mailto:deasisdejel08@gmail.com', variant: 'primary' },
  { label: 'GitHub', href: 'https://github.com/dejely', variant: 'secondary' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dejel-cyrus-de-asis-9567172b0',
    variant: 'secondary',
  },
] as const

export const FOOTER_NOTE = '© 2026 Pixel Developer. Crafted with Vite, blocks and code.' as const
