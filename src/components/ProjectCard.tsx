import type { Project } from '../types'

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const HeadingTag = featured ? 'h2' : 'h3'
  const cardClassName = featured ? 'project-card project-featured' : 'project-card'
  const ctaClassName = featured ? 'cta cta-strong' : 'cta'

  return (
    <article className={cardClassName}>
      {featured && <p className="project-badge">Featured Project</p>}
      <HeadingTag>{project.name}</HeadingTag>
      <p>{project.summary}</p>
      <ul className="stack-list">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a className={ctaClassName} href={project.href} aria-label={project.ctaLabel}>
        {project.ctaLabel}
      </a>
    </article>
  )
}
