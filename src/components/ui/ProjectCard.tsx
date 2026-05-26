import Image from "next/image";
import { TechBadge } from "@/components/ui/TechBadge";
import type { Project } from "@/lib/profile";
import { withBasePath } from "@/lib/asset";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const meta = [project.period, project.client].filter(Boolean).join(" · ");
  const isLinkable = Boolean(project.href) && !project.isPrivate;

  const cardClassName = [
    "group relative flex h-full flex-col overflow-hidden rounded-card bg-white shadow-md transition",
    isLinkable
      ? "hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClassName}>
      <div className="relative aspect-[16/9]">
        {project.image ? (
          <Image
            src={withBasePath(project.image)}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/15 to-brand-purple/15" />
        )}
        {project.isPrivate && (
          <div className="absolute inset-0 grid place-items-center bg-black/60">
            <div className="inline-flex items-center gap-2 rounded-pill bg-white/90 px-4 py-2">
              <Image
                src={withBasePath("/assets/icons/icon-lock.svg")}
                width={16}
                height={16}
                alt=""
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-foreground">
                비공개 프로젝트
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            {isLinkable ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:underline"
                aria-label={`${project.title} (새 탭에서 열기)`}
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className="mt-1 text-sm text-text-muted">{meta}</p>
        </div>

        {project.description && (
          <p className="text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <div className="mt-auto space-y-1.5 pt-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-muted">기여도</span>
            <span className="font-medium text-foreground">
              {project.contribution}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-track">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${project.contribution}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
