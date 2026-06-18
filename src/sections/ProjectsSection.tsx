import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { PixelButton, PixelCard, PixelSection } from '../components'
import type { PortfolioProject } from '../lib/constants'

type ProjectsSectionProps = {
  projects: readonly PortfolioProject[]
}

type ProjectCardVariant = 'pinned' | 'standard' | 'focus'
type ProjectViewMode = 'focus' | 'grid'

const ALL_PROJECTS_PANEL_ID = 'all-projects-panel'
const PROJECT_VIEW_STORAGE_KEY = 'portfolio-project-view'

function getSlideScrollLeft(track: HTMLElement, slide: HTMLElement) {
  return (
    track.scrollLeft +
    slide.getBoundingClientRect().left -
    track.getBoundingClientRect().left
  )
}

function getInitialProjectViewMode(): ProjectViewMode {
  if (typeof window === 'undefined') {
    return 'focus'
  }

  try {
    const storedView = window.localStorage.getItem(PROJECT_VIEW_STORAGE_KEY)
    return storedView === 'grid' || storedView === 'focus' ? storedView : 'focus'
  } catch {
    return 'focus'
  }
}

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
  const size = variant === 'standard' ? 'sm' : 'md'

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
      {project.secondaryCta ? (
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
      ) : null}
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
  const isFocus = variant === 'focus'
  const cardClassName = [
    isPinned ? 'featured-project pinned-project' : 'project-card',
    isFocus ? 'project-card--focus' : '',
    !isPinned && !isFocus ? 'pixel-fade-in' : '',
    `tone-${project.tone}`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <PixelCard className={cardClassName} hover={!isPinned} scanline={isPinned}>
      {isPinned ? (
        <div className="featured-project__meta">
          <span className="pixel-text-label featured-project__badge">Pinned Project</span>
        </div>
      ) : null}

      {isFocus ? (
        <div className="project-focus-card__meta">
          <span className="pixel-text-label">Project File</span>
        </div>
      ) : null}

      <div className={isPinned ? 'project-bar featured-project__bar' : 'project-bar'} />
      <h3
        className={
          isPinned
            ? 'pixel-text-heading featured-project__title'
            : `pixel-text-heading project-title${isFocus ? ' project-title--focus' : ''}`
        }
      >
        {project.name}
      </h3>
      <p
        className={
          isPinned
            ? 'pixel-text featured-project__copy'
            : `pixel-text project-copy${isFocus ? ' project-copy--focus' : ''}`
        }
      >
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
  const [projectViewMode, setProjectViewMode] = useState<ProjectViewMode>(
    getInitialProjectViewMode,
  )
  const [focusedProjectIndex, setFocusedProjectIndex] = useState(0)
  const focusTrackRef = useRef<HTMLDivElement>(null)
  const focusedProjectIndexRef = useRef(0)
  const scrollTargetIndexRef = useRef<number | null>(null)
  const scrollFrameRef = useRef<number | null>(null)
  const pinnedProjects = projects.filter((project) => project.pinned)
  const otherProjects = projects.filter((project) => !project.pinned)
  const topProjects = pinnedProjects.length > 0 ? pinnedProjects : projects
  const hasAdditionalProjects = pinnedProjects.length > 0 && otherProjects.length > 0
  const focusedProject = otherProjects[focusedProjectIndex]
  const projectCountLabel = `${otherProjects.length} ${
    otherProjects.length === 1 ? 'project' : 'projects'
  }`

  useEffect(() => {
    try {
      window.localStorage.setItem(PROJECT_VIEW_STORAGE_KEY, projectViewMode)
    } catch {
      // The view still works when browser storage is unavailable.
    }
  }, [projectViewMode])

  useEffect(() => {
    if (!showAllProjects || projectViewMode !== 'focus') {
      return undefined
    }

    const frame = window.requestAnimationFrame(() => {
      const track = focusTrackRef.current
      const slide = track?.querySelector<HTMLElement>(
        `[data-project-index="${focusedProjectIndexRef.current}"]`,
      )

      if (track && slide) {
        scrollTargetIndexRef.current = null
        track.scrollTo({ left: getSlideScrollLeft(track, slide), behavior: 'auto' })
      }
    })

    return () => window.cancelAnimationFrame(frame)
  }, [projectViewMode, showAllProjects])

  useEffect(
    () => () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current)
      }
    },
    [],
  )

  const updateFocusedProject = (nextIndex: number, behavior: ScrollBehavior) => {
    const boundedIndex = Math.max(0, Math.min(nextIndex, otherProjects.length - 1))
    const track = focusTrackRef.current
    const slide = track?.querySelector<HTMLElement>(
      `[data-project-index="${boundedIndex}"]`,
    )

    focusedProjectIndexRef.current = boundedIndex
    setFocusedProjectIndex(boundedIndex)

    if (track && slide) {
      scrollTargetIndexRef.current = behavior === 'smooth' ? boundedIndex : null
      track.scrollTo({ left: getSlideScrollLeft(track, slide), behavior })
    }
  }

  const navigateFocusedProject = (nextIndex: number) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    updateFocusedProject(nextIndex, reduceMotion ? 'auto' : 'smooth')
  }

  const handleFocusScroll = () => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current)
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const track = focusTrackRef.current
      if (!track) {
        return
      }

      const scrollTargetIndex = scrollTargetIndexRef.current
      if (scrollTargetIndex !== null) {
        const targetSlide = track.querySelector<HTMLElement>(
          `[data-project-index="${scrollTargetIndex}"]`,
        )

        if (
          targetSlide &&
          Math.abs(getSlideScrollLeft(track, targetSlide) - track.scrollLeft) <= 1
        ) {
          scrollTargetIndexRef.current = null
        }

        return
      }

      const slides = Array.from(
        track.querySelectorAll<HTMLElement>('[data-project-index]'),
      )
      let nearestIndex = focusedProjectIndexRef.current
      let nearestDistance = Number.POSITIVE_INFINITY

      slides.forEach((slide) => {
        const distance = Math.abs(getSlideScrollLeft(track, slide) - track.scrollLeft)
        if (distance < nearestDistance) {
          nearestDistance = distance
          nearestIndex = Number(slide.dataset.projectIndex)
        }
      })

      if (nearestIndex !== focusedProjectIndexRef.current) {
        focusedProjectIndexRef.current = nearestIndex
        setFocusedProjectIndex(nearestIndex)
      }
    })
  }

  const handleManualFocusScrollStart = () => {
    scrollTargetIndexRef.current = null
  }

  const handleFocusKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target) {
      return
    }

    if (event.key === 'ArrowLeft' && focusedProjectIndexRef.current > 0) {
      event.preventDefault()
      navigateFocusedProject(focusedProjectIndexRef.current - 1)
    }

    if (
      event.key === 'ArrowRight' &&
      focusedProjectIndexRef.current < otherProjects.length - 1
    ) {
      event.preventDefault()
      navigateFocusedProject(focusedProjectIndexRef.current + 1)
    }
  }

  return (
    <PixelSection id="projects" title="Projects">
      <div className="pixel-grid pixel-grid--pinned-projects">
        {topProjects.map((project) => (
          <PortfolioProjectCard key={project.name} project={project} variant="pinned" />
        ))}
      </div>

      {hasAdditionalProjects ? (
        <>
          <div
            className={`project-section-controls${
              showAllProjects ? ' project-section-controls--expanded' : ''
            }`}
          >
            <PixelButton
              variant="accent"
              size="md"
              aria-controls={ALL_PROJECTS_PANEL_ID}
              aria-expanded={showAllProjects}
              onClick={() => setShowAllProjects((current) => !current)}
            >
              {showAllProjects ? 'Show pinned only' : 'See all projects'}
            </PixelButton>

            {showAllProjects ? (
              <>
                <div
                  className="project-view-switcher"
                  role="group"
                  aria-label="Project view"
                >
                  <button
                    type="button"
                    className="project-view-switcher__button pixel-text-label"
                    aria-pressed={projectViewMode === 'focus'}
                    onClick={() => setProjectViewMode('focus')}
                  >
                    Focus
                  </button>
                  <button
                    type="button"
                    className="project-view-switcher__button pixel-text-label"
                    aria-pressed={projectViewMode === 'grid'}
                    onClick={() => setProjectViewMode('grid')}
                  >
                    Grid
                  </button>
                </div>
                <span className="project-section-count pixel-text-label">
                  {projectCountLabel}
                </span>
              </>
            ) : null}
          </div>

          {showAllProjects && projectViewMode === 'grid' ? (
            <div
              id={ALL_PROJECTS_PANEL_ID}
              className="pixel-grid pixel-grid--projects all-projects-panel project-grid-view"
            >
              {otherProjects.map((project) => (
                <PortfolioProjectCard key={project.name} project={project} variant="standard" />
              ))}
            </div>
          ) : showAllProjects ? (
            <div id={ALL_PROJECTS_PANEL_ID} className="project-focus all-projects-panel">
              <div
                ref={focusTrackRef}
                className="project-focus__track"
                role="region"
                aria-roledescription="carousel"
                aria-label="All projects"
                tabIndex={0}
                onScroll={handleFocusScroll}
                onPointerDown={handleManualFocusScrollStart}
                onWheel={handleManualFocusScrollStart}
                onKeyDown={handleFocusKeyDown}
              >
                {otherProjects.map((project, index) => (
                  <div
                    key={project.name}
                    className="project-focus__slide"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Project ${index + 1} of ${otherProjects.length}: ${
                      project.name
                    }`}
                    data-project-index={index}
                  >
                    <span className="project-focus__project-number pixel-text-heading">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <PortfolioProjectCard project={project} variant="focus" />
                  </div>
                ))}
              </div>

              <div className="project-focus__navigation">
                <PixelButton
                  variant="secondary"
                  size="sm"
                  className="project-focus__arrow"
                  aria-label="Previous project"
                  title="Previous project"
                  disabled={focusedProjectIndex === 0}
                  onClick={() => navigateFocusedProject(focusedProjectIndexRef.current - 1)}
                >
                  <span aria-hidden="true">&lt;</span>
                </PixelButton>

                <div className="project-focus__position">
                  <span className="project-focus__counter pixel-text-heading" aria-hidden="true">
                    {String(focusedProjectIndex + 1).padStart(2, '0')} /{' '}
                    {String(otherProjects.length).padStart(2, '0')}
                  </span>
                  <div className="project-focus__progress" aria-hidden="true">
                    {otherProjects.map((project, index) => (
                      <span
                        key={project.name}
                        className={`project-focus__progress-block${
                          index === focusedProjectIndex
                            ? ' project-focus__progress-block--active'
                            : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <PixelButton
                  variant="secondary"
                  size="sm"
                  className="project-focus__arrow"
                  aria-label="Next project"
                  title="Next project"
                  disabled={focusedProjectIndex === otherProjects.length - 1}
                  onClick={() => navigateFocusedProject(focusedProjectIndexRef.current + 1)}
                >
                  <span aria-hidden="true">&gt;</span>
                </PixelButton>
              </div>

              <p className="project-view-status" aria-live="polite" aria-atomic="true">
                {focusedProject
                  ? `Project ${focusedProjectIndex + 1} of ${otherProjects.length}: ${
                      focusedProject.name
                    }`
                  : ''}
              </p>
            </div>
          ) : null}
        </>
      ) : null}
    </PixelSection>
  )
}
