import { Suspense, lazy } from 'react'
import './App.css'
import { PixelButton, PixelCard, PixelNav, PixelSection } from './components'
import {
  ABOUT_CARDS,
  CONTACT_LINKS,
  FOOTER_NOTE,
  HERO_CONTENT,
  NAV_ITEMS,
  PROJECTS,
  STAT_BLOCKS,
  TECH_STACK,
} from './lib/constants'

const ProjectsSection = lazy(() => import('./sections/ProjectsSection'))
const TechStackSection = lazy(() => import('./sections/TechStackSection'))
const ContactSection = lazy(() => import('./sections/ContactSection'))

type SectionSkeletonProps = {
  title: string
  variant?: 'base' | 'alt'
}

function SectionSkeleton({ title, variant = 'base' }: SectionSkeletonProps) {
  return (
    <PixelSection title={title} variant={variant}>
      <div className="section-skeleton" aria-hidden="true" />
    </PixelSection>
  )
}

function App() {
  return (
    <div className="pixel-root pixel-texture">
      <PixelNav items={NAV_ITEMS} />

      <main className="pixel-main">
        <section id="hero" className="pixel-hero">
          <div className="pixel-hero__inner pixel-fade-in">
            <div className="pixel-hero__icon" aria-hidden="true">
              <span className="pixel-text-heading pixel-hero__glyph">{'</>'}</span>
            </div>

            <p className="pixel-text-label pixel-eyebrow">{HERO_CONTENT.eyebrow}</p>
            <h1 className="pixel-text-heading pixel-hero__title">{HERO_CONTENT.title}</h1>
            <p className="pixel-text pixel-hero__copy">{HERO_CONTENT.copy}</p>

            <div className="pixel-hero__actions">
              <PixelButton
                variant="primary"
                size="lg"
                href={HERO_CONTENT.primaryCta.href}
                aria-label="Jump to projects section"
              >
                {HERO_CONTENT.primaryCta.label}
              </PixelButton>
              <PixelButton
                variant="secondary"
                size="lg"
                href={HERO_CONTENT.secondaryCta.href}
                aria-label="Jump to contact section"
              >
                {HERO_CONTENT.secondaryCta.label}
              </PixelButton>
            </div>

            <div className="pixel-hero__pixels" aria-hidden="true">
              <span className="pixel-block pixel-block--primary" />
              <span className="pixel-block pixel-block--accent" />
              <span className="pixel-block pixel-block--success" />
            </div>
          </div>
        </section>

        <PixelSection id="about" title="About" variant="alt">
          <div className="pixel-grid pixel-grid--cards">
            {ABOUT_CARDS.map((card) => (
              <PixelCard key={card.title} className={`about-card-shell tone-${card.tone}`}>
                <div className="about-card">
                  <div className="about-card__badge pixel-text-label">{card.badge}</div>
                  <h3 className="pixel-text-heading about-card__title">{card.title}</h3>
                  <p className="pixel-text about-card__copy">{card.copy}</p>
                </div>
              </PixelCard>
            ))}
          </div>

          <div className="pixel-section__spacer" />

          <PixelCard hover={false} className="stats-card">
            <div className="stats-grid">
              {STAT_BLOCKS.map((stat) => (
                <div key={stat.label} className={`stats-item tone-${stat.tone}`}>
                  <div className="pixel-text-heading stats-value">{stat.value}</div>
                  <div className="pixel-text-small stats-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </PixelCard>
        </PixelSection>

        <Suspense fallback={<SectionSkeleton title="Projects" />}>
          <ProjectsSection projects={PROJECTS} />
        </Suspense>

        <Suspense fallback={<SectionSkeleton title="Tech Stack" variant="alt" />}>
          <TechStackSection techStack={TECH_STACK} />
        </Suspense>

        <Suspense fallback={<SectionSkeleton title="Connect" />}>
          <ContactSection contactLinks={CONTACT_LINKS} footerNote={FOOTER_NOTE} />
        </Suspense>
      </main>
    </div>
  )
}

export default App
