"use client"
import Link from "next/link"
import { notFound } from "next/navigation"

import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "2025 MonkeySoft Recruitment Notice Design",
    description: "미리캔버스를 이용한 템플릿 활용 디자인으로 기업의 전문성과 친근함을 동시에 전달하는\n경력사원 채용 공고를 디자인했습니다.",
    category: "Content Design",
    client: "MonkeySoft",
    date: "2025.03",
    role: "Content Designer",
    images: [
      {
        src: "/monkeysoft-recruitment-notice.jpg",
        title: "MonkeySoft 채용공고 디자인",
        alt: "신뢰감 있는 블루 컬러로 IT 기업의 전문성을 강조한 채용 공고",
        description: "신뢰감을 주는 블루 컬러를 메인으로 사용하여 IT 기업의 전문성을 강조한 채용 공고입니다. 줄글 형태의 복지와 인재상 정보를 아이콘과 시각 자료로 구조화하여 가독성을 높였습니다.",
        solution: "블루 컬러 기반의 신뢰감 있는 디자인으로 IT 기업의 전문성을 표현하고, 시각적 계층 구조를 통해 정보 습득을 용이하게 했습니다.",
        result: "텍스트 위주의 공고에서 벗어나 시각적으로 정돈된 채용 공고가 되어 지원자들의 정보 습득 시간이 단축되었습니다."
      },
      {
        src: "/thingsMiner_소개서- 복사본.jpg",
        title: "MonkeySoft 소개서 디자인",
        alt: "기업 문화와 복지 정보를 시각화한 소개 자료",
        description: "일하는 방식과 근무 공간의 실제 사진을 배치하여 기업 문화를 간접 경험할 수 있도록 설계한 소개서입니다. 기업의 긍정적인 브랜딩을 강조합니다.",
        solution: "실제 업무 환경 사진과 함께 기업의 복지 및 문화를 시각적으로 표현하여 구직자들이 기업을 더 잘 이해할 수 있도록 했습니다.",
        result: "회사의 긍정적인 이미지와 업무 환경이 명확하게 전달되어 지원율 증가에 기여했습니다."
      }
    ],
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
  },
  {
    id: 4,
    title: "Instagram Content · 실전편 Quiz",
    description: "미리캔버스 템플릿을 기반으로 MonkeySoft의 실전편 콘텐츠를 픽셀 아트 스타일의 인스타그램 시리즈로 제작했습니다.",
    category: "SNS Content Design",
    client: "MonkeySoft",
    date: "2025",
    role: "Content Designer",
    tools: "미리캔버스",
    image: [
      "/E-commerce%20%26%20SNS/insta_1/001.png",
      "/E-commerce%20%26%20SNS/insta_1/002.png",
      "/E-commerce%20%26%20SNS/insta_1/003.png",
      "/E-commerce%20%26%20SNS/insta_1/004.png",
      "/E-commerce%20%26%20SNS/insta_1/005.png",
    ],
    solution: "브라우저 창, 픽셀 폰트, 커서와 버튼 그래픽을 활용해 온라인 퀴즈처럼 보이는 시각적 문법을 만들었습니다. 강한 옐로·오렌지·블루 컬러와 반복되는 픽셀 요소를 사용해 여러 장의 콘텐츠가 하나의 시리즈로 인식되도록 구성했으며, 미리캔버스 템플릿을 바탕으로 정보와 장면을 빠르게 확장했습니다.",
    result: "딱딱하게 느껴질 수 있는 실무 정보를 게임 화면처럼 친근하게 전달하고, 다음 장을 확인하고 싶게 만드는 SNS용 콘텐츠 시리즈로 완성했습니다.",
  },
  {
    id: 5,
    title: "Instagram Content · AI 기초",
    description: "미리캔버스 템플릿을 활용해 AI의 개념과 활용 가능성을 쉽고 친근하게 설명하는 인스타그램 정보 콘텐츠를 제작했습니다.",
    category: "SNS Content Design",
    client: "MonkeySoft",
    date: "2025",
    role: "Content Designer",
    tools: "미리캔버스",
    image: [
      "/E-commerce%20%26%20SNS/insta_2/001.png",
      "/E-commerce%20%26%20SNS/insta_2/002.png",
      "/E-commerce%20%26%20SNS/insta_2/003.png",
      "/E-commerce%20%26%20SNS/insta_2/004.png",
      "/E-commerce%20%26%20SNS/insta_2/005.png",
      "/E-commerce%20%26%20SNS/insta_2/006.png",
    ],
    solution: "AI의 정의와 미래 전망, 머신러닝·딥러닝 같은 핵심 개념을 한 장씩 읽히는 카드뉴스 흐름으로 정리했습니다. 보라색과 파스텔 그라데이션, 로봇 일러스트와 굵은 제목을 활용해 기술 주제를 어렵지 않게 받아들일 수 있도록 시각화했으며, 미리캔버스 템플릿으로 일관된 레이아웃을 유지했습니다.",
    result: "AI를 처음 접하는 독자도 핵심 내용을 빠르게 이해할 수 있는 교육형 SNS 콘텐츠로 제작해 브랜드의 기술 전문성과 친근한 커뮤니케이션을 함께 전달했습니다.",
  },
  {
    id: 6,
    title: "ThingsMiner Logo & CI Design",
    description: "Figma Make를 활용해 MonkeySoft의 CI 컬러를 기반으로 IoT 모니터링 솔루션 ThingsMiner의 로고와 활용 시안을 제작했습니다.",
    category: "Logo & Brand Identity",
    client: "MonkeySoft",
    date: "2025",
    role: "Brand Designer",
    tools: "Figma Make",
    image: [
      "/E-commerce & SNS/logo/스크린샷 2026-09-08 오후 1.01.08.png",
      "/E-commerce & SNS/logo/인스타그램-001.png",
    ],
    solution: "ThingsMiner의 핵심인 실시간 데이터와 모니터링을 심박수 파형과 원형 데이터 아이콘으로 시각화했습니다. MonkeySoft CI에서 사용하는 레드(#EA4335), 옐로(#FBBC04), 그린(#34A853), 블루(#4285F4)를 로고 심볼에 적용해 기존 브랜드와의 연결성을 유지하고, Figma Make를 활용해 로그인 화면과 로고 활용 시안까지 빠르게 확장했습니다.",
    result: "기술 솔루션의 데이터 흐름과 실시간성을 직관적으로 전달하는 로고 시스템을 구축하고, 서비스 화면에 적용 가능한 일관된 브랜드 방향을 제안했습니다.",
  }
]

import { useEffect } from "react"

export default function GraphicDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [project, setProject] = useState<any>(null)

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigator.clipboard.writeText("jypark912@naver.com")
    alert("이메일이 복사되었습니다: jypark912@naver.com")
  }

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

  // 이미지 배열 처리 (images 또는 image)
  const images = project.images || (Array.isArray(project.image)
    ? project.image.map((src: string) => ({ src }))
    : project.image
    ? [{ src: project.image }]
    : [])

  const currentImageData = images[currentImageIndex] || {}
  const currentImageSrc = currentImageData.src || images[currentImageIndex]

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
              <Link href="/publishing">Web·Publishing</Link>
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
                <>
                  <img
                    src={currentImageSrc || "/placeholder.svg"}
                    alt={currentImageData.alt || project.title}
                    style={{ width: "100%", borderRadius: 8, boxShadow: "0 2px 8px #0001" }}
                  />
                  {currentImageData.title && (
                    <p style={{ marginTop: 12, textAlign: "center", fontSize: 14, color: "#666", fontWeight: 500 }}>
                      {currentImageData.title}
                    </p>
                  )}
                </>
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
              {currentImageData.description && (
                <div className="detail-section">
                  <h2 style={{ fontSize: 14, fontWeight: 500, marginBottom: 12, color: "#999", letterSpacing: 0.5, textTransform: "uppercase" }}>Image Description</h2>
                  <p style={{ whiteSpace: "pre-wrap", fontSize: 13, color: "#777", lineHeight: 1.6 }}>{currentImageData.description}</p>
                </div>
              )}

              {currentImageData.solution ? (
                <div className="detail-section" style={{ marginTop: 24 }}>
                  <h2>Solution</h2>
                  <p style={{ whiteSpace: "pre-wrap" }}>{currentImageData.solution}</p>
                </div>
              ) : (
                <div className="detail-section" style={{ marginTop: 24 }}>
                  <h2>Solution</h2>
                  <p style={{ whiteSpace: "pre-wrap" }}>{project.solution}</p>
                </div>
              )}

              {currentImageData.result ? (
                <div className="detail-section" style={{ marginTop: 24 }}>
                  <h2>Result</h2>
                  <p style={{ whiteSpace: "pre-wrap" }}>{currentImageData.result}</p>
                </div>
              ) : (
                <div className="detail-section" style={{ marginTop: 24 }}>
                  <h2>Result</h2>
                  <p style={{ whiteSpace: "pre-wrap" }}>{project.result}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-social">
              <a href="#" onClick={handleEmailClick} aria-label="Email">
                Email
              </a>
              <a href="https://github.com/zi-young" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
              <a href="https://blog.naver.com/ruruha_" target="_blank" rel="noopener noreferrer" aria-label="Blog">
                Blog
              </a>
            </div>
            <p>© 2026 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
