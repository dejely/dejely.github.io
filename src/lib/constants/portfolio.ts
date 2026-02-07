import type { HeroContent, Project } from '../../types'

export const HERO_CONTENT: HeroContent = {
  eyebrow: 'Developer Portfolio',
  title: 'lorem ipsum.',
  copy: 'lorem ipsum.',
}

{/* 
{
  name: 'Project Name',
  summary: 'Short description',
  stack: ['React', 'TypeScript'],
  ctaLabel: 'View Project',
  href: 'https://your-link.com'
}
*/}

export const FEATURED_PROJECT: Project = {
  name: 'Manobela',
  summary:
    'A real-time driver monitoring system that uses computer vision to detect unsafe driving behaviors with only a mobile phone.',
  stack: ['React', 'TypeScript', 'Design Systems', 'Performance'],
  ctaLabel: 'Explore Manobela',
  href: 'https://github.com/popcorn-prophets/manobela',
}

export const PROJECTS: Project[] = [
  {
    name: 'Derio',
    summary:
      '',
    stack: [''],
    ctaLabel: 'View Derio',
    href: '#',
  },
  {
    name: 'vAppNew',
    summary:
      '',
    stack: [''],
    ctaLabel: 'View vAppNew',
    href: '#',
  },
]
