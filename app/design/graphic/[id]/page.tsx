"use client"
import Link from "next/link"
import { notFound } from "next/navigation"

import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "2025 MonkeySoft Recruitment Notice Design",
    description: "미리캔버스를 활용하여 기업의 전문성과 친근함을 동시에 전달하는 경력사원 채용 공고를 디자인했습니다.",
    category: "Content Design",
    client: "MonkeySoft",
    date: "2025.03",
    role: "Content Designer",
    image: "/monkeysoft-recruitment-notice.jpg",
    solution:
     "신뢰감을 주는 블루 컬러를 메인으로 사용하여 IT 기업의 전문성을 강조했습니다. 줄글 형태의 복지와 인재상 정보를 아이콘과 시각 자료로 구조화하여 가독성을 높였으며, '일하는 방식'과 '근무 공간' 실제 사진을 배치하여 기업 문화를 간접 경험할 수 있도록 정보 계층을 설계했습니다.",
    result: "텍스트 위주의 딱딱한 공고에서 벗어나 시각적으로 정돈된 디자인을 제공함으로써, 기업의 긍정적인 브랜딩 효과를 높이고 지원자들의 정보 습득 시간을 단축시켰습니다."
  },
  {
    id: 2,
    title: "ThingsMiner Brand Identity Design",
    description: "Figma Make AI를 활용하여 IoT 모니터링 솔루션 'ThingsMiner'의 브랜드 로고와 아이콘 시스템을 구축했습니다.",
    category: "Branding",
    client: "MonkeySoft",
    date: "2025.12",
    role: "Brand Designer",
    image: ["/thingsminer-brand-identity.png", "/thingsminer-logo.png", "/thingsminer-icon.png"],
    solution:
      "Figma Make AI를 도구로 활용하여 Google Material Design 컬러(Chrome CI)를 기반으로 친숙함과 기술적 신뢰도를 동시에 확보했습니다. 데이터의 흐름과 실시간성을 상징하는 '심박수(Pulse)' 파형을 4색 세그먼트 원형에 배치하여 분석과 통찰력을 시각화했으며, 파비콘과 앱 아이콘 등 다양한 매체에서 일관된 시인성을 갖도록 디자인했습니다.",
    result: "기술적 완성도와 포용성을 상징하는 로고 시스템을 확립하여 로그인 화면 및 대시보드 UI에 성공적으로 적용했으며, 솔루션의 전문적인 이미지를 강화했습니다."
  },
  {
    id: 3,
    title: "Album, Poster & Fashion Detail Page Design",
    description:
      "앨범 커버와 프로모션 포스터,\n의류 쇼핑몰 상세페이지 디자인 작업입니다.\n브랜드 감성과 목적에 맞춘 시각적 구성을 통해\n각 콘텐츠의 분위기를 극대화했습니다.",
    category: "Graphic Design · Visual Branding",
    client: "Personal Project",
    date: "2020",
    role: "Designer",
    tools: "Adobe Photoshop, Adobe Illustrator",
    image: ["/album-poster.jpg","/fashion.jpg"],
    solution:
      "앨범 디자인은 아티스트의 감성과 콘셉트를 반영한 일러스트 중심의 무드로,\n포스터는 프로모션 목적에 맞게 깔끔하고 직관적인 레이아웃으로 구성했습니다.\n의류 상세페이지는 컬러 톤과 배경 질감을 통일해 브랜드의 감각적인 이미지를 강화했습니다.",
    result:
      "감성적이면서도 상업적인 완성도를 갖춘 시리즈 디자인으로 완성되었으며,\n다양한 매체에 적용 가능한 비주얼 아이덴티티로 확장되었습니다.",
  }
]

import { useEffect } from "react"

export default function GraphicDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [project, setProject] = useState<any>(null)

  useEffect(() => {
    params.then(({ id }) => {
      const found = projects.find((p) => p.id === Number(id))
      setProject(found)
      setCurrentImageIndex(0)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  if (!project) {
    return null
  }

  // 이미지 배열 처리
  const images = Array.isArray(project.image)
    ? project.image
    : project.image
    ? [project.image]
    : []

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }
  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="page-design">
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
              <Link href="/design" className="nav-link-active">
                Design
              </Link>
            </li>
            <li>
              <Link href="/publishing">Publishing</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        <section className="detail-page">
          <div className="container">
            <Link href="/design" className="button button-outline button-back">
              ← Back to Design
            </Link>

            <div className="detail-header">
              <h1 className="detail-title">{project.title}</h1>
              <div className="detail-meta">
                <span>Client: {project.client}</span>
                <span>Date: {project.date}</span>
                <span>Role: {project.role}</span>
              </div>
              <p className="detail-description" style={{ whiteSpace: "pre-wrap" }}>{project.description}</p>
            </div>

            {/* 이미지 슬라이더 */}
            <div className="detail-image" style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
              {images.length > 0 && (
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={project.title}
                  style={{ width: "100%", borderRadius: 8, boxShadow: "0 2px 8px #0001" }}
                />
              )}
              {images.length > 1 && (
                <>
                  <button
                    className="slider-button slider-button-prev"
                    style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", zIndex: 2 }}
                    onClick={handlePrevImage}
                    aria-label="이전 이미지"
                  >
                    ‹
                  </button>
                  <button
                    className="slider-button slider-button-next"
                    style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", zIndex: 2 }}
                    onClick={handleNextImage}
                    aria-label="다음 이미지"
                  >
                    ›
                  </button>
                  <div style={{ textAlign: "center", marginTop: 8 }}>
                    {images.map((_: string, idx: number) => (
                      <button
                        key={idx}
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          margin: "0 4px",
                          background: idx === currentImageIndex ? "#007aff" : "#ccc",
                          border: "none",
                          display: "inline-block",
                          cursor: "pointer"
                        }}
                        onClick={() => setCurrentImageIndex(idx)}
                        aria-label={`이미지 ${idx + 1}번으로 이동`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="detail-content">
              <div className="detail-section">
                <h2>Solution</h2>
                <p style={{ whiteSpace: "pre-wrap" }}>{project.solution}</p>
              </div>

              <div className="detail-section">
                <h2>Result</h2>
                <p style={{ whiteSpace: "pre-wrap" }}>{project.result}</p>
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
