import { Link } from 'react-router'
import { PageHeader } from '../components/PageHeader'
import { cases } from '../content'

const kindLabel: Record<string, string> = { controversy: '争议案例', positive: '正面对照', exercise: '内部演练' }

export function CasesIndex() {
  return (
    <>
      <PageHeader
        kicker="Case studio"
        title="案例现场"
        lead="案例不是阅读材料，是辩论现场。判断力训练需要'何时该信'与'何时不该信'成对出现——所以这里既有争议案例，也有正面对照。"
      />
      <div className="case-grid">
        {cases.map((c) => (
          <Link key={c.id} to={`/cases/${c.id}`} className={`case-card kind-${c.kind}`}>
            <div className="case-card-top">
              <span className="case-kind">{kindLabel[c.kind]}</span>
              <span className="case-week">第 {c.week} 周</span>
            </div>
            <h3>{c.title}</h3>
            <p>{c.summary}</p>
            {c.verdict && (
              <div className={`verdict-chip v-${c.verdict.status}`}>
                {c.verdict.status === 'corrected' ? '真实裁决：已更正' : c.verdict.status === 'contested' ? '真实裁决：争议中' : ''}
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  )
}
