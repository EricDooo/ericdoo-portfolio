import { Link } from 'react-router-dom'
import profilePhoto from '../assets/images/eric.webp'
import { experience } from '../data/experience'
import { projects } from '../data/projects'
import { site, skills } from '../data/site'
import { Tag } from '../components/ui/Tag'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/ui/icons'

export function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <img
          src={profilePhoto}
          alt={site.name}
          width={140}
          height={140}
          loading="eager"
          decoding="async"
          className="h-32 w-32 flex-shrink-0 rounded-lg border border-border object-cover object-top sm:h-36 sm:w-36"
        />
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-foreground">
            {site.name}
          </h1>
          <p className="mt-1 text-muted">
            {site.tagline} &middot; {site.location}
          </p>
          <p className="mt-4 max-w-prose text-foreground">{site.bio}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1.5 text-primary hover:underline"
            >
              <MailIcon className="h-4 w-4" />
              {site.email}
            </a>
            <a href={site.github} className="flex items-center gap-1.5 text-primary hover:underline">
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a href={site.linkedin} className="flex items-center gap-1.5 text-primary hover:underline">
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Experience
        </h2>
        <ul className="mt-4 space-y-6">
          {experience.map((entry) => (
            <li key={entry.organization}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <span className="font-medium text-foreground">
                  {entry.role} &middot;{' '}
                  <a href={entry.organizationHref} className="text-primary hover:underline">
                    {entry.organization}
                  </a>
                </span>
                <span className="text-xs text-muted">{entry.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{entry.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
            Projects
          </h2>
          <Link to="/projects" className="text-sm text-primary hover:underline">
            View all &rarr;
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            // Stretched-link pattern (title's after:inset-0 covers the card)
            // so the GitHub button can be a real sibling <a> instead of
            // nesting an <a> inside an <a>.
            <div
              key={project.title}
              className="group relative rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary"
            >
              <div className="flex items-start justify-between gap-3">
                <a
                  href={project.href}
                  target={project.external ? '_blank' : undefined}
                  rel={project.external ? 'noreferrer' : undefined}
                  className="after:absolute after:inset-0"
                >
                  <h3 className="font-medium text-foreground group-hover:underline">{project.title}</h3>
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
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          Skills
        </h2>
        <dl className="mt-4 space-y-3 text-sm">
          {(
            [
              ['Languages', skills.languages],
              ['Frontend', skills.frontend],
              ['Backend', skills.backend],
              ['Data', skills.data],
              ['Infra', skills.infra],
            ] as const
          ).map(([label, items]) => (
            <div key={label} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <dt className="w-24 flex-shrink-0 text-muted">{label}</dt>
              <dd className="text-foreground">{items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
