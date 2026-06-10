import type { JSX } from 'react'

/**
 * 极简 Markdown 渲染：支持 # 标题、表格、列表、`代码`、**粗体**、引用块。
 * 仅用于渲染课程模板这类受控内容，不做通用 HTML 转义之外的处理。
 */
export function renderMarkdown(md: string): JSX.Element {
  const lines = md.split('\n')
  const blocks: JSX.Element[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.trim() === '') {
      i++
      continue
    }

    // 表格
    if (line.includes('|') && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1])) {
      const header = splitRow(line)
      const rows: string[][] = []
      i += 2
      while (i < lines.length && lines[i].includes('|')) {
        rows.push(splitRow(lines[i]))
        i++
      }
      blocks.push(
        <table className="md-table" key={key++}>
          <thead>
            <tr>{header.map((h, j) => <th key={j}>{inline(h)}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>{r.map((c, ci) => <td key={ci}>{inline(c)}</td>)}</tr>
            ))}
          </tbody>
        </table>,
      )
      continue
    }

    // 标题
    const h = line.match(/^(#{1,4})\s+(.*)$/)
    if (h) {
      const level = h[1].length
      const Tag = (`h${Math.min(level + 1, 6)}`) as keyof JSX.IntrinsicElements
      blocks.push(<Tag className="md-h" key={key++}>{inline(h[2])}</Tag>)
      i++
      continue
    }

    // 引用
    if (line.startsWith('>')) {
      const quote: string[] = []
      while (i < lines.length && lines[i].startsWith('>')) {
        quote.push(lines[i].replace(/^>\s?/, ''))
        i++
      }
      blocks.push(<blockquote className="md-quote" key={key++}>{quote.map((q, qi) => <p key={qi}>{inline(q)}</p>)}</blockquote>)
      continue
    }

    // 列表
    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ''))
        i++
      }
      blocks.push(<ul className="md-list" key={key++}>{items.map((it, ii) => <li key={ii}>{inline(it)}</li>)}</ul>)
      continue
    }

    // 段落
    blocks.push(<p className="md-p" key={key++}>{inline(line)}</p>)
    i++
  }

  return <div className="md">{blocks}</div>
}

function splitRow(row: string): string[] {
  return row
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim())
}

function inline(text: string): (string | JSX.Element)[] {
  const parts: (string | JSX.Element)[] = []
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const tok = m[0]
    if (tok.startsWith('**')) parts.push(<strong key={k++}>{tok.slice(2, -2)}</strong>)
    else parts.push(<code key={k++}>{tok.slice(1, -1)}</code>)
    last = m.index + tok.length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}
