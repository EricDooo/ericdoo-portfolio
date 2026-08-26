export interface Project {
  title: string
  description: string
  tags: string[]
  href: string
  external?: boolean
  featured?: boolean
}

// Trimmed to what's actually ready to show. Add more here as they're ready --
// Costco Gas Tracker, Fish Classification, Task Tracker, etc. can come back.
export const projects: Project[] = [
  {
    title: 'RoomU',
    description:
      'A roommate-matching app with real-time chat and a swipe feature, built exclusively for students.',
    tags: ['React Native', 'Expo', 'Supabase'],
    href: 'https://apps.apple.com/us/app/roomu-by-aggieworks/id6448738916',
    external: true,
    featured: true,
  },
  {
    title: 'AggieExchange',
    description:
      'An online marketplace for UC Davis students, built as a safer alternative to Facebook Marketplace and Craigslist.',
    tags: ['React', 'Prisma', 'Supabase', 'Firebase'],
    href: 'https://aggieexchange.com',
    external: true,
    featured: true,
  },
]
