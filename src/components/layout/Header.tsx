import { NavLink } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/cn'
import { FileTextIcon, FolderIcon, HomeIcon, PencilIcon } from '../ui/icons'

const tabs = [
  { to: '/', label: 'Home', end: true, icon: HomeIcon },
  { to: '/projects', label: 'Projects', icon: FolderIcon },
  { to: '/blog', label: 'Blog', icon: PencilIcon },
  { to: '/resume', label: 'Resume', icon: FileTextIcon },
]

export function Header() {
  const { toggle } = useTheme()

  return (
    <header className="mx-auto flex max-w-content items-center justify-between px-4 py-2 sm:px-6 sm:py-4">
      <nav className="flex items-center gap-1 sm:gap-5">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) =>
              cn(
                // min-h-[44px] and this padding hold at every breakpoint --
                // sm: used to zero both out for a tighter desktop look, but
                // the sm: breakpoint (640px) is well within phone/tablet
                // touch territory (a phone in landscape, a larger phone in
                // portrait), not just mouse-driven desktop, so that made the
                // tap target shrink to the bare text/icon's own line height
                // on exactly the devices that needed it most.
                'flex min-h-[44px] items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium',
                isActive ? 'text-foreground' : 'text-muted hover:text-foreground',
              )
            }
          >
            <tab.icon className="h-5 w-5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">{tab.label}</span>
          </NavLink>
        ))}
      </nav>
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle theme"
        className="min-h-[44px] rounded-md border border-border px-3.5 py-2 text-xs text-muted hover:bg-surface"
      >
        Theme
      </button>
    </header>
  )
}
