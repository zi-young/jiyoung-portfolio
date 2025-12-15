"use client"

import type React from "react"

import Link from "next/link"
import { notFound } from "next/navigation"
import { useState, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    client: "Online Retail",
    year: "2024",
    description: "Next.js 기반 쇼핑몰 플랫폼으로 결제 시스템을 통합했습니다.",
    images: [
      "/ecommerce-platform-website.jpg",
      "/ecommerce-homepage.png",
      "/ecommerce-product-page.png",
      "/ecommerce-checkout.png",
    ],
    challenge:
      "기존 레거시 시스템을 모던한 Next.js 스택으로 마이그레이션하면서도 서비스 중단 없이 진행해야 했습니다. 또한 복잡한 결제 프로세스를 안정적으로 구현해야 했습니다.",
    solution:
      "단계적 마이그레이션 전략을 수립하고, Stripe API를 활용해 안전한 결제 시스템을 구축했습니다. Next.js의 ISR을 활용해 성능을 최적화했습니다.",
    result: "페이지 로딩 속도 60% 개선, 결제 성공률 95% 이상 달성, SEO 점수 향상으로 자연 유입 40% 증가했습니다.",
  },
  {
    id: 2,
    title: "GS건설 하수처리장 통합 운영 시스템",
    tags: ["eGovFramework", "JSP", "HTML", "CSS", "JavaScript", "i18n"],
    client: "GS건설",
    year: "2024",
    description: "하수처리장을 통합 관리하는 운영 시스템의 프론트엔드 퍼블리싱과 UI 개발을 담당했습니다.",
    images: ["/gms-dashboard.png", "/gms-monitoring.png", "/gms-table.png", "/gms-tank.png", "/gms-assect.png", "/gms-report.png", "/gms-document.png"],
    challenge: "다국어(한국어·영어·베트남어) 환경과 복잡한 엑셀 기반 데이터를 웹 환경에서 안정적으로 구현해야 했습니다.",
    solution:
      "전자정부프레임워크(eGovFramework) 기반으로 JSP와 HTML을 사용해 화면을 퍼블리싱하고, UTF-8 인코딩 환경을 설정하여 다국어 버전을 지원했습니다. 또한 엑셀 형식 데이터를 웹 표로 변환해 관리자들이 실시간으로 시설 정보를 확인할 수 있도록 구현했습니다.",
    result:
      "다국어 지원과 표 기반 UI 개선으로 글로벌 사용자 접근성이 높아지고, 유지보수가 용이한 구조로 개발 효율을 향상시켰습니다.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    client: "Creative Agency",
    year: "2023",
    description: "부드러운 애니메이션과 인터랙션이 특징인 포트폴리오 웹사이트입니다.",
    images: ["/portfolio-website-design.png", "/portfolio-hero-section.jpg", "/portfolio-projects-gallery.jpg"],
    challenge: "크리에이티브한 디자인을 성능 저하 없이 구현하고, 모든 디바이스에서 동일한 경험을 제공해야 했습니다.",
    solution:
      "GSAP 라이브러리로 최적화된 애니메이션을 구현하고, IntersectionObserver로 스크롤 기반 인터랙션을 구현했습니다.",
    result: "Lighthouse 성능 점수 95 이상, 모바일 최적화 완료, 클라이언트 만족도 5/5 달성했습니다.",
  },
  {
    id: 4,
    title: "Blog Platform",
    tags: ["Next.js", "MDX", "Contentlayer", "Tailwind"],
    client: "Tech Blog",
    year: "2024",
    description: "MDX 기반의 개발자 블로그 플랫폼입니다.",
    images: ["/blog-platform-website.png", "/blog-home-page.jpg", "/blog-article-page.jpg"],
    challenge: "마크다운 기반 콘텐츠 관리와 코드 하이라이팅, SEO 최적화를 동시에 구현해야 했습니다.",
    solution:
      "Contentlayer로 타입 안전한 콘텐츠 관리를 구현하고, Prism.js로 코드 하이라이팅을 추가했습니다. 메타데이터 최적화로 SEO를 개선했습니다.",
    result: "콘텐츠 관리 효율 향상, SEO 점수 90 이상, 월 방문자 수 3배 증가했습니다.",
  },
  {
    id: 5,
    title: "Component Library",
    tags: ["React", "TypeScript", "Storybook", "Styled Components"],
    client: "Design System Team",
    year: "2023",
    description: "재사용 가능한 React 컴포넌트 라이브러리입니다.",
    images: ["/component-library-ui.jpg", "/component-library-buttons.jpg", "/component-library-forms.jpg"],
    challenge: "다양한 프로젝트에서 재사용 가능하면서도 커스터마이징이 쉬운 컴포넌트를 만들어야 했습니다.",
    solution:
      "Compound Component 패턴을 활용하고, Storybook으로 문서화했습니다. TypeScript로 타입 안전성을 보장했습니다.",
    result: "개발 생산성 50% 향상, 버그 발생률 감소, 팀 간 협업 효율 증가했습니다.",
  },
  {
    id: 6,
    title: "Landing Page",
    tags: ["Next.js", "TypeScript", "Framer Motion", "SEO"],
    client: "Product Launch",
    year: "2024",
    description: "제품 런칭을 위한 고성능 랜딩 페이지입니다.",
    images: ["/product-landing-page.png", "/landing-page-hero.jpg", "/landing-page-features.jpg"],
    challenge: "빠른 로딩 속도와 SEO 최적화, 그리고 매력적인 애니메이션을 모두 구현해야 했습니다.",
    solution:
      "Next.js의 Image 최적화를 활용하고, Framer Motion으로 가벼운 애니메이션을 구현했습니다. 메타 태그와 구조화된 데이터를 추가했습니다.",
    result: "First Contentful Paint 1.5초 이하, SEO 점수 98, 전환율 55% 증가했습니다.",
  },
]

function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentIndex, images.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      goToNext()
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      goToPrevious()
    }
  }

  return (
    <div className="image-slider">
      <div
        className="slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img src={images[currentIndex] || "/placeholder.svg"} alt={`${title} - ${currentIndex + 1}`} />
      </div>

      {images.length > 1 && (
        <>
          <button className="slider-button slider-button-prev" onClick={goToPrevious} aria-label="Previous image">
            ←
          </button>
          <button className="slider-button slider-button-next" onClick={goToNext} aria-label="Next image">
            →
          </button>

          <div className="slider-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`slider-indicator ${index === currentIndex ? "slider-indicator-active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function FrontendDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

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
      <main className="detail-page">
        <div className="container">
          <Link href="/frontend" className="button button-back button-outline">
            ← Back to Projects
          </Link>

          <div className="detail-header">
            <h1 className="detail-title">{project.title}</h1>
            <div className="detail-meta">
              <span>{project.client}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <div className="project-tags" style={{ justifyContent: "center", marginBottom: "1rem" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <p className="detail-description">{project.description}</p>
          </div>

          <ImageSlider images={project.images} title={project.title} />

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
              <h2>Key Features & Results</h2>
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
