import { NavLink } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/cn'
import { FileTextIcon, FolderIcon, HomeIcon, PencilIcon } from '../ui/icons'

const tabs = [
  { to: '/', label: 'Home', end: true, icon: HomeIcon },
  { to: '/projects', label: 'Projects Archive', icon: FolderIcon },
  { to: '/blog', label: 'Blog', icon: PencilIcon },
  { to: '/resume', label: 'Resume', icon: FileTextIcon },
]

export function Header() {
  const { toggle } = useTheme()

  return (
    <header className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
      <nav className="flex items-center gap-5">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-1.5 text-sm font-medium',
                isActive ? 'text-foreground' : 'text-muted hover:text-foreground',
              )
            }
          >
            <tab.icon className="h-4 w-4" />
            <span className="hidden sm:inline">{tab.label}</span>
          </NavLink>
        ))}
      </nav>
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
