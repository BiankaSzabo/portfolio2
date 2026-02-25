import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-300 mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          My Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          A showcase of my frontend development work using HTML, CSS, and
          JavaScript
        </p>

        <div className="grid gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
