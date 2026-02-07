import type { HeroContent } from '../types'

type HeroSectionProps = {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="hero section-reveal section-reveal-1">
      <p className="eyebrow">{content.eyebrow}</p>
      <h1>{content.title}</h1>
      <p className="hero-copy">{content.copy}</p>
    </section>
  )
}
