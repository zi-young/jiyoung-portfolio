export type AIContentSection = "campaign" | "typo" | "playground" | "brand-film"

export interface AIContentItem {
  id: string
  section: AIContentSection
  image: string
  video?: string
  gallery?: string[]
  galleryVideos?: Array<{ src: string; poster?: string }>
  galleryLayout?: "wide" | "portrait" | "mixed" | "square" | "uniform" | "duo"
  title: string
  subtitle: string
  story: string
  tools: string[]
  category?: string
  role?: string[]
  process?: string[]
  promptExample?: string
  externalUrl?: string
}

export const campaignFrameItems: AIContentItem[] = [
  {
    id: "pulpe-lip-campaign",
    section: "campaign",
    image: "/AI_contents/section_A/pulpe/Woman_smiling_with_lip_product_202608071008.jpg",
    video:
      "/AI_contents/section_A/pulpe/u2758715917_httpssmjrund1AAu2Kzpfg_same_beautiful_Korean_fe_bc66c0e3-645b-4a55-9992-6d3b3547cfdc_0_202608071029.mp4",
    gallery: [
      "/AI_contents/section_A/pulpe/Woman_smiling_with_lip_product_202608071008.jpg",
      "/AI_contents/section_A/pulpe/Woman_smiling_with_eyes_closed_202608071010.jpeg",
      "/AI_contents/section_A/pulpe/Woman_portrait_against_white_bac…_202608071012.jpeg",
      "/AI_contents/section_A/pulpe/426caff065bde181ebdde603ef2b6e07.jpg_2K_202608071004.jpg",
      "/AI_contents/section_A/pulpe/u2758715917_Ultra-realistic_portrait_of_a_beautiful_Korean_woma_13a6bd77-86ba-4df3-87d2-2c436d8b858c.png",
    ],
    galleryLayout: "uniform",
    title: "Pulpe — 립앤치크 멀티 브랜드 기획",
    subtitle: "과즙이 스며드는 혈색을 담은 가상 뷰티 브랜드",
    story:
      "Pulpe는 ‘과즙이 스며드는 혈색’이라는 컨셉으로 기획한 가상 뷰티 브랜드입니다. 봄웜톤에 맞춘 코랄·살몬핑크·아이보리 3가지 컬러 라인업을 중심으로, 웨트룩과 글로시 텍스처가 공존하는 비주얼 무드를 설정했습니다.\n\n브랜드 워드마크는 이탤릭 세리프 서체로 과즙이 번지는 듯한 유기적인 느낌을 표현했으며, 반투명 스퀴즈 튜브 패키지로 실제 텍스처감을 시각화했습니다.\n\n캠페인 비주얼은 AI 생성 도구를 활용해 정지 이미지부터 숏폼 영상까지 일관된 톤앤매너로 제작했습니다.",
    category: "뷰티 (립앤치크 멀티스틱, 워터틴트)",
    role: [
      "브랜드 네이밍",
      "컬러 팔레트 기획",
      "패키지 디자인",
      "AI 기반 비주얼 캠페인 제작",
    ],
    tools: ["Midjourney", "Nano Banana", "Flow"],
    process: [
      "브랜드 키워드와 인물 무드보드 구성",
      "일관된 인물과 제품 컷 이미지 생성",
      "표정과 카메라 무빙을 중심으로 숏폼 모션 제작",
    ],
    promptExample:
      "Editorial Korean beauty campaign, luminous skin, vivid coral lip tint, clean white studio, soft daylight, refined and minimal composition",
  },
  {
    id: "voe-body-oil-bx",
    section: "campaign",
    image: "/AI_contents/section_A/voe/pomelli_photoshoot_image_4_5_0731 (6).png",
    video: "/AI_contents/section_A/voe/VOE_세로_1080x1920_1.mp4",
    gallery: [
      "/AI_contents/section_A/voe/pomelli_photoshoot_image_4_5_0731 (6).png",
      "/AI_contents/section_A/voe/2번_모델_202607311349.jpeg",
      "/AI_contents/section_A/voe/pomelli_photoshoot_image_4_5_0731 (2) 복사본 2.png",
      "/AI_contents/section_A/voe/pomelli_photoshoot_image_4_5_0731 (2) 복사본 4.png",
      "/AI_contents/section_A/voe/pomelli_photoshoot_image_4_5_0731 (3).png",
    ],
    galleryLayout: "uniform",
    title: "VOÉ — Quiet Luxury 바디오일 브랜드 BX 디자인",
    subtitle: "하루의 속도를 늦추는 미니멀 바디오일 브랜드",
    story:
      "VOÉ는 30대 여성을 위한 미니멀 바디오일 브랜드를 가상의 브랜드 컨셉으로 기획하고, ‘Oil, quietly poured’라는 슬로건을 중심으로 브랜드의 감각을 시각적으로 확장한 BX 디자인 프로젝트입니다. 하루의 속도를 잠시 늦추는 조용한 리추얼을 핵심 컨셉으로 설정하고, 젖은 대리석과 마른 리넨, 반투명 유리, 오일이 빛을 받아 만들어내는 실루엣을 주요 비주얼 언어로 구성했습니다.\n\n웜 그레이지와 딥 브라운, 오프화이트의 절제된 컬러 팔레트와 세리프·산세리프 조합의 타이포그래피를 활용해 과시하지 않는 럭셔리를 표현했습니다. 패키지와 제품 이미지에서는 손과 오일이 맞닿는 질감, 빛과 투명도의 대비, 충분한 여백을 통해 브랜드가 지향하는 Stillness와 Purity를 시각화했습니다.\n\n브랜드 컨셉 기획부터 BX 디자인, 패키지 및 캠페인 비주얼까지 AI를 활용해 전반적인 아트 디렉션과 이미지를 제작했습니다. 최종 비주얼은 Photoshop을 활용해 디테일을 보정했습니다.",
    category: "뷰티 (바디오일 브랜드 BX)",
    role: ["브랜드 컨셉 기획", "BX 디자인", "패키지 디자인", "캠페인 비주얼 아트 디렉션"],
    tools: ["Midjourney", "ChatGPT", "Photoshop"],
    process: [
      "Quiet Luxury와 조용한 리추얼을 중심으로 브랜드 컨셉 설계",
      "컬러 팔레트, 타이포그래피와 패키지 비주얼 시스템 구성",
      "Midjourney를 활용한 제품 및 캠페인 이미지 제작",
      "Photoshop 디테일 보정과 최종 톤 통일",
    ],
    promptExample:
      "Quiet luxury body oil campaign for women in their 30s, translucent glass bottle, warm greige wet marble, dry linen, deep brown typography, soft diffused light, still and pure atmosphere",
  },
  {
    id: "lueu-bandana-brand",
    section: "campaign",
    image: "/AI_contents/section_A/lueu/Woman_wearing_bandana_top_jeans_202607241255.jpeg",
    gallery: [
      "/AI_contents/section_A/lueu/Woman_wearing_bandana_top_jeans_202607241255.jpeg",
      "/AI_contents/section_A/lueu/모델_202607231454.jpeg",
      "/AI_contents/section_A/lueu/Two_women_looking_at_smartphones_202607241324.jpeg",
      "/AI_contents/section_A/lueu/모델_202607241315.jpg",
      "/AI_contents/section_A/lueu/모델_202607231448.jpeg",
      "/AI_contents/section_A/lueu/NanoBanana-2026-07-23.png",
    ],
    galleryLayout: "uniform",
    title: "LUEU — 반다나 브랜드 BX 디자인",
    subtitle: "부드러운 흐름과 자연스러운 곡선에서 시작한 반다나 브랜드",
    story:
      "LUEU(루유)는 부드러운 흐름과 자연스러운 곡선에서 영감을 받은 반다나 브랜드입니다. 가볍고 내추럴한 린넨과 코튼의 질감, 은은한 컬러, 그리고 일상에 자연스럽게 스며드는 감성을 담아 편안하면서도 세련된 스타일을 제안합니다. 특별한 순간뿐 아니라 평범한 하루까지 아름답게 만드는 것이 LUEU가 추구하는 가치입니다.",
    category: "Fashion BX Design (Bandana Brand)",
    role: ["브랜드 컨셉 기획", "BX 디자인", "캠페인 비주얼 제작"],
    tools: ["Midjourney", "Nano Banana", "Photoshop"],
    process: ["브랜드 무드와 소재 키워드 정의", "스타일링 및 캠페인 이미지 제작", "컬러와 질감 디테일 보정"],
    promptExample:
      "Natural linen bandana fashion campaign, soft flowing curves, muted colors, effortless everyday styling, understated contemporary editorial photography",
  },
]

export const typoLabItems: AIContentItem[] = [
  {
    id: "fluid-type-study",
    section: "typo",
    image:
      "/AI_contents/section_B/pulpe_logo/u2758715917_3D_chrome_bubble_typography_spelling_PULPE_pink_a_35a4306f-d6bd-4347-8041-e6baa0c209b1_0.png",
    video:
      "/AI_contents/section_B/pulpe_logo/Clouds_drifting_in_sky_202608111543.mp4",
    gallery: [
      "/AI_contents/section_B/pulpe_logo/u2758715917_3D_chrome_bubble_typography_spelling_PULPE_pink_a_35a4306f-d6bd-4347-8041-e6baa0c209b1_0.png",
      "/AI_contents/section_B/pulpe_logo/u2758715917_PULPE_text_embossed_into_soft_pink_sand_texture_s_74855e78-a245-4f15-8e16-eaa56307b004_0.png",
      "/AI_contents/section_B/pulpe_logo/u2758715917_3D_puffy_balloon_typography_spelling_PULPE_vivid__d51f6260-7788-4e5d-bd60-d1b86f823980_3.png",
    ],
    galleryLayout: "square",
    title: "PULPE — 3D 타이포그래피 브랜드 무드 실험",
    subtitle: "하나의 워드마크를 재질과 배경으로 확장한 브랜드 비주얼",
    story:
      "PULPE는 ‘과육(pulp)’이라는 어원에서 출발한 립앤치크 브랜드로, 촉촉하고 탱글한 텍스처를 시각 언어로 옮기는 것이 이번 작업의 핵심이었습니다. 크롬 벌룬 재질로는 제품의 글로시한 발색을, 이끼와 하늘이 어우러진 배경으로는 브랜드가 지향하는 산뜻한 무드를 표현했습니다. 동일한 워드마크를 재질과 배경만 바꿔가며 실험함으로써, 하나의 로고가 다양한 캠페인 톤으로 확장될 수 있음을 보여주고자 했습니다.\n\nMidjourney로 3D 타이포 시안을 생성하고, Google Flow로 영상 시퀀스를 구성했으며, Claude AI로 컨셉 기획과 프롬프트 설계를 진행했습니다. 최종 디테일 보정은 Photoshop에서 마무리했습니다.",
    tools: ["Midjourney", "Google Flow", "Claude AI", "Photoshop"],
    process: [
      "Claude AI를 활용한 브랜드 컨셉과 프롬프트 설계",
      "Midjourney로 재질과 배경별 3D 타이포 시안 생성",
      "Google Flow 영상 시퀀스 구성",
      "Photoshop 최종 디테일 보정",
    ],
    promptExample:
      "PULPE chrome balloon typography, glossy lip-and-cheek texture, fresh blue sky and soft moss landscape, playful high-end beauty campaign, tactile 3D lettering",
  },
  {
    id: "melting-summer",
    section: "typo",
    image:
      "/AI_contents/section_B/melting_summer/u2758715917_woman_with_wet_wavy_hair_upper_body_looking_over_sh_887e284d-af02-4d9f-9f24-e77ef8733dfe.png",
    gallery: [
      "/AI_contents/section_B/melting_summer/u2758715917_woman_with_wet_wavy_hair_upper_body_looking_over_sh_887e284d-af02-4d9f-9f24-e77ef8733dfe.png",
      "/AI_contents/section_B/melting_summer/u2758715917_woman_with_wet_wavy_hair_upper_body_looking_over_sh_bfd9ab68-56b7-419f-866c-71990ca2bc4e.png",
    ],
    galleryLayout: "duo",
    title: "Melting Summer",
    subtitle: "여름의 열기와 물이 맞닿는 찰나를 담은 AI 비주얼 시리즈",
    story:
      "Melting Summer는 한여름 뙤약볕 아래 물과 피부가 만나는 순간을 포착한 아트워크 시리즈입니다. 피부에 맺힌 물방울과 그 안에 담긴 빛의 굴절, 젖은 머리카락의 질감을 통해 여름 특유의 나른하고 촉촉한 감각을 표현했습니다. 화려한 연출보다는 한 사람이 더위를 통과하는 짧고 조용한 순간에 집중했습니다.",
    category: "AI Visual Art (Conceptual Photography)",
    tools: ["Midjourney"],
  },
  {
    id: "album-cover-reframed",
    section: "typo",
    image: "/album-poster.jpg",
    title: "Album Cover: Reframed",
    subtitle: "음악의 분위기를 타이포와 레이아웃으로 재해석",
    story:
      "앨범이 가진 감정의 온도를 새로운 타이포 시스템과 화면 구성으로 다시 설계했습니다. 타이틀의 리듬, 이미지의 여백, 인쇄물 같은 질감을 조절해 하나의 독립적인 커버 아트로 완성했습니다.",
    tools: ["Photoshop", "Illustrator"],
    process: ["음악 키워드 추출", "타이포 위계와 그리드 설계", "이미지 합성 및 질감 보정"],
    promptExample:
      "Experimental album cover, expressive editorial typography, cinematic atmosphere, restrained color palette, subtle print texture",
  },
  {
    id: "fashion-type-poster",
    section: "typo",
    image: "/fashion.jpg",
    title: "Fashion Type Poster",
    subtitle: "패션 이미지와 타이포 위계를 결합한 포스터 스터디",
    story:
      "인물 이미지의 시선과 실루엣을 기준으로 타이포의 크기와 위치를 설계한 편집 디자인 실험입니다. 이미지 위에서도 정보가 선명하게 읽히도록 대비와 여백의 균형을 조절했습니다.",
    tools: ["Photoshop", "Illustrator"],
    process: ["이미지 분석", "타이포 그리드 구성", "컬러와 질감 보정"],
    promptExample:
      "Contemporary fashion editorial poster, bold typographic hierarchy, refined negative space, monochrome photography with a subtle accent color",
  },
]

export const aiPlaygroundItems: AIContentItem[] = [
  {
    id: "monkeysoft-ai-film",
    section: "playground",
    image: "/AI_contents/monkeysoft-poster.jpg",
    video: "/AI_contents/monkeysoft.mp4",
    title: "MonkeySoft AI Brand Film",
    subtitle: "개발자의 일상을 유쾌하게 풀어낸 AI 브랜드 영상",
    story:
      "개발자의 업무 공간과 MonkeySoft의 아이덴티티를 바탕으로 제작한 짧은 브랜드 영상입니다. 실제 공간의 분위기와 브랜드 컬러를 유지하면서, AI 영상 생성으로 자연스러운 움직임과 리듬을 더했습니다.",
    tools: ["Gemini", "Veo"],
    process: ["브랜드와 장면 컨셉 설정", "기준 이미지 제작", "AI 영상 생성 및 편집"],
  },
  {
    id: "1",
    section: "playground",
    image: "/AI_contents/haru.png",
    video: "/AI_contents/haru.MP4",
    title: "고양이 타코야끼 가게",
    subtitle: "고양이가 직접 일하는 유쾌한 AI 쇼츠",
    story:
      "작은 고양이가 타코야끼 가게를 운영한다는 상상에서 시작한 숏폼 콘텐츠입니다. 캐릭터의 행동과 상황음을 짧은 호흡으로 연결해 반복해서 보고 싶은 캐주얼한 장면을 만들었습니다.",
    tools: ["Gemini", "Veo 3"],
    process: ["캐릭터와 상황 설정", "행동 단위의 장면 생성", "세로형 숏폼 편집"],
    promptExample:
      "A tiny cat running a cozy takoyaki stand, serving customers with tiny paws, warm cinematic light, playful documentary style",
    externalUrl: "https://www.youtube.com/shorts/hRzyHw9dky8",
  },
  {
    id: "2",
    section: "playground",
    image: "/AI_contents/haru2.png",
    video: "/AI_contents/haru2.MP4",
    title: "Cat Motion Diary",
    subtitle: "일상의 한 장면을 움직임으로 확장한 AI 영상",
    story:
      "고양이의 작은 표정과 행동을 관찰하는 짧은 모션 스터디입니다. 정지 이미지의 분위기를 유지하면서 자연스러운 움직임과 카메라의 호흡을 더하는 데 집중했습니다.",
    tools: ["Gemini", "Veo"],
    process: ["기준 이미지 선정", "모션 방향과 카메라 지시", "속도 및 루프 구간 편집"],
    promptExample:
      "A curious cat in a quiet room, subtle natural movement, gentle handheld camera, warm morning light, seamless short loop",
    externalUrl: "https://www.youtube.com/watch?v=SPC8Aysu4AE",
  },
  {
    id: "3",
    section: "playground",
    image: "/AI_contents/youtube2.png",
    video: "/AI_contents/youtube2.MP4",
    title: "Scene & Voice Experiment",
    subtitle: "장면 전환과 음성을 결합한 짧은 내러티브",
    story:
      "생성한 장면 사이의 연결감과 음성이 영상의 인상을 어떻게 바꾸는지 실험했습니다. 짧은 러닝타임 안에서도 시작과 반전이 느껴지도록 컷의 순서와 타이밍을 조정했습니다.",
    tools: ["Veo", "Google AI", "Premiere Pro"],
    process: ["미니 스토리보드 작성", "장면별 영상 생성", "음성 및 전환 타이밍 편집"],
    promptExample:
      "A whimsical cinematic sequence with a clear visual transition, expressive character reaction, synchronized ambient sound and dialogue",
  },
]

export const brandFilmItems: AIContentItem[] = [
  {
    id: "superstar-balletcore-campaign",
    section: "brand-film",
    image: "/AI_contents/section_E/모델5.jpg",
    video: "/AI_contents/section_E/영상_최종.mp4",
    gallery: [
      "/AI_contents/section_E/모델5.jpg",
      "/AI_contents/section_E/모델컷1.jpg",
      "/AI_contents/section_E/모델컷2.jpg",
      "/AI_contents/section_E/모델컷3.jpg",
      "/AI_contents/section_E/연출컷1.jpg",
      "/AI_contents/section_E/연출컷2.jpg",
    ],

    galleryLayout: "uniform",
    title: "Superstar Balletcore Campaign",
    subtitle: "턴할 때마다 바뀌는 아디다스 슈퍼스타의 발레코어 세계관",
    story:
      "Superstar Balletcore Campaign은 아디다스 슈퍼스타를 몽환적인 화원 속에서 재해석한 개인 캠페인 컨셉입니다. 안개 낀 대형 꽃밭 사이로 달리는 모델의 움직임에 따라 신발 컬러웨이가 전환되는 연출을 통해, '자연과 스니커즈가 공존하는 초현실적 순간'이라는 무드를 담았습니다.",
    category: "슈즈 (아디다스 슈퍼스타 4종 컬러웨이 룩북·캠페인 필름)",
    tools: ["Midjourney", "Veo3", "Photoshop"],
  },
  {
    id: "glace-eyewear",
    section: "brand-film",
    image: "/AI_contents/section_D/u2758715917_young_East_Asian_woman_long_straight_black_hair_p_c486ab50-ca32-4dc2-ae02-8a12c686320a_0.png",
    video: "/AI_contents/section_D/Woman_puts_on_glasses_202608181107.mp4",
    gallery: [
      "/AI_contents/section_D/Gemini_Generated_Image_zcvh0lzcvh0lzcvh.png",
      "/AI_contents/section_D/u2758715917_young_East_Asian_woman_long_straight_black_hair_p_c486ab50-ca32-4dc2-ae02-8a12c686320a_0.png",
      "/AI_contents/section_D/Woman_looking_up_at_camera_202608181108.jpeg",
      "/AI_contents/section_D/Young_woman_peeking_through_blinds_202608181112.jpeg",
      "/AI_contents/section_D/Woman_wearing_jacket_and_shirt_202608181110.jpeg",
      "/AI_contents/section_D/Woman_holding_glasses_portrait_2K_202608181112.jpeg",
      "/AI_contents/section_D/Woman_looking_down_thoughtfully_2K_202608181113.jpeg",
    ],
    galleryVideos: [
      {
        src: "/AI_contents/section_D/Ice_melting_revealing_eyeglasses_202608181107.mp4",
        poster: "/AI_contents/section_D/Eyeglasses_encased_in_melting_ice_202608141703.jpeg",
      },
    ],
    galleryLayout: "uniform",
    title: "GLACÉ EYEWEAR — AI 브랜드 캠페인",
    subtitle: "얼음이 녹으며 드러나는 투명함, 시야를 가리지 않는 안경",
    story:
      "GLACÉ는 프랑스어로 ‘얼어붙은, 유약을 입힌’이라는 뜻을 지닌 아이웨어 브랜드입니다. 안경이 얼음 속에 잠겨 있다가 서서히 녹아 형태를 드러내는 이미지처럼, GLACÉ의 무테 프레임은 존재를 주장하지 않고 오직 시선만을 선명하게 남깁니다.\n\n색이 없는 투명함, 뿔테도 컬러도 없는 절제된 라인을 통해 ‘군더더기 없는 시야’를 표현했습니다. 얼음빛 그레이 블루와 무채색의 클리어 톤, 물방울과 얼음 결정, 유리의 굴절을 주요 비주얼 언어로 삼아 차갑지만 관능적이고 미니멀하면서도 이질적인 클리니컬 뷰티 무드를 완성했습니다.\n\n클린 뷰티와 미니멀 패션을 선호하며 안경을 얼굴을 가리는 도구가 아닌 ‘얼굴의 투명한 일부’로 받아들이는 20–30대를 타깃으로 설정했습니다.",
    category: "Eyewear BX & AI Brand Film",
    role: ["브랜드 컨셉 기획", "BX 디자인", "캠페인 비주얼 아트 디렉션", "AI 브랜드 필름 제작"],
    tools: ["Midjourney", "Gemini", "Google Flow", "Photoshop"],
    process: [
      "투명함과 얼음의 물성을 중심으로 브랜드 컨셉 설계",
      "그레이 블루와 무채색 기반의 비주얼 톤앤매너 구성",
      "무테 프레임과 인물 중심의 캠페인 이미지 제작",
      "얼음이 녹고 안경이 드러나는 브랜드 필름 시퀀스 제작",
    ],
    promptExample:
      "Minimal rimless eyewear campaign, translucent ice melting around clear glasses, cool gray-blue palette, water droplets and glass refraction, sensual clinical beauty, clean editorial photography",
  },
]

export const aiContentItems = [
  ...campaignFrameItems,
  ...typoLabItems,
  ...aiPlaygroundItems,
  ...brandFilmItems,
]
