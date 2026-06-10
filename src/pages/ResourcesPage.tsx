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
        lead="需要补工程手感时，从这里去 AC。回来后填写转换卡：它帮你跑通了什么，又留下了什么判断问题。"
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
          <p className="md-p">遇到判断卡住时，用这些词把问题说清楚。</p>
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

      <section className="content-section">
        <h2 className="block-h">GitHub 提交与评审</h2>
        <div className="github-flow">
          <div>
            <span>1</span>
            <h3>提交</h3>
            <p>每个里程碑用一个 PR 提交，标题包含周次、组号和交付物名称。</p>
          </div>
          <div>
            <span>2</span>
            <h3>标注</h3>
            <p>使用 `milestone-week-*`、`track-a/b/c/d`、`needs-review`、`revised` 标签。</p>
          </div>
          <div>
            <span>3</span>
            <h3>评审</h3>
            <p>同行评审写在 PR review 里；被评组 48 小时内回复接受、不接受和修改计划。</p>
          </div>
          <div>
            <span>4</span>
            <h3>归档</h3>
            <p>第 13 周把最终展示、报告和贡献条目合并到课程归档分支。</p>
          </div>
        </div>
      </section>
    </>
  )
}
