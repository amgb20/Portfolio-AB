import React, { useState } from "react";
import { projects, projectGroupsMeta } from "../Details";
import PageHeader from "../Components/ui/PageHeader";
import SegmentedTabs from "../Components/ui/SegmentedTabs";
import ProjectCard from "../Components/ProjectCard";

const categories = [
  { id: "university", label: "University Projects" },
  { id: "side", label: "Side Projects" },
];

function Chevron({ open, small }) {
  return (
    <svg
      className={`${small ? "h-5 w-5" : "h-6 w-6"} shrink-0 text-text-muted transition-transform duration-300 ${
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

function ProjectGrid({ items }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

function CollapsibleSection({ title, count, defaultOpen, level = 2, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const isSub = level === 3;

  return (
    <div className={isSub ? "" : "border-b border-border-subtle pb-8 last:border-b-0"}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-baseline justify-between gap-3 text-left"
      >
        <div className="flex items-baseline gap-3">
          {isSub ? (
            <h3 className="font-serif text-xl font-semibold text-text-primary">
              {title}
            </h3>
          ) : (
            <h2 className="font-serif text-2xl font-bold text-text-primary md:text-3xl">
              {title}
            </h2>
          )}
          <span className="text-sm text-text-light">
            {count} {count === 1 ? "project" : "projects"}
          </span>
        </div>
        <Chevron open={open} small={isSub} />
      </button>

      {open && (
        <div className={isSub ? "mt-6" : "mt-8 flex flex-col gap-8"}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("university");

  const groups = projectGroupsMeta.filter((g) => g.category === active);
  const itemsFor = (groupKey) =>
    projects.filter((p) => p.groupKey === groupKey);

  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Projects"
        subtitle="A library of university and side projects. Click any card to read the full write-up, tech stack and links."
      />

      <section className="pb-20 pt-2">
        <div className="app-container-wide">
          <div className="mb-12 flex justify-center">
            <SegmentedTabs
              tabs={categories}
              active={active}
              onChange={setActive}
            />
          </div>

          {active === "university" ? (
            <div className="flex flex-col gap-10">
              {[...new Set(groups.map((g) => g.institution))].map(
                (institution) => {
                  const instGroups = groups.filter(
                    (g) => g.institution === institution
                  );
                  const total = instGroups.reduce(
                    (n, g) => n + itemsFor(g.groupKey).length,
                    0
                  );
                  if (total === 0) return null;

                  const isSingle =
                    instGroups.length === 1 &&
                    instGroups[0].group === institution;

                  return (
                    <CollapsibleSection
                      key={institution}
                      title={institution}
                      count={total}
                      defaultOpen={institution === "University of Cambridge"}
                    >
                      {isSingle ? (
                        <ProjectGrid items={itemsFor(instGroups[0].groupKey)} />
                      ) : (
                        instGroups.map((group) => {
                          const items = itemsFor(group.groupKey);
                          if (items.length === 0) return null;
                          const subLabel = group.group.replace(
                            `${institution} — `,
                            ""
                          );
                          return (
                            <CollapsibleSection
                              key={group.groupKey}
                              title={subLabel}
                              count={items.length}
                              defaultOpen={group.groupKey === "bath-y4"}
                              level={3}
                            >
                              <ProjectGrid items={items} />
                            </CollapsibleSection>
                          );
                        })
                      )}
                    </CollapsibleSection>
                  );
                }
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {groups.map((group, i) => {
                const items = itemsFor(group.groupKey);
                if (items.length === 0) return null;
                return (
                  <CollapsibleSection
                    key={group.groupKey}
                    title={group.group}
                    count={items.length}
                    defaultOpen={i === 0}
                  >
                    <ProjectGrid items={items} />
                  </CollapsibleSection>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
