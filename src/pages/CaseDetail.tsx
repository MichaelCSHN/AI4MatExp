import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeft, Lock, Unlock } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { getCase } from '../content'

export function CaseDetail() {
  const { id } = useParams()
  const c = id ? getCase(id) : undefined
  const [revealed, setRevealed] = useState(false)
  // 立场记录持久化到 localStorage：第 7 周“揭晓前后判断对照”需要它跨会话存在。
  const [votes, setVotes] = useState<Record<string, string>>(() => {
    if (typeof window === 'undefined' || !id) return {}
    try {
      return JSON.parse(window.localStorage.getItem(`ai4matexp-votes-${id}`) ?? '{}')
    } catch {
      return {}
    }
  })

  function castVote(qid: string, opt: string) {
    setVotes((s) => {
      const next = { ...s, [qid]: opt }
      if (id) window.localStorage.setItem(`ai4matexp-votes-${id}`, JSON.stringify(next))
      return next
    })
  }

  if (!c) return <PageHeader kicker="404" title="未找到该案例" />

  const debateCards = c.evidence.filter((e) => e.stage === 'debate')
  const revealCards = c.evidence.filter((e) => e.stage === 'reveal')
  const hasReveal = revealCards.length > 0 || !!c.verdict

  return (
    <>
      <Link to="/cases" className="back-link"><ArrowLeft size={15} /> 案例现场</Link>
      <PageHeader kicker={`第 ${c.week} 周 · 案例工作台`} title={c.title} lead={c.summary} />

      <section className="content-section">
        <h2 className="block-h">争议核心</h2>
        <p className="md-p">{c.controversy}</p>
      </section>

      {c.timeline.length > 0 && (
        <section className="content-section">
          <h2 className="block-h">时间线</h2>
          <ol className="timeline">
            {c.timeline.map((t, i) => {
              const isReveal = t.date >= '2026' && c.kind === 'controversy'
              if (isReveal && !revealed) {
                return (
                  <li key={i} className="timeline-locked">
                    <span className="timeline-date">{t.date}</span>
                    <span className="timeline-event"><Lock size={13} /> 揭晓后可见</span>
                  </li>
                )
              }
              return (
                <li key={i}>
                  <span className="timeline-date">{t.date}</span>
                  <span className="timeline-event">{t.event}</span>
                </li>
              )
            })}
          </ol>
        </section>
      )}

      {c.roles.length > 0 && (
        <section className="content-section">
          <h2 className="block-h">角色卡</h2>
          <div className="role-grid">
            {c.roles.map((r) => (
              <div key={r.id} className="role-card">
                <h3>{r.name}</h3>
                <p>{r.task}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="content-section">
        <h2 className="block-h">证据卡 · 辩论阶段</h2>
        <div className="evidence-grid">
          {debateCards.map((e) => (
            <div key={e.id} className="evidence-card">
              <h3>{e.title}</h3>
              <p>{e.content}</p>
              <span className="evidence-src">{e.source}</span>
            </div>
          ))}
        </div>
      </section>

      {c.votes.length > 0 && (
        <section className="content-section">
          <h2 className="block-h">投票 · 先形成你的立场</h2>
          {c.votes.map((v) => (
            <div key={v.id} className="vote-block">
              <p className="vote-q">{v.question}</p>
              <div className="vote-options">
                {v.options.map((opt) => (
                  <button
                    key={opt}
                    className={`vote-opt ${votes[v.id] === opt ? 'chosen' : ''}`}
                    onClick={() => castVote(v.id, opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {hasReveal && !revealed && (
        <button className="reveal-btn" onClick={() => setRevealed(true)}>
          <Unlock size={16} /> 我已形成立场——揭晓真实裁决
        </button>
      )}

      {hasReveal && revealed && (
        <section className="content-section reveal-section">
          <h2 className="block-h"><Unlock size={16} /> 揭晓：真实世界怎么判</h2>
          {revealCards.map((e) => (
            <div key={e.id} className="evidence-card reveal-card">
              <h3>{e.title}</h3>
              <p>{e.content}</p>
              <span className="evidence-src">{e.source}</span>
            </div>
          ))}
          {c.verdict && (
            <div className={`verdict-box v-${c.verdict.status}`}>
              <p className="md-p">{c.verdict.text}</p>
              <span className="evidence-src">{c.verdict.source}</span>
              <h4>揭晓后对照</h4>
              <ul className="think-list">
                {c.verdict.compareQuestions.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            </div>
          )}
        </section>
      )}

      <div className="two-col-grid">
        <section className="content-section">
          <h2 className="block-h">讨论问题</h2>
          <ul className="think-list">
            {c.discussionQuestions.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </section>
        <section className="content-section">
          <h2 className="block-h">可迁移判断准则</h2>
          <ul className="principle-list">
            {c.transferPrinciples.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </section>
      </div>

      <p className="verified-note">案例状态最后核验：{c.lastVerified}（争议案例状态会演化，开课前请复核）</p>
    </>
  )
}
