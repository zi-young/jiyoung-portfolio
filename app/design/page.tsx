import Link from "next/link"

// 식전영상 projects
const weddingVideos = [
  {
    id: 1,
    title: "Romantic Wedding Moving Poster",
    description: "사진과 그래픽을 활용해 신랑신부의 분위기를 감성적으로 표현한 무빙포스터 식전영상",
    category: "Wedding Film (3분)",
    image: "/videos/video_3.jpg",
  },
  {
    id: 2,
    title: "Modern Wedding Video",
    description: "모던한 스타일의 식전영상 - 세련된 연출",
    category: "Wedding Film",
    image: "/wedding-video-modern.jpg",
  },
  {
    id: 3,
    title: "Cinematic Wedding Story",
    description: "시네마틱 식전영상 - 영화 같은 스토리텔링",
    category: "Wedding Film",
    image: "/wedding-video-cinematic.jpg",
  },
]

// 리터칭 projects
const retouchProjects = [
  {
    id: 1,
    title: "Portrait Retouching",
    description: "인물 보정 - 자연스러운 피부 톤 및 디테일 강화",
    category: "Beauty Retouch",
    image: "/wedding1_after.jpg",
  },
  {
    id: 2,
    title: "Fashion Editorial",
    description: "패션 에디토리얼 보정 - 색감 보정 및 합성",
    category: "Fashion",
    image: "/fashion-editorial-photo.jpg",
  },
  {
    id: 3,
    title: "Product Photography",
    description: "제품 사진 보정 - 배경 제거 및 색상 보정",
    category: "Commercial",
    image: "/product-photography-retouch.jpg",
  },
]

// 디자인영역 projects
const designProjects = [
  {
    id: 1,
    title: "2025 MonkeySoft 채용공고 디자인",
    description: "미리캔버스를 활용하여 기업의 전문성과 친근함을 동시에 전달하는 경력사원 채용 공고를 디자인했습니다.",
    category: "Content Design",
    image: "/monkeysoft-recruitment-notice.jpg",
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
    title: "Mobile App Interface",
    description: "헬스케어 앱 UI 디자인 - 직관적인 사용자 경험",
    category: "Mobile Design",
    image: "/healthcare-mobile-app.png",
  },
]

export default function DesignPage() {
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
        <section className="section">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Design</h1>
              <p className="page-description">식전영상, 리터칭, 그래픽 디자인 등 다양한 디자인 작업물을 확인하세요.</p>
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
              <a
                href="https://blog.naver.com/ruruha_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Naver Blog"
              >
                Naver Blog
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
