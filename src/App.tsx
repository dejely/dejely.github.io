import StackIcon from 'tech-stack-icons'
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

type Tone = 'primary' | 'accent' | 'success' | 'warning'

const toneColors: Record<Tone, string> = {
  primary: 'var(--pixel-primary)',
  accent: 'var(--pixel-accent)',
  success: 'var(--pixel-success)',
  warning: 'var(--pixel-warning)',
}

function App() {
  const [featuredProject, ...otherProjects] = PROJECTS

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
              <PixelButton variant="primary" size="lg" href={HERO_CONTENT.primaryCta.href}>
                {HERO_CONTENT.primaryCta.label}
              </PixelButton>
              <PixelButton variant="secondary" size="lg" href={HERO_CONTENT.secondaryCta.href}>
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
              <PixelCard key={card.title}>
                <div className="about-card">
                  <div
                    className="about-card__badge pixel-text-label"
                    style={{ backgroundColor: toneColors[card.tone] }}
                  >
                    {card.badge}
                  </div>
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
                <div key={stat.label} className="stats-item">
                  <div className="pixel-text-heading stats-value" style={{ color: toneColors[stat.tone] }}>
                    {stat.value}
                  </div>
                  <div className="pixel-text-small stats-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </PixelCard>
        </PixelSection>

        <PixelSection id="projects" title="Projects">
          {featuredProject ? (
            <PixelCard className="featured-project" hover={false} scanline>
              <div className="featured-project__meta">
                <span className="pixel-text-label featured-project__badge">Highlighted Project</span>
              </div>
              <div
                className="project-bar featured-project__bar"
                style={{ backgroundColor: toneColors[featuredProject.tone] }}
              />
              <h3 className="pixel-text-heading featured-project__title">{featuredProject.name}</h3>
              <p className="pixel-text featured-project__copy">{featuredProject.summary}</p>

              <div className="project-tags featured-project__tags">
                {featuredProject.stack.map((item) => (
                  <span key={item} className="pixel-text-small pixel-tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <PixelButton variant="primary" size="md" href={featuredProject.primaryCta.href}>
                  {featuredProject.primaryCta.label}
                </PixelButton>
                <PixelButton
                  variant="secondary"
                  size="md"
                  href={featuredProject.secondaryCta.href}
                >
                  {featuredProject.secondaryCta.label}
                </PixelButton>
              </div>
            </PixelCard>
          ) : null}

          <div className="pixel-grid pixel-grid--projects">
            {otherProjects.map((project) => (
              <PixelCard key={project.name} className="pixel-fade-in">
                <div className="project-bar" style={{ backgroundColor: toneColors[project.tone] }} />
                <h3 className="pixel-text-heading project-title">{project.name}</h3>
                <p className="pixel-text project-copy">{project.summary}</p>

                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item} className="pixel-text-small pixel-tag">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <PixelButton variant="primary" size="sm" href={project.primaryCta.href}>
                    {project.primaryCta.label}
                  </PixelButton>
                  <PixelButton variant="secondary" size="sm" href={project.secondaryCta.href}>
                    {project.secondaryCta.label}
                  </PixelButton>
                </div>
              </PixelCard>
            ))}
          </div>
        </PixelSection>

        <PixelSection id="tech-stack" title="Tech Stack" variant="alt">
          <div className="tech-stack">
            {TECH_STACK.map((item) => (
              <div key={item.label} className="tech-stack__item">
                <div
                  className="tech-stack__icon"
                  aria-hidden="true"
                  style={item.iconBackground ? { background: item.iconBackground } : undefined}
                >
                  {item.iconUrl ? (
                    <img src={item.iconUrl} alt="" className="tech-stack__img" loading="lazy" />
                  ) : item.icon ? (
                    <StackIcon
                      name={item.icon}
                      variant={item.iconVariant ?? 'light'}
                      className="tech-stack__svg"
                    />
                  ) : (
                    <span className="pixel-text-label tech-stack__fallback">
                      {item.fallback ?? item.label.slice(0, 2)}
                    </span>
                  )}
                </div>
                <div className="pixel-text tech-stack__label">{item.label}</div>
              </div>
            ))}
          </div>
        </PixelSection>

        <PixelSection id="contact" title="Connect">
          <div className="pixel-contact">
            <PixelCard hover={false} className="pixel-contact__card">
              <p className="pixel-text pixel-contact__copy">
                Ready to build something bold and blocky? Let&apos;s craft a standout digital
                experience together.
              </p>

              <div className="pixel-contact__actions">
                {CONTACT_LINKS.map((link) => (
                  <PixelButton
                    key={link.label}
                    variant={link.variant}
                    size="lg"
                    href={link.href}
                  >
                    {link.label}
                  </PixelButton>
                ))}
              </div>

              <div className="pixel-contact__footer">
                <p className="pixel-text-small">{FOOTER_NOTE}</p>
              </div>
            </PixelCard>
          </div>
        </PixelSection>
      </main>
    </div>
  )
}

export default App
