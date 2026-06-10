import { PageHeader } from '../components/PageHeader'
import { gradeBreakdown, projectTracks } from '../content'

export function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="Project tracks"
        title="项目轨道与成绩"
        lead="一个学期是一个研究问题的完整旅程：研究问题卡 → 实验审计 → SDL 设计草图 → 分组项目 → 同行评审 → 公开展示。轨道的选择本身就是一个判断。"
      />

      <div className="track-grid track-grid-detail">
        {projectTracks.map((tr) => (
          <article key={tr.id} className="track-card-detail">
            <div className="track-card-head">
              <span className="track-id">{tr.id}</span>
              <h3>{tr.title}</h3>
            </div>
            <p className="track-fit">{tr.fit}</p>
            <h4>核心要求</h4>
            <ul className="mini-list">
              {tr.requirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
            <h4>评分</h4>
            <ul className="rubric-list">
              {tr.rubric.map((r) => (
                <li key={r.dimension}><span>{r.dimension}</span><em>{r.points}</em></li>
              ))}
            </ul>
            {tr.topics && (
              <>
                <h4>高价值选题</h4>
                <ul className="mini-list">
                  {tr.topics.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </>
            )}
          </article>
        ))}
      </div>

      <section className="content-section">
        <h2 className="block-h">成绩体系</h2>
        <table className="md-table grade-table">
          <thead><tr><th>评估项目</th><th>比重</th><th>时间</th></tr></thead>
          <tbody>
            {gradeBreakdown.map((g) => (
              <tr key={g.item} className={g.weight === 0 ? 'grade-zero' : ''}>
                <td>{g.item}</td>
                <td>{g.weight}%</td>
                <td>{g.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="grade-note">
          关于失败的政策：B 轨道项目"跑失败了"（BO 没收敛、GP 崩溃）不自动扣分。对失败的真实分析，
          得分可能高于一个"成功但浅薄"的实现。失败本身不是问题，没有理解为什么失败才是。
        </p>
      </section>
    </>
  )
}
