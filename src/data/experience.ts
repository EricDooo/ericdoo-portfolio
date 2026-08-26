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
    role: 'Full Stack Engineer',
    organization: 'UC Davis Plant Sciences',
    organizationHref: 'https://www.plantsciences.ucdavis.edu',
    period: 'Apr 2023 -- Present',
    summary:
      'Developed and managed a suite of websites on the UC Davis Plant Sciences domain, including prediction models and research databases.',
    highlights: [
      'Built weather models from local weather station data to predict effective rice, bean, and corn planting dates.',
      'Used AWS Lambda, Python, and JavaScript to serve data to Vue.js and Drupal frontends over a RESTful API.',
      'Built and maintained a database of 50k+ research papers with fuzzy search on metadata.',
    ],
  },
  {
    role: 'Full Stack Engineer',
    organization: 'AggieWorks',
    organizationHref: 'https://aggieworks.org',
    period: 'Sep 2023 -- Present',
    summary:
      "Built and deployed applications for UC Davis students: RoomU, AggieExchange, and the AggieWorks site.",
    highlights: [
      'RoomU: a roommate-matching app with real-time chat and a swipe feature, built for students.',
      'Implemented image caching, auth, and a matching algorithm across 23 features, backed by Supabase.',
      'AggieExchange: a campus-local marketplace with pagination, image caching, and safe user-to-user messaging.',
    ],
  },
]
