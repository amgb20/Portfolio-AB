import React from "react";
import { Link } from "react-router-dom";
import TechPill from "./ui/TechPill";

export default function ProjectCard({ project, showGroup = false }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="card card-hoverable group flex flex-col overflow-hidden no-underline"
    >
      <div className="aspect-[16/10] overflow-hidden bg-bg-alt">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        {showGroup && project.group && (
          <span className="mb-1 text-xs font-medium uppercase tracking-wider text-text-light">
            {project.group}
          </span>
        )}
        <h3 className="font-serif text-lg font-bold leading-snug text-text-primary">
          {project.title}
        </h3>
        {project.techstack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techstack.slice(0, 3).map((t) => (
              <TechPill key={t} label={t} />
            ))}
            {project.techstack.length > 3 && (
              <span className="chip">+{project.techstack.length - 3}</span>
            )}
          </div>
        )}
        <span className="mt-auto pt-4 text-sm font-medium text-accent transition-colors group-hover:text-accent-light">
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}
