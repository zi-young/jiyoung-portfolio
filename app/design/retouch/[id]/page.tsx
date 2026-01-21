"use client"

import type React from "react"

import Link from "next/link"
import { notFound } from "next/navigation"
import { useState, use } from "react"

const sections = [
  {
    title: "웨딩",
    projects: [
      {
        title: "웨딩 인물보정 1",
        image: "/retouchihng/wedding1.jpg",
        description: "웨딩 촬영에서 자연스러운 피부와 밝은 분위기를 강조한 보정.",
      },
      {
        title: "웨딩 인물보정 2",
        image: "/retouchihng/wedding2.jpg",
        description: "신부의 드레스와 메이크업을 돋보이게 하는 색감 보정.",
      },
      {
        title: "웨딩 인물보정 3",
        image: "/retouchihng/wedding3.jpg",
        description: "밝고 화사한 피부톤과 헤어 디테일 강조.",
      },
    ],
  },
  {
    title: "프로필사진",
    projects: [
      {
        title: "프로필 보정 1",
        image: "/retouching/profile1.png",
        description: "자연스러운 피부결과 화장.",
      },
      {
        title: "프로필 보정 2",
        image: "/retouching/profile2.png",
        description: "헤어라인과 자연스러운 미소 연출.",
      },
      {
        title: "프로필 보정 3",
        image: "/retouching/profile3.PNG",
        description: "얼굴윤곽과 자연스러운 피부 연출.",
      },
      {
        title: "프로필 보정 4",
        image: "/retouching/profile4.PNG",
        description: "얼굴윤곽과 톤 보정.",
      },
    ],
  },
  {
    title: "바디위주",
    projects: [
      {
        title: "바디 보정 1",
        image: "/retouching/body1.PNG",
        description: "자연스러운 바지 핏 보정.",
      },
      {
        title: "바디 보정 2",
        image: "/retouchihng/body2.jpg",
        description: "근육과 실루엣을 자연스럽게 보정.",
      },
      {
        title: "바디 보정 3",
        image: "/retouchihng/body3.jpg",
        description: "피부톤과 바디 밸런스 보정.",
      },
    ],
  },
]

export default function RetouchDetailPage() {
  // 각 섹션별 메인 슬라이더 인덱스 관리
  const [mainIndexes, setMainIndexes] = useState(sections.map(() => 0))

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigator.clipboard.writeText("jypark912@naver.com")
    alert("이메일이 복사되었습니다: jypark912@naver.com")
  }

  const handleMainPrev = (sectionIdx: number) => {
    setMainIndexes((prev) =>
      prev.map((idx, i) =>
        i === sectionIdx
          ? idx === 0
            ? sections[sectionIdx].projects.length - 1
            : idx - 1
          : idx
      )
    )
  }
  const handleMainNext = (sectionIdx: number) => {
    setMainIndexes((prev) =>
      prev.map((idx, i) =>
        i === sectionIdx
          ? idx === sections[sectionIdx].projects.length - 1
            ? 0
            : idx + 1
          : idx
      )
    )
  }

  return (
    <div className="page-design fade-in">
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
            <Link href="/design" className="button button-outline button-back slide-in-left">
              ← Back to Design
            </Link>

            <div className="detail-header slide-in-up">
              <h1 className="detail-title">Photo Retouching</h1>
              <div className="detail-meta">
                <span>다양한 인물 보정 사례를 확인하세요.</span>
              </div>
            </div>

            {/* 섹션별 메인 슬라이더 */}
            {sections.map((section, sectionIdx) => {
              const projectIdx = mainIndexes[sectionIdx]
              const project = section.projects[projectIdx]
              return (
                <div key={section.title} className="retouch-section slide-in-up" style={{ marginBottom: 48 }}>
                  <h2 style={{ marginBottom: 16 }}>{section.title}</h2>
                  <div
                    style={{ position: "relative", maxWidth: 1200, margin: "0 auto", width: "100%" }}
                  >
                    {/* 메인 슬라이더: 좌우 버튼 */}
                    <button
                      className="slider-button slider-button-prev"
                      style={{ position: "absolute", left: -32, top: "50%", transform: "translateY(-50%)", zIndex: 2 }}
                      onClick={() => handleMainPrev(sectionIdx)}
                      aria-label="이전 보정사례"
                    >
                      ‹
                    </button>
                    <button
                      className="slider-button slider-button-next"
                      style={{ position: "absolute", right: -32, top: "50%", transform: "translateY(-50%)", zIndex: 2 }}
                      onClick={() => handleMainNext(sectionIdx)}
                      aria-label="다음 보정사례"
                    >
                      ›
                    </button>
                    {/* 이미지 */}
                    <div
                      style={{
                        width: "100%",
                        maxWidth: 1200,
                        margin: "0 auto"
                      }}
                    >
                      <div className="before-after-container">
                        <div className="before-after-images">
                          <img
                            src={project.image || "/placeholder.svg?height=1080&width=1920"}
                            alt={project.title}
                            className="image-after"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div style={{ marginTop: 8, textAlign: "center", fontSize: 15, color: "#555" }}>{project.description}</div>
                      </div>
                    </div>
                    {/* 인디케이터 */}
                    <div style={{ textAlign: "center", marginTop: 8 }}>
                      {section.projects.map((_, idx) => (
                        <button
                          key={idx}
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            margin: "0 4px",
                            background: idx === projectIdx ? "#007aff" : "#ccc",
                            border: "none",
                            display: "inline-block",
                            cursor: "pointer"
                          }}
                          onClick={() => setMainIndexes(prev => prev.map((v, i) => i === sectionIdx ? idx : v))}
                          aria-label={`보정사례 ${idx + 1}번으로 이동`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* 상세 설명 영역 제거: 각 슬라이더 아래에만 설명 */}
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
