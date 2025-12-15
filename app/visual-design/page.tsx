import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-commerce Product Detail",
    description: "쇼핑몰 상세페이지 디자인 - 사용자 구매 전환율 최적화",
    category: "UI/UX Design",
    image: "/ecommerce-product-detail-page-design.jpg",
  },
  {
    id: 2,
    title: "Mobile App Interface",
    description: "헬스케어 앱 UI 디자인 - 직관적인 사용자 경험",
    category: "Mobile Design",
    image: "/healthcare-mobile-app.png",
  },
  {
    id: 3,
    title: "Dashboard UI Kit",
    description: "관리자 대시보드 UI 키트 - 데이터 시각화",
    category: "UI Design",
    image: "/admin-dashboard-ui-design.jpg",
  },
  {
    id: 4,
    title: "Brand Identity System",
    description: "브랜드 아이덴티티 디자인 - 로고, 컬러, 타이포그래피",
    category: "Branding",
    image: "/brand-identity-design-system.png",
  },
  {
    id: 5,
    title: "Landing Page Design",
    description: "SaaS 서비스 랜딩 페이지 - 전환율 중심 디자인",
    category: "Web Design",
    image: "/saas-landing-page.png",
  },
  {
    id: 6,
    title: "Design System",
    description: "컴포넌트 기반 디자인 시스템 구축",
    category: "UI/UX Design",
    image: "/design-system-components.png",
  },
]

export default function VisualDesignPage() {
  return (
    <div className="page-visual-design">
      {/* Header */}
      <header className="header">
        <nav className="container">
          <Link href="/" className="logo">
            Portfolio
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/visual-design" className="nav-link-active">
                Visual Design
              </Link>
            </li>
            <li>
              <Link href="/frontend">Frontend</Link>
            </li>
            <li>
              <Link href="/retouch">Retouch</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        <section className="section">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Visual Design</h1>
              <p className="page-description">
                시각 디자인, 쇼핑몰 상세페이지, UI/UX 시안 등 다양한 디자인 작업물입니다.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <Link key={project.id} href={`/visual-design/${project.id}`} className="project-card">
                  <div className="project-card-image-wrapper">
                    <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-card-image" />
                    <div className="project-card-overlay">
                      <div className="project-card-overlay-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="project-card-content">
                    <span className="project-card-category">{project.category}</span>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-description">{project.description}</p>
                  </div>
                </Link>
              ))}
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
