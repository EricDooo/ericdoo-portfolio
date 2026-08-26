export function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-sm border border-border bg-surface px-2 py-0.5 text-xs text-muted">
      {children}
    </span>
  )
}
