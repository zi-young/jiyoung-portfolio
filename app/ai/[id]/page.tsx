"use client"

import { use } from "react"
import Link from "next/link"
import { aiProjects } from "../page"

export default function AIProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = aiProjects.find((item) => item.id === Number(id))

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigator.clipboard.writeText("jypark912@naver.com")
    alert("이메일이 복사되었습니다: jypark912@naver.com")
  }

  if (!project) {
    return (
      <div className="page-ai-detail">
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
        <main className="main">
          <section className="section">
            <div className="container">
              <p>프로젝트를 찾을 수 없습니다.</p>
              <Link href="/ai" className="button button-outline" style={{ marginTop: "16px", display: "inline-block" }}>
                AI Contents로 돌아가기
              </Link>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="page-ai-detail">
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
              <span className="project-card-category">{project.category}</span>
              <h1 className="page-title" style={{ marginTop: "8px" }}>{project.title}</h1>
              <p className="page-description" style={{ whiteSpace: "pre-wrap" }}>{project.description}</p>
            </div>

            <div className="project-detail">
              <div className="project-detail-media" style={{ marginBottom: "24px" }}>
                {project.video ? (
                  <video
                    controls
                    poster={project.image}
                    src={project.video}
                    style={{ width: "100%", borderRadius: "12px", backgroundColor: "#000" }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    style={{ width: "100%", borderRadius: "12px" }}
                  />
                )}
              </div>

              {project.youtubeUrl && (
                <div className="project-detail-link" style={{ marginTop: "16px" }}>
                  <h3 style={{ marginBottom: "8px" }}>YouTube 링크</h3>
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#2563eb", textDecoration: "underline" }}
                  >
                    {project.youtubeUrl}
                  </a>
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
