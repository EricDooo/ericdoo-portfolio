export interface Post {
  slug: string
  title: string
  date: string // ISO date
  excerpt: string
  body: string[] // paragraphs
}

export const posts: Post[] = []
