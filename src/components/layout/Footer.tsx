export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-content px-6 py-8 text-xs text-muted">
      &copy; {year} ericdoo.com
    </footer>
  )
}
