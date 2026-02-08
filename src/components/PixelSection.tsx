import type { ReactNode } from 'react'

type PixelSectionProps = {
  id?: string
  title?: string
  children: ReactNode
  className?: string
  variant?: 'base' | 'alt'
}

export function PixelSection({
  id,
  title,
  children,
  className = '',
  variant = 'base',
}: PixelSectionProps) {
  const classes = [
    'pixel-section',
    variant === 'alt' ? 'pixel-section--alt' : 'pixel-section--base',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={classes}>
      <div className="pixel-section__inner">
        {title ? (
          <h2 className="pixel-text-heading pixel-section__title">{title}</h2>
        ) : null}
        {children}
      </div>
    </section>
  )
}
