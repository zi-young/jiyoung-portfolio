// 동적 라우트 SSG를 위한 generateStaticParams 추가
export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id.toString() }))
}
import Link from "next/link"
import { notFound } from "next/navigation"
import * as React from "react"

const projects = [
  {
    id: 1,
    title: "Portrait Retouching",
    category: "Beauty Retouch",
    client: "Beauty Magazine",
    year: "2024",
    description: "자연스러운 피부 톤과 디테일을 강화한 인물 보정 작업입니다.",
    image: "/portrait-photo-retouching.jpg",
    challenge:
      "과도한 보정 없이 자연스럽게 피부를 정리하고, 인물의 특징을 살리면서도 전문적인 느낌을 연출해야 했습니다.",
    solution:
      "주파수 분리 기법으로 피부 톤과 텍스처를 분리해 작업했습니다. Dodge & Burn 기법으로 입체감을 살렸고, 색보정으로 피부 톤을 균일하게 만들었습니다.",
    result: "클라이언트의 높은 만족도, 자연스러우면서도 전문적인 결과물 완성, 추가 프로젝트 의뢰로 이어졌습니다.",
  },
  {
    id: 2,
    title: "Fashion Editorial",
    category: "Fashion",
    client: "Fashion Brand",
    year: "2024",
    description: "패션 에디토리얼을 위한 색감 보정 및 합성 작업입니다.",
    image: "/fashion-editorial-photo.jpg",
    challenge: "여러 컷의 사진을 일관된 색감으로 맞추고, 배경 합성으로 원하는 분위기를 연출해야 했습니다.",
    solution:
      "컬러 룩업 테이블(LUT)을 생성해 일관된 색감을 적용했습니다. 레이어 마스킹과 블렌딩 모드를 활용해 자연스러운 합성을 완성했습니다.",
    result: "일관된 브랜드 톤 유지, 시리즈 사진의 통일성 확보, 매거진 메인 화보 선정되었습니다.",
  },
  {
    id: 3,
    title: "Product Photography",
    category: "Commercial",
    client: "E-commerce",
    year: "2024",
    description: "제품 사진의 배경 제거 및 색상 보정 작업입니다.",
    image: "/product-photography-retouch.jpg",
    challenge: "다양한 제품 사진을 빠르고 정확하게 보정하면서도 색상의 정확성을 유지해야 했습니다.",
    solution:
      "펜 툴과 선택 도구를 활용해 정밀한 배경 제거를 진행했습니다. 색상 프로파일을 관리하고, 그림자를 재구성해 입체감을 살렸습니다.",
    result: "제품 촬영 후 처리 시간 50% 단축, 일관된 품질 유지, 온라인 판매 전환율 향상에 기여했습니다.",
  },
  {
    id: 4,
    title: "Wedding Photography",
    category: "Wedding",
    client: "Wedding Studio",
    year: "2023",
    description: "웨딩 사진의 감성적인 색감과 분위기를 연출한 보정 작업입니다.",
    image: "/wedding-photography-editing.jpg",
    challenge:
      "다양한 촬영 환경에서 찍힌 사진들을 일관된 무드로 맞추고, 신랑 신부의 피부를 자연스럽게 보정해야 했습니다.",
    solution:
      "따뜻한 톤의 컬러 그레이딩을 적용하고, 선택적 색보정으로 의상과 배경의 색을 살렸습니다. 부드러운 필터 효과로 로맨틱한 분위기를 연출했습니다.",
    result: "신랑 신부의 높은 만족도, 스튜디오 포트폴리오 이미지로 선정, 추천을 통한 추가 의뢰 증가했습니다.",
  },
  {
    id: 5,
    title: "Color Grading",
    category: "Color Grading",
    client: "Content Creator",
    year: "2024",
    description: "시네마틱한 무드를 연출한 컬러 그레이딩 작업입니다.",
    image: "/cinematic-color-grading.png",
    challenge: "영화 같은 분위기를 연출하면서도 각 장면의 스토리에 맞는 색감을 적용해야 했습니다.",
    solution:
      "틸-오렌지 컬러 그레이딩을 기본으로 하고, 곡선과 컬러 휠을 활용해 섬세한 조정을 했습니다. 각 장면의 감정에 맞춰 색온도와 채도를 조절했습니다.",
    result: "프로페셔널한 비주얼 완성, 유튜브 조회수 3배 증가, 클라이언트의 브랜드 이미지 향상에 기여했습니다.",
  },
  {
    id: 6,
    title: "Photo Restoration",
    category: "Restoration",
    client: "Family Archive",
    year: "2023",
    description: "오래된 사진의 손상 부분을 복원하고 컬러라이징한 작업입니다.",
    image: "/photo-restoration-old-photo.jpg",
    challenge: "심하게 손상된 흑백 사진을 복원하고, 당시의 분위기를 살려 자연스럽게 컬러를 입혀야 했습니다.",
    solution:
      "클로닝 툴과 패치 툴로 손상 부분을 복원했습니다. 시대적 배경을 고려해 의상과 배경의 색상을 리서치하고, 레이어별로 섬세하게 컬러를 입혔습니다.",
    result:
      "가족 앨범의 소중한 추억 복원, 의뢰인의 감동적인 반응, 복원 작업의 전문성을 인정받아 관련 의뢰 증가했습니다.",
  },
]


export default function RetouchDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const project = projects.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    notFound()
  }

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
      <main className="detail-page">
        <div className="container">
          <Link href="/retouch" className="button button-back button-outline">
            ← Back to Projects
          </Link>

          <div className="detail-header">
            <h1 className="detail-title">{project.title}</h1>
            <div className="detail-meta">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.client}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <p className="detail-description">{project.description}</p>
          </div>

          <div className="detail-image">
            <img src={project.image || "/placeholder.svg"} alt={project.title} />
          </div>

          <div className="detail-content">
            <div className="detail-section">
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
            </div>

            <div className="detail-section">
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </div>

            <div className="detail-section">
              <h2>Result</h2>
              <p>{project.result}</p>
            </div>
          </div>
        </div>
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
