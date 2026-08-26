import type { Project } from '../../data/projects'
import { Badge } from './Badge'

export function ProjectCard({ title, description, technologies, href, external }: Project) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="block rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary"
    >
      <h3 className="text-lg font-medium text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </a>
  )
}
