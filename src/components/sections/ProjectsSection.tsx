import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { defaultProfile } from "@/lib/profile";
import type { Project } from "@/lib/profile";

interface ProjectsSectionProps {
  projects?: Project[];
}

export function ProjectsSection({
  projects = defaultProfile.projects,
}: ProjectsSectionProps = {}) {
  return (
    <section id="projects" className="px-6 py-20">
      <Container>
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground">Projects</h2>
            <p className="mt-3 text-base text-text-muted">
              지금까지 진행한 프로젝트들입니다
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              key={`${project.title}-${project.period}-${i}`}
              delay={(i % 3) * 120}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
