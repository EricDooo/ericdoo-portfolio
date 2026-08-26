import { Link, useParams } from 'react-router-dom'
import { posts } from '../data/posts'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="mx-auto max-w-content px-6 py-16">
        <p className="text-muted">Post not found.</p>
        <Link to="/blog" className="mt-2 inline-block text-primary hover:underline">
          &larr; Back to blog
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-content px-6 py-16">
      <Link to="/blog" className="text-sm text-muted hover:text-foreground">
        &larr; Blog
      </Link>
      <h1 className="mt-4 text-2xl font-medium text-foreground">{post.title}</h1>
      <time dateTime={post.date} className="mt-1 block text-xs text-muted">
        {formatDate(post.date)}
      </time>
      <div className="prose-content mt-8 max-w-prose space-y-4 text-foreground">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
