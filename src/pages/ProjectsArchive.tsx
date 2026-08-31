import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { SearchInput } from '../components/ui/SearchInput'
import { Tag } from '../components/ui/Tag'
import { GitHubIcon } from '../components/ui/icons'

export function ProjectsArchive() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return projects
    return projects.filter((project) => {
      const haystack = [project.title, project.description, ...project.tags]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query])

  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <h1 className="text-2xl font-medium text-foreground">Projects</h1>
      <div className="mt-6 max-w-sm">
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search projects"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-muted">No projects match "{query}".</p>
      ) : (
        <ul className="mt-8 divide-y divide-border">
          {filtered.map((project) => (
            <li key={project.title} className="group relative py-6 first:pt-0">
              {project.githubHref && (
                <a
                  href={project.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="absolute right-0 top-6 z-10 text-muted hover:text-primary"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
              )}
              <a
                href={project.href}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noreferrer' : undefined}
                className="block after:absolute after:inset-0"
              >
                <h2 className="font-medium text-foreground group-hover:underline">
                  {project.title}
                </h2>
              </a>
              <p className="mt-1.5 text-sm text-muted">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
