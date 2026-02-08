import type { ReactNode } from 'react'

type PixelCardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
  scanline?: boolean
}

export function PixelCard({
  children,
  className = '',
  hover = true,
  scanline = false,
}: PixelCardProps) {
  const classes = [
    'pixel-card',
    hover ? 'pixel-card--hover' : '',
    scanline ? 'pixel-scanline' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}
