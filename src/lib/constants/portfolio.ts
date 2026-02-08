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
  role?: string
  duration?: string
  challenge?: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
}

export const PROJECTS: PortfolioProject[] = [
  {
    name: 'Manobela',
    summary:
      'Real-time driver monitoring pipeline that processes mobile camera streams to detect drowsiness and distraction using computer-vision signals.',
    stack: ['Python', 'FastAPI', 'OpenCV', 'Mediapipe', 'WebRTC', 'React', 'TypeScript'],
    tone: 'accent',
    role: 'Role: Full-stack and DevOps',
    duration: 'Duration: Startup team project, 2025-2026',
    challenge: 'Key Challenge: Keeping frame processing responsive on mobile-constrained hardware',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/manobela' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/dejely/manobela' },
  },
  {
    name: 'Snakes-Blessings-and-Curses',
    summary:
      'Java OOP board-game engine with extendable rules and event-based tile effects for multiple gameplay variants.',
    stack: ['Java', 'Maven', 'OOP', 'Game Logic'],
    tone: 'primary',
    role: 'Role: Lead Developer',
    duration: 'Duration: Semester project',
    challenge: 'Key Challenge: Designing reusable mechanics without hard-coding board behavior',
    primaryCta: {
      label: 'View Repo',
      href: 'https://github.com/dejely/Snakes-Blessings-and-Curses',
    },
    secondaryCta: {
      label: 'Open GitHub',
      href: 'https://github.com/dejely/Snakes-Blessings-and-Curses',
    },
  },
  {
    name: 'Derio',
    summary:
      'Personal finance manager that structures transactions, budgets, and monthly summaries into decision-ready views.',
    stack: ['Python', 'Data Modeling', 'Finance Tools'],
    tone: 'success',
    role: 'Role: Full-stack Developer',
    duration: 'Duration: Independent build',
    challenge: 'Key Challenge: Keeping data flow simple while supporting realistic finance scenarios',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Derio' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/dejely/Derio' },
  },
  {
    name: 'Polaris',
    summary:
      'Logistics prototype that models shipment flows and supply-chain checkpoints with a domain-oriented structure.',
    stack: ['Python', 'Logistics', 'Supply Chain'],
    tone: 'warning',
    role: 'Role: Backend and Data Logic Developer',
    duration: 'Duration: Coursework prototype',
    challenge: 'Key Challenge: Mapping domain terminology into usable system entities and workflows',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Polaris' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/dejely/Polaris' },
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
  { label: 'Email Me', href: 'mailto:deasisdejel08@gmail.com', variant: 'primary' },
  { label: 'GitHub', href: 'https://github.com/dejely', variant: 'secondary' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dejel-cyrus-de-asis-9567172b0',
    variant: 'secondary',
  },
] as const

export const FOOTER_NOTE = '© 2026 Pixel Developer. Crafted with blocks and code.' as const
