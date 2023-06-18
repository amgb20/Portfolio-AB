import React from "react";
import "../index.css";

function ProjectVideo({ title, img, description, techstack, previewLink, githubLink }) {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 project-card">
      <iframe 
        className="project-video"
        src={`https://www.youtube.com/embed/${img}?autoplay=1`} 
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
      />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
        <p className="text-content pt-4 font-light text-justify">{description}</p>
        <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
          Tech Stack : <span className="font-light">{techstack}</span>
        </h3>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <svg
              className="stroke-dark-heading dark:stroke-white inline-block min-w-fit"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            {/* SVG paths */}
            </svg>
            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white"
            >
              Report
            </a>
          </div>
          <div className="flex items-center">
            <svg
              className="dark:fill-light-heading fill-dark-heading inline-block min-w-fit"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            {/* SVG paths */}
            </svg>

            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectVideo;
