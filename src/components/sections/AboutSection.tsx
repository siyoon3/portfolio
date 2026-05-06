import { Container } from "@/components/ui/Container";
import { defaultProfile } from "@/lib/profile";

interface AboutSectionProps {
  introLines?: string[];
  name?: string;
  position?: string;
  experience?: string;
  location?: string;
  email?: string;
}

export function AboutSection({
  introLines = defaultProfile.introLines,
  name = defaultProfile.name,
  position = defaultProfile.position,
  experience = defaultProfile.experience,
  location = defaultProfile.location,
  email = defaultProfile.email,
}: AboutSectionProps = {}) {
  const rows: Array<[string, string]> = [
    ["이름", name],
    ["직무", position],
    ["경력", experience],
    ["근무 형태", location],
    ["이메일", email],
  ];

  return (
    <section id="about" className="px-6 py-20">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          About Me
        </h2>
        <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <div className="space-y-4">
            {introLines.map((line, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-text-body"
              >
                {line}
              </p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-border-soft pt-6 md:grid-cols-[120px_1fr]">
            {rows.map(([label, value]) => (
              <div key={label} className="contents">
                <dt className="text-sm font-medium text-text-muted">
                  {label}
                </dt>
                <dd className="text-base text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </Container>
    </section>
  );
}
