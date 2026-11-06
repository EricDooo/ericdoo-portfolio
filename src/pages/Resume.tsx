import type { ReactNode } from 'react'
import { education, site } from '../data/site'
import { resumeExperience, resumeProjects, resumeSkills } from '../data/resume'
import type { ResumeEntry } from '../data/resume'
import { Button } from '../components/ui/Button'

interface TimelineItem {
  key: string
  title: ReactNode
  subtitle?: ReactNode
  meta: string
  detail?: string
  bullets?: string[]
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
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="font-bold text-foreground">
                {item.title}
                {item.subtitle && (
                  <span className="font-normal text-muted"> -- {item.subtitle}</span>
                )}
              </span>
              <span className="flex-shrink-0 text-sm text-muted">{item.meta}</span>
            </div>
            {item.detail && <p className="mt-1 text-sm text-muted">{item.detail}</p>}
            {item.bullets && (
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-border">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
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

function toTimelineItem(entry: ResumeEntry): TimelineItem {
  return {
    key: entry.title,
    title: entry.title,
    subtitle: entry.subtitle,
    meta: entry.period,
    detail: entry.intro,
    bullets: entry.bullets,
    href: entry.href,
  }
}

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
        <Timeline items={resumeExperience.map(toTimelineItem)} />
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
          Projects
        </h2>
        <Timeline items={resumeProjects.map(toTimelineItem)} />
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
          Skills
        </h2>
        <dl className="mt-4 space-y-2 text-sm">
          {resumeSkills.map(([label, items]) => (
            <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <dt className="flex-shrink-0 font-bold text-foreground sm:w-52">{label}</dt>
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
              subtitle: education.degree,
              meta: education.period,
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
