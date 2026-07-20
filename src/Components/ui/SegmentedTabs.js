import React from "react";

export default function SegmentedTabs({ tabs, active, onChange, className = "" }) {
  return (
    <div
      className={`inline-flex flex-wrap items-center gap-1 rounded-full border border-border-subtle bg-bg-alt p-1 ${className}`}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 md:px-5 ${
              isActive
                ? "bg-surface text-accent shadow-soft"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
