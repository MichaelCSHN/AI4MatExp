import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import {
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  LayoutDashboard,
  Library,
  ListChecks,
  Map,
  ScrollText,
  Workflow,
  Brain,
} from 'lucide-react'
import './App.css'
import { navigationItems } from './content'

const iconMap: Record<string, typeof LayoutDashboard> = {
  dashboard: LayoutDashboard,
  map: Map,
  cases: BookOpenCheck,
  lab: FlaskConical,
  templates: ScrollText,
  projects: Workflow,
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

function Sidebar() {
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
        {navigationItems.map((item) => {
          const Icon = iconMap[item.icon] ?? ListChecks
          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `side-link ${isActive ? 'is-active' : ''}`}
              title={item.label}
            >
              <Icon aria-hidden="true" />
              {!collapsed && <span>{item.label}</span>}
              {!collapsed && item.badge && <strong>{item.badge}</strong>}
            </NavLink>
          )
        })}
      </nav>

      <button className="collapse-button" type="button" onClick={toggle}>
        {collapsed ? <ChevronRight aria-hidden="true" /> : <ChevronLeft aria-hidden="true" />}
        {!collapsed && <span>收起导航</span>}
      </button>
    </aside>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-surface">
        <Outlet />
      </main>
    </div>
  )
}
