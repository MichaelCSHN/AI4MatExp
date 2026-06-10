import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { getWeek, quiz } from '../content'

function QuizCard({ item }: { item: (typeof quiz)[number] }) {
  const [picked, setPicked] = useState<string | null>(null)
  const [showOpen, setShowOpen] = useState(false)
  const w = getWeek(item.week)

  return (
    <article className="quiz-card">
      <div className="quiz-meta">
        <span className="quiz-week">第 {item.week} 周 · {w?.title}</span>
        <span className={`quiz-type quiz-${item.type}`}>{item.type === 'scenario' ? '情境判断' : '开放题'}</span>
      </div>
      <p className="quiz-prompt">{item.prompt}</p>

      {item.type === 'scenario' && item.options && (
        <div className="quiz-options">
          {item.options.map((o) => {
            const isAnswer = item.answer === o.label
            const isPicked = picked === o.label
            const reveal = picked !== null
            return (
              <button
                key={o.label}
                className={`quiz-opt ${reveal && isAnswer ? 'correct' : ''} ${reveal && isPicked && !isAnswer ? 'wrong' : ''}`}
                onClick={() => setPicked(o.label)}
                disabled={reveal}
              >
                <b>{o.label}.</b> {o.text}
              </button>
            )
          })}
        </div>
      )}

      {item.type === 'scenario' && picked && (
        <div className="quiz-explain">
          <b>最可辩护的判断：{item.answer}</b>
          <p>{item.explanation}</p>
        </div>
      )}

      {item.type === 'open' && (
        <div className="quiz-open">
          <button className="btn-ghost" onClick={() => setShowOpen((s) => !s)}>
            {showOpen ? '收起评分要点' : '先自己写，再看评分要点'}
          </button>
          {showOpen && <div className="quiz-explain"><p>{item.explanation}</p></div>}
        </div>
      )}
    </article>
  )
}

export function QuizPage() {
  return (
    <>
      <PageHeader
        kicker="Thinking & assessment"
        title="思考与试题"
        lead="所有题目测判断力，不测执行力——没有'背得出'的标准答案，只有'最可辩护'的判断。选择题选完才显示解析；开放题给的是评分要点，不是范文。"
      />
      <div className="quiz-list">
        {quiz.map((q) => <QuizCard key={q.id} item={q} />)}
      </div>
    </>
  )
}
