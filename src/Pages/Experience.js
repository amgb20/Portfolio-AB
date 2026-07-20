import React, { useState } from "react";
import { workDetails, charitiesDetails, contactDetails } from "../Details";
import PageHeader from "../Components/ui/PageHeader";
import AccordionCard from "../Components/ui/AccordionCard";
import TechPill from "../Components/ui/TechPill";
import Seo from "../Components/Seo";

function TechRow({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-5 border-t border-border-subtle pt-4">
      <span className="section-label">Tech Stack</span>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

function Chevron({ open }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function LockIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function splitTech(tech) {
  if (!tech) return [];
  return tech
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

function ProjectItem({ project }) {
  const [open, setOpen] = useState(false);
  const tech = splitTech(project.techstack);
  const isPrivate = Boolean(project.private);

  return (
    <div className="overflow-hidden rounded-xl border border-border-subtle bg-bg-alt/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="truncate text-[0.95rem] font-medium text-text-primary">
            {project.title}
          </span>
          {isPrivate && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-subtle px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-accent">
              <LockIcon className="h-3 w-3" />
              Private
            </span>
          )}
        </span>
        <Chevron open={open} />
      </button>

      <div className={`accordion-body ${open ? "accordion-body-open" : ""}`}>
        <div className="accordion-body-inner">
          <div className="border-t border-border-subtle px-4 py-4">
            <div className="relative">
              <div
                className={
                  isPrivate
                    ? "pointer-events-none select-none blur-[6px]"
                    : undefined
                }
                aria-hidden={isPrivate}
              >
                {project.links && project.links.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-4">
                    {project.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent text-sm"
                      >
                        {l.label} →
                      </a>
                    ))}
                  </div>
                )}

                <p className="whitespace-pre-line text-[0.9rem] leading-relaxed text-text-muted">
                  {project.description}
                </p>

                {tech.length > 0 && (
                  <div className="mt-4">
                    <span className="section-label">Tech Stack</span>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {tech.map((t) => (
                        <TechPill key={t} label={t} />
                      ))}
                    </div>
                  </div>
                )}

                {project.deliverables && project.deliverables.length > 0 && (
                  <div className="mt-4">
                    <span className="section-label">Deliverables &amp; Skills</span>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {project.deliverables.map((d) => (
                        <span key={d} className="chip">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {isPrivate && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                  <LockIcon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-text-primary">
                    Private project
                  </span>
                  <a
                    href={`mailto:${contactDetails.email_2}?subject=${encodeURIComponent(
                      `Request more information: ${project.title}`
                    )}`}
                    className="pointer-events-auto mt-1 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
                  >
                    Request more information
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsRow({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-5 border-t border-border-subtle pt-4">
      <span className="section-label">Projects</span>
      <div className="mt-3 flex flex-col gap-2.5">
        {items.map((p) => (
          <ProjectItem key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <Seo
        title="Experience"
        description="Machine learning research and engineering experience across Cambridge, UCL, Bath, Savanta and motorsport — from equivariant GNNs to production AI systems."
        path="/experience"
      />
      <PageHeader
        label="Experience"
        title="Professional Experience"
        subtitle="Machine Learning research and engineering across Cambridge, UCL, Bath, and industry — spanning energy-management systems, graph neural networks, low-precision inference, and production-grade AI software."
      />

      <section className="pb-16 pt-4">
        <div className="app-container flex flex-col gap-4">
          {workDetails.map((item, i) => (
            <AccordionCard
              key={`${item.Company}-${item.Duration}`}
              logo={item.logo}
              fallback={item.fallback}
              title={item.Company}
              subtitle={item.Position}
              meta={[item.Location, item.Duration].filter(Boolean)}
              defaultOpen={i === 0}
            >
              {item.bullets && item.bullets.length > 0 && (
                <ul className="space-y-2.5">
                  {item.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="relative pl-5 text-[0.95rem] leading-relaxed text-text-muted before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-light"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              <TechRow items={item.techstack} />
              <ProjectsRow items={item.projects} />
            </AccordionCard>
          ))}
        </div>
      </section>

      <section className="section-pad bg-bg-alt/70 backdrop-blur-sm">
        <div className="app-container">
          <h2 className="mb-10 text-center font-serif text-2xl font-bold text-text-primary md:text-3xl">
            Additional Experience &amp; Volunteer Work
          </h2>
          <div className="flex flex-col gap-4">
            {charitiesDetails.map((item) => (
              <AccordionCard
                key={`${item.Position}-${item.Duration}`}
                logo={item.logo}
                title={item.Company}
                subtitle={item.Position}
                meta={[item.Location, item.Duration].filter(Boolean)}
                badge={item.Type}
              >
                {item.description && (
                  <p className="whitespace-pre-line text-[0.95rem] leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                )}
              </AccordionCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
