import type { IconName } from 'tech-stack-icons'

export const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_CONTENT = {
  eyebrow: 'Minecraft-Inspired Developer',
  title: 'Pixel-Perfect Interfaces. Solid Systems.',
  copy:
    'I craft blocky, modern web experiences with clean architecture, accessible UI, and intentional performance.',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Get in Touch', href: '#contact' },
} as const

export const ABOUT_CARDS = [
  {
    title: 'Who I Am',
    copy:
      'A Computer Science Undergraduate at University of the Philippines Visayas and the Founder of Popcorn Prophets organization',
    tone: 'primary',
    badge: 'PROFILE',
  },
  {
    title: 'What I Do',
    copy:
      'I build practical, production-minded software across Python, Java, C/C++, and modern web stacks, with projects spanning computer vision safety systems, game architecture, and domain-focused tools like finance and logistics apps.',
    tone: 'accent',
    badge: 'MISSION',
  },
] as const

export const STAT_BLOCKS = [
  { label: 'Years', value: '6+', tone: 'primary' },
  { label: 'Projects', value: '48', tone: 'success' },
  { label: 'Launches', value: '120+', tone: 'accent' },
  { label: 'Ideas', value: '∞', tone: 'warning' },
] as const

export const PROJECTS = [
    {
    name: 'Manobela',
    summary:
      'Manobela is a real-time driver monitoring system that uses computer vision to detect unsafe driving behaviors with only a mobile phone.',
    stack: ['Python', 'FastAPI', 'OpenCV', 'Mediapipe', 'WebRTC','React', 'TypeScript', 'Expo', 'Nextjs', ],
    tone: 'accent',
    primaryCta: { label: 'View Repo', href: 'https://github.com/popcorn-prophets/manobela' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/popcorn-prophets/manobela' },
  },
  {
    name: 'Snakes-Blessings-and-Curses',
    summary:
      'Java-based OOP board game with custom mechanics inspired by Snakes and Ladders.',
    stack: ['Java', 'Maven',],
    tone: 'primary',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Snakes-Blessings-and-Curses' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/dejely/Snakes-Blessings-and-Curses' },
  },
  {
    name: 'Derio',
    summary:
      'Personal finance manager project focused on practical data handling and core product flows.',
    stack: ['Python', 'Finance Tools',],
    tone: 'success',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Derio' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/dejely/Derio' },
  },
  {
    name: 'Polaris',
    summary:
      'Logistics and supply-chain management prototype with a clear domain-oriented focus.',
    stack: ['Python', 'Logistics', 'Supply Chain'],
    tone: 'warning',
    primaryCta: { label: 'View Repo', href: 'https://github.com/dejely/Polaris' },
    secondaryCta: { label: 'Open GitHub', href: 'https://github.com/dejely/Polaris' },
  },
] as const

export type TechStackItem = {
  label: string
  icon?: IconName
  iconUrl?: string
  iconVariant?: 'light' | 'dark' | 'grayscale'
  iconBackground?: string
  fallback?: string
}

export const TECH_STACK: TechStackItem[] = [
  { label: 'Docker', icon: 'docker' },
  { label: 'AWS', icon: 'aws', iconVariant: 'dark' },
  { 
    label: 'C', 
    iconUrl: 'https://icon.icepanel.io/Technology/svg/C.svg' 
  },
  { label: 'C++', icon: 'c++' },
  {
    label: 'Microsoft Azure Cloud',
    iconUrl: 'https://icon.icepanel.io/Technology/svg/Azure.svg',
  },
  { label: 'Firebase', icon: 'firebase' },
  { label: 'Java', icon: 'java' },
  { label: 'Python', iconUrl: 'https://icon.icepanel.io/Technology/svg/Python.svg' },
  { label: 'MongoDB', icon: 'mongodb' },
  { label: 'Kali Linux', icon: 'linux' },
] as const

export const CONTACT_LINKS = [
  { label: 'Email Me', href: 'mailto:deasisdejel08@gmail.com', variant: 'primary' },
  { label: 'GitHub', href: 'https://github.com/dejely', variant: 'secondary' },
  { label: 'LinkedIn', href: 'www.linkedin.com/in/dejel-cyrus-de-asis-9567172b0', variant: 'secondary' },
] as const

export const FOOTER_NOTE = '© 2026 Pixel Developer. Crafted with blocks and code.' as const
