export const NAV_ITEMS = [
  { label: 'Home', href: '#hero', kind: 'section' },
  { label: 'About', href: '#about', kind: 'section' },
  { label: 'Projects', href: '#projects', kind: 'section' },
  { label: 'Achievements', href: '#achievements', kind: 'section' },
  { label: 'Tech Stack', href: '#tech-stack', kind: 'section' },
  { label: 'Contact', href: '#contact', kind: 'section' },
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
      'I ship systems with clean architecture, measurable performance, and usable interfaces, especially in computer vision, game logic, and domain-focused apps.',
    tone: 'accent',
    badge: 'MISSION',
  },
] as const

export const STAT_BLOCKS = [
  { label: 'Years', value: '5+', tone: 'primary' },
  { label: 'Projects', value: '13+', tone: 'success' },
  { label: 'Domains', value: '5', tone: 'accent' },
  { label: 'Ideas', value: '∞', tone: 'warning' },
] as const

type ProjectTone = 'primary' | 'accent' | 'success' | 'warning'

export type PortfolioProject = {
  name: string
  summary: string
  stack: string[]
  tone: ProjectTone
  pinned: boolean
  articleHref: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
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
    pinned: true,
    articleHref: 'projects/manobela/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/popcorn-prophets/manobela' },
    secondaryCta: { label: 'Open Website', href: 'https://manobela.dev' },
    role: 'Role: Full-stack and DevOps',
    duration: 'Duration: Startup team project, 2025-2026',
    challenge: 'Key Challenge: Keeping frame processing responsive on mobile-constrained hardware',
  },
  {
    name: 'Project HERMES',
    summary:
      'Hazard and Emergency Reporting, Monitoring, and Evaluation System A real-time disaster communication control center that turns chat messages into actionable incident intelligence. ',
    stack: ['Python', 'Typescript', 'Supabase'],
    tone: 'warning',
    pinned: true,
    articleHref: 'projects/hermes/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/popcorn-prophets/project-hermes' },
    secondaryCta: { label: 'Open Website', href: 'https://github.com/popcorn-prophets/project-hermes' },
    role: 'Role: Backend, Applied Role Based Access Control (RBAC)',
    duration: 'Duration: 3 weeks',
    challenge: 'Key Challenge: Mapping domain terminology into usable system entities and workflows',
  },
  {
    name: 'Snakes-Blessings-and-Curses',
    summary:
      'Java OOP board-game engine with extendable rules and event-based tile effects for multiple gameplay variants.',
    stack: ['Java', 'Maven', 'OOP', 'Game Logic'],
    tone: 'primary',
    pinned: false,
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
    pinned: false,
    articleHref: 'projects/derio/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Derio' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/dejely/Derio' },
    role: 'Role: Full-stack Developer',
    duration: 'Duration: Independent build',
    challenge: 'Key Challenge: Keeping data flow simple while supporting realistic finance scenarios',
  },
  {
    name: 'privmotion',
    summary:
      'Privacy-preserving motion analytics that converts visual input into anonymized skeletons, silhouettes, depth surrogates, and kinematic features.',
    stack: ['Python', 'OpenCV', 'YOLO Pose', 'C++', 'CMake'],
    tone: 'accent',
    pinned: false,
    articleHref: 'projects/privmotion/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/privmotion' },
  },
  {
    name: 'quirky-mcp',
    summary:
      'MCP server for creating, validating, explaining, and linking Quirk quantum-circuit JSON through reusable tools.',
    stack: ['TypeScript', 'MCP SDK', 'Zod', 'Vitest', 'Quirk'],
    tone: 'primary',
    pinned: false,
    articleHref: 'projects/quirky-mcp/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/quirky-mcp' },
  },
  {
    name: 'Aniguess',
    summary:
      'Anime comparison game with series, character, and popularity modes backed by scores, streaks, achievements, and leaderboards.',
    stack: ['React', 'TypeScript', 'Supabase', 'Express', 'Jikan API', 'Vite'],
    tone: 'warning',
    pinned: false,
    articleHref: 'projects/aniguess/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Aniguess' },
    secondaryCta: { label: 'Open Website', href: 'https://aniguesser.vercel.app' },
  },
  {
    name: 'pagbutlakUPV',
    summary:
      'Official publication website for Pagbutlak UPV with editorial content, CMS administration, search, SEO, and forms.',
    stack: ['Next.js', 'TypeScript', 'Payload CMS', 'PostgreSQL', 'React'],
    tone: 'success',
    pinned: false,
    articleHref: 'projects/pagbutlak-upv/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/pagbutlakUPV' },
    secondaryCta: { label: 'Open Website', href: 'https://pagbutlak.vercel.app' },
  },
  {
    name: 'K-Easy',
    summary:
      'Boolean simplification tool that generates truth tables, K-maps, Quine-McCluskey steps, SOP/POS expressions, and Verilog.',
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'Verilog'],
    tone: 'primary',
    pinned: false,
    articleHref: 'projects/k-easy/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/K-Easy' },
    secondaryCta: { label: 'Open Website', href: 'https://k-easy.vercel.app' },
  },
  {
    name: 'StackPilot',
    summary:
      'Tauri desktop dashboard for managing Apache, MariaDB, PHP-FPM, service logs, and local PHP project previews.',
    stack: ['React', 'TypeScript', 'Tauri', 'Rust', 'systemd', 'PHP'],
    tone: 'accent',
    pinned: false,
    articleHref: 'projects/stackpilot/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/StackPilot' },
    secondaryCta: {
      label: 'Latest Release',
      href: 'https://github.com/dejely/StackPilot/releases/tag/v0.3.1',
    },
  },
  {
    name: 'Memoraid',
    summary:
      'Offline-first mobile study app with flashcards, tests, notes import, progress tracking, and local SQLite persistence.',
    stack: ['Expo', 'React Native', 'TypeScript', 'SQLite', 'Zustand', 'TanStack Query'],
    tone: 'warning',
    pinned: false,
    articleHref: 'projects/memoraid/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Memoraid' },
    secondaryCta: {
      label: 'Latest Release',
      href: 'https://github.com/dejely/Memoraid/releases/tag/v1.0.3',
    },
  },
  {
    name: 'Polaris',
    summary:
      'Layered crop-supply monitoring engine that tracks LGU shortages and oversupply to identify redistribution opportunities.',
    stack: ['Python', 'SQLite', 'CLI', 'Priority Queues'],
    tone: 'success',
    pinned: false,
    articleHref: 'projects/polaris/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Polaris' },
  },
  {
    name: 'LMS-Extract',
    summary:
      'Authorized Moodle CLI for discovering courses, previewing and downloading files, browser login, and duplicate prevention.',
    stack: ['Python', 'Typer', 'HTTPX', 'BeautifulSoup', 'Playwright'],
    tone: 'primary',
    pinned: false,
    articleHref: 'projects/lms-extract/index.html',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/LMS-Extract' },
  },
] as const

export type TechStackItem = {
  label: string
  iconSrc?: string
  fallback?: string
}

export const TECH_STACK: TechStackItem[] = [
  { label: 'Python', iconSrc: '/tech-icons/python.svg' },
  { label: 'C', iconSrc: '/tech-icons/c.svg' },
  { label: 'C++', iconSrc: '/tech-icons/cpp.svg' },
  { label: 'Java', iconSrc: '/tech-icons/java.svg' },
  { label: 'React', iconSrc: '/tech-icons/react.svg' },
  { label: 'Docker', iconSrc: '/tech-icons/docker.svg' },
  { label: 'Microsoft Azure Cloud', iconSrc: '/tech-icons/azure.svg' },
  { label: 'AWS', iconSrc: '/tech-icons/aws.svg' },
  { label: 'Supabase', iconSrc: '/tech-icons/supabase-icon.svg' },
  { label: 'Firebase', iconSrc: '/tech-icons/firebase.svg' },
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
