import { useEffect, useRef, useState } from 'react'

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
  const scrollLockRef = useRef<{
    label: string
    section: HTMLElement
    expiresAt: number
  } | null>(null)

  useEffect(() => {
    const getSectionItems = () =>
      items
      .map((item) => {
        const section = document.querySelector(item.href)
        return section instanceof HTMLElement ? { label: item.label, section } : null
      })
      .filter((entry): entry is { label: string; section: HTMLElement } => entry !== null)

    const updateActiveFromScroll = () => {
      const sectionItems = getSectionItems()
      if (sectionItems.length === 0) {
        return
      }

      const lock = scrollLockRef.current
      if (lock) {
        const marker = window.innerHeight * 0.35
        const top = lock.section.getBoundingClientRect().top
        const reachedTarget = top <= marker + 12
        const expired = Date.now() >= lock.expiresAt

        if (!reachedTarget && !expired) {
          return
        }

        scrollLockRef.current = null
        if (reachedTarget) {
          setActive(lock.label)
          return
        }
      }

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
    window.addEventListener('hashchange', updateActiveFromScroll)

    return () => {
      window.removeEventListener('scroll', updateActiveFromScroll)
      window.removeEventListener('resize', updateActiveFromScroll)
      window.removeEventListener('hashchange', updateActiveFromScroll)
    }
  }, [items])

  const handleNavClick = (item: NavItem) => {
    setActive(item.label)
    setIsOpen(false)

    const scrollToSection = (attempt = 0) => {
      const element = document.querySelector(item.href)
      if (element instanceof HTMLElement) {
        const distance = Math.abs(element.getBoundingClientRect().top)
        const lockMs = Math.min(1800, Math.max(650, Math.round(distance * 0.9)))

        scrollLockRef.current = {
          label: item.label,
          section: element,
          expiresAt: Date.now() + lockMs,
        }

        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      if (attempt < 8) {
        window.setTimeout(() => scrollToSection(attempt + 1), 60)
      }
    }

    scrollToSection()
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
