import React, { useState } from "react";

export default function PublicationCard({ publication }) {
  const {
    title,
    authors,
    venue,
    year,
    image,
    fallbackImage,
    abstract,
    links,
    forthcoming,
    citedBy,
    doi,
  } = publication;
  const primary = links && links[0];

  const [imgSrc, setImgSrc] = useState(image || fallbackImage);

  return (
    <article className="card group flex flex-col overflow-hidden">
      <div className="relative aspect-[21/9] overflow-hidden bg-bg-alt">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          onError={() => {
            if (fallbackImage && imgSrc !== fallbackImage) {
              setImgSrc(fallbackImage);
            }
          }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {forthcoming && (
          <span className="absolute right-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-accent shadow-soft backdrop-blur">
            Forthcoming
          </span>
        )}
        {typeof citedBy === "number" && citedBy > 0 && (
          <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-accent shadow-soft backdrop-blur">
            Cited by {citedBy}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="chip">{year}</span>
          <span className="text-sm font-medium uppercase tracking-wide text-text-light">
            {venue}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold leading-snug text-text-primary md:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm font-medium text-accent">{authors}</p>

        {abstract && (
          <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-text-muted">
            {abstract}
          </p>
        )}

        {links && links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-4 pt-5">
            {links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer noopener"
                className="link-accent text-sm"
              >
                {l.label} &rarr;
              </a>
            ))}
          </div>
        )}
        {doi && <p className="mt-3 text-xs text-text-light">DOI: {doi}</p>}
        {!primary && forthcoming && (
          <p className="mt-auto pt-5 text-sm italic text-text-light">
            Research and writing in progress.
          </p>
        )}
      </div>
    </article>
  );
}
