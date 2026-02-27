import { useState } from "react";
import { useParams, Link } from "react-router";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaLink, FaCheck } from "react-icons/fa";
import { projects } from "../data/projects";
import TechTag from "../components/TechTag";
import Button from "../components/Button";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!project) {
    return (
      <div className="max-w-300 mx-auto px-4 md:px-8 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The project you're looking for doesn't exist.
        </p>
        <Button to="/">
          <FaArrowLeft /> Back to Home
        </Button>
      </div>
    );
  }

  return (
    <article className="pb-16 md:pb-24">
      {/* Hero banner */}
      <div className="bg-muted">
        <div className="max-w-300 mx-auto px-4 md:px-8 py-8 md:py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <FaArrowLeft /> Back to Projects
          </Link>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {project.title}
                </h1>
                <button
                  onClick={handleCopyLink}
                  title="Copy link to this page"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors shrink-0"
                >
                  {copied ? <FaCheck className="text-green-500" /> : <FaLink />}
                  <span>{copied ? "Copied!" : "Copy link"}</span>
                </button>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techTags.map((tag) => (
                  <TechTag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <Button href={project.liveUrl} target="_blank">
                  <FaExternalLinkAlt /> Live Site
                </Button>
                <Button
                  href={project.repoUrl}
                  target="_blank"
                  variant="outline"
                >
                  <FaGithub /> View Code
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-200 mx-auto px-4 md:px-8 py-12 md:py-16">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About the Project
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Challenges & Learnings
          </h2>
          <div className="space-y-4">
            {project.challenges.map((challenge, i) => (
              <div
                key={i}
                className="p-5 bg-muted rounded-lg border border-border"
              >
                <p className="text-muted-foreground leading-relaxed m-0">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8 border-t border-border">
          <Button href={project.liveUrl} target="_blank">
            <FaExternalLinkAlt /> Visit Live Site
          </Button>
          <Button href={project.repoUrl} target="_blank" variant="outline">
            <FaGithub /> View Source Code
          </Button>
          <Button to="/" variant="outline">
            <FaArrowLeft /> All Projects
          </Button>
        </div>
      </div>
    </article>
  );
}
