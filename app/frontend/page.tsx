import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Double Knew 사내 업무 통합 포털 (TMS)",
    description: "Next.js 기반 쇼핑몰 플랫폼 구축 - 결제 시스템 통합",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "/ecommerce-platform-website.jpg",
  },
  {
    id: 2,
    title: "Dashboard Application",
    description: "React 기반 관리자 대시보드 - 실시간 데이터 시각화",
    tags: ["React", "Chart.js", "REST API", "CSS Modules"],
    image: "/dashboard-application-interface.jpg",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "반응형 포트폴리오 웹사이트 - 애니메이션 및 인터랙션",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: "/portfolio-website-design.png",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Next.js 블로그 플랫폼 - MDX 기반 콘텐츠 관리",
    tags: ["Next.js", "MDX", "Contentlayer", "Tailwind"],
    image: "/blog-platform-website.png",
  },
  {
    id: 5,
    title: "Component Library",
    description: "재사용 가능한 React 컴포넌트 라이브러리",
    tags: ["React", "TypeScript", "Storybook", "Styled Components"],
    image: "/component-library-ui.jpg",
  },
  {
    id: 6,
    title: "Landing Page",
    description: "제품 소개 랜딩 페이지 - SEO 최적화 및 성능 개선",
    tags: ["Next.js", "TypeScript", "Framer Motion", "SEO"],
    image: "/product-landing-page.png",
  },
]

export default function FrontendPage() {
  return (
    <div className="page-frontend">
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
              <Link href="/visual-design">Visual Design</Link>
            </li>
            <li>
              <Link href="/frontend" className="nav-link-active">
                Frontend
              </Link>
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
              <h1 className="page-title">Frontend / Web Development</h1>
              <p className="page-description">디자인을 실제로 구현한 퍼블리싱 및 프론트엔드 개발 작업물입니다.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <Link key={project.id} href={`/frontend/${project.id}`} className="project-card project-card-frontend">
                  <div className="project-card-image-wrapper">
                    <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-card-image" />
                    <div className="project-card-overlay">
                      <div className="project-card-overlay-buttons">
                        <span className="overlay-button">View Code</span>
                        <span className="overlay-button">Live Demo</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-card-content">
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
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
