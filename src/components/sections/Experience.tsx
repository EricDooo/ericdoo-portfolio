import { experience } from '../../data/experience'

export function Experience() {
  return (
    <section className="mx-auto max-w-content px-6 py-12">
      <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
        Experience
      </h2>
      <ul className="mt-4 space-y-6">
        {experience.map((entry) => (
          <li key={`${entry.organization}-${entry.role}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="font-medium text-foreground">
                {entry.role} &middot; {entry.organization}
              </span>
              <span className="text-xs text-muted">{entry.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{entry.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
