"use client"

import Link from "next/link"

export const aiProjects = [
  {
    id: 1,
    title: "고양이가 일하는 AI 쇼츠",
    description: "Google Gemini와 Veo3를 활용하여 생성한 고양이가 타코야끼 판매하는 AI 쇼츠입니다.",
    category: "AI Video Generation",
    image: "/AI_contents/haru.png",
    video: "/AI_contents/haru.MP4",
    youtubeUrl: "https://www.youtube.com/shorts/hRzyHw9dky8",
  },
  {
    id: 2,
    title: "AI-Generated Motion Graphics",
    description: "Veo와 Google AI를 활용하여 생성한 고양이 콘텐츠입니다.",
    category: "AI Video Generation",
    image: "/AI_contents/haru2.png",
    video: "/AI_contents/haru2.MP4",
    youtubeUrl: "https://www.youtube.com/watch?v=SPC8Aysu4AE",
  },
  {
    id: 3,
    title: "AI-Generated Motion Graphics",
    description: "Veo와 Google AI를 활용하여 장면전환과 음성을 넣은 영상입니다.",
    category: "AI Video Generation",
    image: "/AI_contents/youtube2.png",
    video: "/AI_contents/youtube2.MP4",
  },
]

export default function AIPage() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigator.clipboard.writeText("jypark912@naver.com")
    alert("이메일이 복사되었습니다: jypark912@naver.com")
  }

  return (
    <div className="page-ai">
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
              <Link href="/design">Design</Link>
            </li>
            <li>
              <Link href="/publishing">Publishing</Link>
            </li>
            <li>
              <Link href="/ai" className="nav-link-active">
                AI Contents
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        <section className="section">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">AI Contents</h1>
              <p className="page-description">Veo, Google AI 등을 활용한<br/>영상·이미지 작업물 소개</p>
            </div>

            <div className="project-grid">
              {aiProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/ai/${project.id}`}
                  className="project-card project-card-ai"
                >
                  <div className="project-card-image-wrapper">
                    <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-card-image" />
                    <div className="project-card-overlay">
                      <div className="project-card-overlay-content">
                        <h3>{project.title}</h3>
                        <p style={{ whiteSpace: "pre-wrap" }}>{project.description}</p>
                        <div className="project-card-overlay-buttons">
                          <span className="overlay-button">View Details</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-card-content">
                    <span className="project-card-category">{project.category}</span>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-description" style={{ whiteSpace: "pre-wrap" }}>{project.description}</p>
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
              <a href="#" onClick={handleEmailClick} aria-label="Email">
                Email
              </a>
              <a href="https://github.com/zi-young?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
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
