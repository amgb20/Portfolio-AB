import React from "react";

function AccrediationText({
  position,
  company,
  credential,
  accreditation,
  duration,
  hyperlink,
}) {
  return (
    <article className="accreditation-card">
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-accent-green font-mono text-lg">&#10003;</span>
        <img
          src={accreditation}
          alt={company}
          className="h-14 w-14 object-contain"
        />
      </div>
      <div className="flex-grow min-w-0">
        <h3 className="font-heading text-text-primary font-medium">
          {position}
        </h3>
        <p className="font-mono text-xs text-text-muted mt-1">{company}</p>
        <a
          href={hyperlink}
          target="_blank"
          rel="noreferrer noopener"
          className="link-cyan mt-2 inline-block"
        >
          {credential}
        </a>
      </div>
      <p className="font-mono text-xs text-accent-cyan shrink-0">{duration}</p>
    </article>
  );
}

export default AccrediationText;
