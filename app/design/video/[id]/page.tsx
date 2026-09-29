"use client"

import Link from "next/link"
import { use } from "react"

const videos = {
  "uniqlo-baggy-curve-jeans": {
    title: "유니클로 배기커브진",
    subtitle: "Daily Outfit Content",
    video: "/04/유니클로 배기커브진 👖💙 #유니클로 #uniqlo #데일리룩코디 #배기커브진.mp4",
  },
  "uniqlo-jersey-barrel-leg-pants": {
    title: "유니클로 저지 배럴레그팬츠",
    subtitle: "Office Outfit / Daily Look Content",
    video: "/04/유니클로 인기템 저지배럴레그팬츠 입어보기 👖 #유니클로 #저지배럴레그팬츠 #유니클로팬츠 #직장인룩 #ootdfashion   #데일리룩코디.mp4",
  },
  "zara-knit-look": {
    title: "ZARA 니트 입어보기",
    subtitle: "Knitwear Outfit Content",
    video: "/04/zara 니트 입어보기 🧶.mp4",
  },
} as const

export default function VideoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = videos[id as keyof typeof videos]

  if (!project) {
    return <main className="video-detail container"><p>영상을 찾을 수 없습니다.</p><Link href="/design" className="button button-outline">Design으로 돌아가기</Link></main>
  }

  return <div className="page-ai page-video-detail">
    <header className="header"><nav className="container"><Link href="/" className="logo">Portfolio</Link><ul className="nav-links"><li><Link href="/">Home</Link></li><li><Link href="/design" className="nav-link-active">Design</Link></li><li><Link href="/publishing">Web·Publishing</Link></li></ul></nav></header>
    <main className="video-detail container">
      <Link href="/design#video-social-content" className="video-detail-back">← Video &amp; Social Content</Link>
      <div className="video-detail-heading"><span>VIDEO &amp; SOCIAL CONTENT</span><h1>{project.title}</h1><p>{project.subtitle}</p></div>
      <div className="video-detail-player"><video src={project.video} controls autoPlay playsInline /></div>
      <div className="video-detail-info"><span>CONTENT</span><p>개인 YouTube 채널의 Fashion &amp; Lifestyle 숏폼 콘텐츠를 직접 기획·촬영·편집했습니다.<br />콘텐츠의 흐름과 템포에 맞춰 컷 편집, 자막 및 사운드를 구성했습니다.</p></div>
    </main>
  </div>
}
