import Link from "next/link"
import { roocoProject } from "../../../data/rooco"

function ProjectImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img className={className} src={encodeURI(src)} alt={alt} />
}

export default function RoocoProjectPage() {
  return (
    <div className="page-ai page-ai-detail rooco-detail">
      <header className="header">
        <nav className="container">
          <Link href="/" className="logo">Portfolio</Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/design" className="nav-link-active">Design</Link></li>
            <li><Link href="/publishing">Web·Publishing</Link></li>
          </ul>
        </nav>
      </header>

      <main className="ai-detail container">
        <Link href="/design" className="ai-detail-back">← Design</Link>

        <header className="ai-detail-header rooco-detail-header">
          <div className="ai-detail-title">
            <span>{roocoProject.brand}</span>
            <h1>E-commerce Detail Page</h1>
            <p className="rooco-project-meta">{roocoProject.type} · {roocoProject.year}</p>
            <p className="rooco-project-type">Figma · Photoshop · ChatGPT</p>
          </div>
          <div className="ai-detail-intro">
            <p className="ai-detail-kicker">Fashion E-commerce</p>
            <p className="rooco-intro-copy">패션 상품 상세페이지를 제작하고,<br />ChatGPT × Figma를 활용해 반복 작업을 효율화했습니다.</p>
          </div>
        </header>

        <figure className="rooco-hero-media">
          <ProjectImage src={roocoProject.heroImages[0]} alt="ROOCO 패션 상품 대표 상세페이지" />
        </figure>

        <section className="rooco-section rooco-compact-section" aria-labelledby="rooco-selected-title">
          <div className="rooco-section-heading"><span>02 / SELECTED WORK</span><h2 id="rooco-selected-title">Selected Detail Pages</h2></div>
          <div className="rooco-selected-grid">
            {roocoProject.templateImages.map((src, index) => <figure key={src}><ProjectImage src={src} alt={`ROOCO 선택 상세페이지 ${index + 1}`} /></figure>)}
          </div>
        </section>

        <section className="rooco-section rooco-compact-section" aria-labelledby="rooco-workflow-title">
          <div className="rooco-section-heading"><span>03 / WORKFLOW</span><h2 id="rooco-workflow-title">Efficient Workflow with AI</h2></div>
          <figure className="rooco-workspace-figure"><ProjectImage src={roocoProject.figmaWorkspaceImage} alt="여러 상품별 상세페이지 frame이 배치된 ROOCO Figma 작업 화면" /></figure>
          <p className="rooco-section-note">반복되는 상품별 프레임 생성과 이미지 배치를 ChatGPT × Figma로 자동화해 제작 시간을 단축했습니다.<br />최종 레이아웃과 비주얼은 직접 검수·조정했습니다.</p>
          <p className="rooco-workflow-line">Assets <span>→</span> Figma Template <span>→</span> AI-assisted Production <span>→</span> Final Review</p>
        </section>

        <section className="rooco-section rooco-compact-section rooco-result" aria-labelledby="rooco-output-title">
          <div className="rooco-section-heading"><span>04 / OUTPUT</span><h2 id="rooco-output-title">Scalable Detail Page Production</h2><p>하나의 디자인 시스템을 기반으로 다양한 상품에 일관된 레이아웃을 적용했습니다.</p></div>
          <div className="rooco-output-grid">{roocoProject.selectedOutputs.map((src, index) => <figure key={src}><ProjectImage src={src} alt={`ROOCO 완성 상세페이지 ${index + 1}`} /></figure>)}</div>
        </section>
      </main>
    </div>
  )
}
