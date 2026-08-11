"use client"

import Link from "next/link"
import { AIContentCard } from "./ai-content-card"
import { aiPlaygroundItems, campaignFrameItems, typoLabItems } from "../../data/works"

const sections = [
  {
    id: "brand-studio",
    eyebrow: "01 / BX BRANDING",
    title: "Brand Studio",
    description: "브랜드 컨셉부터 패키지와 캠페인 비주얼까지 확장한 AI 기반 BX 디자인",
    tone: "campaign",
    items: campaignFrameItems,
  },
  {
    id: "visual-lab",
    eyebrow: "02 / GRAPHIC & TYPE",
    title: "Visual Lab",
    description: "그래픽 구성과 글자의 형태, 재질을 탐색하는 타이포그래피 비주얼 스터디",
    tone: "typo",
    items: typoLabItems,
  },
  {
    id: "motion-lab",
    eyebrow: "03 / SHORT-FORM CONTENT",
    title: "Motion Lab",
    description: "캐릭터와 짧은 이야기를 움직임으로 확장한 AI 숏폼 콘텐츠 실험",
    tone: "playground",
    items: aiPlaygroundItems,
  },
]

export default function AIPage() {
  const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    void navigator.clipboard.writeText("jypark912@naver.com")
    alert("이메일이 복사되었습니다: jypark912@naver.com")
  }

  return (
    <div className="page-ai">
      <header className="header">
        <nav className="container">
          <Link href="/" className="logo">Portfolio</Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/design">Design</Link></li>
            <li><Link href="/publishing">Publishing</Link></li>
            <li><Link href="/ai" className="nav-link-active">AI Contents</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="ai-hero container">
          <span>SELECTED AI WORKS · 2026</span>
          <h1>AI Contents</h1>
          <p>아이디어를 이미지로, 이미지를 움직이는 이야기로.<br />도구의 가능성을 탐색하며 만든 AI 콘텐츠 아카이브입니다.</p>
        </section>

        {sections.map((section) => (
          <section id={section.id} className={`ai-collection ai-collection-${section.tone}`} key={section.id}>
            <div className="container">
              <header className="ai-collection-header">
                <div>
                  <span>{section.eyebrow}</span>
                  <h2>{section.title}</h2>
                </div>
                <p>{section.description}</p>
              </header>
              <div className="ai-content-grid">
                {section.items.map((item) => <AIContentCard item={item} key={item.id} />)}
              </div>
              {section.items.length > 3 && <p className="ai-scroll-hint">← 가로로 스크롤해 더 보기 →</p>}
            </div>
          </section>
        ))}
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-social">
            <a href="#" onClick={handleEmailClick}>Email</a>
            <a href="https://github.com/zi-young?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://blog.naver.com/ruruha_" target="_blank" rel="noopener noreferrer">Blog</a>
          </div>
          <p>© 2026 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
