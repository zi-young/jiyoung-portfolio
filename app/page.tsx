import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <nav className="container">
          <Link href="/" className="logo">
            Portfolio
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/design">Design</Link>
            </li>
            <li>
              <Link href="/publishing">Publishing</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="main">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                Design, Develop,
                <br />
                and Refine.
              </h1>
              <p>감각적인 디자인부터 완성도 있는 구현까지 — 제 작업의 모든 과정입니다.</p>
              <div className="hero-buttons">
                <Link href="/design" className="button button-primary">
                  Design
                </Link>
                <Link href="/publishing" className="button button-outline">
                  Publishing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-social">
              <a href="mailto:your.email@example.com" aria-label="Email">
                ✉
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
            <p>© 2025 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
