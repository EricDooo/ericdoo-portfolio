import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'

export function Projects() {
  return (
    <section className="mx-auto max-w-content px-6 py-12">
      <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
        Projects
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
