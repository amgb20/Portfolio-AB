import React from "react";
import { Link } from "react-router-dom";
import {
  personalDetails,
  featuredPublications,
  publications,
  projects,
  reviewerService,
} from "../Details";
import Button from "../Components/ui/Button";
import SectionHeading from "../Components/ui/SectionHeading";
import PublicationCard from "../Components/PublicationCard";

const paperCount = publications.filter((p) => p.category !== "colloquium").length;
const citationCount = publications.reduce((sum, p) => sum + (p.citedBy || 0), 0);

const stats = [
  { value: `${paperCount}`, label: "Publications" },
  { value: `${citationCount}`, label: "Citations" },
  { value: `${reviewerService.length}`, label: "Conferences reviewed" },
  { value: `${projects.length}`, label: "Projects" },
];

export default function Home() {
  const { name, suffix, role, location, tagline, intro, img } = personalDetails;

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[92vh] items-center px-6 pt-28 pb-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <img
            src={img}
            alt={name}
            className="mb-8 h-28 w-28 rounded-full object-cover shadow-soft animate-stagger-in md:h-32 md:w-32"
          />
          <p
            className="section-label animate-stagger-in"
            style={{ animationDelay: "80ms" }}
          >
            Hello, I'm
          </p>
          <h1
            className="mt-4 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-text-primary animate-stagger-in md:text-7xl"
            style={{ animationDelay: "160ms" }}
          >
            {name}
          </h1>
          <p
            className="mt-4 font-serif text-xl italic text-accent animate-stagger-in md:text-2xl"
            style={{ animationDelay: "240ms" }}
          >
            {role}
          </p>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted animate-stagger-in md:text-lg"
            style={{ animationDelay: "320ms" }}
          >
            {tagline}
          </p>
          <p
            className="mt-3 max-w-xl text-sm leading-relaxed text-text-light animate-stagger-in"
            style={{ animationDelay: "380ms" }}
          >
            {intro}
          </p>
          <div
            className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-stagger-in"
            style={{ animationDelay: "440ms" }}
          >
            <Button to="/publications" variant="primary">
              View publications
            </Button>
            <Button to="/projects" variant="secondary">
              Explore projects
            </Button>
          </div>
          <p
            className="mt-6 text-xs uppercase tracking-[0.15em] text-text-light animate-stagger-in"
            style={{ animationDelay: "500ms" }}
          >
            {suffix} &nbsp;·&nbsp; {location}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border-subtle bg-surface/60 backdrop-blur-sm">
        <div className="app-container-wide grid grid-cols-2 gap-8 py-14 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-2xl font-bold text-accent md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured publications */}
      <section className="section-pad">
        <div className="app-container-wide">
          <SectionHeading
            label="Highlights"
            title="Featured Publications"
            subtitle="Peer-reviewed research and talks on machine learning for energy systems, path planning, and graph neural networks."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPublications.map((pub) => (
              <PublicationCard key={pub.title} publication={pub} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/publications" className="btn btn-secondary">
              View all publications &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
