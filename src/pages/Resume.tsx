import type { ReactNode } from 'react'
import { education, site, skills } from '../data/site'
import { experience } from '../data/experience'
import { projects } from '../data/projects'
import { Button } from '../components/ui/Button'

interface TimelineItem {
  key: string
  title: ReactNode
  meta: string
  detail: string
  href?: string
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative mt-4">
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-[3px] top-4 w-px bg-border"
      />
      {items.map((item) => {
        const row = (
          <div className="grid gap-0.5 sm:flex sm:items-baseline sm:justify-between sm:gap-6">
            <span className="flex-shrink-0">
              <span className="font-bold text-foreground">{item.title}</span>{' '}
              <span className="text-muted">({item.meta})</span>
            </span>
            <span className="text-sm text-muted sm:text-right">{item.detail}</span>
          </div>
        )
        const blockClass =
          '-mx-3 min-w-0 flex-1 rounded-md px-3 py-2.5 transition-colors'
        return (
          <li key={item.key} className="relative flex gap-4">
            <span className="relative z-10 mt-[17px] h-[7px] w-[7px] flex-shrink-0 rounded-full bg-foreground" />
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`${blockClass} block hover:bg-surface`}
              >
                {row}
              </a>
            ) : (
              <div className={blockClass}>{row}</div>
            )}
          </li>
        )
      })}
    </ol>
  )
}

const skillLines: [string, string[]][] = [
  ['Languages', skills.languages],
  ['Frontend', skills.frontend],
  ['Backend', skills.backend],
  ['Data', skills.data],
  ['Infra', skills.infra],
]

const contactLinks: { label: string; href: string }[] = [
  { label: 'email', href: `mailto:${site.email}` },
  { label: 'linkedin', href: site.linkedin },
  { label: 'github', href: site.github },
  { label: 'pdf', href: site.resumeUrl },
]

export function Resume() {
  return (
    <div className="mx-auto max-w-content px-6 py-16 font-mono">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{site.name}</h1>
          <p className="mt-1 text-sm text-muted">
            {site.tagline} &middot; {site.location}
          </p>
        </div>
        <a href={site.resumeUrl} download>
          <Button>Download PDF</Button>
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
          Experience
        </h2>
        <Timeline
          items={experience.map((entry) => ({
            key: entry.organization,
            title: entry.organization,
            meta: entry.period,
            detail: `${entry.role} -- ${entry.summary}`,
            href: entry.organizationHref,
          }))}
        />
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
          Projects
        </h2>
        <Timeline
          items={projects.map((project) => ({
            key: project.title,
            title: project.title,
            meta: project.tags.join(', '),
            detail: project.description,
            href: project.external ? project.href : undefined,
          }))}
        />
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
          Skills
        </h2>
        <dl className="mt-4 space-y-2 text-sm">
          {skillLines.map(([label, items]) => (
            <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <dt className="w-24 flex-shrink-0 font-bold text-foreground">{label}</dt>
              <dd className="text-muted">{items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
          Education
        </h2>
        <Timeline
          items={[
            {
              key: education.school,
              title: education.school,
              meta: education.period,
              detail: `${education.degree} -- GPA ${education.gpa}`,
              href: education.href,
            },
          ]}
        />
      </section>

      <div className="mt-12 border-t border-border pt-6 text-sm text-muted">
        {contactLinks.map((link, i) => (
          <span key={link.label}>
            {i > 0 && ' / '}
            <a href={link.href} className="text-primary hover:underline">
              [{link.label}]
            </a>
          </span>
        ))}
      </div>
    </div>
  )
}
