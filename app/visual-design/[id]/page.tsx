import Link from "next/link"
import { notFound } from "next/navigation"

const projects = [
  {
    id: 1,
    title: "E-commerce Product Detail",
    category: "UI/UX Design",
    client: "Fashion Brand",
    year: "2024",
    description: "쇼핑몰 상세페이지 디자인으로 사용자의 구매 전환율을 최적화했습니다.",
    image: "/ecommerce-product-detail-page-design.jpg",
    challenge:
      "기존 상세페이지의 낮은 전환율 문제를 해결하고, 모바일 사용자 경험을 개선해야 했습니다. 제품 정보를 효과적으로 전달하면서도 깔끔한 디자인을 유지하는 것이 과제였습니다.",
    solution:
      "제품 이미지를 대형으로 배치하고, 주요 정보를 스크롤 없이 확인할 수 있도록 레이아웃을 재설계했습니다. 구매 버튼의 위치와 크기를 최적화하고, 리뷰 섹션을 전략적으로 배치했습니다.",
    result:
      "디자인 적용 후 모바일 전환율 35% 상승, 페이지 이탈률 20% 감소했습니다. 사용자 테스트에서 정보 접근성이 크게 개선되었다는 피드백을 받았습니다.",
  },
  {
    id: 2,
    title: "Mobile App Interface",
    category: "Mobile Design",
    client: "Healthcare Startup",
    year: "2024",
    description: "헬스케어 앱의 직관적인 사용자 경험을 위한 UI 디자인입니다.",
    image: "/healthcare-mobile-app.png",
    challenge:
      "복잡한 건강 데이터를 사용자가 쉽게 이해할 수 있도록 시각화하고, 일일 건강 기록을 간편하게 입력할 수 있는 인터페이스가 필요했습니다.",
    solution:
      "데이터 시각화에 차트와 그래프를 활용하고, 원터치로 건강 데이터를 입력할 수 있는 위젯을 디자인했습니다. 컬러 시스템을 통해 건강 상태를 직관적으로 표현했습니다.",
    result: "사용자 만족도 4.8/5.0 달성, 일일 활성 사용자 수 50% 증가했습니다.",
  },
  {
    id: 3,
    title: "Dashboard UI Kit",
    category: "UI Design",
    client: "SaaS Company",
    year: "2023",
    description: "관리자 대시보드를 위한 포괄적인 UI 키트입니다.",
    image: "/admin-dashboard-ui-design.jpg",
    challenge: "다양한 데이터를 효과적으로 표시하면서도 일관성 있는 디자인 시스템을 구축해야 했습니다.",
    solution:
      "재사용 가능한 컴포넌트 라이브러리를 만들고, 데이터 시각화를 위한 차트 컴포넌트를 디자인했습니다. 다크모드를 지원하는 컬러 시스템을 구축했습니다.",
    result: "개발 시간 40% 단축, 디자인 일관성 향상으로 사용자 피드백 개선되었습니다.",
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "Branding",
    client: "Tech Startup",
    year: "2024",
    description: "스타트업을 위한 브랜드 아이덴티티 시스템입니다.",
    image: "/brand-identity-design-system.png",
    challenge: "새로운 브랜드의 정체성을 확립하고, 다양한 매체에서 일관성 있게 적용할 수 있는 시스템이 필요했습니다.",
    solution: "로고, 컬러 팔레트, 타이포그래피, 아이콘 시스템을 포함한 포괄적인 브랜드 가이드라인을 제작했습니다.",
    result: "브랜드 인지도 상승, 마케팅 자료 제작 시간 단축되었습니다.",
  },
  {
    id: 5,
    title: "Landing Page Design",
    category: "Web Design",
    client: "SaaS Platform",
    year: "2024",
    description: "전환율 중심의 SaaS 서비스 랜딩 페이지 디자인입니다.",
    image: "/saas-landing-page.png",
    challenge: "복잡한 서비스를 간단하게 설명하고, 방문자를 고객으로 전환시켜야 했습니다.",
    solution:
      "명확한 가치 제안을 상단에 배치하고, 스토리텔링 방식으로 서비스를 소개했습니다. CTA 버튼을 전략적으로 배치했습니다.",
    result: "방문자 전환율 45% 증가, 평균 체류 시간 2배 증가했습니다.",
  },
  {
    id: 6,
    title: "Design System",
    category: "UI/UX Design",
    client: "Enterprise",
    year: "2023",
    description: "대규모 프로젝트를 위한 컴포넌트 기반 디자인 시스템입니다.",
    image: "/design-system-components.png",
    challenge: "여러 팀이 협업하면서도 디자인 일관성을 유지할 수 있는 시스템이 필요했습니다.",
    solution: "토큰 기반 디자인 시스템을 구축하고, Figma 라이브러리와 개발 컴포넌트를 연동했습니다.",
    result: "디자인-개발 협업 효율 60% 향상, 제품 출시 시간 단축되었습니다.",
  },
]

export default function VisualDesignDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

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
      <main className="detail-page">
        <div className="container">
          <Link href="/visual-design" className="button button-back button-outline">
            ← Back to Projects
          </Link>

          <div className="detail-header">
            <h1 className="detail-title">{project.title}</h1>
            <div className="detail-meta">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.client}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <p className="detail-description">{project.description}</p>
          </div>

          <div className="detail-image">
            <img src={project.image || "/placeholder.svg"} alt={project.title} />
          </div>

          <div className="detail-content">
            <div className="detail-section">
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
            </div>

            <div className="detail-section">
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </div>

            <div className="detail-section">
              <h2>Result</h2>
              <p>{project.result}</p>
            </div>
          </div>
        </div>
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
