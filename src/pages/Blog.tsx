import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function Blog() {
  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <h1 className="text-2xl font-medium text-foreground">Blog</h1>
      {posts.length === 0 ? (
        <p className="mt-8 text-sm text-muted">Nothing here yet -- check back soon.</p>
      ) : (
        <ul className="mt-8 divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug} className="py-6 first:pt-0">
              <Link to={`/blog/${post.slug}`} className="group block">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h2 className="font-medium text-foreground group-hover:underline">
                    {post.title}
                  </h2>
                  <time dateTime={post.date} className="text-xs text-muted">
                    {formatDate(post.date)}
                  </time>
                </div>
                <p className="mt-1.5 text-sm text-muted">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
