import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { defaultProfile } from "@/lib/profile";
import { withBasePath } from "@/lib/asset";

interface HeroSectionProps {
  title?: string;
  tagline?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export function HeroSection({
  title = defaultProfile.title,
  tagline = defaultProfile.tagline,
  email = defaultProfile.email,
  githubUrl = defaultProfile.links.github,
  linkedinUrl = defaultProfile.links.linkedin,
}: HeroSectionProps = {}) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8">
        <h1 className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-display-2xl">
          {title}
        </h1>
        <p className="max-w-xl text-xl text-text-secondary md:text-2xl">
          {tagline}
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button
            href={`mailto:${email}`}
            variant="primary"
            icon={
              <Image
                src={withBasePath("/assets/icons/icon-mail.svg")}
                width={16}
                height={16}
                alt=""
                aria-hidden="true"
              />
            }
          >
            Contact Me
          </Button>
          <Button
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            variant="outline"
            icon={
              <Image
                src={withBasePath("/assets/icons/icon-github.svg")}
                width={16}
                height={16}
                alt=""
                aria-hidden="true"
              />
            }
          >
            GitHub
          </Button>
          <Button
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            variant="outline"
            icon={
              <Image
                src={withBasePath("/assets/icons/icon-linkedin.svg")}
                width={16}
                height={16}
                alt=""
                aria-hidden="true"
              />
            }
          >
            LinkedIn
          </Button>
        </div>
      </div>
      <Image
        src={withBasePath("/assets/icons/icon-chevron-down.svg")}
        width={24}
        height={24}
        alt=""
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-80"
      />
    </section>
  );
}
