"use client"

import Link from "next/link"
import { useState } from "react"
import { AIContentCard } from "../ai/ai-content-card"
import { B2BGrowthSection } from "./b2b-growth-section"
import { aiPlaygroundItems, brandFilmItems, campaignFrameItems, typoLabItems } from "../../data/works"

const sections = [
  {
    id: "brand-campaign",
    eyebrow: "01 / BRAND & CAMPAIGN",
    title: "Brand & Campaign",
    description: "브랜드 컨셉부터 패키지, 캠페인 비주얼과 그래픽 시스템까지 확장한 디자인",
    items: [
      ...campaignFrameItems,
      ...brandFilmItems,
      ...typoLabItems.filter((item) => !["album-cover-reframed", "fashion-type-poster"].includes(item.id)),
    ],
  },
]

const practicalSections = [
  {
    id: "ecommerce-sns",
    eyebrow: "04 / E-COMMERCE & SNS",
    title: "E-commerce & SNS",
    description: "제품과 메시지를 목적에 맞게 정리하고, 다양한 디지털 콘텐츠로 확장한 작업",
    items: [
      { href: "/design/graphic/3", image: "/fashion.jpg", title: "Fashion Detail Page", subtitle: "의류 쇼핑몰 상세페이지 디자인", tools: ["Photoshop", "Illustrator"] },
      { href: "/design/graphic/1", image: "/monkeysoft-recruitment-notice.jpg", title: "Recruitment Content", subtitle: "정보를 시각적으로 구조화한 디지털 콘텐츠", tools: ["Content Design", "Photoshop"] },
      { href: "/design/graphic/4", image: "/E-commerce%20%26%20SNS/insta_1/001.png", title: "Instagram Content · 실전편 Quiz", subtitle: "픽셀 아트 스타일로 구성한 참여형 SNS 콘텐츠", tools: ["미리캔버스", "Content Design"] },
      { href: "/design/graphic/5", image: "/E-commerce%20%26%20SNS/insta_2/001.png", title: "Instagram Content · AI 기초", subtitle: "AI 개념을 쉽게 전달하는 정보형 SNS 콘텐츠", tools: ["미리캔버스", "Content Design"] },
      { href: "/design/graphic/6", image: "/E-commerce & SNS/logo/스크린샷 2026-09-08 오후 1.01.08.png", title: "ThingsMiner Logo & CI", subtitle: "Figma Make로 제작한 MonkeySoft CI 컬러 기반 로고", tools: ["Figma Make", "Branding"] },
    ],
  },
]

const videoSection = {
  id: "ai-video-motion",
  eyebrow: "02 / AI VIDEO & MOTION",
  title: "AI Video & Motion",
  description: "캐릭터와 짧은 이야기를 움직임으로 확장한 AI 숏폼 콘텐츠 실험",
  items: aiPlaygroundItems,
}

const visualSection = {
  id: "visual-editing",
  eyebrow: "05 / VISUAL EDITING",
  title: "Visual Editing",
  description: "인물과 바디 리터칭, 색감 보정과 합성으로 이미지의 완성도를 높인 작업",
  items: [
    { href: "/design/retouch/1", image: "/retouching/profile1.png", title: "Portrait & Body Retouching", subtitle: "인물·바디 리터칭 및 사진 편집", tools: ["Photoshop", "Retouching"] },
    { href: "/design/retouch/1", image: "/wedding1_after.jpg", title: "Wedding Photo Editing", subtitle: "웨딩 사진 색감 및 분위기 보정", tools: ["Photoshop", "Color Grading"] },
  ],
}

function PracticalCard({ item }: { item: (typeof practicalSections)[number]["items"][number] }) {
  return <Link href={item.href} className="ai-content-card practical-card">
    <div className="ai-content-card-media">
      <img className="ai-content-card-visual" src={item.image} alt={item.title} />
      <span className="ai-content-card-action">View work <span aria-hidden="true">↗</span></span>
    </div>
    <div className="ai-content-card-body">
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>
      <ul className="ai-tool-list" aria-label="사용 분야">
        {item.tools.map((tool) => <li key={tool}>{tool}</li>)}
      </ul>
    </div>
  </Link>
}

export default function DesignPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => { event.preventDefault(); void navigator.clipboard.writeText("jypark912@naver.com"); alert("이메일이 복사되었습니다: jypark912@naver.com") }
  return <div className="page-design page-ai">
    <header className="header"><nav className="container"><Link href="/" className="logo">Portfolio</Link><ul className="nav-links"><li><Link href="/">Home</Link></li><li><Link href="/design" className="nav-link-active">Design</Link></li><li><Link href="/publishing">Web·Publishing</Link></li></ul></nav></header>
    <main className="main">
      <section className="ai-hero container"><span>DESIGN PORTFOLIO · SELECTED AI WORKS · 2026</span><h1>Design</h1><p>아이디어를 이미지로, 이미지를 브랜드의 시각 언어로.<br />AI와 디자인을 함께 사용해 만든 콘텐츠 아카이브입니다.</p></section>
      {sections.map((section) => { const isExpanded = expandedSections[section.id]; const items = isExpanded ? section.items : section.items.slice(0, 3); return <section id={section.id} className="ai-collection ai-collection-campaign" key={section.id}><div className="container"><header className="ai-collection-header"><div><span>{section.eyebrow}</span><h2>{section.title}</h2></div><p>{section.description}</p></header><div className="ai-content-grid">{items.map((item) => <AIContentCard item={item} key={item.id} />)}</div>{section.items.length > 3 && <button className="ai-more-button" type="button" onClick={() => setExpandedSections((current) => ({ ...current, [section.id]: !isExpanded }))}>{isExpanded ? "접기" : "더보기"}<span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span></button>}</div></section> })}
      {(() => { const isExpanded = expandedSections[videoSection.id]; const items = isExpanded ? videoSection.items : videoSection.items.slice(0, 3); return <section id={videoSection.id} className="ai-collection ai-collection-playground"><div className="container"><header className="ai-collection-header"><div><span>{videoSection.eyebrow}</span><h2>{videoSection.title}</h2></div><p>{videoSection.description}</p></header><div className="ai-content-grid">{items.map((item) => <AIContentCard item={item} key={item.id} />)}</div>{videoSection.items.length > 3 && <button className="ai-more-button" type="button" onClick={() => setExpandedSections((current) => ({ ...current, [videoSection.id]: !isExpanded }))}>{isExpanded ? "접기" : "더보기"}<span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span></button>}</div></section> })()}
      <B2BGrowthSection />
      {practicalSections.map((section, index) => { const isExpanded = expandedSections[section.id]; const items = isExpanded ? section.items : section.items.slice(0, 3); return <section id={section.id} className={`ai-collection ${index % 2 === 0 ? "ai-collection-typo" : "ai-collection-playground"}`} key={section.id}><div className="container"><header className="ai-collection-header"><div><span>{section.eyebrow}</span><h2>{section.title}</h2></div><p>{section.description}</p></header><div className="ai-content-grid">{items.map((item) => <PracticalCard item={item} key={item.title} />)}</div>{section.items.length > 3 && <button className="ai-more-button" type="button" onClick={() => setExpandedSections((current) => ({ ...current, [section.id]: !isExpanded }))}>{isExpanded ? "접기" : "더보기"}<span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span></button>}</div></section> })}
      <section id={visualSection.id} className="ai-collection ai-collection-visual"><div className="container"><header className="ai-collection-header"><div><span>{visualSection.eyebrow}</span><h2>{visualSection.title}</h2></div><p>{visualSection.description}</p></header><div className="ai-content-grid">{visualSection.items.map((item) => <PracticalCard item={item} key={item.title} />)}</div></div></section>
    </main>
    <footer className="footer"><div className="container footer-content"><div className="footer-social"><a href="#" onClick={handleEmailClick}>Email</a><a href="https://github.com/zi-young?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://blog.naver.com/ruruha_" target="_blank" rel="noopener noreferrer">Blog</a></div><p>© 2026 Portfolio. All rights reserved.</p></div></footer>
  </div>
}
