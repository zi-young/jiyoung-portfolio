import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "BF Kiosk Agent",
    description: "한국지능정보사회진흥원(NIA) 주관 배리어프리 키오스크 접근성 지원도구 개발 프로젝트 퍼블리싱 및 프론트엔드 작업입니다.",
    category: "Public Project / Accessibility",
    tags: ["React", "iOS", "Android", "Accessibility", "Public Project"],
    image: "/bfkiosk-main.png",
  },
  {
    id: 2,
    title: "Double Knew 사내 업무 통합 시스템",
    description: "번역 프로젝트의 견적, 일정, 정산 등 전 과정을\n한 플랫폼에서 관리할 수 있는 인트라넷입니다.",
    category: "Web Development",
    tags: ["React", "TypeScript", "MUI (Material UI)", "React-gantt-chart"],
    image: "/tms-dashboard.png",
  },
  {
    id: 3,
    title: "GS건설 하수처리장 통합 운영 시스템",
    description: "하수처리장을 통합 관리하는 운영 시스템의\n프론트엔드 퍼블리싱과 UI 개발을 담당했습니다.",
    category: "Web Development",
    tags: ["eGovFramework", "JSP", "HTML"],
    image: "/gms-dashboard.png",
  },
  {
    id: 4,
    title: "monkeysoft 자사 홈페이지",
    description: "IT·AI Agent 솔루션을 소개하기 위해\n제작한 자사몰 형태의 반응형 웹사이트입니다.",
    category: "Web Development",
    tags: ["React", "MUI", "v0.dev Agent", "SMTP"],
    image: "/monkeysoft.png",
  },
  {
    id: 5,
    title: "CJ대한통운 AI 분석 플랫폼 퍼블리싱",
    description: "메가존에 3개월간 파견되어\nCJ대한통운 AI 분석 플랫폼 구축 프로젝트의 퍼블리싱을 담당했습니다.",
    category: "Web Development",
    tags: ["Vue.js", "Vuetify", "Zeplin", "HTML", "CSS", "JavaScript"],
    image: "/cj.png",
  },
  {
    id: 6,
    title: "GS 크레인 운전자용 폐기물 조작·운영 시스템",
    description: "크레인 운전자의 작업 효율을 높이기 위한\n폐기물 제어 및 운영 시스템의 UI 퍼블리싱을 담당했습니다.",
    category: "Web Development",
    tags: ["React", "CSS", "Rem Unit", "Responsive Layout", "UI Widget"],
    image: "/3dvisual.png",
  },
  {
    id: 7,
    title: "공간 기록 웹사이트 (Responsive Site)",
    description: "HTML, CSS, JavaScript로 제작한 반응형 개인 웹사이트입니다.",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/responsive-site-work.png",
  },
  {
    id: 8,
    title: "Bootstrap Responsive Website",
    description: "Bootstrap만으로 구현한 반응형 웹사이트로,\n심플하면서 브랜드 아이덴티티를 강조한 레이아웃을 제작했습니다.",
    category: "Web Development",
    tags: ["Bootstrap", "HTML", "CSS", "Responsive Design"],
    image: "/bootstrap-main.png",
  },
  {
    id: 9,
    title: "모바일 청첩장 웹사이트",
    description: "네이버·카카오·티맵 내비게이션 연동과\n참석자 관리 기능을 제공하는 반응형 모바일 청첩장입니다.",
    category: "Web Development",
    tags: ["React", "Supabase", "Netlify", "Kakao Map API", "Naver Map API", "Tmap API"],
    image: "/invite.png",
  }
]

export default function PublishingPage() {
  return (
    <div className="page-publishing">
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
              <Link href="/publishing" className="nav-link-active">
                Publishing
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
              <h1 className="page-title">Publishing / Frontend</h1>
              <p className="page-description">다양한 웹 기술을 활용한<br/>퍼블리싱 및 프론트엔드 프로젝트입니다.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/publishing/${project.id}`}
                  className="project-card project-card-publishing"
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
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
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
