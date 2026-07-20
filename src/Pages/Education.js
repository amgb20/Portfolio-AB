import React from "react";
import {
  eduDetails,
  accreditationsDetails,
  languageDetails,
  awardsDetails,
} from "../Details";
import PageHeader from "../Components/ui/PageHeader";
import AccordionCard from "../Components/ui/AccordionCard";
import TechPill from "../Components/ui/TechPill";
import Seo from "../Components/Seo";

function AwardIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function LabeledBlock({ label, items, variant = "bullets" }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <span className="section-label">{label}</span>
      {variant === "tech" ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((item) => (
            <TechPill key={item} label={item} />
          ))}
        </div>
      ) : variant === "chips" ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      ) : variant === "italic" ? (
        <div className="mt-3 space-y-2">
          {items.map((item, idx) => (
            <p
              key={idx}
              className="text-[0.95rem] italic leading-relaxed text-text-muted"
            >
              {item}
            </p>
          ))}
        </div>
      ) : (
        <ul className="mt-3 space-y-2">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="relative pl-5 text-[0.95rem] leading-relaxed text-text-muted before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-light"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function CertificationCard({ cert }) {
  const content = (
    <div className="card card-hoverable flex h-full items-start gap-4 p-5">
      {cert.Img && (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-accent-subtle p-1.5">
          <img src={cert.Img} alt="" className="h-full w-full object-contain" />
        </span>
      )}
      <div className="min-w-0">
        <h3 className="text-sm font-semibold leading-snug text-text-primary">
          {cert.Position}
        </h3>
        <p className="mt-1 text-sm text-text-muted">{cert.Company}</p>
        <p className="mt-1 text-xs text-text-light">{cert.Duration}</p>
        {cert.Hyperlink && (
          <span className="mt-2 inline-block text-xs font-medium text-accent">
            View credential &rarr;
          </span>
        )}
      </div>
    </div>
  );

  if (cert.Hyperlink) {
    return (
      <a
        href={cert.Hyperlink}
        target="_blank"
        rel="noreferrer noopener"
        className="no-underline"
      >
        {content}
      </a>
    );
  }
  return content;
}

export default function Education() {
  return (
    <>
      <Seo
        title="Education"
        description="Alexandre Benoit's education: MPhil in Machine Learning & Machine Intelligence at the University of Cambridge and MEng at the University of Bath, plus certifications and awards."
        path="/education"
      />
      <PageHeader
        label="Education"
        title="Education & Credentials"
        subtitle="Advanced degrees in machine learning and mechanical & electrical engineering, plus specialised certifications."
      />

      <section className="pb-16 pt-4">
        <div className="app-container flex flex-col gap-4">
          {eduDetails.map((edu, i) => {
            const hasBody =
              (edu.dissertation && edu.dissertation.length > 0) ||
              (edu.modules && edu.modules.length > 0) ||
              (edu.researchFocus && edu.researchFocus.length > 0) ||
              (edu.activities && edu.activities.length > 0) ||
              (edu.results && edu.results.length > 0) ||
              (edu.techstack && edu.techstack.length > 0);

            return (
              <AccordionCard
                key={edu.university}
                logo={edu.logo}
                title={edu.university}
                subtitle={edu.course}
                meta={[edu.location, edu.duration].filter(Boolean)}
                badge={edu.badge}
                defaultOpen={i === 0}
              >
                {hasBody && (
                  <div className="space-y-6">
                    <LabeledBlock label="Dissertation" items={edu.dissertation} variant="italic" />
                    <LabeledBlock label="Modules Taken" items={edu.modules} variant="chips" />
                    <LabeledBlock label="Research Focus" items={edu.researchFocus} variant="bullets" />
                    <LabeledBlock label="Activities & Involvement" items={edu.activities} variant="bullets" />
                    <LabeledBlock label="Results & Honours" items={edu.results} variant="bullets" />
                    <LabeledBlock label="Tools & Technologies" items={edu.techstack} variant="tech" />
                  </div>
                )}
              </AccordionCard>
            );
          })}
        </div>
      </section>

      {awardsDetails.length > 0 && (
        <section className="pb-4">
          <div className="app-container">
            <h2 className="mb-8 text-center font-serif text-2xl font-bold text-text-primary md:text-3xl">
              Awards
            </h2>
            <div className="flex flex-col gap-4">
              {awardsDetails.map((award) => (
                <div
                  key={award.title}
                  className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                      <AwardIcon />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg font-bold leading-snug text-text-primary md:text-xl">
                        {award.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">
                        {award.issuer}
                      </p>
                      {award.note && (
                        <p className="mt-1 text-sm text-text-muted">
                          {award.note}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                    {award.location && (
                      <span className="text-sm text-text-light">
                        {award.location}
                      </span>
                    )}
                    {award.date && <span className="chip">{award.date}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad bg-bg-alt/70 backdrop-blur-sm">
        <div className="app-container-wide">
          <h2 className="mb-10 text-center font-serif text-2xl font-bold text-text-primary md:text-3xl">
            Key Certifications
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {accreditationsDetails.map((cert) => (
              <CertificationCard key={cert.Position} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="app-container">
          <h2 className="mb-10 text-center font-serif text-2xl font-bold text-text-primary md:text-3xl">
            Languages
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {languageDetails.map((lang) => (
              <div key={lang.name} className="card p-5 text-center">
                <div className="text-3xl">{lang.flag}</div>
                <div className="mt-2 font-serif text-lg font-bold text-text-primary">
                  {lang.name}
                </div>
                <div className="mt-1 text-sm text-text-muted">
                  {lang.level}
                  {lang.cefr ? ` · ${lang.cefr}` : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
