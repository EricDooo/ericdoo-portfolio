import { useTheme } from '../../hooks/useTheme'

export function Header() {
  const { toggle } = useTheme()

  return (
    <header className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
      <a href="/" className="text-sm font-medium text-foreground">
        ericdoo
      </a>
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle theme"
        className="rounded-md border border-border px-3 py-1.5 text-xs text-muted hover:bg-surface"
      >
        Theme
      </button>
    </header>
  )
}
