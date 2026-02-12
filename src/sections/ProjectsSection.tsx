import { PixelButton, PixelCard, PixelSection } from '../components'
import type { PortfolioProject } from '../lib/constants'

type ProjectsSectionProps = {
  projects: readonly PortfolioProject[]
}

function getArticleHref(path: string) {
  return `${import.meta.env.BASE_URL}${path}`.replace(/([^:]\/)\/+/g, '$1')
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [featuredProject, ...otherProjects] = projects

  return (
    <PixelSection id="projects" title="Projects">
      {featuredProject ? (
        <PixelCard className={`featured-project tone-${featuredProject.tone}`} hover={false} scanline>
          <div className="featured-project__meta">
            <span className="pixel-text-label featured-project__badge">Highlighted Project</span>
          </div>

          <div className="project-bar featured-project__bar" />
          <h3 className="pixel-text-heading featured-project__title">{featuredProject.name}</h3>
          <p className="pixel-text featured-project__copy">{featuredProject.summary}</p>

          <div className="featured-project__facts">
            {featuredProject.role ? (
              <p className="pixel-text-small featured-project__fact">{featuredProject.role}</p>
            ) : null}
            {featuredProject.duration ? (
              <p className="pixel-text-small featured-project__fact">{featuredProject.duration}</p>
            ) : null}
            {featuredProject.challenge ? (
              <p className="pixel-text-small featured-project__fact">{featuredProject.challenge}</p>
            ) : null}
          </div>

          <div className="project-tags featured-project__tags">
            {featuredProject.stack.map((item) => (
              <span key={item} className="pixel-text-small pixel-tag">
                {item}
              </span>
            ))}
          </div>

          <div className="project-actions">
            <PixelButton
              variant="success"
              size="md"
              href={getArticleHref(featuredProject.articleHref)}
              aria-label={`View article for ${featuredProject.name}`}
            >
              View
            </PixelButton>
            <PixelButton
              variant="primary"
              size="md"
              href={featuredProject.primaryCta.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open ${featuredProject.name} repository`}
            >
              {featuredProject.primaryCta.label}
            </PixelButton>
            <PixelButton
              variant="secondary"
              size="md"
              href={featuredProject.secondaryCta.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open ${featuredProject.name} on GitHub`}
            >
              {featuredProject.secondaryCta.label}
            </PixelButton>
          </div>
        </PixelCard>
      ) : null}

      <div className="pixel-grid pixel-grid--projects">
        {otherProjects.map((project) => (
          <PixelCard key={project.name} className={`project-card tone-${project.tone} pixel-fade-in`}>
            <div className="project-bar" />
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
              <PixelButton
                variant="success"
                size="sm"
                href={getArticleHref(project.articleHref)}
                aria-label={`View article for ${project.name}`}
              >
                View
              </PixelButton>
              <PixelButton
                variant="primary"
                size="sm"
                href={project.primaryCta.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open ${project.name} repository`}
              >
                {project.primaryCta.label}
              </PixelButton>
              <PixelButton
                variant="secondary"
                size="sm"
                href={project.secondaryCta.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open ${project.name} on GitHub`}
              >
                {project.secondaryCta.label}
              </PixelButton>
            </div>
          </PixelCard>
        ))}
      </div>
    </PixelSection>
  )
}
