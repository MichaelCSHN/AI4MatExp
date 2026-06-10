import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { templates } from '../content'
import { renderMarkdown } from '../lib/markdown'

function aiasText(level: number): string {
  return ['', '无 AI', '仅校对', '辅助', 'AI 协作', 'AI 探索'][level] ?? `级别 ${level}`
}

export function TemplatesPage() {
  const [active, setActive] = useState(templates[0].id)
  const [copied, setCopied] = useState(false)
  const t = templates.find((x) => x.id === active)!

  function copy() {
    navigator.clipboard?.writeText(t.markdown).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <>
      <PageHeader
        kicker="Template library"
        title="模板库"
        lead="每个模板都标注了 AIAS（AI Assessment Scale）级别——本课绝大多数作业鼓励用 AI，但每项交付都要可辩护。点击复制，填进你的项目。"
      />
      <div className="template-layout">
        <nav className="template-nav">
          {templates.map((x) => (
            <button key={x.id} className={`template-tab ${active === x.id ? 'on' : ''}`} onClick={() => setActive(x.id)}>
              <span>{x.title}</span>
              <em className={`aias aias-${x.aiasLevel}`}>AIAS {x.aiasLevel}</em>
            </button>
          ))}
        </nav>
        <div className="template-view">
          <div className="template-head">
            <div>
              <h2 className="block-h">{t.title}</h2>
              <p className="template-purpose">{t.purpose}</p>
              <p className="template-aias">
                AI 使用级别：<b>AIAS {t.aiasLevel}（{aiasText(t.aiasLevel)}）</b>
                {t.aiasNote && <span> — {t.aiasNote}</span>}
              </p>
            </div>
            <button className="copy-btn" onClick={copy}>
              {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? '已复制' : '复制 Markdown'}
            </button>
          </div>
          <div className="template-body">{renderMarkdown(t.markdown)}</div>
        </div>
      </div>

      {active === 'paver-record' && (
        <section className="content-section">
          <h2 className="block-h">三档样例</h2>
          <div className="sample-grid">
            <article className="sample-card strong">
              <h3>优秀</h3>
              <p><b>P：</b>限定材料体系、参数范围、核函数、采集函数和安全约束。</p>
              <p><b>V：</b>运行脚本，检查推荐点是否落在设备窗口内，并解释 μ/σ 的含义。</p>
              <p><b>E：</b>说明为什么接受第 4 轮推荐，也写出一个不接受的备选点。</p>
              <p><b>R：</b>保留提示词、模型版本、修改 diff、失败运行和最终图。</p>
            </article>
            <article className="sample-card pass">
              <h3>及格</h3>
              <p><b>P：</b>问题基本清楚，但参数边界和安全约束写得粗。</p>
              <p><b>V：</b>代码能跑，知道下一点在哪里，但对核函数解释较弱。</p>
              <p><b>E：</b>能说出接受推荐的主要理由，未充分讨论失败模式。</p>
              <p><b>R：</b>记录了主要提示词和输出，缺少失败记录。</p>
            </article>
            <article className="sample-card weak">
              <h3>问题样例</h3>
              <p><b>P：</b>只写“帮我做一个 BO”，没有材料目标和约束。</p>
              <p><b>V：</b>只写“能运行”，没有物理检查和输出解释。</p>
              <p><b>E：</b>把“AI 说可以”当作可靠性理由。</p>
              <p><b>R：</b>没有模型版本、提示词和人工修改记录。</p>
            </article>
          </div>
        </section>
      )}
    </>
  )
}
