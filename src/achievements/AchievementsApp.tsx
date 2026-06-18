import type { MouseEvent } from 'react'
import { CustomCursor, PixelButton, PixelCard } from '../components'
import { navigateClientSide } from '../lib/clientNavigation'
import { ACHIEVEMENTS, type Achievement } from '../lib/constants'
import '../styles'

function groupAchievementsByYear(achievements: readonly Achievement[]) {
  const grouped = new Map<number, Achievement[]>()

  for (const achievement of achievements) {
    const yearAchievements = grouped.get(achievement.year) ?? []
    yearAchievements.push(achievement)
    grouped.set(achievement.year, yearAchievements)
  }

  return [...grouped.entries()].sort(([yearA], [yearB]) => yearB - yearA)
}

type AchievementsAppProps = {
  animateIntro?: boolean
}

export default function AchievementsApp({
  animateIntro = true,
}: AchievementsAppProps) {
  const achievementsByYear = groupAchievementsByYear(ACHIEVEMENTS)
  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    if (navigateClientSide(event.currentTarget.href)) {
      event.preventDefault()
    }
  }

  return (
    <div className="pixel-root pixel-texture achievements-page">
      <CustomCursor />

      <header className="achievements-header">
        <div className="achievements-header__inner">
          <a
            className="pixel-text-heading achievements-header__logo"
            href="/"
            onClick={handleHomeClick}
          >
            {'<DEV/>'}
          </a>
          <PixelButton href="/" variant="secondary" size="sm">
            ← Back Home
          </PixelButton>
        </div>
      </header>

      <main className="achievements-main">
        <section
          className={`achievements-intro${animateIntro ? ' pixel-fade-in' : ''}`}
        >
          <p className="pixel-text-label achievements-intro__eyebrow">Progress Log</p>
          <h1 className="pixel-text-heading achievements-intro__title">Achievements</h1>
          <p className="pixel-text achievements-intro__copy">
            A collection of competition results and milestones earned while building,
            learning, and solving difficult problems.
          </p>
        </section>

        <div className="achievements-timeline">
          {achievementsByYear.map(([year, achievements]) => (
            <section key={year} className="achievement-year" aria-labelledby={`year-${year}`}>
              <div className="achievement-year__heading">
                <h2
                  id={`year-${year}`}
                  className="pixel-text-heading achievement-year__title"
                >
                  {year}
                </h2>
                <span className="achievement-year__line" aria-hidden="true" />
              </div>

              <div className="achievement-list">
                {achievements.map((achievement) => (
                  <PixelCard
                    key={`${achievement.year}-${achievement.name}`}
                    className={`achievement-card tone-${achievement.tone}`}
                    hover={false}
                  >
                    <div className="achievement-card__bar" aria-hidden="true" />
                    <div className="achievement-card__meta">
                      <span className="pixel-text-label achievement-card__result">
                        {achievement.result}
                      </span>
                      <span className="pixel-text-small achievement-card__category">
                        {achievement.category}
                      </span>
                      <span className="pixel-text-small achievement-card__year">
                        {achievement.year}
                      </span>
                    </div>

                    <h3 className="pixel-text-heading achievement-card__title">
                      {achievement.name}
                    </h3>

                    <ul className="achievement-card__highlights">
                      {achievement.highlights.map((highlight) => (
                        <li key={highlight} className="pixel-text achievement-card__highlight">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </PixelCard>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="achievements-footer">
        <p className="pixel-text-small">© 2026 Dejel Cyrus De Asis</p>
      </footer>
    </div>
  )
}
