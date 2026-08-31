export interface Project {
  title: string
  description: string
  tags: string[]
  href: string
  external?: boolean
  featured?: boolean
  // Optional second link shown as a small GitHub icon alongside the card's
  // main link (which goes to `href`, the live site) -- most entries here
  // only ever had one link (the repo itself, or a hosted product page with
  // no separate public repo), so this only needs setting when both exist.
  githubHref?: string
}

// Trimmed to what's actually ready to show. Add more here as they're ready --
// Task Tracker, etc. can come back.
export const projects: Project[] = [
  {
    title: 'Costco Gas Tracker',
    description:
      'Tracks live Costco gas prices across the US, Canada, the UK, and eight more countries, with full price history and a live comparison against U.S. government regional fuel data.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    href: 'https://ericdoo.com/costcogas',
    external: true,
    featured: true,
    githubHref: 'https://github.com/EricDooo/costco-pump',
  },
  {
    title: 'RoomU',
    description:
      'A roommate-matching app with real-time chat and a swipe feature, built exclusively for students.',
    tags: ['React Native', 'Expo', 'Supabase'],
    href: 'https://aggieworks.org/products/roomu',
    external: true,
    featured: true,
  },
  {
    title: 'AggieExchange',
    description:
      'An online marketplace for UC Davis students, built as a safer alternative to Facebook Marketplace and Craigslist.',
    tags: ['React', 'Prisma', 'Supabase', 'Firebase'],
    href: 'https://aggieworks.org/products/aggieexchange',
    external: true,
    featured: true,
  },
  {
    title: 'Fish Species Classifier',
    description:
      'A 6M-parameter CNN that matched ResNet-50 baseline accuracy with 25% of the parameters, placing 2nd of 36 teams. Served through a Django app reporting per-class accuracy on uploaded images.',
    tags: ['PyTorch', 'Django'],
    href: 'https://github.com/EricDooo/Fish_Classification_CNN',
    external: true,
  },
]
