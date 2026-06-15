import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'

const INTERACTIVE_SELECTOR = [
  'a',
  'button',
  '[role="button"]',
  '.pixel-button',
  '.pixel-card',
  '.pixel-nav__item',
  '.pixel-nav__toggle',
].join(',')

const TRAILS = ['primary', 'accent', 'success'] as const
const SPARKS = [
  { tone: 'primary', x: '-14px', y: '-12px' },
  { tone: 'accent', x: '14px', y: '-10px' },
  { tone: 'success', x: '-12px', y: '13px' },
  { tone: 'warning', x: '13px', y: '12px' },
] as const

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const pressTimeoutRef = useRef<number | null>(null)
  const targetRef = useRef({ x: -80, y: -80 })
  const currentRef = useRef({ x: -80, y: -80 })
  const hasPointerRef = useRef(false)
  const visibleRef = useRef(false)
  const interactiveRef = useRef(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateAvailability = () => {
      setIsEnabled(finePointerQuery.matches && !reducedMotionQuery.matches)
    }

    updateAvailability()
    finePointerQuery.addEventListener('change', updateAvailability)
    reducedMotionQuery.addEventListener('change', updateAvailability)

    return () => {
      finePointerQuery.removeEventListener('change', updateAvailability)
      reducedMotionQuery.removeEventListener('change', updateAvailability)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('custom-cursor-active', isEnabled)

    return () => {
      document.body.classList.remove('custom-cursor-active')
    }
  }, [isEnabled])

  useEffect(() => {
    if (!isEnabled) {
      return undefined
    }

    const setInteractiveState = (nextValue: boolean) => {
      if (interactiveRef.current === nextValue) {
        return
      }

      interactiveRef.current = nextValue
      setIsInteractive(nextValue)
    }

    const setVisibleState = (nextValue: boolean) => {
      if (visibleRef.current === nextValue) {
        return
      }

      visibleRef.current = nextValue
      setIsVisible(nextValue)
    }

    const moveCursor = () => {
      const cursor = cursorRef.current
      if (cursor) {
        const current = currentRef.current
        const target = targetRef.current

        current.x += (target.x - current.x) * 0.44
        current.y += (target.y - current.y) * 0.44
        cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`
      }

      animationFrameRef.current = window.requestAnimationFrame(moveCursor)
    }

    const handlePointerMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY }

      if (!hasPointerRef.current) {
        hasPointerRef.current = true
        currentRef.current = targetRef.current
        setVisibleState(true)
      }

      const target = event.target
      setInteractiveState(
        target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR)),
      )
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (pressTimeoutRef.current !== null) {
        window.clearTimeout(pressTimeoutRef.current)
      }

      targetRef.current = { x: event.clientX, y: event.clientY }
      currentRef.current = targetRef.current

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      }

      setIsPressed(true)
      pressTimeoutRef.current = window.setTimeout(() => {
        setIsPressed(false)
      }, 180)
    }

    const handlePointerLeave = () => {
      setVisibleState(false)
    }

    const handlePointerEnter = () => {
      if (hasPointerRef.current) {
        setVisibleState(true)
      }
    }

    animationFrameRef.current = window.requestAnimationFrame(moveCursor)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown)
    document.documentElement.addEventListener('pointerleave', handlePointerLeave)
    document.documentElement.addEventListener('pointerenter', handlePointerEnter)

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }

      if (pressTimeoutRef.current !== null) {
        window.clearTimeout(pressTimeoutRef.current)
      }

      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave)
      document.documentElement.removeEventListener('pointerenter', handlePointerEnter)
    }
  }, [isEnabled])

  if (!isEnabled) {
    return null
  }

  const className = [
    'custom-cursor',
    isVisible ? 'is-visible' : '',
    isInteractive ? 'is-interactive' : '',
    isPressed ? 'is-pressed' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return createPortal(
    <div ref={cursorRef} className={className} aria-hidden="true">
      <span className="custom-cursor__trail-group">
        {TRAILS.map((tone) => (
          <span key={tone} className={`custom-cursor__trail custom-cursor__trail--${tone}`} />
        ))}
      </span>

      <span className="custom-cursor__spark-group">
        {SPARKS.map((spark) => (
          <span
            key={spark.tone}
            className={`custom-cursor__spark custom-cursor__spark--${spark.tone}`}
            style={
              {
                '--spark-x': spark.x,
                '--spark-y': spark.y,
            } as CSSProperties
            }
          />
        ))}
      </span>
    </div>,
    document.body,
  )
}
