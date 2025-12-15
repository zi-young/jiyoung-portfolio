"use client"

import type React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useState, useEffect, use } from "react"

const projects = [
  {
    id: 1,
    title: "BF Kiosk Agent – Barrier-Free Kiosk Accessibility Project",
    description: "한국지능정보사회진흥원(NIA) 주관 배리어프리 키오스크 접근성 지원도구 개발 프로젝트에 참여했습니다.",
    category: "Public Project / Accessibility",
    client: "NIA (한국지능정보사회진흥원)",
    date: "2025.12",
    role: "Frontend Developer / App Publisher",
    tags: ["React", "iOS", "Android", "Accessibility", "Public Project"],
    images: ["/bfkiosk-landing.png", "/bfkiosk-app.png", "/bfkiosk-app1.png", "/bfkiosk-app2.png", "/bfkiosk-app3.png", "/bfkiosk-app4.png", "/bfkiosk-app5.png", "/bfkiosk-app6.png"],
    url: "https://landing.bfkiosk.co.kr/",
    solution:
      "랜딩페이지를 제작하고, 접근성 지원도구 앱(iOS/Android) 배포 과정에 참여했습니다. 웹과 모바일을 아우르는 통합 접근성 환경 구축을 목표로 했습니다.",
    result:
      "웹과 앱을 모두 배포하며 다양한 사용자의 접근성을 향상시켰고, 공공 프로젝트로서의 완성도를 높였습니다.",
  },
  {
    id: 2,
    title: "Double Knew 번역 에이전시 통합 관리 시스템 (TMS)",
    description:
      "번역 프로젝트의 견적, 일정, 정산 등 에이전시 핵심 업무를 통합 관리하는 사내 어드민 플랫폼입니다.",
    category: "Translation Management System (Admin)",
    client: "Double Knew",
    date: "2025.08~",
    role: "Frontend Developer",
    tags: ["React", "TypeScript", "MUI", "React-gantt-chart"],
    images: [
      "/tms-dashboard.png",
      "/tms-project-list.png",
      "/tms-detail.png",
      "/tms-detail1.png",
      "/tms-detail2.png",
      "/tms-detail3.png",
    ],
    solution:
      "언어·분량 입력 시 자동 견적 산출 기능을 구현하고, React-gantt-chart로 번역가별 일정과 가동률을 시각화했습니다. 이를 통해 관리자는 실시간으로 리소스를 효율 배정할 수 있습니다.",
    result:
      "직관적인 UI로 신규 입사자의 적응 기간이 단축되고, 화면 이동을 최소화하여 업무 효율과 만족도가 향상되었습니다.",
  },
  {
    id: 3,
    title: "GS건설 하수처리장 통합 운영 시스템",
    description:
      "전국 하수처리장을 통합 관리하는 운영 플랫폼으로, 프론트엔드 퍼블리싱과 데이터 시각화 UI 개발을 담당했습니다.",
    category: "Facility Management System (Admin)",
    client: "GS건설",
    date: "2024",
    role: "Frontend Developer",
    tags: ["eGovFramework", "JSP", "HTML", "CSS", "JavaScript", "i18n"],
    images: [
      "/gms-dashboard.png",
      "/gms-monitoring.png",
      "/gms-table.png",
      "/gms-tank.png",
      "/gms-assect.png",
      "/gms-report.png",
      "/gms-document.png",
    ],
    solution:
      "전자정부프레임워크(eGovFramework) 기반에서 JSP와 HTML로 주요 화면을 퍼블리싱하고, Excel 형식 데이터를 웹 표로 구현했습니다. 또한 UTF-8 인코딩 설정을 통해 한국어·영어·베트남어 3개 언어 버전을 지원했습니다.",
    result:
      "표 기반 UI 개선으로 데이터 확인 속도가 향상되었고, 다국어 지원을 통해 글로벌 사용자 접근성과 유지보수 효율이 높아졌습니다.",
  },
  {
    id: 4,
    title: "monkeysoft 자사 홈페이지",
    description:
      "IT·AI Agent 솔루션을 소개하기 위해 제작한 자사몰 형태의 반응형 웹사이트로,\n기획부터 퍼블리싱까지 단독으로 진행했습니다.",
    category: "Corporate Website",
    client: "Monkeysoft",
    date: "2025.11",
    role: "Frontend Developer",
    tags: ["React", "MUI", "v0.dev Agent", "SMTP"],
    images: [
      "/monkeysoft.co.kr_.png",
      "/monkeysoft.co.kr_solutions.png",
      "/monkeysoft.co.kr_solutions_thingsminer.png",
      "/monkeysoft.co.kr_projects.png",
      "/monkeysoft.co.kr_about.png",
      "/monkeysoft.co.kr_projects_infominer.png",
    ],
    url: "https://monkeysoft.co.kr/projects/infominer",
    solution:
      "React와 MUI를 기반으로 반응형 레이아웃을 구현하고, v0.dev Agent를 활용해 하루 만에 개발을 완료했습니다.\n문의하기 폼을 구성해 SMTP 방식으로 메일 전송을 구현하고, 자료 다운로드 기능을 추가했습니다.",
    result:
      "단기간 내 완성도 높은 자사 홈페이지를 구축했으며,\n직관적인 구조와 깔끔한 디자인으로 브랜드 신뢰도와 접근성을 향상시켰습니다.",
  },
  {
    id: 5,
    title: "CJ대한통운 AI 분석 플랫폼 퍼블리싱",
    description: "메가존에 2개월간 파견되어 CJ대한통운 AI 분석 플랫폼 구축 프로젝트의 퍼블리싱을 담당했습니다.\nUI/UX 개선과 유지보수성 향상을 목표로 Portal 및 Catalog 페이지를 중심으로 작업을 수행했습니다.",
    category: "Web Publishing",
    client: "CJ대한통운 (Megazone 파견)",
    date: "2024.12.02 ~ 2025.02.28",
    role: "Frontend Publisher",
    tags: ["Vue.js", "Vuetify", "Zeplin", "HTML", "CSS", "JavaScript"],
    images: ["/cj.png", "/cj_portal.png"],
    solution:
      "Vue.js와 Vuetify를 기반으로 구조화된 퍼블리싱 작업을 진행했습니다.\nZeplin 디자인 가이드에 따라 Vuetify 기본 컴포넌트(VBtn, VCard, VDataTable 등)를 커스터마이징하고,\n총 70여 개 화면의 마크업 개선 및 리팩토링을 수행했습니다.\n공통 UI를 컴포넌트화하여 재사용성을 높였으며, 불필요한 CSS 및 중복 코드를 제거해 가독성과 성능을 개선했습니다.\n또한 접근성 향상과 폰트 일관성 확보를 위해 Vuetify의 Typography 시스템을 적용했습니다.",
    result:
      "UI의 일관성과 유지보수성이 크게 향상되었으며,\n코드 구조 최적화로 페이지 로딩 속도와 개발 효율이 개선되었습니다.\nCJ대한통운 내부 플랫폼의 사용자 경험(UX) 개선과 관리 효율 향상에 기여했습니다.",
  },
  {
    id: 5,
    title: "GS 크레인 운전자용 폐기물 조작·운영 시스템",
    description: "크레인 운전자의 작업 효율을 높이기 위한 폐기물 제어 및 운영 시스템의 UI 퍼블리싱을 담당했습니다.\n3D 시각화 기반의 제어 화면을 직관적이고 실시간 대응이 가능하도록 구현했습니다.",
    category: "Industrial Control System (Web UI)",
    client: "GS건설",
    date: "2025.01",
    role: "Frontend Publisher",
    tags: ["React", "CSS", "Rem Unit", "Responsive Layout", "UI Widget"],
    images: ["/3dvisual.png", "/3dvisual_popup.png"],
    solution:
      "React 기반으로 전체 레이아웃을 rem 단위로 구성하여 해상도별 최적화가 가능하도록 퍼블리싱했습니다.\n복잡한 제어 패널 UI를 위젯 형태로 구성해, 운전자가 실시간 데이터를 직관적으로 확인하고 조작할 수 있도록 설계했습니다.\n다양한 제어 버튼, 상태 정보, 그래픽 요소를 통합하여 산업 현장에서도 안정적으로 사용할 수 있는 반응형 인터페이스를 구현했습니다.",
    result:
      "해상도에 관계없이 균형 잡힌 레이아웃을 유지하면서, 실제 운전 환경에 최적화된 조작 UI를 완성했습니다.\n시각적 명확성과 조작 편의성이 향상되어, 작업 효율 및 시스템 안정성이 크게 개선되었습니다.",
  },
  {
    id: 6,
    title: "공간 기록 웹사이트\n(Responsive Site)",
    description: "HTML, CSS, JavaScript로 제작한 반응형 개인 웹사이트로,\n디바이스 해상도에 따라 자동으로 레이아웃이 조정되는 구조로 구현했습니다.",
    category: "Responsive Web Design",
    client: "Personal Project",
    date: "2024.10",
    role: "Frontend Developer",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    images: ["/responsive-site-main.png", "/responsive-site-about.png", "/responsive-site-work.png"],
    url: "https://zi-young.github.io/Responsive-site/",
    solution:
      "미디어쿼리(Media Query)를 활용해 데스크톱, 태블릿, 모바일 환경 모두에서 자연스럽게 반응하는 레이아웃을 구현했습니다.\nFlexbox와 Grid를 조합해 섹션 간 간격과 정렬을 세밀하게 조정하고,\n스크롤 시 부드럽게 등장하는 애니메이션 효과를 순수 CSS와 JavaScript로 구현했습니다.",
    result:
      "프레임워크 없이 순수 코드로 제작했음에도 반응성과 시각적 완성도를 확보했습니다.\n코드 구조가 단순해 유지보수가 용이하고, 반응형 디자인의 원리를 직접 검증한 프로젝트입니다.",
  },
  {
    id: 7,
    title: "Bootstrap Responsive Website",
    description: "Bootstrap만으로 구현한 반응형 웹사이트로, 심플하면서 브랜드 아이덴티티를 강조한 레이아웃을 제작했습니다.",
    category: "Web Design",
    client: "Personal",
    date: "2024.09",
    role: "Frontend Developer",
    tags: ["Bootstrap", "HTML", "CSS", "Responsive Design"],
    images: ["/bootstrap-main.png"],
    url: "https://zi-young.github.io/bootstrap-site/",
    solution:
      "Bootstrap의 그리드 시스템과 컴포넌트를 활용해 반응형 구조를 구현했습니다. 별도의 JavaScript 라이브러리 없이, 순수 Bootstrap 기능만으로 네비게이션, 카드 리스트, 이미지 섹션 등을 구성했습니다.",
    result:
      "PC, 태블릿, 모바일 등 다양한 화면 크기에서도 균형감 있는 레이아웃을 유지하며, 디자인 가이드 없이도 일관된 시각적 톤을 완성했습니다.",
  },
  {
    id: 8,
    title: "Landing Page Builder",
    description: "마케팅용 랜딩페이지를 쉽고 빠르게 제작할 수 있는 빌더 툴입니다.",
    category: "Web Tool",
    client: "Startup",
    date: "2025.03",
    role: "Frontend Developer",
    tags: ["Next.js", "Drag&Drop", "Builder"],
    images: ["/landing-builder-main.png", "/landing-builder-edit.png"],
    url: "https://zi-young.github.io/landing-builder/",
    solution:
      "Next.js와 Drag&Drop 라이브러리로 컴포넌트 기반의 페이지 빌더를 구현했습니다. 실시간 미리보기와 템플릿 기능을 제공합니다.",
    result:
      "비개발자도 쉽게 랜딩페이지를 제작할 수 있어, 마케팅팀의 업무 효율이 크게 향상되었습니다.",
  },
  {
  id: 9,
  title: "모바일 청첩장 웹 애플리케이션",
  description: "네이버·카카오·티맵 내비게이션 연동과 참석자 관리 기능을 제공하는 반응형 모바일 청첩장입니다.",
  category: "Web Developer",
  client: "Personal Project",
  date: "2025.09",
  role: "Frontend Developer",
  tags: ["React", "Supabase", "Netlify", "Kakao Map API", "Naver Map API", "Tmap API"],
  images: ["/invite.png", "/invite-rsvp.png"],
  url: "https://hm-invite.netlify.app/",
  solution:
    "React로 모바일 최적화된 UI를 제작하고, 네이버·카카오·티맵 내비게이션 API를 연동해 길찾기 기능을 구현했습니다. Supabase를 통해 참석 여부 데이터를 관리하며, Netlify를 이용해 배포했습니다.",
  result:
    "초대장 접근성과 편의성이 크게 향상되어, 비회원 사용자도 손쉽게 위치 확인과 참석 응답이 가능했습니다.",
  }
]

export default function PublishingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === Number(id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    notFound()
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevImage()
      else if (e.key === "ArrowRight") handleNextImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

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
        <section className="detail-page">
          <div className="container">
            <Link
              href="/publishing"
              className="button button-outline button-back"
            >
              ← Back to Publishing
            </Link>

            <div className="detail-header">
              <h1 className="detail-title">{project.title}</h1>
              {project.url && (
                <div style={{ fontSize: "0.95em", margin: "0.5rem 0 0.5rem 0", color: "#666" }}>
                  url :{' '}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007aff", textDecoration: "underline", wordBreak: "break-all" }}
                  >
                    {project.url}
                  </a>
                </div>
              )}
              <div className="detail-meta">
                <span>Client: {project.client}</span>
                <span>Date: {project.date}</span>
                <span>Role: {project.role}</span>
              </div>
              <div
                className="project-tags"
                style={{ justifyContent: "center", marginTop: "1rem" }}
              >
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p
                className="detail-description"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {project.description}
              </p>
            </div>

            {/* Image Slider (버튼 클릭만 가능) */}
            <div className="image-slider">
              <div className="slider-container">
                <img
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      className="slider-button slider-button-prev"
                      onClick={handlePrevImage}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      className="slider-button slider-button-next"
                      onClick={handleNextImage}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                    <div className="slider-indicators">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          className={`slider-indicator ${
                            index === currentImageIndex
                              ? "slider-indicator-active"
                              : ""
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="detail-content">
              <div className="detail-section">
                <h2>Solution</h2>
                <p style={{ whiteSpace: "pre-wrap" }}>{project.solution}</p>
              </div>

              <div className="detail-section">
                <h2>Result</h2>
                <p style={{ whiteSpace: "pre-wrap" }}>{project.result}</p>
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
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
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
