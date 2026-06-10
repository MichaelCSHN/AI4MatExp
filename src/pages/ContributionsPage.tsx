import { PageHeader } from '../components/PageHeader'
import { contributionTypes } from '../content'

export function ContributionsPage() {
  return (
    <>
      <PageHeader
        kicker="Contribution archive"
        title="贡献归档"
        lead="第 13 周留下一个可复用条目。它会成为下一届学生进入课程时看到的真实参考。"
      />

      <div className="contribution-grid">
        {contributionTypes.map((c) => (
          <article key={c.id} className="content-section contribution-card">
            <p className="section-kicker">{c.id}</p>
            <h2>{c.title}</h2>
            <p>{c.prompt}</p>
            <div className="contribution-check">{c.review}</div>
          </article>
        ))}
      </div>

      <section className="content-section">
        <h2 className="block-h">提交格式</h2>
        <pre className="submission-format">{`# 贡献标题

## 类型
工具分享 / 踩坑记录 / 判断准则

## 场景
它在什么情况下有用？

## 内容
写清楚步骤、输入输出、证据或判断准则。

## 边界
什么时候不要用它？最可能误导人的地方是什么？

## 留给下一届的一句话
`}</pre>
      </section>
    </>
  )
}
