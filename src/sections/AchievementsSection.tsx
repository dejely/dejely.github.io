import { PixelButton, PixelCard, PixelSection } from '../components'
import type { Achievement } from '../lib/constants'

type AchievementsSectionProps = {
  achievements: readonly Achievement[]
}

const PREVIEW_LIMIT = 2

export default function AchievementsSection({
  achievements,
}: AchievementsSectionProps) {
  const featuredAchievements = [...achievements]
    .sort((achievementA, achievementB) => achievementB.year - achievementA.year)
    .slice(0, PREVIEW_LIMIT)

  return (
    <PixelSection id="achievements" title="Achievements" variant="alt">
      <p className="pixel-text home-achievements__intro">
        Competition results and milestones earned through building, learning, and
        solving difficult problems.
      </p>

      <div className="home-achievements__grid">
        {featuredAchievements.map((achievement) => (
          <PixelCard
            key={`${achievement.year}-${achievement.name}`}
            className={`home-achievement-card tone-${achievement.tone}`}
          >
            <div className="home-achievement-card__bar" aria-hidden="true" />

            <div className="home-achievement-card__meta">
              <span className="pixel-text-label home-achievement-card__result">
                {achievement.result}
              </span>
              <span className="pixel-text-small home-achievement-card__detail">
                {achievement.category}
              </span>
              <span className="pixel-text-small home-achievement-card__detail">
                {achievement.year}
              </span>
            </div>

            <h3 className="pixel-text-heading home-achievement-card__title">
              {achievement.name}
            </h3>
            <p className="pixel-text home-achievement-card__copy">
              {achievement.highlights[0]}
            </p>
          </PixelCard>
        ))}
      </div>

      <div className="home-achievements__actions">
        <PixelButton
          variant="accent"
          size="lg"
          href="/achievements/"
          aria-label="View all achievements"
        >
          View All Achievements
        </PixelButton>
      </div>
    </PixelSection>
  )
}
