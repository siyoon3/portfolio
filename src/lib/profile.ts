export interface ProfileLinks {
  github: string;
  linkedin: string;
  blog?: string;
  notion?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface CareerEntry {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  client?: string;
  period: string;
  description?: string;
  techs: string[];
  contribution: number;
  href?: string;
  isPrivate?: boolean;
  image?: string;
}

export interface ProfileData {
  // Hero
  title: string;
  tagline: string;

  // About
  name: string;
  position: string;
  experience: string;
  location: string;
  email: string;
  links: ProfileLinks;
  introLines: string[];

  // Skills — 5 categories, each with skill items + proficiency
  skills: Record<string, Skill[]>;

  // Career
  careers: CareerEntry[];

  // Projects
  projects: Project[];
}

export const defaultProfile: ProfileData = {
  title: "Web Publisher",
  tagline: "웹표준과 접근성을 지키는 웹 퍼블리셔",

  name: "Kim Siyoon",
  position: "웹 퍼블리셔",
  experience: "2019.12 ~ 현재",
  location: "정규직",
  email: "siyoon1522@gmail.com",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    blog: "https://your-blog.com",
    notion:
      "https://fearless-text-0b3.notion.site/33c7332e96d8800db49ff0573704b86e?v=33c7332e96d8803cb8c3000cc003d249",
  },
  introLines: [
    "웹 퍼블리셔로 근무하며 기획자·디자이너·개발자 등 다양한 직군과 협업해왔습니다. 각자 중요하게 보는 방향이 다른 만큼, 제 의견만 고집하기보다 상대방의 의도와 목적을 먼저 이해한 뒤 사용자 화면과 경험에 자연스럽게 녹여내려 노력합니다.",
    "수정 요청이 반복되거나 일정이 촉박한 상황에서도 끝까지 결과물을 완성하는 책임감을 중요하게 생각합니다. 퍼블리싱은 단순한 화면 구현이 아니라 협업을 통해 프로젝트 완성도를 높여가는 과정이라 믿으며, 사용성과 협업 모두를 고려하며 안정적으로 결과물을 완성하는 웹 퍼블리셔가 되고 싶습니다.",
  ],

  skills: {
    Markup: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 90 },
      { name: "SCSS", level: 85 },
    ],
    Language: [
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 85 },
    ],
    Framework: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
    ],
    "Design Tool": [
      { name: "Figma", level: 85 },
      { name: "Photoshop", level: 75 },
    ],
    "Version Control": [{ name: "Git", level: 85 }],
  },

  careers: [
    {
      company: "이브레인소프트",
      role: "웹 퍼블리셔",
      period: "2019.12 ~ 현재",
      highlights: [
        "웹표준 기반 퍼블리싱",
        "반응형 웹 구현 (모바일/태블릿/데스크톱)",
        "디자인 시안(Figma/PSD)을 코드로 변환",
      ],
    },
  ],

  projects: [
    {
      title: "티오더 신규 페이지 작업 1",
      client: "티오더",
      period: "2026.04 ~ 진행중",
      techs: ["HTML", "CSS", "JavaScript"],
      contribution: 100,
      href: "https://www.torder.com/torderGpt",
      image: "/assets/images/projects/torder-gpt.png",
    },
    {
      title: "티오더 신규 페이지 작업 2",
      client: "티오더",
      period: "2026.04 ~ 진행중",
      techs: ["HTML", "CSS", "JavaScript"],
      contribution: 100,
      href: "https://www.torder.com/torderAgent",
      image: "/assets/images/projects/torder-agent.png",
    },
    {
      title: "SCK 어셈블",
      description: "PHP 기반 시스템을 JSP로 전환하는 마이그레이션 프로젝트",
      period: "2026.01 ~ 2026.04",
      techs: ["HTML", "CSS", "JSP"],
      contribution: 100,
      href: "https://earthembletimes.sc.or.kr/",
      image: "/assets/images/projects/sck-assemble.png",
    },
    {
      title: "유니세프 홈페이지 운영",
      client: "유니세프",
      period: "2026.01 ~ 진행중",
      techs: ["HTML", "CSS", "React", "Figma"],
      contribution: 100,
      href: "https://www.unicef.or.kr/",
      image: "/assets/images/projects/unicef.png",
    },
    {
      title: "잠자는 집 속의 동전 깨우기",
      client: "유니세프",
      period: "2026.01 ~ 진행중",
      techs: ["HTML", "CSS", "JavaScript"],
      contribution: 100,
      href: "https://www.unicef.or.kr/campaign/wakeupyourcoins/",
      image: "/assets/images/projects/unicef-wakeupyourcoins.png",
    },
    {
      title: "위성 정보 서비스 기술 개발",
      client: "인디시스템",
      period: "2025.08 ~ 2025.11",
      techs: ["HTML", "CSS"],
      contribution: 100,
      isPrivate: true,
    },
    {
      title: "캠페인 페이지 퍼블리싱",
      client: "세이브더칠드런",
      period: "2024.11 ~ 2024.12",
      techs: ["HTML", "CSS", "JSP", "Photoshop"],
      contribution: 100,
      href: "https://www.sc.or.kr/participate/campaignView.do?NO=29585",
      image: "/assets/images/projects/sc-campaign.png",
    },
    {
      title: "세이브더칠드런 캠페인 1",
      client: "세이브더칠드런",
      description: "국내 아동식사지원 캠페인 (수빈이 캠페인) 단독 페이지",
      period: "2024.11 ~ 2024.12",
      techs: ["HTML", "CSS", "JSP", "Photoshop"],
      contribution: 100,
      href: "https://www.sc.or.kr/subin2/",
      image: "/assets/images/projects/sc-subin2.png",
    },
    {
      title: "세이브더칠드런 캠페인 2",
      client: "세이브더칠드런",
      description: "결혼기념 기부 (좋아서하는기념일) 단독 페이지",
      period: "2024.11 ~ 2024.12",
      techs: ["HTML", "CSS", "JSP", "Photoshop"],
      contribution: 100,
      href: "https://www.sc.or.kr/promotion/wedding_blooming.do",
      image: "/assets/images/projects/sc-wedding-blooming.png",
    },
    {
      title: "신세계 I&C 홈페이지 운영",
      client: "신세계 I&C",
      period: "2025.01 ~ 2025.12",
      techs: ["HTML", "CSS", "JavaScript", "Figma"],
      contribution: 100,
      href: "https://shinsegae-inc.com/",
      image: "/assets/images/projects/shinsegae-inc.png",
    },
    {
      title: "세이브더칠드런 캠페인 3",
      client: "세이브더칠드런",
      description: "아동을 살리는 가게 (wesave) 캠페인",
      period: "2024.11 ~ 2024.12",
      techs: ["HTML", "CSS"],
      contribution: 100,
      href: "https://care.sc.or.kr/wesave3pc.html",
      image: "/assets/images/projects/sc-wesave.png",
    },
    {
      title: "전쟁 속 아동 보호 캠페인 페이지",
      client: "세이브더칠드런",
      period: "2024.11 ~ 2024.12",
      techs: ["HTML", "CSS", "JSP", "Photoshop"],
      contribution: 100,
      href: "https://www.sc.or.kr/stopwaronchildren/",
      image: "/assets/images/projects/stopwaronchildren.png",
    },
    {
      title: "국내아동후원 (국내결연) 홈페이지",
      client: "세이브더칠드런",
      period: "2024.10 ~ 2024.12",
      techs: ["HTML", "CSS"],
      contribution: 100,
      isPrivate: true,
    },
    {
      title: "이브레인소프트 홈페이지",
      client: "이브레인소프트",
      period: "2024.09",
      techs: ["HTML", "SCSS", "React", "Next.js"],
      contribution: 100,
      href: "https://ebrainsoft.com/",
      image: "/assets/images/projects/ebrainsoft.png",
    },
    {
      title: "지역본부 홈페이지 통합",
      client: "세이브더칠드런",
      description: "기존 지역본부 사이트 서비스 종료 및 통합 마이그레이션",
      period: "2024.09 ~ 2024.10",
      techs: ["HTML", "CSS"],
      contribution: 100,
      href: "https://www.sc.or.kr/program/domesticView.do?name=seobu&SEQ=87711",
      image: "/assets/images/projects/sc-region.png",
    },
    {
      title: "티오더 홈페이지 리뉴얼",
      client: "티오더",
      period: "2024.07 ~ 2024.09",
      techs: ["HTML", "CSS"],
      contribution: 40,
      href: "https://www.torder.com/",
      image: "/assets/images/projects/torder.png",
    },
    {
      title: "아프리카에 빨간 염소 보내기 캠페인",
      client: "세이브더칠드런",
      period: "2023.10 ~ 2023.12",
      techs: ["HTML", "CSS", "JavaScript"],
      contribution: 100,
      isPrivate: true,
    },
    {
      title: "사업장 폐기물 종합 관리 시스템",
      client: "더환경",
      period: "2022.11 ~ 2023.03",
      techs: ["HTML", "CSS", "Vue"],
      contribution: 100,
      isPrivate: true,
    },
    {
      title: "신세계 L&B 홈페이지 웹접근성 평가",
      client: "신세계 L&B",
      description: "웹접근성 평가 및 개선 작업",
      period: "2022.04 ~ 2022.06",
      techs: ["HTML", "CSS"],
      contribution: 100,
      isPrivate: true,
    },
    {
      title: "Chappa — 캐나다 블록체인 거래소",
      client: "basic-exchange",
      period: "2021.08 ~ 2021.09",
      techs: ["HTML", "CSS"],
      contribution: 100,
      isPrivate: true,
    },
    {
      title: "buyKOREA — Commerce 사이트 구축",
      client: "KOTRA",
      period: "2021.04 ~ 2021.07",
      techs: ["HTML", "CSS"],
      contribution: 100,
      isPrivate: true,
    },
    {
      title: "반려견 서비스 중개 플랫폼",
      client: "포돌리",
      period: "2020.08 ~ 2021.03",
      techs: ["HTML", "CSS", "Vue"],
      contribution: 100,
      isPrivate: true,
    },
    {
      title: "F2F 후원자 모집 엔진",
      client: "유니세프",
      period: "2020.05 ~ 2020.07",
      techs: ["HTML", "CSS"],
      contribution: 100,
      isPrivate: true,
    },
    {
      title: "PDEP 사이트 구축",
      client: "세이브더칠드런",
      period: "2020.01 ~ 2020.04",
      techs: ["HTML", "CSS", "JavaScript"],
      contribution: 100,
      href: "https://pdep.sc.or.kr/",
      image: "/assets/images/projects/pdep.png",
    },
  ],
};
