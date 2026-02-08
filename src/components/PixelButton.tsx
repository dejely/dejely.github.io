import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

const VARIANTS = ['primary', 'secondary', 'accent', 'success'] as const
const SIZES = ['sm', 'md', 'lg'] as const

type Variant = (typeof VARIANTS)[number]
type Size = (typeof SIZES)[number]

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
