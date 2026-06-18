export const CLIENT_NAVIGATION_EVENT = 'portfolio:navigate'

export type ClientNavigationDetail = {
  href: string
}

const CLIENT_ROUTES = new Set(['/', '/achievements/'])
const DOCUMENT_TRANSITION_MS = 70

function isClientPath(pathname: string) {
  return pathname === '/' || pathname === '/achievements' || pathname.startsWith('/achievements/')
}

export function normalizeClientPath(pathname: string) {
  if (pathname === '/achievements' || pathname.startsWith('/achievements/')) {
    return '/achievements/'
  }

  return '/'
}

export function navigateClientSide(href: string) {
  if (typeof window === 'undefined') {
    return false
  }

  let url: URL
  try {
    url = new URL(href, window.location.href)
  } catch {
    return false
  }

  if (url.origin !== window.location.origin || !isClientPath(url.pathname)) {
    return false
  }

  const normalizedPath = normalizeClientPath(url.pathname)
  if (!CLIENT_ROUTES.has(normalizedPath)) {
    return false
  }

  window.dispatchEvent(
    new CustomEvent<ClientNavigationDetail>(CLIENT_NAVIGATION_EVENT, {
      detail: { href: url.href },
    }),
  )

  return true
}

export function navigateDocumentWithOverlay(href: string) {
  if (
    typeof window === 'undefined' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return false
  }

  const overlay = document.createElement('div')
  overlay.className = 'route-transition-overlay'
  overlay.setAttribute('aria-hidden', 'true')
  document.body.append(overlay)

  window.setTimeout(() => {
    window.location.assign(href)
  }, DOCUMENT_TRANSITION_MS)

  return true
}
