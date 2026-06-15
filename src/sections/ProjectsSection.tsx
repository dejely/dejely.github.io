import { useState } from 'react'
import { PixelButton, PixelCard, PixelSection } from '../components'
import type { PortfolioProject } from '../lib/constants'

type ProjectsSectionProps = {
  projects: readonly PortfolioProject[]
}

type ProjectCardVariant = 'pinned' | 'standard'

const ALL_PROJECTS_PANEL_ID = 'all-projects-panel'

function getArticleHref(path: string) {
  return `${import.meta.env.BASE_URL}${path}`.replace(/([^:]\/)\/+/g, '$1')
}

function ProjectActions({
  project,
  variant,
}: {
  project: PortfolioProject
  variant: ProjectCardVariant
}) {
  const size = variant === 'pinned' ? 'md' : 'sm'

  return (
    <div className="project-actions">
      <PixelButton
        variant="success"
        size={size}
        href={getArticleHref(project.articleHref)}
        aria-label={`View article for ${project.name}`}
      >
        View
      </PixelButton>
      <PixelButton
        variant="primary"
        size={size}
        href={project.primaryCta.href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Open ${project.name} repository`}
      >
        {project.primaryCta.label}
      </PixelButton>
      <PixelButton
        variant="secondary"
        size={size}
        href={project.secondaryCta.href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${project.secondaryCta.label} for ${project.name}`}
      >
        {project.secondaryCta.label}
      </PixelButton>
    </div>
  )
}

function PortfolioProjectCard({
  project,
  variant,
}: {
  project: PortfolioProject
  variant: ProjectCardVariant
}) {
  const isPinned = variant === 'pinned'
  const cardClassName = isPinned
    ? `featured-project pinned-project tone-${project.tone}`
    : `project-card tone-${project.tone} pixel-fade-in`

  return (
    <PixelCard className={cardClassName} hover={!isPinned} scanline={isPinned}>
      {isPinned ? (
        <div className="featured-project__meta">
          <span className="pixel-text-label featured-project__badge">Pinned Project</span>
        </div>
      ) : null}

      <div className={isPinned ? 'project-bar featured-project__bar' : 'project-bar'} />
      <h3 className={isPinned ? 'pixel-text-heading featured-project__title' : 'pixel-text-heading project-title'}>
        {project.name}
      </h3>
      <p className={isPinned ? 'pixel-text featured-project__copy' : 'pixel-text project-copy'}>
        {project.summary}
      </p>

      {isPinned ? (
        <div className="featured-project__facts">
          {project.role ? (
            <p className="pixel-text-small featured-project__fact">{project.role}</p>
          ) : null}
          {project.duration ? (
            <p className="pixel-text-small featured-project__fact">{project.duration}</p>
          ) : null}
          {project.challenge ? (
            <p className="pixel-text-small featured-project__fact">{project.challenge}</p>
          ) : null}
        </div>
      ) : null}

      <div className={isPinned ? 'project-tags featured-project__tags' : 'project-tags'}>
        {project.stack.map((item) => (
          <span key={item} className="pixel-text-small pixel-tag">
            {item}
          </span>
        ))}
      </div>

      <ProjectActions project={project} variant={variant} />
    </PixelCard>
  )
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const pinnedProjects = projects.filter((project) => project.pinned)
  const otherProjects = projects.filter((project) => !project.pinned)
  const topProjects = pinnedProjects.length > 0 ? pinnedProjects : projects
  const hasAdditionalProjects = pinnedProjects.length > 0 && otherProjects.length > 0

  return (
    <PixelSection id="projects" title="Projects">
      <div className="pixel-grid pixel-grid--pinned-projects">
        {topProjects.map((project) => (
          <PortfolioProjectCard key={project.name} project={project} variant="pinned" />
        ))}
      </div>

      {hasAdditionalProjects ? (
        <>
          <div className="project-section-controls">
            <PixelButton
              variant="accent"
              size="md"
              aria-controls={ALL_PROJECTS_PANEL_ID}
              aria-expanded={showAllProjects}
              onClick={() => setShowAllProjects((current) => !current)}
            >
              {showAllProjects ? 'Show pinned only' : 'See all projects'}
            </PixelButton>
          </div>

          {showAllProjects ? (
            <div
              id={ALL_PROJECTS_PANEL_ID}
              className="pixel-grid pixel-grid--projects all-projects-panel"
            >
              {otherProjects.map((project) => (
                <PortfolioProjectCard key={project.name} project={project} variant="standard" />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
    </PixelSection>
  )
}
