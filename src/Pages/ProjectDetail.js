import React from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug, projects } from "../Details";
import ProjectCard from "../Components/ProjectCard";
import TechPill from "../Components/ui/TechPill";
import Seo from "../Components/Seo";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="app-container flex flex-col items-center gap-6 px-6 pt-40 pb-24 text-center">
        <Seo title="Project not found" path="/projects" />
        <h1 className="section-title">Project not found</h1>
        <p className="section-subtitle">
          The project you are looking for doesn&apos;t exist or may have moved.
        </p>
        <Link to="/projects" className="btn btn-primary">
          Back to projects
        </Link>
      </div>
    );
  }

  const related = projects
    .filter((p) => p.groupKey === project.groupKey && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={project.title}
        description={project.description}
        path={`/projects/${project.slug}`}
      />
      <article className="app-container px-6 pt-32 pb-16 md:pt-40">
        <Link
          to="/projects"
          className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-accent"
        >
          &larr; Back to projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="chip">
            {project.category === "university" ? "University" : "Side project"}
          </span>
          <span className="text-sm font-medium uppercase tracking-wide text-text-light">
            {project.group}
          </span>
        </div>

        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
          {project.title}
        </h1>

        {project.techstack.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techstack.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
        )}

        <div className="mt-8 overflow-hidden rounded-2xl bg-bg-alt shadow-soft">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[520px] w-full object-contain"
          />
        </div>

        <div className="mt-10 max-w-content">
          <p className="text-lg leading-relaxed text-text-primary">
            {project.description}
          </p>
        </div>

        {project.links.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {project.links.map((l, i) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer noopener"
                className={`btn ${i === 0 ? "btn-primary" : "btn-secondary"}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </article>

      {related.length > 0 && (
        <section className="section-pad bg-bg-alt/70 backdrop-blur-sm">
          <div className="app-container-wide">
            <h2 className="mb-10 font-serif text-2xl font-bold text-text-primary md:text-3xl">
              More from {project.group}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
