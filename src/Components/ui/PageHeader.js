import React from "react";

export default function PageHeader({ label, title, subtitle }) {
  return (
    <header className="px-6 pt-32 pb-6 text-center md:pt-40">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
        {label && <span className="section-label">{label}</span>}
        <h1 className="section-title">{title}</h1>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}
