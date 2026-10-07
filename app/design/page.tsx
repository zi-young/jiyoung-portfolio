"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { AIContentCard } from "../ai/ai-content-card"
import { aiPlaygroundItems, brandFilmItems, campaignFrameItems, typoLabItems } from "../../data/works"
import { roocoProject } from "../../data/rooco"

const sections = [
  {
    id: "brand-campaign",
    eyebrow: "03 / AI CREATIVE & CAMPAIGN",
    title: "AI Creative & Campaign",
    description: "Generative AI for Fashion, Beauty & Brand Visuals\n생성형 AI를 활용한 패션·뷰티 브랜드 비주얼 및 캠페인 콘텐츠",
    items: [
      ...campaignFrameItems,
      ...brandFilmItems,
      ...typoLabItems.filter((item) => !["album-cover-reframed", "fashion-type-poster"].includes(item.id)),
      ...aiPlaygroundItems.filter((item) => ["1", "2"].includes(item.id)),
    ],
  },
]

const webPromotionSection = {
  id: "web-promotion",
  eyebrow: "01 / WEB & VISUAL",
  title: "Web & Visual Design",
  description: "E-commerce · UI/UX · figma",
  items: [
    { href: "/design/rooco", image: roocoProject.heroImages[0], title: roocoProject.title, subtitle: "실제 외주 프로젝트 · 상세페이지 시스템 및 AI-assisted workflow", tools: ["E-commerce", "Figma", "AI Workflow"] },
    { href: "/design/yogi", image: "/yogi/01-cover.webp", title: "YOGI — Yoga Sequence App", subtitle: "요가 자세를 탐색하고, 나만의 시퀀스를 구성해 수련까지 이어지는 모바일 UI/UX 프로젝트.", tools: ["UI/UX", "Figma", "AI 협업"] },
    { href: "/design/graphic/3", image: "/fashion.jpg", title: "Fashion Detail Page", subtitle: "의류 쇼핑몰 상세페이지 및 프로모션 디자인", tools: ["Photoshop", "Illustrator"] },
    { href: "/design/retouch/1", image: "/retouching/profile1.png", title: "Portrait Retouching", subtitle: "자연스러운 피부결과 얼굴 디테일을 살린 인물 보정", tools: ["Image Retouching"] },
  ],
}

const contentDesignSection = {
  id: "content-design",
  eyebrow: "02 / CONTENT DESIGN",
  title: "Content Design",
  description: "Recruitment Content, Instagram Content와 현재 회사에서 제작한 실제 마케팅 디자인",
  items: [
    { href: "/design/graphic/1", image: "/monkeysoft-recruitment-notice.jpg", title: "Recruitment Content", subtitle: "정보를 시각적으로 구조화한 디지털 콘텐츠", tools: ["Content Design", "Photoshop"] },
    { href: "/design/graphic/4", image: "/E-commerce%20%26%20SNS/insta_1/001.png", title: "Instagram Content · 실전편 Quiz", subtitle: "픽셀 아트 스타일로 구성한 참여형 SNS 콘텐츠", tools: ["미리캔버스", "Content Design"] },
    { href: "/design/graphic/5", image: "/E-commerce%20%26%20SNS/insta_2/001.png", title: "Instagram Content · AI 기초", subtitle: "AI 개념을 쉽게 전달하는 정보형 SNS 콘텐츠", tools: ["미리캔버스", "Content Design"] },
    { href: "/design/graphic/6", image: "/E-commerce & SNS/logo/스크린샷 2026-09-08 오후 1.01.08.png", title: "ThingsMiner Logo & CI", subtitle: "Figma Make로 제작한 MonkeySoft CI 컬러 기반 로고", tools: ["Figma Make", "Branding"] },
  ],
}

const practicalSections = [
  contentDesignSection,
]

type VideoContentItem = {
  id: string
  title: string
  subtitle: string
  content: string
  tools: string[]
  modalTools?: string[]
  image?: string
  video?: string
  externalUrl?: string
}

const outzyVideoItems: VideoContentItem[] = [
  {
    id: "uniqlo-baggy-curve-jeans",
    title: "유니클로 배기커브진",
    subtitle: "Daily Outfit Content",
    content: "Planning · Shooting · Video Editing",
    tools: ["Premiere Pro"],
    modalTools: ["Premiere Pro", "CapCut"],
    image: "/04/posters/uniqlo-baggy.jpg",
    video: "/04/uniqlo-baggy.mp4",
  },
  {
    id: "uniqlo-jersey-barrel-leg-pants",
    title: "유니클로 저지 배럴레그팬츠",
    subtitle: "Office Outfit / Daily Look Content",
    content: "Planning · Shooting · Video Editing",
    tools: ["Premiere Pro"],
    modalTools: ["Premiere Pro", "CapCut"],
    image: "/04/posters/uniqlo-jersey.jpg",
    video: "/04/uniqlo-jersey.mp4",
  },
  {
    id: "zara-knit-look",
    title: "ZARA 니트 입어보기",
    subtitle: "Knitwear Outfit Content",
    content: "Planning · Shooting · Video Editing",
    tools: ["CapCut"],
    modalTools: ["CapCut"],
    image: "/04/posters/zara-knit.jpg",
    video: "/04/zara-knit.mp4",
  },
]

const outzyItems: VideoContentItem[] = outzyVideoItems

const videoSection = {
  id: "video-social-content",
  eyebrow: "04 / VIDEO & SOCIAL CONTENT",
  title: "Video & Social Content",
  description: "개인 YouTube 채널의 Fashion & Lifestyle 숏폼 콘텐츠를 직접 기획·촬영·편집했습니다.\n콘텐츠의 흐름과 템포에 맞춰 컷 편집, 자막 및 사운드를 구성했습니다.",
  items: outzyItems,
}

function YogiThumbnail() {
  return <div className="yogi-thumbnail" aria-label="YOGI 홈, 아사나 목록, 시퀀스 편집 화면 썸네일">
    <div className="yogi-thumbnail-screens" aria-hidden="true">
      <img src="/yogi/screens/cover-home.webp" alt="" />
      <img src="/yogi/screens/cover-library.webp" alt="" />
      <img src="/yogi/screens/cover-sequence.webp" alt="" />
    </div>
  </div>
}

function PracticalCard({ item }: { item: (typeof practicalSections)[number]["items"][number] }) {
  return <Link href={item.href} className={`ai-content-card practical-card ${item.href === "/design/yogi" ? "yogi-card" : ""}`}>
    <div className="ai-content-card-media">
      {item.href === "/design/yogi" ? <YogiThumbnail /> : <img className="ai-content-card-visual" src={item.image} alt={item.title} />}
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

function VideoContentCard({ item }: { item: VideoContentItem }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false) }
    document.addEventListener("keydown", closeOnEscape)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = "" }
  }, [isOpen])

  const content = <>
    <div className={`ai-content-card-media ${item.image ? "outzy-video-media" : "outzy-video-placeholder"}`}>
      {item.video ? <video className="ai-content-card-visual" src={item.video} poster={item.image} muted loop playsInline autoPlay preload="metadata" /> : item.image ? <img className="ai-content-card-visual" src={item.image} alt={item.title} /> : <span className="outzy-placeholder-label">VIDEO THUMBNAIL<br />TO BE ADDED</span>}
      <span className="ai-content-card-action">{item.externalUrl ? "Watch video" : "Add video"} <span aria-hidden="true">↗</span></span>
    </div>
    <div className="ai-content-card-body">
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>
      <p className="outzy-video-meta">{item.content}</p>
      {item.tools.length > 0 && <ul className="ai-tool-list" aria-label="사용 툴">{item.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>}
    </div>
  </>

  return <>
    <button type="button" className="ai-content-card outzy-video-card" onClick={() => setIsOpen(true)} aria-label={`${item.title} 영상 보기`}>{content}</button>
    {isOpen && <div className="video-modal-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
      <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby={`${item.id}-modal-title`} onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="video-modal-close" onClick={() => setIsOpen(false)} aria-label="모달 닫기">×</button>
        <div className="video-modal-media"><video src={item.video} controls autoPlay playsInline /></div>
        <div className="video-modal-copy">
          <h2 id={`${item.id}-modal-title`}>{item.title}</h2>
          <p>{item.subtitle}</p>
          <p>Planning · Shooting · Editing</p>
          <p>{(item.modalTools ?? item.tools).join(" · ")}</p>
          <a href="https://youtube.com/@outziyoung" target="_blank" rel="noopener noreferrer">View on YouTube ↗</a>
        </div>
      </div>
    </div>}
  </>
}

function CampaignCard({ item }: { item: (typeof sections)[number]["items"][number] }) {
  return <AIContentCard item={item} className={item.section === "playground" ? "ai-video-secondary" : ""} />
}

export default function DesignPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => { event.preventDefault(); void navigator.clipboard.writeText("jypark912@naver.com"); alert("이메일이 복사되었습니다: jypark912@naver.com") }
  const renderCampaignSection = (section: typeof sections[number]) => {
    const isExpanded = expandedSections[section.id]
    const items = isExpanded ? section.items : section.items.slice(0, 3)
    return <section id={section.id} className="ai-collection ai-collection-campaign" key={section.id}>
      <div className="container">
        <header className="ai-collection-header"><div><span>{section.eyebrow}</span><h2>{section.title}</h2></div><p>{section.description}</p></header>
        <div className="ai-content-grid">{items.map((item) => <CampaignCard item={item} key={item.id} />)}</div>
        {section.items.length > 3 && <button className="ai-more-button" type="button" onClick={() => setExpandedSections((current) => ({ ...current, [section.id]: !isExpanded }))}>{isExpanded ? "접기" : "더보기"}<span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span></button>}
      </div>
    </section>
  }
  return <div className="page-design page-ai">
    <header className="header"><nav className="container"><Link href="/" className="logo">Portfolio</Link><ul className="nav-links"><li><Link href="/">Home</Link></li><li><Link href="/design" className="nav-link-active">Design</Link></li><li><Link href="/publishing">Web·Publishing</Link></li></ul></nav></header>
    <main className="main">
      <section className="ai-hero container"><span>DESIGN PORTFOLIO · SELECTED AI WORKS · 2026</span><h1>Design</h1><p>아이디어를 이미지로, 이미지를 브랜드의 시각 언어로.<br />AI와 디자인을 함께 사용해 만든 콘텐츠 아카이브입니다.</p></section>
      {[webPromotionSection, ...practicalSections].map((section, index) => { const isExpanded = expandedSections[section.id]; const items = isExpanded ? section.items : section.items.slice(0, 3); return <section id={section.id} className={`ai-collection ${index % 2 === 0 ? "ai-collection-typo" : "ai-collection-playground"}`} key={section.id}><div className="container"><header className="ai-collection-header"><div><span>{section.eyebrow}</span><h2>{section.title}</h2></div><p>{section.description}</p></header><div className="ai-content-grid">{items.map((item) => <PracticalCard item={item} key={item.title} />)}</div>{section.items.length > 3 && <button className="ai-more-button" type="button" onClick={() => setExpandedSections((current) => ({ ...current, [section.id]: !isExpanded }))}>{isExpanded ? "접기" : "더보기"}<span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span></button>}</div></section> })}
      {sections.map(renderCampaignSection)}
      {(() => { const isExpanded = expandedSections[videoSection.id]; const items = isExpanded ? videoSection.items : videoSection.items.slice(0, 3); return <section id={videoSection.id} className="ai-collection ai-collection-playground outzy-section"><div className="container"><header className="ai-collection-header"><div><span>{videoSection.eyebrow}</span><h2>{videoSection.title}</h2><p className="outzy-channel-name">OUTZY <span>— Fashion &amp; Lifestyle Channel</span></p></div><p>{videoSection.description}</p></header><div className="outzy-channel-bar"><span>Content Planning · Shooting · Video Editing</span><a href="https://youtube.com/@outziyoung" target="_blank" rel="noopener noreferrer">youtube.com/@outziyoung ↗</a></div><div className="ai-content-grid">{items.map((item) => <VideoContentCard item={item} key={item.id} />)}</div>{videoSection.items.length > 3 && <button className="ai-more-button" type="button" onClick={() => setExpandedSections((current) => ({ ...current, [videoSection.id]: !isExpanded }))}>{isExpanded ? "접기" : "더보기"}<span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span></button>}</div></section> })()}

    </main>
    <footer className="footer"><div className="container footer-content"><div className="footer-social"><a href="#" onClick={handleEmailClick}>Email</a><a href="https://github.com/zi-young?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://blog.naver.com/ruruha_" target="_blank" rel="noopener noreferrer">Blog</a></div><p>© 2026 Portfolio. All rights reserved.</p></div></footer>
  </div>
}
