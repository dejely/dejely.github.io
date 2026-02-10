import { useEffect, useState } from 'react'

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

  useEffect(() => {
    const sectionItems = items
      .map((item) => {
        const section = document.querySelector(item.href)
        return section instanceof HTMLElement ? { label: item.label, section } : null
      })
      .filter((entry): entry is { label: string; section: HTMLElement } => entry !== null)

    if (sectionItems.length === 0) {
      return
    }

    const updateActiveFromScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35
      let current = sectionItems[0]

      for (const entry of sectionItems) {
        if (entry.section.offsetTop <= marker) {
          current = entry
        } else {
          break
        }
      }

      setActive(current.label)
    }

    updateActiveFromScroll()

    window.addEventListener('scroll', updateActiveFromScroll, { passive: true })
    window.addEventListener('resize', updateActiveFromScroll)

    return () => {
      window.removeEventListener('scroll', updateActiveFromScroll)
      window.removeEventListener('resize', updateActiveFromScroll)
    }
  }, [items])

  const handleNavClick = (item: NavItem) => {
    setActive(item.label)
    setIsOpen(false)

    const element = document.querySelector(item.href)
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
