import Link from "next/link"
import { yogiProject } from "../../../data/yogi"

type Screen = { src: string; alt: string }

function ScreenGrid({ screens, className = "" }: { screens: readonly Screen[]; className?: string }) {
  return <div className={`yogi-screen-grid ${className}`}>{screens.map((screen) => <figure className="yogi-screen" key={screen.src}><a href={screen.src} target="_blank" rel="noopener noreferrer"><img src={screen.src} alt={screen.alt} /></a></figure>)}</div>
}

export default function YogiProjectPage() {
  return (
    <div className="page-ai page-ai-detail yogi-detail">
      <header className="header"><nav className="container"><Link href="/" className="logo">Portfolio</Link><ul className="nav-links"><li><Link href="/">Home</Link></li><li><Link href="/design" className="nav-link-active">Design</Link></li><li><Link href="/publishing">Web·Publishing</Link></li></ul></nav></header>
      <main className="yogi-page-content">
        <Link href="/design" className="ai-detail-back">← Design</Link>
        <header className="yogi-page-header"><div><span className="yogi-kicker">PERSONAL UI/UX PROJECT · CLICKABLE PROTOTYPE</span><h1>{yogiProject.title}</h1><p className="yogi-project-type">UI/UX · Figma · AI 협업</p></div><div className="yogi-header-copy"><p className="yogi-kicker">YOGA SEQUENCE APP</p><p>{yogiProject.cardDescription}</p></div></header>
        <section className="yogi-page-section yogi-cover-section" aria-labelledby="yogi-cover-title"><div className="yogi-section-heading"><span>01 / COVER</span><h2 id="yogi-cover-title">YOGI의 핵심 화면</h2><p>홈에서 아사나를 탐색하고 시퀀스를 편집하는 주요 화면을 한 흐름으로 보여줍니다.</p></div><ScreenGrid screens={yogiProject.images.cover} className="yogi-cover-grid" /></section>
        <section className="yogi-page-section" aria-labelledby="yogi-overview-title"><div className="yogi-section-heading"><span>PROJECT STORY</span><h2 id="yogi-overview-title">프로젝트 소개와 기획 의도</h2></div><div className="yogi-copy-grid"><div><h3>프로젝트 소개</h3><p>{yogiProject.overview}</p></div><div><h3>기획 의도</h3><p>{yogiProject.intent}</p></div></div></section>
        {yogiProject.sections.map((section) => <section className="yogi-page-section" key={section.number} aria-labelledby={`yogi-${section.number}`}><div className="yogi-section-heading"><span>{section.number}</span><h2 id={`yogi-${section.number}`}>{section.title}</h2><p>{section.description}</p></div><ScreenGrid screens={section.images} className={section.number.startsWith("04") ? "yogi-system-grid" : ""} /></section>)}
        <section className="yogi-page-section" aria-labelledby="yogi-scope-title"><div className="yogi-section-heading"><span>ROLE &amp; AI COLLABORATION</span><h2 id="yogi-scope-title">담당 범위 및 AI 협업</h2></div><div className="yogi-copy-grid"><div><h3>작업 범위</h3><p>{yogiProject.scope}</p></div><div><h3>현재 단계</h3><p>{yogiProject.status}</p></div></div></section>
        <section className="yogi-page-section yogi-prototype" aria-labelledby="yogi-prototype-title"><div className="yogi-section-heading"><span>INTERACTIVE PROTOTYPE</span><h2 id="yogi-prototype-title">프로토타입 보기</h2><p>정적 화면은 위에서 확인하고, 실제 클릭 흐름은 Figma 프로토타입에서 확인할 수 있습니다.</p></div><div className="yogi-prototype-preview"><img src="/yogi/screens/cover-home.webp" alt="YOGI 홈 화면 정적 미리보기" /></div><div className="yogi-prototype-cta"><a className="button button-primary" href={yogiProject.prototypeUrl} target="_blank" rel="noopener noreferrer">Figma 프로토타입 열기 ↗</a></div></section>
      </main>
    </div>
  )
}
