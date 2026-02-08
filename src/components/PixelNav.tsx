import { useState } from 'react'

type NavItem = {
  label: string
  href: string
}

type PixelNavProps = {
  items: readonly NavItem[]
  logo?: string
}

export function PixelNav({ items, logo = '<DEV/>' }: PixelNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState(items[0]?.label ?? '')

  const handleNavClick = (item: NavItem) => {
    setActive(item.label)
    setIsOpen(false)

    const element = document.querySelector(item.href)
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
  }

  return (
    <nav className="pixel-nav">
      <div className="pixel-nav__inner">
        <div className="pixel-nav__logo pixel-text-heading">{logo}</div>

        <div className="pixel-nav__links">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              className="pixel-nav__item pixel-text-label"
              data-active={active === item.label}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="pixel-nav__toggle pixel-text-label"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isOpen ? (
        <div className="pixel-nav__mobile">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              className="pixel-nav__item pixel-text-label"
              data-active={active === item.label}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </nav>
  )
}
