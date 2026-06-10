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
    </>
  )
}
