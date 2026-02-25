import { Link } from "react-router";
import { FaEye, FaGithub } from "react-icons/fa";
import TechTag from "./TechTag";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export default function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className={`flex flex-col gap-4 md:gap-8 md:items-center group/card rounded-xl p-4 -m-4 transition-colors hover:bg-muted/50 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-lg transition-transform duration-300 group-hover/card:scale-105"
        />
        <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 translate-y-2.5 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-y-0">
          <span className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
            <FaEye /> View
          </span>
          <span className="inline-flex items-center gap-1 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium">
            <FaGithub /> Code
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="text-center md:text-left md:w-1/2">
        <h3 className="text-2xl font-semibold mb-2 group-hover/card:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {project.techTags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
