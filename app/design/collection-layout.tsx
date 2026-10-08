import Link from "next/link"
import type { ReactNode } from "react"

export function CollectionLayout({ number, title, description, children }: { number: string; title: string; description: string; children: ReactNode }) {
  return <div className="design-redesign design-collection-page">
    <header className="design-redesign-header"><nav className="design-redesign-container" aria-label="주요 메뉴"><Link href="/" className="design-redesign-logo">Portfolio</Link><div className="design-redesign-nav"><Link href="/">Home</Link><Link href="/design" aria-current="page">Design</Link><Link href="/publishing">Web·Publishing</Link></div></nav></header>
    <main className="design-redesign-container">
      <Link href="/design" className="design-collection-back">← Back to Design</Link>
      <header className="design-collection-hero"><span>{number} / COLLECTION</span><h1>{title}</h1><p>{description}</p></header>
      {children}
      <nav className="design-collection-next" aria-label="Other collections"><Link href="/design/digital">01 Digital &amp; Commerce</Link><Link href="/design/ai">02 AI Creative</Link></nav>
    </main>
    <footer className="design-redesign-footer"><div className="design-redesign-container"><div><a href="mailto:jypark912@naver.com">Email</a><a href="https://github.com/zi-young?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://blog.naver.com/ruruha_" target="_blank" rel="noopener noreferrer">Blog</a></div><span>© 2026 Portfolio</span></div></footer>
  </div>
}

export function ProjectGalleryCard({ href, image, images, title, subtitle, meta, wide = false }: { href: string; image?: string; images?: string[]; title: string; subtitle: string; meta: string; wide?: boolean }) {
  return <Link href={href} className={`design-gallery-card ${wide ? "is-wide" : ""}`}><div className={`design-gallery-media ${images ? "has-gallery" : ""}`}>{images ? <div className="design-gallery-media-grid">{images.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}</div> : <img src={image} alt="" loading="lazy" />}<span className="design-project-arrow" aria-hidden="true">↗</span></div><div className="design-gallery-copy"><span>{meta}</span><h2>{title}</h2><p>{subtitle}</p></div></Link>
}
