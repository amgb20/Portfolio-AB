import React, { useState } from "react";

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-300 ${
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

export default function AccordionCard({
  logo,
  fallback,
  title,
  subtitle,
  meta = [],
  badge,
  defaultOpen = false,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const hasBody = Boolean(children);

  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={() => hasBody && setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:gap-4 md:p-6 ${
          hasBody ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <div className="flex min-w-0 flex-1 items-center gap-4">
          {logo ? (
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-border-subtle">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </span>
          ) : fallback ? (
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-sm font-bold text-white">
              {fallback}
            </span>
          ) : null}
          <div className="min-w-0">
            <h3 className="font-serif text-lg font-bold leading-snug text-text-primary md:text-xl">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-0.5 text-sm font-medium text-accent md:text-[0.95rem]">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 md:justify-end">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted">
            {meta.map((m, i) => (
              <span key={i} className="whitespace-nowrap">
                {m}
              </span>
            ))}
            {badge && <span className="chip">{badge}</span>}
          </div>
          {hasBody && <Chevron open={open} />}
        </div>
      </button>

      {hasBody && (
        <div className={`accordion-body ${open ? "accordion-body-open" : ""}`}>
          <div className="accordion-body-inner">
            <div className="border-t border-border-subtle px-5 py-5 md:px-6 md:py-6">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
