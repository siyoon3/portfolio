import { Container } from "@/components/ui/Container";
import { defaultProfile } from "@/lib/profile";
import type { Skill } from "@/lib/profile";

interface SkillsSectionProps {
  skills?: Record<string, Skill[]>;
}

export function SkillsSection({
  skills = defaultProfile.skills,
}: SkillsSectionProps = {}) {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="bg-white px-6 py-20">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-4 text-xl font-semibold text-text-strong">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-pill bg-white p-4 shadow-sm"
                  >
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="text-base font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 w-full overflow-hidden rounded-full bg-skill-track"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} 숙련도`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-purple"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
