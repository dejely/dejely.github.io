import { useEffect, useState } from 'react'
import App from './App'
import AchievementsApp from './achievements/AchievementsApp'
import {
  CLIENT_NAVIGATION_EVENT,
  normalizeClientPath,
  type ClientNavigationDetail,
} from './lib/clientNavigation'

const HOME_METADATA = {
  title: 'Dejel | Developer Portfolio',
  description: 'Computer Science undergraduate from University of the Philippines',
}

const ACHIEVEMENTS_METADATA = {
  title: 'Achievements | Dejel Cyrus De Asis',
  description: 'Competition results and notable achievements by Dejel Cyrus De Asis.',
}

function updatePageMetadata(pathname: string) {
  const metadata =
    pathname === '/achievements/' ? ACHIEVEMENTS_METADATA : HOME_METADATA
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')

  document.title = metadata.title
  description?.setAttribute('content', metadata.description)
}

export default function PortfolioRouter() {
  const [pathname, setPathname] = useState(() =>
    normalizeClientPath(window.location.pathname),
  )
  const [transitionId, setTransitionId] = useState(0)

  useEffect(() => {
    updatePageMetadata(pathname)
  }, [pathname])

  useEffect(() => {
    const showRoute = (nextPathname: string) => {
      setPathname(normalizeClientPath(nextPathname))
      setTransitionId((currentId) => currentId + 1)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    const handleNavigation = (event: Event) => {
      const navigationEvent = event as CustomEvent<ClientNavigationDetail>
      const url = new URL(navigationEvent.detail.href, window.location.href)

      if (url.href === window.location.href) {
        return
      }

      window.history.pushState({}, '', url)
      showRoute(url.pathname)
    }

    const handlePopState = () => {
      showRoute(window.location.pathname)
    }

    window.addEventListener(CLIENT_NAVIGATION_EVENT, handleNavigation)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener(CLIENT_NAVIGATION_EVENT, handleNavigation)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return (
    <div className="portfolio-router">
      {pathname === '/achievements/' ? <AchievementsApp /> : <App />}
      {transitionId > 0 ? (
        <div
          key={transitionId}
          className="route-transition-overlay"
          aria-hidden="true"
          onAnimationEnd={() => setTransitionId(0)}
        />
      ) : null}
    </div>
  )
}
