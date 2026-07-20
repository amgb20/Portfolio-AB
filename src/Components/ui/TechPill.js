import React from "react";
import { getTechIcon } from "../../techIcons";

export default function TechPill({ label }) {
  const icon = getTechIcon(label);

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent">
      {icon && (
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 object-contain"
        />
      )}
      {label}
    </span>
  );
}
