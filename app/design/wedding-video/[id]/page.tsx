"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { useState, use } from "react"

const projects = [
  {
    id: 1,
    title: "Romantic Wedding Moving Poster",
    description:
      "무빙포스터 일러스트 형식의 식전영상으로,\n식전 1회 틀기 좋은 4분 내외 길이의 영상입니다.",
    category: "Wedding Film · 식전영상 (4분 / 한곡)",
    role: "Director, Editor",
    thumbnail: "/videos/video_1.jpg",
    videoUrl: "/videos/video_1.mp4",
    solution:
      "무빙포스터 스타일의 일러스트 연출과 세로 이미지를 가로 화면에 자연스럽게 배경 합성하여 구성했습니다.\n3분 내외의 한 곡 음악에 맞춰 장면 전환과 무빙을 설계하고,\n음악 길이에 따라 2–3분 내 유연하게 조절 가능하도록 제작했습니다.",
    result:
      "로맨틱하면서도 담백한 분위기의 식전영상으로 완성되었으며,\n결혼식 공간의 분위기를 자연스럽게 살리는 영상으로 활용되었습니다.",
  },
  {
    id: 2,
    title: "Modern Wedding Video",
    description: "모던한 스타일의 식전영상으로 세련된 감각을 담았습니다.",
    category: "Wedding Film · 식전영상 (1분 30초 / 1절)",
    role: "Director, Editor",
    thumbnail: "/videos/video_2.jpg",
    videoUrl: "/videos/video_2.mp4",
    solution:
      "짧은 영상과 이미지의 조합으로 모던한 분위기를 연출했습니다.\n세련된 그래픽 요소와 깔끔한 전환 효과를 활용하여,\n신랑신부의 개성과 스타일을 반영한 영상을 제작했습니다.",
    result: "느린템포의 음악과 어우러져 결혼식 분위기를 한층 더 돋우는 영상으로 활용되었습니다.",
  },
  {
    id: 3,
    title: "Minimal Wedding Loop",
    description: "잔잔한 스타일로 1분이내 영상을 반복재생하기 좋은 식전영상입니다.",
    category: "Wedding Film · 식전영상 (1분 이내 / 반복재생)",
    role: "Director, Editor",
    thumbnail: "/videos/video_3.jpg",
    videoUrl: "/videos/video_3.mp4",
    solution:
      "잔잔한 스타일의 영상과 이미지의 조합으로,\n1분 이내의 짧은 길이로 반복 재생하기 좋은 식전영상을 제작했습니다.\n부드러운 전환과 음악에 맞춘 편집으로 결혼식 분위기를 자연스럽게 살렸습니다.",
    result: "결혼식 시작 전 반복 재생되며,\n신랑신부와 하객 모두에게 잔잔한 감동을 선사하는 영상으로 활용되었습니다.",
  },
]

export default function WeddingVideoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === Number(id))
  const [isPlaying, setIsPlaying] = useState(false)

  if (!project) {
    notFound()
  }

  const handlePlayVideo = () => {
    setIsPlaying(true)
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
              <h1 className="detail-title">{project.title}</h1>
              <div className="detail-meta">
                <span>Role: {project.role}</span>
              </div>
              <p className="detail-description" style={{ whiteSpace: "pre-line" }}>{project.description}</p>
            </div>

            <div className="video-player slide-in-up">
              {!isPlaying ? (
                <div className="video-thumbnail">
                  <img src={project.thumbnail || "/placeholder.svg?height=1080&width=1920"} alt={project.title} />
                  <button className="video-play-button" onClick={handlePlayVideo} aria-label="Play video">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="40" fill="rgba(0, 0, 0, 0.7)" />
                      <path d="M32 25L55 40L32 55V25Z" fill="white" />
                    </svg>
                  </button>
                </div>
              ) : (
                <video src={project.videoUrl} controls autoPlay className="video-element">
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="detail-content">
              <div className="detail-section slide-in-up">
                <h2>Solution</h2>
                <p style={{ whiteSpace: "pre-line" }}>
                  {project.solution}
                </p>
              </div>

              <div className="detail-section slide-in-up">
                <h2>Result</h2>
                <p style={{ whiteSpace: "pre-line" }}>
                  {project.result}
                </p>
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
