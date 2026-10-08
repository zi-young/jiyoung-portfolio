import { CollectionLayout, ProjectGalleryCard } from "../collection-layout"

const projects = [
  { href: "/design/rooco", image: "/rooco/rooco-detail-02.png", title: "ROOCO", subtitle: "패션 브랜드 상세페이지 디자인 및 제작을 진행한 실제 외주 프로젝트", meta: "E-COMMERCE / CLIENT PROJECT" },
  { href: "/design/yogi", images: ["/yogi/screens/cover-home.webp", "/yogi/screens/cover-library.webp", "/yogi/screens/cover-sequence.webp"], title: "YOGI", subtitle: "요가 자세를 탐색하고 시퀀스를 구성하는 모바일 UI/UX 프로젝트", meta: "UI/UX / APP DESIGN" },
  { href: "/design/graphic/1", image: "/monkeysoft-recruitment-notice.jpg", title: "Digital Content Design", subtitle: "채용·SNS·프로모션 정보를 시각적으로 구조화한 콘텐츠 작업 모음", meta: "SOCIAL / PROMOTION / CONTENT" },
]

export default function DigitalCollectionPage() {
  return <CollectionLayout number="01" title="Digital & Commerce Design" description="UI/UX · E-commerce · Web · Content Design">
    <section className="design-gallery-grid design-digital-gallery" aria-label="Digital and Commerce projects">
      {projects.map((project) => <ProjectGalleryCard key={project.title} {...project} />)}
    </section>
  </CollectionLayout>
}
