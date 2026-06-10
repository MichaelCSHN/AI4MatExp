import { Link } from 'react-router'
import { PageHeader } from '../components/PageHeader'
import { coursePhases, weeks } from '../content'

export function WeeksMap() {
  return (
    <>
      <PageHeader
        kicker="13-week map · +预备周"
        title="13 周地图"
        lead="一个学期是一个研究问题的完整旅程，不是十几个独立作业。每周回答一个核心问题，训练一个判断任务。"
      />
      <div className="phase-grid phase-grid-wide">
        {coursePhases.map((p) => (
          <article className="phase-card" key={p.name}>
            <span>{p.weeks}</span>
            <h3>{p.name}</h3>
            <p>{p.question}</p>
          </article>
        ))}
      </div>

      <div className="week-grid">
        {weeks.map((w) => (
          <Link key={w.week} to={`/weeks/${w.week}`} className="week-card">
            <div className="week-card-top">
              <span className="week-badge">{w.week === 0 ? '预备' : `第 ${w.week} 周`}</span>
              <span className="week-phase">{w.phase}</span>
            </div>
            <h3>{w.title}</h3>
            <p className="week-core">{w.coreQuestion}</p>
            <p className="week-judge">判断任务：{w.judgmentTask}</p>
            {w.deliverable && <div className="week-deliverable">★ {w.deliverable}</div>}
          </Link>
        ))}
      </div>
    </>
  )
}
