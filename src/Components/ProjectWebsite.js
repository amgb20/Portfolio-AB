import React from "react";
import "../index.css";

function TechStackTags({ techstack }) {
  const tags = techstack.split(",").map((t) => t.trim());
  return (
    <div className="flex flex-wrap gap-2 pt-4">
      {tags.map((tag) => (
        <span key={tag} className="badge-cyan">
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectWebsite({ title, image, description, techstack, website }) {
  return (
    <article className="project-card flex flex-col">
      <img src={image} alt={title} loading="lazy" />
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="font-heading text-text-primary font-semibold text-lg">
          {title}
        </h2>
        <p className="text-content pt-3 text-sm leading-relaxed">{description}</p>
        <TechStackTags techstack={techstack} />
        {website && (
          <div className="mt-5 pt-4 border-t border-border-subtle">
            <a
              href={website}
              target="_blank"
              rel="noreferrer noopener"
              className="link-cyan"
            >
              Video
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectWebsite;
