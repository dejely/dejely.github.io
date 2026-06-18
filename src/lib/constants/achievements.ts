export type AchievementTone = 'primary' | 'accent' | 'success' | 'warning'

export type Achievement = {
  name: string
  year: number
  result: string
  category: string
  highlights: readonly string[]
  tone: AchievementTone
}

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    name: 'Manobela Hackathon',
    year: 2025,
    result: 'Champion',
    category: 'Hackathon',
    highlights: [
      'Developed Manobela, a real-time driver monitoring system focused on detecting drowsiness and distraction through computer-vision signals.',
      'Designed and implemented a mobile-to-cloud monitoring pipeline using lightweight telemetry transmission and cloud-assisted processing.',
    ],
    tone: 'success',
  },
  {
    name: 'Hack4Gov',
    year: 2025,
    result: '1st Runner-Up',
    category: 'CTF',
    highlights: [
      'Earned 1st runner-up and top-performing participant recognition in the Hack4Gov 2025 cybersecurity competition.',
      'Competed in network analysis, digital forensics, cryptography, web exploitation, and Linux-based investigation challenges.',
    ],
    tone: 'primary',
  },
] as const
