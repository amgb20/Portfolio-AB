import React from "react";
import { Link } from "react-router-dom";
import Seo from "../Components/Seo";

export default function NotFound() {
  return (
    <div className="app-container flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <Seo title="Page not found" path="/404" />
      <p className="section-label">Error 404</p>
      <h1 className="font-serif text-5xl font-bold text-text-primary md:text-7xl">
        Page not found
      </h1>
      <p className="section-subtitle">
        The page you are looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link to="/projects" className="btn btn-secondary">
          Browse projects
        </Link>
      </div>
    </div>
  );
}
