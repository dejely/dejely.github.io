import { PixelSection } from '../components'
import type { TechStackItem } from '../lib/constants'

type TechStackSectionProps = {
  techStack: readonly TechStackItem[]
}

export default function TechStackSection({ techStack }: TechStackSectionProps) {
  return (
    <PixelSection id="tech-stack" title="Tech Stack" variant="alt">
      <div className="tech-stack">
        {techStack.map((item) => (
          <div key={item.label} className="tech-stack__item">
            <div className="tech-stack__icon" aria-hidden="true">
              {item.iconSrc ? (
                <img
                  src={item.iconSrc}
                  alt=""
                  className="tech-stack__img"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="pixel-text-label tech-stack__fallback">
                  {item.fallback ?? item.label.slice(0, 2)}
                </span>
              )}
            </div>
            <div className="pixel-text tech-stack__label">{item.label}</div>
          </div>
        ))}
      </div>
    </PixelSection>
  )
}
