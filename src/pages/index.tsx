import Head from "next/head";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CareerSection } from "@/components/sections/CareerSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

const SITE_URL = "https://siyoon3.github.io/portfolio/";
const SITE_TITLE = "Kim Siyoon | Web Publisher 포트폴리오";
const SITE_DESCRIPTION =
  "웹표준과 접근성을 지키는 웹 퍼블리셔 김시윤의 포트폴리오. HTML, CSS, JavaScript, React, Next.js 기반 작업 사례.";
const OG_IMAGE = "https://siyoon3.github.io/portfolio/og-image.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta
          name="keywords"
          content="포트폴리오, 웹 퍼블리셔, 프론트엔드, HTML, CSS, JavaScript, React, Next.js, 김시윤"
        />
        <meta name="author" content="Kim Siyoon" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kim Siyoon Portfolio" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CareerSection />
        <ProjectsSection />
      </main>
      <SiteFooter />
    </>
  );
}
