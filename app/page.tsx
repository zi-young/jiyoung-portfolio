import Link from "next/link"

export default function HomePage() {
  return <div className="reskin-home">
    <header className="reskin-header">
      <nav className="reskin-container" aria-label="Global navigation">
        <Link href="/" className="reskin-logo">ZIYOUNG.</Link>
        <ul className="reskin-gnb">
          <li><Link href="/design">Design</Link></li>
          <li><Link href="/publishing">Web·Publishing</Link></li>
        </ul>
      </nav>
    </header>

    <main className="reskin-main">
      <section className="reskin-hero" aria-labelledby="hero-title">
        <div className="reskin-container reskin-hero-content">
          <h1 id="hero-title">Design, Develop,<br /><em>Create.</em></h1>
          <p>패션·뷰티 도메인 위에 AI와 코드를 더하는 디자이너입니다.<br />브랜드의 본질을 시각화하고, 실제 경험으로 구현합니다.</p>
          <nav className="reskin-category-nav" aria-label="Portfolio categories">
            <Link href="/design">Design</Link>
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
