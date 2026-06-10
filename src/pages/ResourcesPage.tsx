import { ExternalLink } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { acLinks, conversionCard, epistemicTools, readings } from '../content'
import { renderMarkdown } from '../lib/markdown'

const statusLabel: Record<string, string> = { active: '', corrected: '已更正', contested: '争议中' }

export function ResourcesPage() {
  return (
    <>
      <PageHeader
        kicker="AC bridge · 外援与资源"
        title="AC 外援"
        lead="AC Microcourses 负责'怎么跑起来'；本课负责'为什么这样设计、何时相信、哪里会失败、人的判断放在哪里'。颗粒度对齐 AC，重点难点处更详细。原则上不借用 AC 成品，通过链接引导学习。"
      />

      <section className="content-section">
        <h2 className="block-h">逐周对齐的外援入口</h2>
        <div className="ac-list">
          {acLinks.map((a) => (
            <article key={a.id} className="ac-card">
              <div className="ac-head">
                <h3>{a.module}</h3>
                <a href={a.url} target="_blank" rel="noreferrer" className="ac-go"><ExternalLink size={15} /></a>
              </div>
              <p className="ac-when">使用时机：{a.whenToUse}</p>
              <div className="ac-split">
                <div><b>AC 负责</b><p>{a.acCovers}</p></div>
                <div><b>本课更详细</b><p>{a.weDeepen}</p></div>
              </div>
              <p className="ac-task"><b>学生任务：</b>{a.studentTask}</p>
              <span className="verified-note">核验：{a.lastVerified}</span>
            </article>
          ))}
        </div>
      </section>

      <div className="two-col-grid">
        <section className="content-section">
          <h2 className="block-h">AC 转换卡</h2>
          <p className="md-p">每次 AC 外援学习后填写——把"跑通了"转化为"知道它没解决什么判断问题"。</p>
          <div className="template-body small">{renderMarkdown(conversionCard)}</div>
        </section>

        <section className="content-section">
          <h2 className="block-h">科学哲学最小工具箱</h2>
          <p className="md-p">底层动机的落地：每个概念绑定触发体验和使用任务。无任务不进课。</p>
          <ul className="epi-list">
            {epistemicTools.map((t) => (
              <li key={t.id}>
                <b>{t.name}</b>
                <span className="epi-weeks">第 {t.weeks.join('、')} 周</span>
                <p>{t.use}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="content-section">
        <h2 className="block-h">课程文献库</h2>
        <div className="reading-list">
          {readings.map((r) => (
            <div key={r.id} className="reading-row">
              <div>
                {r.url ? <a href={r.url} target="_blank" rel="noreferrer">{r.citation}</a> : <span>{r.citation}</span>}
                {statusLabel[r.status] && <em className={`status-${r.status}`}>{statusLabel[r.status]}</em>}
                {r.note && <p className="reading-note">{r.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
