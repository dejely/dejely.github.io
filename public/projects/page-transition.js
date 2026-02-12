(() => {
  const html = document.documentElement

  window.addEventListener('pageshow', () => {
    html.classList.remove('page-leaving')
  })

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target
      if (!(target instanceof Element)) {
        return
      }

      const anchor = target.closest('a')
      if (!anchor) {
        return
      }

      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        anchor.target === '_blank' ||
        anchor.hasAttribute('download')
      ) {
        return
      }

      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return
      }

      let nextUrl
      try {
        nextUrl = new URL(href, window.location.href)
      } catch {
        return
      }

      if (nextUrl.origin !== window.location.origin) {
        return
      }

      event.preventDefault()
      html.classList.add('page-leaving')
      window.setTimeout(() => {
        window.location.assign(nextUrl.href)
      }, 220)
    },
    { capture: true },
  )
})()
