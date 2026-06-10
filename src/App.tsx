import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import {
  BookOpenCheck,
  Brain,
  ChevronLeft,
  ChevronRight,
  Command,
  FileArchive,
  FlaskConical,
  GraduationCap,
  LayoutDashboard,
  Library,
  ListChecks,
  Map,
  PencilLine,
  ScrollText,
  Workflow,
} from 'lucide-react'
import * as Tooltip from '@radix-ui/react-tooltip'
import './App.css'
import { navigationItems, teacherNavigationItem } from './content'
import { CommandPalette } from './components/CommandPalette'

const iconMap: Record<string, typeof LayoutDashboard> = {
  dashboard: LayoutDashboard,
  map: Map,
  cases: BookOpenCheck,
  lab: FlaskConical,
  workspace: PencilLine,
  templates: ScrollText,
  projects: Workflow,
  contributions: FileArchive,
  quiz: Brain,
  resources: Library,
  teacher: GraduationCap,
}

function usePersistedSidebar() {
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem('ai4matexp-sidebar') === 'collapsed'
  })
  const toggle = () => {
    setCollapsed((current) => {
      const next = !current
      window.localStorage.setItem('ai4matexp-sidebar', next ? 'collapsed' : 'expanded')
      return next
    })
  }
  return { collapsed, toggle }
}

function NavIconLink({
  item,
  collapsed,
}: {
  item: { id: string; label: string; path: string; icon: string; badge?: string }
  collapsed: boolean
}) {
  const Icon = iconMap[item.icon] ?? ListChecks
  const link = (
    <NavLink
      key={item.id}
      to={item.path}
      end={item.path === '/'}
      className={({ isActive }) => `side-link ${isActive ? 'is-active' : ''}`}
      aria-label={item.label}
    >
      <Icon aria-hidden="true" />
      {!collapsed && <span>{item.label}</span>}
      {!collapsed && item.badge && <strong>{item.badge}</strong>}
    </NavLink>
  )

  if (!collapsed) return link
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{link}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="tooltip-content" side="right" sideOffset={8}>
          {item.label}
          <Tooltip.Arrow className="tooltip-arrow" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

function Sidebar({ onOpenCommand }: { onOpenCommand: () => void }) {
  const { collapsed, toggle } = usePersistedSidebar()
  return (
    <aside className={`sidebar ${collapsed ? 'is-collapsed' : ''}`}>
      <NavLink to="/" className="brand-block">
        <div className="brand-mark">A4</div>
        {!collapsed && (
          <div>
            <div className="brand-title">AI4MatExp</div>
            <div className="brand-subtitle">Course Edition</div>
          </div>
        )}
      </NavLink>

      <nav className="side-links" aria-label="课程主导航">
        {navigationItems.map((item) => <NavIconLink key={item.id} item={item} collapsed={collapsed} />)}
      </nav>

      <button
        className="collapse-button command-launch"
        type="button"
        aria-label="命令面板"
        onClick={onOpenCommand}
      >
        <Command aria-hidden="true" />
        {!collapsed && <span>Ctrl K</span>}
      </button>

      <div className="teacher-nav-slot">
        <NavIconLink item={teacherNavigationItem} collapsed={collapsed} />
      </div>

      <button className="collapse-button nav-collapse" type="button" onClick={toggle}>
        {collapsed ? <ChevronRight aria-hidden="true" /> : <ChevronLeft aria-hidden="true" />}
        {!collapsed && <span>收起导航</span>}
      </button>
    </aside>
  )
}

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false)
  return (
    <Tooltip.Provider delayDuration={150}>
      <div className="app-shell">
        <Sidebar onOpenCommand={() => setCommandOpen(true)} />
        <main className="main-surface">
          <Outlet />
        </main>
        <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      </div>
    </Tooltip.Provider>
  )
}
