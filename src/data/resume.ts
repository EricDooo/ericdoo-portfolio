// Content for the /resume page. Kept separate from experience.ts and
// projects.ts, which feed the shorter summaries on the home page, so this
// stays in sync with the PDF (public/eric-du-resume.pdf) on its own.

export interface ResumeEntry {
  title: string
  subtitle?: string
  href?: string
  period: string
  intro?: string
  bullets: string[]
}

export const resumeExperience: ResumeEntry[] = [
  {
    title: 'Symmetry Laser',
    subtitle: 'Software Engineer',
    href: 'https://symmetrylaser.com',
    period: 'Apr 2024 -- Aug 2026',
    intro:
      'Only software engineer at a 50-person company, reporting to the CTO. Chose what to build and ran it in production.',
    bullets: [
      'Built a 200GB PostgreSQL replica of the core FileMaker database and moved 12+ services onto it, cutting p50 reads from 4s to 10ms. Later used it to recover all 8 hours of writes lost when a failed update corrupted the primary.',
      "Replaced FileMaker's JDBC and ODBC drivers company-wide with a Rust reimplementation of its undocumented wire protocol, adding connection recovery, tracing, and table-affinity pooling that cut p50 latency 4x.",
      'Took 8 services from hand-deployed VMs, where a crash stayed down until someone noticed, to Docker and Gitea CI/CD, reaching 99.9% health-checked uptime and cutting deploys from 20 minutes to 1.',
      'Wrote a service that precompiles CNC programs and streams them over TLS to 19 laser controllers at two sites, cutting worst-case load times from 4 minutes to 100ms, with checksums and network-drive fallback.',
      'Built an AWS Bedrock LLM assistant, piloted with sales reps, that queries company data through read-only Postgres roles scoped to fixed views on the replica, so the database, not the prompt, limits what the model can read.',
      'Built VS Code extensions with completion, hover docs, and live compile errors for two proprietary CNC languages. All 14 engineers adopted them, and floor compile failures went from 5 a week to zero for 5 months.',
    ],
  },
  {
    title: 'UC Davis, Department of Plant Sciences',
    subtitle: 'Full Stack Engineer',
    href: 'https://www.plantsciences.ucdavis.edu',
    period: 'Apr 2023 -- Apr 2024',
    bullets: [
      'Built a FastAPI and AWS Lambda service that predicts planting dates from weather-station data for 30+ researchers.',
      "Shipped fuzzy search over 60,000+ research papers to the department's public site, on MySQL and AWS.",
    ],
  },
  {
    title: 'AggieWorks',
    subtitle: 'Full Stack Engineer',
    href: 'https://aggieworks.org',
    period: 'Sep 2022 -- Dec 2023',
    intro: 'Student-run software team building products for the UC Davis community.',
    bullets: [
      'Built weighted compatibility scoring over 23 criteria for RoomU, a React Native and Go roommate app with 120+ users.',
      'Built full-stack WebSocket messaging with paginated history for AggieExchange, a Next.js marketplace with 160+ users, and cut image p90 from 500ms to 100ms by downscaling and caching uploads.',
    ],
  },
]

export const resumeProjects: ResumeEntry[] = [
  {
    title: 'Costco Gas Tracker',
    subtitle: 'React, FastAPI, Redis, TimescaleDB, Docker',
    href: 'https://github.com/EricDooo/costco-pump',
    period: 'Aug 2026',
    bullets: [
      'Tracks live fuel prices at every Costco station across 11 countries, reconciling three undocumented APIs across two Costco platforms into one feed with full price history in a TimescaleDB hypertable.',
      'Split ingestion into independent Redis/RQ jobs so one slow country never blocks the rest, and self-hosted the Protomaps basemap to run with no third-party map API key or quota.',
      'Deployed with Docker Compose, GitHub Actions, and GHCR to an arm64 VM behind Caddy, and blocked dependency versions less than 14 days old to guard against supply-chain attacks.',
    ],
  },
]

export const resumeSkills: [string, string[]][] = [
  ['Languages', ['Rust', 'Python', 'TypeScript', 'JavaScript', 'C#', 'Go', 'SQL', 'Bash']],
  ['Backend', ['FastAPI', 'Axum', 'Django', 'Node.js', 'REST APIs', 'WebSockets']],
  [
    'Data',
    ['PostgreSQL', 'TimescaleDB', 'PostGIS', 'Redis', 'MySQL', 'InfluxDB', 'Apache Airflow'],
  ],
  [
    'Infra',
    ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Git', 'AWS (Lambda, S3, Bedrock)'],
  ],
  [
    'Observability and Testing',
    ['OpenTelemetry', 'Grafana', 'Loki', 'pytest', 'cargo test', 'Playwright'],
  ],
  ['Frontend', ['React', 'SvelteKit', 'Vue.js', 'Next.js', 'React Native']],
]
