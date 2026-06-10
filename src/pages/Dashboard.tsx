import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { coursePhases, heroMetrics, projectMilestones, weeks } from '../content'

const semesterStart = new Date('2026-09-07T00:00:00')

function currentCourseWeek(now = new Date()) {
  const diff = Math.floor((now.getTime() - semesterStart.getTime()) / (7 * 24 * 60 * 60 * 1000))
  return Math.max(0, Math.min(13, diff + 1))
}

export function Dashboard() {
  const currentWeek = currentCourseWeek()
  const current = weeks.find((w) => w.week === currentWeek) ?? weeks[0]
  const nextMilestone = projectMilestones.find((m) => m.week >= currentWeek) ?? projectMilestones.at(-1)!

  return (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="section-kicker">AI4MatExp · v0.3</p>
          <h2>今天先完成一个判断。</h2>
          <p>
            从研究问题卡开始，经过实验审计、GP/BO、案例辩论、SDL 草图和同行评审，
            最后把一个可复用的成果留给下一届。
          </p>
          <div className="hero-cta">
            <Link to="/weeks" className="btn-primary">
              进入 13 周地图 <ArrowRight size={16} />
            </Link>
            <Link to="/workspace" className="btn-ghost">打开学生工作台</Link>
          </div>
        </div>
        <div className="hero-metrics" aria-label="课程关键指标">
          {heroMetrics.map((m) => (
            <div key={m.label}>
              <span>{m.value}</span>
              <p>{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="status-band">
        <div>
          <p className="section-kicker">Current</p>
          <h2>{current.week === 0 ? '预备周' : `第 ${current.week} 周`} · {current.title}</h2>
          <p>{current.judgmentTask}</p>
        </div>
        <div>
          <p className="section-kicker">Next milestone</p>
          <h2>第 {nextMilestone.week} 周 · {nextMilestone.title}</h2>
          <p>{nextMilestone.deliverable}</p>
        </div>
        <Link to={`/weeks/${current.week}`} className="btn-primary">进入本周 <ArrowRight size={16} /></Link>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">五阶段</p>
            <h2>课程地图</h2>
          </div>
          <Link to="/weeks" className="link-more">全部 14 周 →</Link>
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
          {weeks.slice(1).map((w) => (
            <Link key={w.week} to={`/weeks/${w.week}`} className="week-row">
              <div className="week-number">{w.week}</div>
              <div>
                <h3>{w.title}</h3>
                <p>{w.coreQuestion}</p>
              </div>
              <div className="week-tags">
                <span>{w.phase}</span>
                {w.deliverable && <span className="tag-deliverable">交付</span>}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Start here</p>
            <h2>三个常用入口</h2>
          </div>
        </div>
        <div className="quick-grid">
          <Link to="/lab" className="quick-card">
            <h3>GP/BO 实验台</h3>
            <p>加点、看不确定性、决定是否接受推荐。</p>
          </Link>
          <Link to="/workspace" className="quick-card">
            <h3>学生工作台</h3>
            <p>填写研究问题卡、SDL 草图和 Risk Register。</p>
          </Link>
          <Link to="/cases/a-lab" className="quick-card">
            <h3>A-Lab 辩论</h3>
            <p>先投票，再揭晓真实裁决。</p>
          </Link>
        </div>
      </section>

      <section className="content-section closing-section">
        <p className="section-kicker">终极测试</p>
        <h2>一年后再看这一页。</h2>
        <p>
          到那时再问自己：我是否在做和一年前不同的事？我是否知道为什么不同？
        </p>
      </section>
    </>
  )
}
