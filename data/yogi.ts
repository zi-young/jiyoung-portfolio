export const yogiProject = {
  title: "YOGI — Yoga Sequence App",
  cardDescription: "요가 자세를 탐색하고, 나만의 시퀀스를 구성해 수련까지 이어지는 모바일 UI/UX 프로젝트.",
  prototypeUrl: "https://www.figma.com/proto/d7IX39xxTmbtX5mObR6fHG/YOGI?page-id=0%3A1&node-id=14-10&starting-point-node-id=14%3A10",
  images: {
    cover: [
      { src: "/yogi/screens/cover-home.webp", alt: "YOGI 홈 화면" },
      { src: "/yogi/screens/cover-library.webp", alt: "YOGI 아사나 목록 화면" },
      { src: "/yogi/screens/cover-sequence.webp", alt: "YOGI 시퀀스 편집 화면" },
    ],
    designSystem: "/yogi/screens/design-system-foundations.webp",
  },
  overview: "YOGI는 요가 자세를 찾아보고, 여러 동작을 하나의 수련 흐름으로 구성하는 앱 디자인 프로젝트입니다. 자세 탐색 → 상세 정보 → 시퀀스 구성 → 수련으로 이어지는 과정을 중심으로 화면을 설계했습니다.",
  intent: "개별 자세를 확인하는 것에서 나아가, 내가 원하는 동작을 순서대로 연결하고 수련 중에도 다음 행동을 쉽게 파악할 수 있는 경험을 목표로 했습니다.",
  sections: [
    { number: "01 / EXPLORE", title: "나에게 필요한 자세를 찾다", description: "한글·산스크리트·영문 이름을 함께 보여주는 아사나 탐색 흐름으로, 자세를 비교하고 원하는 동작을 빠르게 찾을 수 있도록 구성했습니다.", images: [{ src: "/yogi/screens/explore-library.webp", alt: "YOGI 아사나 목록 화면" }, { src: "/yogi/screens/explore-detail.webp", alt: "YOGI 아사나 상세 화면" }] },
    { number: "02 / SEQUENCE", title: "여러 자세를 하나의 수련으로", description: "동작을 선택하고 순서를 구성하는 나만의 요가 시퀀스입니다. 편집 화면과 완성된 시퀀스를 함께 보여주어 구성 과정을 이해하기 쉽게 했습니다.", images: [{ src: "/yogi/screens/sequence-editor.webp", alt: "YOGI 시퀀스 편집 화면" }, { src: "/yogi/screens/sequence-detail.webp", alt: "YOGI 완성된 시퀀스 화면" }] },
    { number: "03 / PRACTICE", title: "시작부터 마무리까지 이어지는 수련", description: "진행·일시정지·완료 상태를 구분한 수련 플레이어로, 사용자가 현재 상태와 다음 행동을 이해할 수 있도록 구성했습니다.", images: [{ src: "/yogi/screens/practice-running.webp", alt: "YOGI 수련 진행 화면" }, { src: "/yogi/screens/practice-paused.webp", alt: "YOGI 수련 일시정지 화면" }, { src: "/yogi/screens/practice-completed.webp", alt: "YOGI 수련 완료 화면" }] },
    { number: "04 / DESIGN SYSTEM", title: "일관된 경험을 위한 디자인 기준", description: "색상·타이포그래피·여백을 정리한 UI 기반을 만들고, 반복되는 화면에서도 같은 색상과 글자 위계를 사용했습니다.", images: [{ src: "/yogi/screens/design-system-foundations.webp", alt: "YOGI 디자인 시스템 Foundations" }] },
  ],
  scope: "기획 방향과 기능 우선순위를 정하고, AI를 활용해 화면 구성과 문구, 반복 UI 정리를 진행한 개인 프로젝트입니다. Figma UI 디자인과 클릭형 프로토타입으로 구성되어 있습니다.",
  status: "디자인 프로토타입 단계입니다. 실제 앱 개발·배포, 사용자 검증 및 성과 측정은 포함하지 않습니다.",
} as const
