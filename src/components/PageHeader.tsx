import type { ReactNode } from 'react'

export function PageHeader({ kicker, title, lead, aside }: { kicker: string; title: string; lead?: string; aside?: ReactNode }) {
  return (
    <header className="page-header">
      <div>
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        {lead && <p className="page-lead">{lead}</p>}
      </div>
      {aside && <div className="page-header-aside">{aside}</div>}
    </header>
  )
}
