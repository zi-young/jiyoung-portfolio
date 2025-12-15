"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { useState, use } from "react"

const projects = [
  {
    id: 1,
    title: "Romantic Wedding Film",
    description: "감성적인 식전영상으로 신랑신부의 사랑 이야기를 담았습니다.",
    category: "Wedding Film",
    client: "김철수 & 이영희",
    date: "2024.03",
    role: "Director, Editor",
    thumbnail: "/wedding-video-romantic.jpg",
    videoUrl: "/videos/romantic-wedding.mp4",
    challenge:
      "두 분의 사랑 이야기를 감동적이면서도 자연스럽게 전달하는 것이 목표였습니다. 과도한 연출이 아닌 진정성 있는 순간들을 포착하는 것이 중요했습니다.",
    solution:
      "실제 데이트 장소에서 자연스러운 모습을 촬영하고, 두 분의 인터뷰를 통해 진솔한 이야기를 담았습니다. 부드러운 색감과 감성적인 음악으로 로맨틱한 분위기를 연출했습니다.",
    result:
      "결혼식 당일 하객들의 큰 감동을 이끌어냈으며, 신랑신부분께서도 매우 만족해하셨습니다. 자연스러운 연출과 진정성 있는 스토리텔링이 돋보였다는 평가를 받았습니다.",
  },
  {
    id: 2,
    title: "Modern Wedding Video",
    description: "모던한 스타일의 식전영상으로 세련된 감각을 담았습니다.",
    category: "Wedding Film",
    client: "박민수 & 최수진",
    date: "2024.05",
    role: "Director, Editor",
    thumbnail: "/wedding-video-modern.jpg",
    videoUrl: "/videos/modern-wedding.mp4",
    challenge: "젊은 감각의 세련된 영상을 원하셨던 신랑신부의 요구를 충족시키는 것이 과제였습니다.",
    solution:
      "미니멀한 촬영 구도와 빠른 편집 템포를 활용했습니다. 트렌디한 음악과 타이포그래피 애니메이션으로 모던한 무드를 완성했습니다.",
    result: "SNS에서 화제가 되며 많은 공유를 받았고, 같은 스타일의 추가 문의가 이어졌습니다.",
  },
  {
    id: 3,
    title: "Cinematic Wedding Story",
    description: "시네마틱한 연출로 영화 같은 스토리텔링을 구현했습니다.",
    category: "Wedding Film",
    client: "정우성 & 김태희",
    date: "2024.08",
    role: "Director, Cinematographer, Editor",
    thumbnail: "/wedding-video-cinematic.jpg",
    videoUrl: "/videos/cinematic-wedding.mp4",
    challenge: "영화 같은 퀄리티의 영상을 제작하면서도 두 분의 개성을 살리는 것이 중요했습니다.",
    solution:
      "시네마틱 컬러 그레이딩과 영화적 촬영 기법을 활용했습니다. 드론 촬영과 슬로우 모션을 적절히 배치하여 극적인 장면을 연출했습니다.",
    result:
      "웨딩 필름 공모전에서 우수상을 수상했으며, 업계 관계자들로부터 높은 평가를 받았습니다. 신랑신부는 물론 양가 부모님께서도 매우 만족하셨습니다.",
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
                <span>Client: {project.client}</span>
                <span>Date: {project.date}</span>
                <span>Role: {project.role}</span>
              </div>
              <p className="detail-description">{project.description}</p>
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
                <h2>Challenge</h2>
                <p>{project.challenge}</p>
              </div>

              <div className="detail-section slide-in-up">
                <h2>Solution</h2>
                <p>{project.solution}</p>
              </div>

              <div className="detail-section slide-in-up">
                <h2>Result</h2>
                <p>{project.result}</p>
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
