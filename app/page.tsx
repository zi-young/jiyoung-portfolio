import Link from "next/link"

export default function HomePage() {
  return <div className="reskin-home">
    <header className="reskin-header">
      <nav className="reskin-container" aria-label="Global navigation">
        <Link href="/" className="reskin-logo">ZIYOUNG.</Link>
        <ul className="reskin-gnb">
          <li><Link href="/design">BX & Content Design</Link></li>
          <li><Link href="/publishing">Web·Publishing</Link></li>
        </ul>
      </nav>
    </header>

    <main className="reskin-main">
      <section className="reskin-hero" aria-labelledby="hero-title">
        <div className="reskin-container reskin-hero-content">
          <h1 id="hero-title">Design, AI,<br /><em>Create.</em></h1>
          <p>AI와 데이터를 활용해 타깃 고객의 브랜드 경험(BX)을 설계하는 디자이너입니다.<br />시각적 구현을 넘어 실제 비즈니스 유입을 이끄는 콘텐츠를 만듭니다.</p>
          <nav className="reskin-category-nav" aria-label="Portfolio categories">
            <Link href="/design">BX & Content Design</Link>
            <Link href="/publishing">Web·Publishing</Link>
          </nav>
        </div>
      </section>
    </main>

    <footer className="reskin-footer">
      <div className="reskin-container">
        <nav className="reskin-footer-links" aria-label="Footer links">
          <a href="mailto:jypark912@naver.com">Email</a>
          <a href="https://github.com/zi-young" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://blog.naver.com/ruruha_" target="_blank" rel="noopener noreferrer">Blog</a>
        </nav>
        <p>© 2026 ZIYOUNG PARK</p>
      </div>
    </footer>
  </div>
}
