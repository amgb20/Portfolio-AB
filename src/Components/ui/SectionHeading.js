import React from "react";

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`mb-12 flex flex-col gap-4 md:mb-16 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${isCenter ? "" : "mx-0"}`}>{subtitle}</p>
      )}
    </div>
  );
}
