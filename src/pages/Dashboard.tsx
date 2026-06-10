import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { coursePhases, coursePrinciples, heroMetrics, weeks } from '../content'

export function Dashboard() {
  return (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="section-kicker">Course Platform · v3.3</p>
          <h2>把 SDL 变成训练科研判断力的课程现场。</h2>
          <p>
            表层：帮你掌握 AI4M 之"渔"（以自驱动实验室为代表）。底层：补上科学哲学 ABC，
            梳理"实验"作为科学方法论的历史脉络、现实动态与未来图景，和你一起想清楚——
            在 AI 时代，人的判断放在哪里。
          </p>
          <div className="hero-cta">
            <Link to="/weeks" className="btn-primary">
              进入 13 周地图 <ArrowRight size={16} />
            </Link>
            <Link to="/lab" className="btn-ghost">先去 GP/BO 实验台玩一玩</Link>
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
            <p className="section-kicker">Course DNA</p>
            <h2>五条设计原则</h2>
          </div>
        </div>
        <div className="principle-grid">
          {coursePrinciples.map((p) => (
            <article key={p.n} className="principle-card">
              <span className="principle-n">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section closing-section">
        <p className="section-kicker">终极测试</p>
        <h2>不是期末考试，而是一年以后。</h2>
        <p>
          这门课的终极测试，是学期结束一年后，你是否在做和一年前不同的事，以及你是否知道为什么不同。
        </p>
      </section>
    </>
  )
}
