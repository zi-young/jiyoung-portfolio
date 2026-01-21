"use client"

import Link from "next/link"

const weddingVideos = [
  {
    id: 1,
    title: "Romantic Wedding Moving Poster",
    description: "사진과 그래픽을 활용해 신랑신부의 분위기를 감성적으로 표현한 무빙포스터 식전영상",
    category: "Wedding Film (3분)",
    image: "/videos/video_1.jpg",
  },
  {
    id: 2,
    title: "Modern Wedding Video",
    description: "짧은 영상과 이미지의 조합으로 모던하면서 감각적인 분위기의 식전영상",
    category: "Wedding Film (1분 30초 / 1절)",
    image: "/videos/video_2.jpg",
  },
  {
    id: 3,
    title: "Minimal Wedding Looping Video",
    description: "잔잔한 스타일로 1분이내 영상을 반복재생하기 좋은 식전영상입니다.",
    category: "Wedding Film",
    image: "/videos/video_3.jpg",
  },
]

// 리터칭 projects
const retouchProjects = [
  {
    id: 1,
    title: "Wedding Retouching",
    description: "웨딩사진 보정 - 자연스러운 보정과 피부·드레스 디테일 강화",
    category: "Wedding Retouch",
    image: "/retouching/wedding1.jpg",
  },
  {
    id: 2,
    title: "Portrait Retouching",
    description: "인물 보정 - 자연스러운 피부 톤 및 디테일 강화",
    category: "Beauty Retouch",
    image: "/retouching/profile1.png",
  },
  {
    id: 3,
    title: "Fashion Editorial",
    description: "패션 에디토리얼 보정 - 색감 보정 및 몸매라인 강조",
    category: "Fashion",
    image: "/retouching/body1.PNG",
  },
]

// 디자인영역 projects
const designProjects = [
  {
    id: 1,
    title: "MonkeySoft 채용공고 및 회사소개서 디자인",
    description: "미리캔버스를 이용한 템플릿 활용 디자인으로\n기업의 전문성에 어울리는 디자인으로 각종 작업을 하였습니다.",
    category: "Content Design",
    image: "/monkeysoft-recruitment-notice.jpg",
    images: [
      "/monkeysoft-recruitment-notice.jpg",
      "/thingsMiner_소개서- 복사본.jpg"
    ]
  },
  {
    id: 2,
    title: "ThingsMiner Brand Identity Design",
    description: "Figma Make AI를 활용하여 IoT 모니터링 솔루션 'ThingsMiner'의 브랜드 로고와 아이콘 시스템을 구축했습니다.",
    category: "Branding",
    image: "/thingsminer-icon.png",
  },
  {
    id: 3,
    title: "Album, Poster & Fashion Detail Page Design",
    description:"앨범 커버와 프로모션 포스터,\n의류 쇼핑몰 상세페이지 디자인 작업입니다.",
    category: "Graphic Design · Visual Branding",
    image: "/album-poster.jpg",
  },
]

export default function DesignPage() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigator.clipboard.writeText("jypark912@naver.com")
    alert("이메일이 복사되었습니다: jypark912@naver.com")
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
            <li>
              <Link href="/ai">AI Contents</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        <section className="section">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Design</h1>
              <p className="page-description">식전영상, 리터칭, 그래픽 디자인 등<br/>다양한 디자인 작업물을 확인하세요.</p>
            </div>

            {/* 식전영상 Section */}
            <div className="design-section">
              <h2 className="section-subtitle">Wedding Films</h2>
              <div className="project-grid">
                {weddingVideos.map((project) => (
                  <Link
                    key={project.id}
                    href={`/design/wedding-video/${project.id}`}
                    className="project-card project-card-design"
                  >
                    <div className="project-card-image-wrapper">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="project-card-image"
                      />
                      <div className="project-card-overlay">
                        <div className="project-card-overlay-content">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="project-card-content">
                      <span className="project-card-category">{project.category}</span>
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-description">{project.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 리터칭 Section */}
            <div className="design-section">
              <h2 className="section-subtitle">Photo Retouching</h2>
              <div className="project-grid">
                {retouchProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/design/retouch/${project.id}`}
                    className="project-card project-card-design"
                  >
                    <div className="project-card-image-wrapper">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="project-card-image"
                      />
                      <div className="project-card-overlay">
                        <div className="project-card-overlay-content">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="project-card-content">
                      <span className="project-card-category">{project.category}</span>
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-description">{project.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 디자인영역 Section */}
            <div className="design-section">
              <h2 className="section-subtitle">Graphic Design</h2>
              <div className="project-grid">
                {designProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/design/graphic/${project.id}`}
                    className="project-card project-card-design"
                  >
                    <div className="project-card-image-wrapper">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="project-card-image"
                      />
                      <div className="project-card-overlay">
                        <div className="project-card-overlay-content">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="project-card-content">
                      <span className="project-card-category">{project.category}</span>
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-description">{project.description}</p>
                    </div>
                  </Link>
                ))}
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
