import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
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
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
          <p className="mt-3 text-base text-text-muted">
            지금까지 진행한 프로젝트들입니다
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={`${project.title}-${project.period}-${i}`}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
