import { Container } from "@/components/ui/Container";
import { defaultProfile } from "@/lib/profile";
import type { CareerEntry } from "@/lib/profile";

interface CareerSectionProps {
  careers?: CareerEntry[];
}

export function CareerSection({
  careers = defaultProfile.careers,
}: CareerSectionProps = {}) {
  return (
    <section id="career" className="px-6 py-20">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Career
        </h2>
        <div className="mx-auto max-w-3xl space-y-6">
          {careers.map((entry, i) => (
            <article
              key={i}
              className="rounded-2xl bg-white p-8 shadow-md md:p-10"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
                <p className="text-sm font-medium text-text-muted">
                  {entry.period}
                </p>
                <span aria-hidden className="hidden text-text-muted md:inline">
                  ·
                </span>
                <p className="text-sm text-text-secondary">{entry.role}</p>
              </div>
              <h3 className="mt-2 text-2xl font-bold text-foreground">
                {entry.company}
              </h3>
              {entry.summary && (
                <p className="mt-2 text-base text-text-secondary">
                  {entry.summary}
                </p>
              )}
              <ul className="mt-4 space-y-2">
                {entry.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-base text-text-body"
                  >
                    <span aria-hidden className="text-brand-blue">
                      •
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
