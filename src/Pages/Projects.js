import React, { useRef, useEffect, useState } from "react";
import Project from "../Components/Project";
import ProjectBelieth from "../Components/ProjectBeliethLayout";
import ProjectSTC from "../Components/ProjectSTC";
import ProjectWebsite from "../Components/ProjectWebsite";
import {
  projectDetailsUni1,
  projectDetailsSTC,
  projectDetailsBelieth,
  projectDetailsPP,
  projectDetailsUni2,
  projectDetailsUni3,
  projectDetailsUni4,
  projectDetailsUni5,
  projectDetailsCV,
  projectDetailsGym,
  projectDetailsWebPortfolio,
  projectDetailsWeb,
} from "../Details";
import { fadeIn } from "../utils/gsapReducedMotion";

function SegmentedTabs({ tabs, activeId, onChange }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative mb-6">
      <div className="md:hidden mb-2">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="font-mono text-sm text-accent-cyan cursor-pointer flex items-center gap-2"
        >
          <svg
            className="stroke-text-primary"
            width="20"
            height="16"
            viewBox="0 0 16 13"
            fill="none"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {tabs.find((t) => t.id === activeId)?.label}
        </button>
        {isMobileMenuOpen && (
          <div className="mobile-menu relative mt-2">
            <ul>
              {tabs.map(({ id, label }) => (
                <li
                  key={id}
                  onClick={() => {
                    onChange(id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="segmented-tabs hidden md:flex">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`segmented-tab ${
              id === activeId ? "segmented-tab-active" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectGrid({ projects, renderProject }) {
  const gridRef = useRef();

  useEffect(() => {
    const tl = fadeIn(gridRef.current);
    return () => tl?.kill();
  }, [projects]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project) => renderProject(project))}
    </div>
  );
}

function Projects() {
  const [activeSection, setActiveSection] = useState("university_project");
  const [activeYear, setActiveYear] = useState("year1");
  const [activePP, setActivePP] = useState("gym");
  const headingRef = useRef();

  useEffect(() => {
    const tl = fadeIn(headingRef.current);
    return () => tl?.kill();
  }, []);

  const yearSections = [
    { id: "year1", label: "Year 1" },
    { id: "year2", label: "Year 2" },
    { id: "year3", label: "Year 3" },
    { id: "year4", label: "Year 4" },
  ];

  const sections = [
    { id: "university_project", label: "Univ of Bath" },
    { id: "university_project_cam", label: "Univ of Cambridge" },
    { id: "personal_projects", label: "Personal" },
    { id: "publications", label: "Publications" },
    { id: "start_ups", label: "Start-up" },
  ];

  const PPsections = [
    { id: "gym", label: "Machine Learning" },
    { id: "cv", label: "Computer Vision" },
    { id: "website", label: "Website" },
  ];

  const yearProjects = {
    year1: projectDetailsUni1,
    year2: projectDetailsUni2,
    year3: projectDetailsUni3,
    year4: projectDetailsUni4,
  };

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <div ref={headingRef} className="mb-8">
        <p className="section-label">{"// portfolio"}</p>
        <h1 className="section-heading">Projects</h1>
      </div>

      <SegmentedTabs
        tabs={sections}
        activeId={activeSection}
        onChange={setActiveSection}
      />

      {activeSection === "university_project" && (
        <section>
          <SegmentedTabs
            tabs={yearSections}
            activeId={activeYear}
            onChange={setActiveYear}
          />
          <ProjectGrid
            projects={yearProjects[activeYear]}
            renderProject={(p) => (
              <Project key={p.title} {...p} />
            )}
          />
        </section>
      )}

      {activeSection === "university_project_cam" && (
        <section>
          <ProjectGrid
            projects={projectDetailsUni5}
            renderProject={(p) => (
              <Project key={p.title} {...p} />
            )}
          />
        </section>
      )}

      {activeSection === "personal_projects" && (
        <section>
          <SegmentedTabs
            tabs={PPsections}
            activeId={activePP}
            onChange={setActivePP}
          />
          {activePP === "gym" && (
            <ProjectGrid
              projects={projectDetailsGym}
              renderProject={(p) => (
                <ProjectSTC key={p.title} {...p} />
              )}
            />
          )}
          {activePP === "cv" && (
            <ProjectGrid
              projects={projectDetailsCV}
              renderProject={(p) => (
                <ProjectSTC key={p.title} {...p} />
              )}
            />
          )}
          {activePP === "website" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectDetailsWebPortfolio.map((p) => (
                <ProjectSTC key={p.title} {...p} />
              ))}
              {projectDetailsWeb.map((p) => (
                <ProjectWebsite key={p.title} {...p} />
              ))}
            </div>
          )}
        </section>
      )}

      {activeSection === "publications" && (
        <section>
          <ProjectGrid
            projects={projectDetailsPP}
            renderProject={(p) => (
              <Project key={p.title} {...p} />
            )}
          />
        </section>
      )}

      {activeSection === "start_ups" && (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectDetailsBelieth.map((p) => (
              <ProjectBelieth key={p.title} {...p} />
            ))}
            {projectDetailsSTC.map((p) => (
              <ProjectSTC key={p.title} {...p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default Projects;
