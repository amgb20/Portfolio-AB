import React from "react";
import {
  publications,
  publicationSections,
  reviewerService,
} from "../Details";
import PageHeader from "../Components/ui/PageHeader";
import PublicationCard from "../Components/PublicationCard";

const totalCitations = publications.reduce(
  (sum, p) => sum + (p.citedBy || 0),
  0
);
const paperCount = publications.filter(
  (p) => p.category !== "colloquium"
).length;

export default function Publications() {
  return (
    <>
      <PageHeader
        label="Research"
        title="Publications & Talks"
        subtitle="Peer-reviewed papers, conference proceedings and invited talks on machine learning for energy systems, path planning, and graph neural networks."
      />

      <div className="mb-6 flex flex-wrap items-center justify-center gap-3 px-6">
        <span className="chip">{paperCount} publications</span>
        <span className="chip">{totalCitations} citations</span>
        <a
          href="https://scholar.google.com/citations?user=jiiTDvcAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer noopener"
          className="chip transition-colors hover:bg-accent hover:text-white"
        >
          Google Scholar &rarr;
        </a>
      </div>

      <section className="pb-16 pt-6">
        <div className="app-container-wide flex flex-col gap-16">
          {publicationSections.map((section) => {
            const items = publications.filter(
              (p) => p.category === section.id
            );
            if (items.length === 0) return null;
            return (
              <div key={section.id}>
                <h2 className="mb-8 font-serif text-2xl font-bold text-text-primary md:text-3xl">
                  {section.label}
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  {items.map((pub) => (
                    <PublicationCard key={pub.title} publication={pub} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {reviewerService.length > 0 && (
        <section className="section-pad bg-bg-alt/70 backdrop-blur-sm">
          <div className="app-container">
            <h2 className="mb-8 text-center font-serif text-2xl font-bold text-text-primary md:text-3xl">
              Service &amp; Peer Review
            </h2>
            <div className="flex flex-col gap-4">
              {reviewerService.map((item) => (
                <div
                  key={item.venue}
                  className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    {item.logo && (
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-border-subtle">
                        <img
                          src={item.logo}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </span>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg font-bold leading-snug text-text-primary md:text-xl">
                        {item.venue}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">
                        {item.role}
                      </p>
                      {item.location && (
                        <p className="mt-1 text-sm text-text-light">
                          {item.location}
                        </p>
                      )}
                    </div>
                  </div>
                  {item.date && (
                    <span className="chip shrink-0">{item.date}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
