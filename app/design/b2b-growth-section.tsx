"use client"

import { useRef, useState } from "react"

type B2BFeature = {
  title: string
  description: string
  image: string | null
  placeholder: string
  evidence?: "ga4"
  gallery?: string[]
  details?: string[]
  blogFeatures?: Array<{ title: string; description: string }>
}

const b2bFeatures: B2BFeature[] = [
  {
    title: "B2B Website Renewal & GA4",
    description:
      "홈페이지 리뉴얼을 주도하며 GA4 트래킹 코드를 직접 삽입해 데이터 수집 환경을 0부터 구축했습니다. 세션 소스·매체를 정교하게 세팅해 네이버 블로그와 카페 활동이 제품 소개 및 프로젝트 사례 페이지 유입으로 이어지는 흐름을 수치로 확인했습니다.",
    image: "/marketing/ga4.png",
    placeholder: "GA4 acquisition report",
    evidence: "ga4",
  },
  {
    title: "Official Naver Blog Channel",
    description: "타깃 맞춤형 콘텐츠 기획 및 SEO 최적화를 통한 네이버 블로그 이웃 수 증대",
    image: "/marketing/blog.png",
    placeholder: "Mobile mockup · Blog thumbnails",
    gallery: ["/marketing/blog.png", "/marketing/blog2.png"],
    blogFeatures: [
      { title: "B2B 기술 시각화", description: "어려운 산업 기술(PLC, 자율주행 등)을 타깃 고객이 이해하기 쉬운 직관적인 콘텐츠로 가공했습니다." },
      { title: "SEO 최적화 및 채널 성장", description: "타깃 맞춤형 키워드를 발굴하고 글 구조를 최적화하여 오가닉 노출 및 꾸준한 이웃 수 증대를 이끌어냈습니다." },
      { title: "디자인 기반 브랜딩", description: "가독성 높은 본문과 통일감 있는 썸네일을 직접 디자인하여 B2B 오피셜 채널의 신뢰도를 높였습니다." },
      { title: "자사 유입 퍼널 설계", description: "정보성 콘텐츠를 통해 유입된 잠재 고객이 자사 홈페이지(제품 소개, 구축 사례)로 이동하도록 설계했습니다." },
    ],
  },
]

function FeaturePlaceholder({ label }: { label: string }) {
  return (
    <div className="b2b-feature-placeholder" role="img" aria-label={`${label} 이미지 준비 중`}>
      <span className="b2b-placeholder-index">VISUAL PLACEHOLDER</span>
      <div className="b2b-placeholder-art" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="b2b-placeholder-label">{label}</span>
    </div>
  )
}

function FeatureEvidence({ type }: { type: B2BFeature["evidence"] }) {
  if (type !== "ga4") return null

  return (
    <div className="b2b-ga4-highlights" aria-label="네이버 블로그와 카페 유입 경로 강조">
      <span className="b2b-ga4-highlight b2b-ga4-highlight-cafe" />
      <span className="b2b-ga4-highlight b2b-ga4-highlight-naver" />
    </div>
  )
}

function FeatureGallery({ feature }: { feature: B2BFeature }) {
  if (!feature.gallery?.length) return null

  return (
    <div className="b2b-feature-gallery">
      {feature.gallery.map((image, index) => <img key={image} src={image} alt={`${feature.title} 이미지 ${index + 1}`} />)}
    </div>
  )
}

function BlogFeatureVisual() {
  return (
    <div className="b2b-blog-visual" aria-label="네이버 블로그와 분석 화면 이미지">
      <img className="b2b-blog-main-image" src="/marketing/blog.png" alt="Official Naver Blog 화면" />
    </div>
  )
}

function B2BFeatureSlide({ feature, index, onNext }: { feature: B2BFeature; index: number; onNext: () => void }) {
  if (feature.blogFeatures) {
    return (
      <article className="b2b-feature-slide b2b-blog-slide">
        <div className="b2b-blog-visual-column"><BlogFeatureVisual /></div>
        <div className="b2b-feature-copy b2b-blog-copy">
          <span className="b2b-feature-number">0{index + 1}</span>
          <h3>Official Naver<br />Blog Channel</h3>
          <p>{feature.description}</p>
          <ul className="b2b-blog-features">
            {feature.blogFeatures.map((item) => <li key={item.title}><strong>{item.title}</strong><span>{item.description}</span></li>)}
          </ul>
        </div>
      </article>
    )
  }

  return (
    <article className="b2b-feature-slide">
      <div className="b2b-feature-visual">
        {feature.gallery ? <FeatureGallery feature={feature} /> : feature.image ? (
          <div className={`b2b-feature-image-wrap ${feature.evidence ? "has-evidence" : ""}`}>
            <img src={feature.image} alt={feature.title} />
            <FeatureEvidence type={feature.evidence} />
          </div>
        ) : <FeaturePlaceholder label={feature.placeholder} />}
      </div>
      <div className="b2b-feature-copy">
        <span className="b2b-feature-number">0{index + 1}</span>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        {feature.details && <ul className="b2b-feature-details">{feature.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
      </div>
    </article>
  )
}

export function B2BGrowthSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const goToSlide = (index: number) => setActiveIndex((index + b2bFeatures.length) % b2bFeatures.length)

  return (
    <section className="ai-collection b2b-growth-section" aria-labelledby="b2b-growth-title">
      <div className="container">
        <header className="b2b-growth-header ai-collection-header">
          <div>
            <span>04 / B2B CHANNEL GROWTH</span>
            <h2 id="b2b-growth-title">B2B Channel Growth &amp; Analytics</h2>
          </div>
          <p>데이터와 콘텐츠를 연결해 B2B 채널의 유입과 성장을 설계한 작업</p>
        </header>
        <div
          className="b2b-carousel"
          onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return
            const touch = event.changedTouches[0]
            if (!touch) return
            const distance = touch.clientX - touchStartX.current
            if (Math.abs(distance) > 45) goToSlide(activeIndex + (distance < 0 ? 1 : -1))
            touchStartX.current = null
          }}
        >
          <div className="b2b-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {b2bFeatures.map((feature, index) => <B2BFeatureSlide key={feature.title} feature={feature} index={index} onNext={() => goToSlide(index + 1)} />)}
          </div>
          <button className="b2b-carousel-arrow b2b-carousel-arrow-prev" type="button" aria-label="이전 작업" onClick={() => goToSlide(activeIndex - 1)}>←</button>
          <button className="b2b-carousel-arrow b2b-carousel-arrow-next" type="button" aria-label="다음 작업" onClick={() => goToSlide(activeIndex + 1)}>→</button>
          <div className="b2b-carousel-pagination" aria-label="작업 선택">
            {b2bFeatures.map((feature, index) => <button key={feature.title} className={index === activeIndex ? "is-active" : ""} type="button" aria-label={`${index + 1}번 작업 보기`} aria-current={index === activeIndex ? "step" : undefined} onClick={() => goToSlide(index)}>0{index + 1}</button>)}
          </div>
        </div>
      </div>
    </section>
  )
}
