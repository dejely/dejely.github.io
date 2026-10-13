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
  { name: 'AI SUMMIT Reed Elsevier Hackathon',
    year: 2026,
    result: '1st Runner Up',
    category: 'Hackathon',
    highlights: [
      "Another podium finisher for the team Popcorn Prophets.",
      'Leaded the deployment in a 4 hour-constrained development.',
    ],
    tone: 'primary',
  },
  {
    name: 'Quantum Computing and Cybersecurity Hackathon',
    year: 2026,
    result: 'Champion',
    category: 'CTF - Jeopardy',
    highlights: [
      "Won 1st place in the Philippines' first quantum-themed cybersecurity CTF competition.",
      'Solved challenges involving quantum computing concepts, cryptography, cybersecurity, and circuit-based problem solving.',
    ],
    tone: 'accent',
  },
  {
    name: 'CSS TrackTech Hackathon',
    year: 2026,
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
    category: 'CTF - Jeopardy',
    highlights: [
      'Earned 1st runner-up and top-performing participant recognition in the Hack4Gov 2025 cybersecurity competition.',
      'Competed in network analysis, digital forensics, cryptography, web exploitation, and Linux-based investigation challenges.',
    ],
    tone: 'primary',
  },
] as const
