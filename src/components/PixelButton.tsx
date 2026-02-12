import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'accent' | 'success'
type Size = 'sm' | 'md' | 'lg'

type PixelButtonBase = {
  variant?: Variant
  size?: Size
  className?: string
  disabled?: boolean
  children: ReactNode
}

type PixelButtonAsButton = PixelButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type PixelButtonAsLink = PixelButtonBase &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type PixelButtonProps = PixelButtonAsButton | PixelButtonAsLink
const PAGE_TRANSITION_MS = 220

function getInternalNavigationHref(
  href: string,
  target: AnchorHTMLAttributes<HTMLAnchorElement>['target'],
  download: AnchorHTMLAttributes<HTMLAnchorElement>['download'],
) {
  if (typeof window === 'undefined') {
    return null
  }

  if (download || (target && target !== '_self')) {
    return null
  }

  if (
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('javascript:')
  ) {
    return null
  }

  try {
    const url = new URL(href, window.location.href)
    if (url.origin !== window.location.origin) {
      return null
    }
    return url.href
  } catch {
    return null
  }
}

export function PixelButton({
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  children,
  ...props
}: PixelButtonProps) {
  const classes = [
    'pixel-button',
    `pixel-button--${variant}`,
    `pixel-button--${size}`,
    'pixel-text-label',
    disabled ? 'is-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (typeof props.href === 'string') {
    const { href, onClick, ...rest } = props as PixelButtonAsLink

    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : rest.tabIndex}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
            return
          }

          onClick?.(event)
          if (event.defaultPrevented) {
            return
          }

          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
            return
          }

          const targetHref = getInternalNavigationHref(href, rest.target, rest.download)
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          if (!targetHref || reduceMotion) {
            return
          }

          event.preventDefault()
          document.documentElement.classList.add('page-leaving')
          window.setTimeout(() => {
            window.location.assign(targetHref)
          }, PAGE_TRANSITION_MS)
        }}
        {...rest}
      >
        {children}
      </a>
    )
  }

  const { type = 'button', ...rest } = props as PixelButtonAsButton

  return (
    <button className={classes} disabled={disabled} type={type} {...rest}>
      {children}
    </button>
  )
}
