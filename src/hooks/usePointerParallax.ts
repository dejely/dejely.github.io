import { useEffect, useMemo, useState, type CSSProperties } from 'react'

type ParallaxPosition = {
  x: number
  y: number
}

export function usePointerParallax() {
  const [parallax, setParallax] = useState<ParallaxPosition>({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const onPointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      setParallax({ x, y })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return useMemo(
    () =>
      ({
        '--parallax-x': parallax.x.toFixed(4),
        '--parallax-y': parallax.y.toFixed(4),
      }) as CSSProperties,
    [parallax.x, parallax.y],
  )
}
