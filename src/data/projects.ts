export interface Project {
  title: string
  description: string
  technologies: string[]
  href: string
  external?: boolean
}

// TODO: add more projects here as they're ready. Each entry is one card.
export const projects: Project[] = [
  {
    title: 'Costco Gas Tracker',
    description:
      'Nationwide Costco gas price tracker for the US. React frontend, FastAPI + PostGIS backend.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostGIS'],
    href: '/costcogas',
  },
]
