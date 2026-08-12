"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { AIContentItem } from "../../data/works"

export function AIContentCard({ item }: { item: AIContentItem }) {
  const [isPreviewing, setIsPreviewing] = useState(false)

  return (
    <Link
      href={`/ai/${item.id}`}
      className="ai-content-card"
      onMouseEnter={() => setIsPreviewing(true)}
      onMouseLeave={() => setIsPreviewing(false)}
    >
      <div className="ai-content-card-media">
        {item.video && isPreviewing ? (
          <video
            className="ai-content-card-visual"
            src={item.video}
            poster={item.image}
            muted
            loop
            playsInline
            preload="none"
            autoPlay
          />
        ) : (
          <Image
            className="ai-content-card-visual"
            src={encodeURI(item.image)}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 82vw, 33vw"
            quality={76}
          />
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
