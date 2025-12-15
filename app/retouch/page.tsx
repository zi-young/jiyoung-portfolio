import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Portrait Retouching",
    description: "인물 보정 - 자연스러운 피부 톤 및 디테일 강화",
    category: "Beauty Retouch",
    image: "/portrait-photo-retouching-before.jpg",
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
  {
    id: 4,
    title: "Wedding Photography",
    description: "웨딩 사진 보정 - 감성적인 색감과 분위기 연출",
    category: "Wedding",
    image: "/wedding-photography-editing.jpg",
  },
  {
    id: 5,
    title: "Color Grading",
    description: "시네마틱 컬러 그레이딩 - 무드 있는 색감 연출",
    category: "Color Grading",
    image: "/cinematic-color-grading.png",
  },
  {
    id: 6,
    title: "Photo Restoration",
    description: "오래된 사진 복원 - 손상된 부분 복원 및 컬러라이징",
    category: "Restoration",
    image: "/photo-restoration-old-photo.jpg",
  },
]

export default function RetouchPage() {
  return (
    <div className="page-retouch">
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
              <Link href="/frontend">Frontend</Link>
            </li>
            <li>
              <Link href="/retouch" className="nav-link-active">
                Retouch
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
              <h1 className="page-title">Photo Retouch / Editing</h1>
              <p className="page-description">인물 보정, 색감 보정, 합성 등 사진 리터칭 및 편집 작업물입니다.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <Link key={project.id} href={`/retouch/${project.id}`} className="project-card project-card-retouch">
                  <div className="project-card-image-wrapper">
                    <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-card-image" />
                    <div className="project-card-overlay project-card-overlay-fade">
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
