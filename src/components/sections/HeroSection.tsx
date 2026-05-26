import Image from "next/image";
import { defaultProfile } from "@/lib/profile";
import { withBasePath } from "@/lib/asset";
import { Reveal } from "@/components/ui/Reveal";

interface HeroSectionProps {
  title?: string;
  tagline?: string;
}

export function HeroSection({
  title = defaultProfile.title,
  tagline = defaultProfile.tagline,
}: HeroSectionProps = {}) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="animate-blob-1 absolute -left-24 -top-24 h-[480px] w-[480px] rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="animate-blob-2 absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-brand-purple/20 blur-3xl" />
        <div className="animate-blob-3 absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-brand-blue/15 blur-3xl" />
      </div>

      <Reveal className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center gap-8">
        <h1 className="whitespace-pre-line bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:text-display-2xl">
          {title}
        </h1>
        <p className="w-full whitespace-pre-line break-keep text-xl text-text-secondary md:text-2xl">
          {tagline}
        </p>
      </Reveal>

      <Image
        src={withBasePath("/assets/icons/icon-chevron-down.svg")}
        width={24}
        height={24}
        alt=""
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce opacity-80"
      />
    </section>
  );
}
