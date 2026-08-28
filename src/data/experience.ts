export interface ExperienceEntry {
  role: string
  organization: string
  organizationHref: string
  period: string
  summary: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    organization: 'Symmetry Laser',
    organizationHref: 'https://symmetrylaser.com',
    period: 'Apr 2024 -- Aug 2026',
    summary:
      'Sole engineer for a 50-person manufacturer, with end-to-end ownership of software and infrastructure -- internal and customer-facing alike.',
    highlights: [],
  },
  {
    role: 'Full Stack Engineer',
    organization: 'UC Davis Plant Sciences',
    organizationHref: 'https://www.plantsciences.ucdavis.edu',
    period: 'Apr 2023 -- Apr 2024',
    summary:
      'Built planting-date prediction services with FastAPI and AWS Lambda, surfaced in a Vue component on Drupal.',
    highlights: [],
  },
  {
    role: 'Full Stack Engineer',
    organization: 'AggieWorks',
    organizationHref: 'https://aggieworks.org',
    period: 'Sep 2022 -- Dec 2023',
    summary: 'Built RoomU and AggieExchange, apps for the UC Davis student community.',
    highlights: [],
  },
]
