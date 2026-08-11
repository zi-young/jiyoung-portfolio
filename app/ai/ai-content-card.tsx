"use client"

import Link from "next/link"
import type { AIContentItem } from "../../data/works"

export function AIContentCard({ item }: { item: AIContentItem }) {
  return (
    <Link href={`/ai/${item.id}`} className="ai-content-card">
      <div className="ai-content-card-media">
        {item.video ? (
          <video
            className="ai-content-card-visual"
            src={item.video}
            poster={item.image}
            muted
            loop
            playsInline
            preload="metadata"
            onMouseEnter={(event) => void event.currentTarget.play()}
            onMouseLeave={(event) => {
              event.currentTarget.pause()
              event.currentTarget.currentTime = 0
            }}
          />
        ) : (
          <img className="ai-content-card-visual" src={item.image} alt={item.title} />
        )}
        <span className="ai-content-card-action">View story <span aria-hidden="true">↗</span></span>
      </div>
      <div className="ai-content-card-body">
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
        <ul className="ai-tool-list" aria-label="사용 툴">
          {item.tools.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
      </div>
    </Link>
  )
}
