import Link from "next/link"
import { CollectionLayout } from "../collection-layout"
import { aiContentItems, campaignFrameItems } from "../../../data/works"

export default function AICreativeCollectionPage() {
  return <CollectionLayout number="02" title="AI Creative & Campaign" description="Midjourney · AI Visual · Brand Campaign">
    <section className="design-ai-intro"><span>02 / AI CREATIVE &amp; CAMPAIGN</span><h2>Imagined with AI.<br /><em>Directed by design.</em></h2><p>Midjourney를 활용한 비주얼 실험과 브랜드 캠페인 작업을 소개합니다.</p></section>
    <section className="design-ai-section" aria-labelledby="featured-campaigns-title"><div className="design-ai-section-heading"><span>FEATURED CAMPAIGNS</span><h2 id="featured-campaigns-title">Brand worlds, directed with design.</h2></div><div className="design-ai-gallery design-ai-featured-gallery">{campaignFrameItems.map((item) => <Link href={`/ai/${item.id}`} className="design-ai-card" key={item.id}><div className="design-ai-media"><img src={item.image} alt={item.title} loading="lazy" />{item.video && <span className="design-ai-video-label">VIDEO</span>}</div><div className="design-ai-copy"><span>{item.category ?? "BRAND CAMPAIGN"} · {item.tools[0]}</span><h2>{item.title}</h2><p>{item.subtitle}</p></div></Link>)}</div></section>
    <section className="design-ai-section" aria-labelledby="midjourney-gallery-title"><div className="design-ai-section-heading"><span>MIDJOURNEY GALLERY</span><h2 id="midjourney-gallery-title">Visual experiments and moving images.</h2></div><div className="design-ai-gallery">{aiContentItems.filter((item) => !campaignFrameItems.some((campaign) => campaign.id === item.id)).map((item) => <Link href={`/ai/${item.id}`} className="design-ai-card" key={item.id}><div className="design-ai-media"><img src={item.image} alt={item.title} loading="lazy" />{item.video && <span className="design-ai-video-label">VIDEO</span>}</div><div className="design-ai-copy"><span>{item.category ?? item.section} · {item.tools[0]}</span><h2>{item.title}</h2><p>{item.subtitle}</p></div></Link>)}</div></section>
  </CollectionLayout>
}
