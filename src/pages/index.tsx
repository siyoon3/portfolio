import Head from "next/head";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CareerSection } from "@/components/sections/CareerSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Siyoon Portfolio</title>
        <meta
          name="description"
          content="웹표준과 접근성을 지키는 마크업 엔지니어 포트폴리오"
        />
      </Head>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CareerSection />
        <ProjectsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
