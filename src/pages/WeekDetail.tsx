import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import {
  acLinks,
  epistemicTools,
  getQuizByWeek,
  getReading,
  getTemplate,
  getWeek,
  weeks,
} from '../content'

const statusLabel: Record<string, string> = { active: '', corrected: '已更正', contested: '争议中' }

export function WeekDetail() {
  const { week } = useParams()
  const n = Number(week)
  const w = getWeek(n)
  if (!w) return <PageHeader kicker="404" title="未找到该周" />

  const prev = weeks.find((x) => x.week === n - 1)
  const next = weeks.find((x) => x.week === n + 1)
  const tools = w.epistemicToolIds.map((id) => epistemicTools.find((t) => t.id === id)).filter(Boolean)
  const acs = w.acLinkIds.map((id) => acLinks.find((a) => a.id === id)).filter(Boolean)
  const reads = w.readingIds.map(getReading).filter(Boolean)
  const tpls = w.templateIds.map(getTemplate).filter(Boolean)
  const qs = getQuizByWeek(n)

  return (
    <>
      <PageHeader
        kicker={`${w.phase}阶段 · ${w.week === 0 ? '预备周' : `第 ${w.week} 周`}`}
        title={w.title}
        lead={w.coreQuestion}
      />

      <div className="judge-banner">
        <strong>本周判断任务</strong>
        <span>{w.judgmentTask}</span>
      </div>

      <section className="content-section">
        <p className="md-p">{w.intro}</p>
      </section>

      <div className="two-col-grid">
        <section className="content-section">
          <h2 className="block-h">课堂活动</h2>
          <ol className="num-list">
            {w.activities.map((a, i) => <li key={i}>{a}</li>)}
          </ol>
        </section>

        <section className="content-section">
          <h2 className="block-h">常见误区</h2>
          <ul className="warn-list">
            {w.misconceptions.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </section>
      </div>

      {tools.length > 0 && (
        <section className="content-section">
          <h2 className="block-h">认识论工具（本周出场）</h2>
          <div className="epi-grid">
            {tools.map((t) => t && (
              <div key={t.id} className="epi-card">
                <h3>{t.name}</h3>
                <p className="epi-trigger"><b>触发：</b>{t.trigger}</p>
                <p className="epi-use"><b>用它：</b>{t.use}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="two-col-grid">
        <section className="content-section">
          <h2 className="block-h">思考题</h2>
          <ul className="think-list">
            {w.thinkingQuestions.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
          {qs.length > 0 && <Link to="/quiz" className="link-more">本周试题（{qs.length}）→</Link>}
        </section>

        <section className="content-section">
          <h2 className="block-h">教师追问</h2>
          <ul className="probe-list">
            {w.teacherPrompts.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </section>
      </div>

      {(acs.length > 0 || reads.length > 0 || tpls.length > 0) && (
        <section className="content-section">
          <h2 className="block-h">工具 · 外援 · 模板 · 文献</h2>
          {w.tools.length > 0 && (
            <div className="chip-row">
              {w.tools.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          )}
          {acs.length > 0 && (
            <div className="ref-block">
              <h4>AC / 外部外援</h4>
              {acs.map((a) => a && (
                <a key={a.id} href={a.url} target="_blank" rel="noreferrer" className="ref-link">
                  {a.module} <ArrowRight size={13} />
                </a>
              ))}
            </div>
          )}
          {tpls.length > 0 && (
            <div className="ref-block">
              <h4>交付模板</h4>
              {tpls.map((t) => t && <Link key={t.id} to="/templates" className="ref-link">{t.title}（AIAS {t.aiasLevel}）</Link>)}
            </div>
          )}
          {reads.length > 0 && (
            <div className="ref-block">
              <h4>本周文献</h4>
              {reads.map((r) => r && (
                <div key={r.id} className="reading-item">
                  <span>{r.citation}</span>
                  {statusLabel[r.status] && <em className={`status-${r.status}`}>{statusLabel[r.status]}</em>}
                  {r.note && <p className="reading-note">{r.note}</p>}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {w.deliverable && (
        <div className="deliverable-banner">★ 本周交付：{w.deliverable}</div>
      )}

      <nav className="week-nav">
        {prev ? (
          <Link to={`/weeks/${prev.week}`} className="btn-ghost"><ArrowLeft size={15} /> {prev.week === 0 ? '预备周' : `第 ${prev.week} 周`}·{prev.title}</Link>
        ) : <span />}
        {next ? (
          <Link to={`/weeks/${next.week}`} className="btn-ghost">第 {next.week} 周·{next.title} <ArrowRight size={15} /></Link>
        ) : <span />}
      </nav>
    </>
  )
}
