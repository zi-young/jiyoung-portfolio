"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { aiContentItems } from "../../../data/works"

export default function AIProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = aiContentItems.find((item) => item.id === id)

  if (!project) {
    return <main className="ai-not-found container"><p>프로젝트를 찾을 수 없습니다.</p><Link href="/ai" className="button button-outline">AI Contents로 돌아가기</Link></main>
  }

  const shortAbout = project.story.split("\n\n")[0]
  const designType = project.category ?? {
    campaign: "AI Visual Campaign",
    typo: "Typography Design",
    playground: "AI Content Experiment",
  }[project.section]

  return (
    <div className={`page-ai-detail page-ai-detail-${project.section} page-ai-project-${project.id}`}>
      <header className="header">
        <nav className="container">
          <Link href="/" className="logo">Portfolio</Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/design">Design</Link></li>
            <li><Link href="/publishing">Publishing</Link></li>
            <li><Link href="/ai" className="nav-link-active">AI Contents</Link></li>
          </ul>
        </nav>
      </header>

      <main className="ai-detail container">
        <Link href="/ai" className="ai-detail-back">← AI Contents</Link>
        <header className="ai-detail-header">
          <div className="ai-detail-title">
            <span>{project.section}</span>
            <h1>{project.title}</h1>
          </div>
          <div className="ai-detail-intro">
            <p className="ai-detail-kicker">{project.subtitle}</p>
            <div className="ai-detail-intro-row">
              <span>ABOUT</span>
              <p>{shortAbout}</p>
            </div>
            <div className="ai-detail-intro-row">
              <span>DESIGN</span>
              <p>{designType}</p>
            </div>
            <div className="ai-detail-intro-row">
              <span>TOOLS</span>
              <p>{project.tools.join(", ")}</p>
            </div>
          </div>
        </header>

        {(project.video || !project.gallery?.length) && project.galleryLayout !== "uniform" && (
          <div className="ai-detail-media">
            {project.video ? (
              <video controls playsInline poster={project.image} src={project.video} />
            ) : (
              <img src={project.image} alt={project.title} />
            )}
          </div>
        )}

        {((project.gallery?.length ?? 0) > 0 || (project.galleryVideos?.length ?? 0) > 0) && (
          <section className={`ai-detail-gallery ai-detail-gallery-${project.galleryLayout ?? "mixed"}`} aria-label={`${project.title} 이미지 갤러리`}>
            {project.galleryLayout === "uniform" && project.video && (
              <figure className="ai-detail-gallery-video ai-detail-gallery-featured">
                <video
                  src={project.video}
                  poster={project.image}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${project.title} 메인 영상`}
                />
              </figure>
            )}
            {project.gallery?.map((image, index) => (
              <figure key={image} className={index === 0 ? "ai-detail-gallery-featured" : undefined}>
                <Image
                  src={encodeURI(image)}
                  alt={`${project.title} 상세 이미지 ${index + 1}`}
                  fill
                  sizes={project.galleryLayout === "duo" ? "(max-width: 480px) 100vw, 50vw" : "(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"}
                  quality={80}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </figure>
            ))}
            {project.galleryVideos?.map((video, index) => (
              <figure className="ai-detail-gallery-video" key={video.src}>
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${project.title} 상세 영상 ${index + 1}`}
                />
              </figure>
            ))}
          </section>
        )}

        {project.externalUrl && <a className="button button-outline ai-external-link" href={project.externalUrl} target="_blank" rel="noopener noreferrer">완성 영상 보기 ↗</a>}
      </main>
    </div>
  )
}
