import type { CSSProperties } from 'react'

const STAR_POINTS = [
  { x: '6%', y: '14%', delay: '0s' },
  { x: '16%', y: '21%', delay: '0.4s' },
  { x: '27%', y: '12%', delay: '0.8s' },
  { x: '35%', y: '24%', delay: '1.2s' },
  { x: '46%', y: '11%', delay: '0.3s' },
  { x: '54%', y: '19%', delay: '1.4s' },
  { x: '62%', y: '13%', delay: '0.9s' },
  { x: '73%', y: '22%', delay: '1.8s' },
  { x: '82%', y: '10%', delay: '0.6s' },
  { x: '91%', y: '18%', delay: '1.1s' },
] as const

export function HeroBackgroundScene() {
  return (
    <div className="pixel-hero__scene" aria-hidden="true">
      <div className="hero-bg">
        <div className="hero-bg__haze" />

        <div className="hero-bg__stars">
          {STAR_POINTS.map((point, index) => (
            <span
              key={`${point.x}-${point.y}`}
              className="hero-bg__star"
              style={
                {
                  '--star-x': point.x,
                  '--star-y': point.y,
                  '--star-delay': point.delay,
                  '--star-size': index % 3 === 0 ? '3px' : '2px',
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className="hero-bg__platform hero-bg__platform--left">
          <span className="hero-bg__grass" />
        </div>
        <div className="hero-bg__platform hero-bg__platform--right">
          <span className="hero-bg__grass" />
        </div>
        <div className="hero-bg__void" />

        <div className="hero-char hero-char--pilot">
          <span className="hero-char__shadow" />
          <span className="hero-char__sprite">
            <span className="hero-char__head">
              <span className="hero-char__hair" />
              <span className="hero-char__eye hero-char__eye--left" />
              <span className="hero-char__eye hero-char__eye--right" />
            </span>
            <span className="hero-char__torso" />
            <span className="hero-char__arm hero-char__arm--front" />
            <span className="hero-char__arm hero-char__arm--back" />
            <span className="hero-char__leg hero-char__leg--left" />
            <span className="hero-char__leg hero-char__leg--right" />
          </span>
        </div>

        <div className="hero-char hero-char--sentinel">
          <span className="hero-char__shadow" />
          <span className="hero-char__sprite">
            <span className="hero-char__head">
              <span className="hero-char__visor" />
            </span>
            <span className="hero-char__torso" />
            <span className="hero-char__arm hero-char__arm--front" />
            <span className="hero-char__arm hero-char__arm--back" />
            <span className="hero-char__leg hero-char__leg--left" />
            <span className="hero-char__leg hero-char__leg--right" />
            <span className="hero-char__antenna" />
          </span>
        </div>

        <span className="hero-bg__orb" />
      </div>
    </div>
  )
}
