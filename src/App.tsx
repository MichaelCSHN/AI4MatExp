import { useState } from 'react'
import {
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Command,
  ExternalLink,
  FileText,
  FlaskConical,
  GraduationCap,
  LayoutDashboard,
  Library,
  Map,
  ShieldAlert,
  Workflow,
} from 'lucide-react'
import './App.css'
import {
  acBridgeLinks,
  artifacts,
  coursePhases,
  navigationItems,
  projectTracks,
  weeklyPlan,
} from './content/courseStructure'

const iconMap = {
  dashboard: LayoutDashboard,
  map: Map,
  studio: FlaskConical,
  cases: BookOpenCheck,
  projects: Workflow,
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
      <div className="brand-block">
        <div className="brand-mark">A4</div>
        {!collapsed && (
          <div>
            <div className="brand-title">AI4MatExp</div>
            <div className="brand-subtitle">Course Edition</div>
          </div>
        )}
      </div>

      <nav className="side-links" aria-label="课程主导航">
        {navigationItems.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <a key={item.id} href={`#${item.id}`} className="side-link" title={item.label}>
              <Icon aria-hidden="true" />
              {!collapsed && <span>{item.label}</span>}
              {!collapsed && item.badge && <strong>{item.badge}</strong>}
            </a>
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

function TopBar() {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">AI 时代的材料实验</p>
        <h1>把 SDL 变成训练科研判断力的课程现场</h1>
      </div>
      <button className="command-button" type="button" title="命令面板预留入口">
        <Command aria-hidden="true" />
        <span>Ctrl K</span>
      </button>
    </header>
  )
}

function Dashboard() {
  return (
    <section id="dashboard" className="hero-panel">
      <div className="hero-copy">
        <p className="section-kicker">Course Platform</p>
        <h2>不是 AC 的中文版，而是面向材料研究生的判断力整合课。</h2>
        <p>
          AC Microcourses 作为前导训练场和外部工具箱；本站负责把工具链、案例、项目、
          风险与责任整合成 13 周课程旅程。
        </p>
      </div>
      <div className="hero-metrics" aria-label="课程平台关键指标">
        <div>
          <span>13</span>
          <p>正式教学周</p>
        </div>
        <div>
          <span>4</span>
          <p>项目轨道</p>
        </div>
        <div>
          <span>0</span>
          <p>期末闭卷考试</p>
        </div>
      </div>
    </section>
  )
}

function CourseMap() {
  return (
    <section id="map" className="content-section">
      <div className="section-heading">
        <p className="section-kicker">13-week map</p>
        <h2>课程地图</h2>
      </div>
      <div className="phase-grid">
        {coursePhases.map((phase) => (
          <article className="phase-card" key={phase.name}>
            <span>{phase.weeks}</span>
            <h3>{phase.name}</h3>
            <p>{phase.question}</p>
          </article>
        ))}
      </div>
      <div className="week-list">
        {weeklyPlan.map((week) => (
          <article key={week.week} className="week-row">
            <div className="week-number">{week.week}</div>
            <div>
              <h3>{week.title}</h3>
              <p>{week.question}</p>
            </div>
            <div className="week-tags">
              {week.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Studio() {
  return (
    <section id="studio" className="content-section two-column">
      <div>
        <p className="section-kicker">Judgment Studio</p>
        <h2>交互式判断工作台</h2>
        <p>
          后续工具不从“文档页面”出发，而从学生要完成的判断出发：目标函数是否诱导错误、
          GP 推荐是否可信、SDL 何时必须停机问人。
        </p>
      </div>
      <div className="tool-stack">
        <div><ClipboardCheck aria-hidden="true" /> DOE 审计清单</div>
        <div><Workflow aria-hidden="true" /> 最小 SDL 闭环</div>
        <div><ShieldAlert aria-hidden="true" /> 风险登记表</div>
        <div><FileText aria-hidden="true" /> PAVE-R 记录</div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="content-section">
      <div className="section-heading">
        <p className="section-kicker">Project tracks</p>
        <h2>项目轨道与交付物</h2>
      </div>
      <div className="track-grid">
        {projectTracks.map((track) => (
          <article key={track.id} className="track-card">
            <span>{track.id}</span>
            <h3>{track.title}</h3>
            <p>{track.fit}</p>
          </article>
        ))}
      </div>
      <div className="artifact-strip">
        {artifacts.map((artifact) => (
          <div key={artifact}>{artifact}</div>
        ))}
      </div>
    </section>
  )
}

function AcBridge() {
  return (
    <section id="resources" className="content-section">
      <div className="section-heading">
        <p className="section-kicker">AC bridge</p>
        <h2>AC Microcourses 作为前导与外援</h2>
      </div>
      <div className="resource-list">
        {acBridgeLinks.map((link) => (
          <a key={link.title} href={link.href} target="_blank" rel="noreferrer" className="resource-card">
            <div>
              <h3>{link.title}</h3>
              <p>{link.use}</p>
            </div>
            <ExternalLink aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  )
}

function TeacherKit() {
  return (
    <section id="teacher" className="content-section closing-section">
      <p className="section-kicker">Teacher kit</p>
      <h2>教师视图和学生视图从一开始分离。</h2>
      <p>
        学生侧看到任务、工具、案例和项目；教师侧沉淀课堂脚本、追问清单、
        评分样例和常见误区。这个分层是本站超越普通课程文档站的关键。
      </p>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-surface">
        <TopBar />
        <Dashboard />
        <CourseMap />
        <Studio />
        <section id="cases" className="content-section two-column">
          <div>
            <p className="section-kicker">Case studio</p>
            <h2>案例不是阅读材料，而是辩论现场。</h2>
          </div>
          <p>
            A-Lab（2023 发表 → 2026 Nature 更正的完整弧线）、GNoME、分布式闭环发现
            （正面对照）、失败 BO、错误成功判定等案例将被组织成时间线、角色卡、
            分阶段证据卡、裁决揭晓和课后反思模板，而不是普通文章。
          </p>
        </section>
        <Projects />
        <AcBridge />
        <TeacherKit />
      </main>
    </div>
  )
}

export default App
