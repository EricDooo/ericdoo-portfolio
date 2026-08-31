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
              <div className="flex items-center justify-between gap-3">
                <a
                  href={project.href}
                  target={project.external ? '_blank' : undefined}
                  rel={project.external ? 'noreferrer' : undefined}
                  className="after:absolute after:inset-0"
                >
                  <h2 className="font-medium text-foreground group-hover:underline">
                    {project.title}
                  </h2>
                </a>
                {project.githubHref && (
                  // Same border/text-muted/hover language as the header's
                  // Theme button, so it reads as an obvious button rather
                  // than a bare icon someone might not realize is clickable.
                  <a
                    href={project.githubHref}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 flex flex-shrink-0 items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted hover:border-primary hover:text-foreground"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                )}
              </div>
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
