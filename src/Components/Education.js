import React from "react";

function Education({
  position,
  company,
  location,
  type,
  duration,
  grade,
  logo,
}) {
  return (
    <article className="timeline-row">
      <div className="flex justify-between items-start gap-4 flex-wrap">
        <h3 className="font-heading text-text-primary md:text-lg font-medium">
          {position}
        </h3>
        <span className="badge-green">{type}</span>
      </div>
      <div className="flex flex-wrap justify-between items-start gap-4 mt-3">
        <div className="flex flex-wrap gap-4">
          <p className="font-mono text-xs text-text-muted">{company}</p>
          <p className="font-mono text-xs text-text-muted">{location}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="font-mono text-xs text-accent-cyan">{duration}</p>
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="h-10 w-auto object-contain max-w-[120px]"
            />
          )}
        </div>
      </div>
      {grade && (
        <p className="font-mono text-xs text-text-muted mt-2 flex items-center gap-1">
          <span className="text-accent-green">&#10003;</span> {grade}
        </p>
      )}
    </article>
  );
}

export default Education;
