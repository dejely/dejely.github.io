import { useEffect, useRef, useState } from 'react'
import { drawWorkshop, workshopLayout } from '../lib/workshopScene'
import type { WorkshopAssets, WorkshopManifest } from '../lib/workshopScene'

const ART = `${import.meta.env.BASE_URL}workshop/`

export function HeroBackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const syncRef = useRef<() => void>(() => {})
  const [paused, setPaused] = useState(false)
  const [status, setStatus] = useState<'poster' | 'ready' | 'reduced' | 'failed'>(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduced' : 'poster')

  useEffect(() => {
    const canvas = canvasRef.current
    const stage = stageRef.current
    const ctx = canvas?.getContext('2d', { alpha: false })
    if (!canvas || !stage || !ctx) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = motion.matches
    const mobile = window.matchMedia('(max-width: 600px)')
    const finePointer = window.matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine)')
    const controller = new AbortController()
    let disposed = false
    let visible = false
    let assets: WorkshopAssets | null = null
    let failed = false
    let elapsed = 0
    let last: number | null = null
    let lastDraw = -Infinity
    let raf = 0
    let parallax = 0
    let layout = workshopLayout(mobile.matches)

    const render = () => {
      if (assets) drawWorkshop(ctx, assets, elapsed, layout, parallax)
    }
    const allowed = () => !disposed && assets && visible && !document.hidden && !reducedMotion && !pausedRef.current
    const tick = (now: number) => {
      raf = 0
      if (!allowed()) return
      if (last !== null) elapsed += now - last
      last = now
      if (now - lastDraw >= 1000 / 30) {
        render()
        lastDraw = now
      }
      raf = requestAnimationFrame(tick)
    }
    const sync = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
      last = null
      lastDraw = -Infinity
      if (allowed()) raf = requestAnimationFrame(tick)
    }
    syncRef.current = sync
    const resize = () => {
      if (!finePointer.matches) parallax = 0
      layout = workshopLayout(mobile.matches)
      canvas.width = layout.width
      canvas.height = layout.height
      render()
    }
    const preference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches
      parallax = 0
      setStatus(reducedMotion ? 'reduced' : assets ? 'ready' : failed ? 'failed' : 'poster')
      sync()
    }
    const pointer = (event: PointerEvent) => {
      if (finePointer.matches && !reducedMotion && !pausedRef.current) {
        parallax = Math.max(-1, Math.min(1, (event.clientX / window.innerWidth - 0.5) * 2))
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      sync()
    })
    observer.observe(stage)
    motion.addEventListener('change', preference)
    mobile.addEventListener('change', resize)
    document.addEventListener('visibilitychange', sync)
    window.addEventListener('pointermove', pointer, { passive: true })
    resize()
    // Posters are ordinary eager images; motion preference never delays content.
    const load = async (name: string) => {
      const img = new Image()
      img.src = `${ART}${name}.png`
      await img.decode()
      return img
    }
    Promise.all([
      fetch(`${ART}manifest.json`, { signal: controller.signal }).then(response => {
        if (!response.ok) throw new Error('Workshop atlas unavailable')
        return response.json() as Promise<WorkshopManifest>
      }),
      load('developer'), load('robot'), load('project'), load('props'),
    ]).then(([manifest, developer, robot, project, props]) => {
      if (disposed) return
      assets = { manifest, developer, robot, project, props }
      render()
      setStatus(reducedMotion ? 'reduced' : 'ready')
      sync()
    }).catch(() => {
      failed = true
      if (!disposed) setStatus(reducedMotion ? 'reduced' : 'failed')
    })
    return () => {
      disposed = true
      controller.abort()
      cancelAnimationFrame(raf)
      observer.disconnect()
      motion.removeEventListener('change', preference)
      mobile.removeEventListener('change', resize)
      document.removeEventListener('visibilitychange', sync)
      window.removeEventListener('pointermove', pointer)
      syncRef.current = () => {}
    }
  }, [])

  const togglePause = () => {
    pausedRef.current = !pausedRef.current
    setPaused(pausedRef.current)
    syncRef.current()
  }
  return (
    <div className="workshop" data-status={status}>
      <div ref={stageRef} className="workshop__stage" aria-hidden="true">
        <picture>
          <source media="(max-width: 600px)" srcSet={`${ART}poster-mobile.png`} />
          <img className="workshop__poster" src={`${ART}poster-desktop.png`} width="480" height="128" alt="" fetchPriority="high" />
        </picture>
        <canvas ref={canvasRef} className="workshop__canvas" hidden={status !== 'ready'} />
      </div>
      <button className="workshop__control" type="button" onClick={togglePause}
        aria-pressed={paused} disabled={status !== 'ready'}>
        {status === 'reduced' || status === 'failed' ? 'Static background' : paused ? 'Resume background' : 'Pause background'}
      </button>
    </div>
  )
}
