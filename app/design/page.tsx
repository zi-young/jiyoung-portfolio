import Link from "next/link"
const collections = [
  { number: "01", title: "Digital & Commerce Design", description: "UI/UX · E-commerce · Web · Content Design", href: "/design/digital", images: ["/rooco/rooco-detail-01.png", "/fashion.jpg", "/yogi/01-cover.webp"] },
  { number: "02", title: "AI Creative & Campaign", description: "Midjourney · AI Visual · Brand Campaign", href: "/design/ai", images: ["/AI_contents/section_A/pulpe/Woman_smiling_with_lip_product_202608071008.jpg", "/AI_contents/section_A/voe/pomelli_photoshoot_image_4_5_0731 (6).png", "/AI_contents/section_A/lueu/Woman_wearing_bandana_top_jeans_202607241255.jpeg"] },
]

function CollectionVisual({ collection }: { collection: (typeof collections)[number] }) {
  return <div className="design-collection-mosaic">{collection.images.map((image) => <img key={image} src={image} alt="" loading="lazy" />)}</div>
}

export default function DesignPage() {
  return <div className="design-redesign">
    <header className="design-redesign-header"><nav className="design-redesign-container" aria-label="주요 메뉴"><Link href="/" className="design-redesign-logo">Portfolio</Link><div className="design-redesign-nav"><Link href="/">Home</Link><Link href="/design" aria-current="page">Design</Link><Link href="/publishing">Web·Publishing</Link></div></nav></header>
    <main>
      <section className="design-redesign-hero design-redesign-container"><span className="design-redesign-eyebrow">SELECTED WORKS / 2023—2026</span><h1>Design with <em>purpose.</em></h1><div className="design-redesign-hero-bottom"><p>브랜드의 가치를 이해하고, 기획부터 디자인과 디지털 구현까지 연결합니다.</p><span>02 CREATIVE COLLECTIONS</span></div></section>
      <section className="design-redesign-works design-redesign-container" aria-labelledby="collections-title"><div className="design-redesign-section-heading"><span>SELECTED WORKS</span><h2 id="collections-title">Creative collections</h2></div><div className="design-collection-grid">{collections.map((collection) => <Link key={collection.number} href={collection.href} className="design-collection-card"><div className="design-collection-media"><CollectionVisual collection={collection} /><span className="design-project-arrow" aria-hidden="true">↗</span></div><div className="design-collection-copy"><div className="design-project-meta"><span>{collection.number} / COLLECTION</span><span>View Collection ↗</span></div><h2>{collection.title}</h2><p>{collection.description}</p></div></Link>)}</div></section>
    </main>
    <footer className="design-redesign-footer"><div className="design-redesign-container"><div><a href="mailto:jypark912@naver.com">Email</a><a href="https://github.com/zi-young?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://blog.naver.com/ruruha_" target="_blank" rel="noopener noreferrer">Blog</a></div><span>© 2026 Portfolio</span></div></footer>
  </div>
}
