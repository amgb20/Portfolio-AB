import React from "react";

const proficiencyMap = {
  Native: 100,
  Fluent: 90,
  Advanced: 75,
  Intermediate: 55,
  Basic: 35,
  "Just Started": 15,
};

function Language({ position, type, company }) {
  const fill = proficiencyMap[type] || 50;

  return (
    <article className="timeline-row">
      <div className="flex justify-between items-center gap-4">
        <h3 className="font-heading text-text-primary md:text-lg font-medium">
          {position}
        </h3>
        <span className="badge-green">{type}</span>
      </div>
      <p className="font-mono text-xs text-text-muted mt-2">{company}</p>
      <div className="language-bar-track">
        <div className="language-bar-fill" style={{ width: `${fill}%` }} />
      </div>
    </article>
  );
}

export default Language;
