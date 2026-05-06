import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { defaultProfile } from "@/lib/profile";

interface CtaSectionProps {
  heading?: string;
  description?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export function CtaSection({
  heading = "Let's Work Together",
  description = "새로운 프로젝트나 협업 제안 언제든 환영합니다",
  email = defaultProfile.email,
  githubUrl = defaultProfile.links.github,
  linkedinUrl = defaultProfile.links.linkedin,
}: CtaSectionProps = {}) {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-brand-blue to-brand-purple px-6 py-20 text-center"
    >
      <Container>
        <h2 className="text-3xl font-bold text-white">{heading}</h2>
        <p className="mt-4 text-xl text-white/90">{description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`mailto:${email}`} variant="inverse">
            이메일 보내기
          </Button>
          <Button
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            variant="accent"
          >
            GitHub Profile
          </Button>
          <Button
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            variant="accent"
          >
            LinkedIn
          </Button>
        </div>
      </Container>
    </section>
  );
}
