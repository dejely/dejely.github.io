import type { Project } from '../types'
import { ProjectCard } from './ProjectCard'

type ProjectsSectionProps = {
  featuredProject: Project
  projects: Project[]
}

export function ProjectsSection({ featuredProject, projects }: ProjectsSectionProps) {
  return (
    <section className="projects section-reveal section-reveal-2">
      <ProjectCard project={featuredProject} featured />

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
