import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { getWeek, teacherKits } from '../content'

export function TeacherPage() {
  const [active, setActive] = useState(teacherKits[0].week)
  const kit = teacherKits.find((k) => k.week === active)!
  const w = getWeek(kit.week)

  return (
    <>
      <PageHeader
        kicker="Teacher kit"
        title="教师材料包"
        lead="这里集中放置教师用材料：课前准备、触发脚本、流程、误区、追问、评分提示和风险提示。学生视图不展示这些追问脚本。"
      />

      <div className="teacher-tabs">
        {teacherKits.map((k) => {
          const kw = getWeek(k.week)
          return (
            <button key={k.week} className={`teacher-tab ${active === k.week ? 'on' : ''}`} onClick={() => setActive(k.week)}>
              第 {k.week} 周 · {kw?.title}
            </button>
          )
        })}
      </div>

      <div className="judge-banner">
        <strong>第 {kit.week} 周 · {w?.title}</strong>
        <span>{w?.coreQuestion}</span>
      </div>

      <div className="two-col-grid">
        <section className="content-section">
          <h2 className="block-h">课前准备</h2>
          <ul className="mini-list">{kit.prep.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </section>
        <section className="content-section">
          <h2 className="block-h">风险提示</h2>
          <ul className="warn-list">{kit.risks.map((r, i) => <li key={i}>{r}</li>)}</ul>
        </section>
      </div>

      <section className="content-section">
        <h2 className="block-h">触发脚本</h2>
        <blockquote className="md-quote"><p>{kit.triggerScript}</p></blockquote>
      </section>

      <section className="content-section">
        <h2 className="block-h">活动流程</h2>
        <ol className="num-list">{kit.flow.map((f, i) => <li key={i}>{f}</li>)}</ol>
      </section>

      {w && (
        <section className="content-section">
          <h2 className="block-h">本周页面中的教师追问</h2>
          <ul className="probe-list">{w.teacherPrompts.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </section>
      )}

      <div className="two-col-grid">
        <section className="content-section">
          <h2 className="block-h">常见误区</h2>
          <ul className="warn-list">{kit.misconceptions.map((m, i) => <li key={i}>{m}</li>)}</ul>
        </section>
        <section className="content-section">
          <h2 className="block-h">追问清单</h2>
          <ul className="probe-list">{kit.probes.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </section>
      </div>

      {kit.gradingNotes && (
        <section className="content-section">
          <h2 className="block-h">评分提示</h2>
          <p className="md-p">{kit.gradingNotes}</p>
        </section>
      )}

      <p className="verified-note">
        教师材料包优先覆盖第 0、1、3、6、7、9、11 周（其余周次随课程推进补全）。每周开课前请做"素材时效性检查"——
        案例与文献状态会在学期尺度上变化。
      </p>
    </>
  )
}
