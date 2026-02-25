import React from "react";
import "../index.css";

function ProjectWebsite({ title, image, description, techstack, website }) {
  return (
    <article className="group rounded-2xl mt-6 md:mt-10 overflow-hidden bg-white dark:bg-dark-card shadow-lg hover:shadow-2xl dark:shadow-slate-900/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title}
          loading="lazy" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h2 className="text-dark-heading dark:text-light-heading font-bold text-lg md:text-xl leading-tight line-clamp-2">
          {title}
        </h2>
        <p className="text-content pt-3 text-sm md:text-base font-light leading-relaxed line-clamp-4 flex-grow">
          {description}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <h3 className="text-dark-heading dark:text-light-heading font-medium text-sm">
            Tech Stack
          </h3>
          <p className="text-content text-sm font-light mt-1">{techstack}</p>
        </div>
        <div className="flex flex-wrap gap-3 mt-5">
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.498,6.186c-0.278-1.03-0.787-1.768-1.516-2.2C20.437,3.085,12.001,3,12.001,3S3.565,3.085,2.018,3.986
                  c-0.73,0.431-1.239,1.17-1.518,2.2C0.086,8.073,0,12.001,0,12.001s0.086,3.927,0.5,5.815c0.28,1.03,0.787,1.768,1.518,2.2
                  C3.565,20.915,12.001,21,12.001,21s8.437-0.085,9.982-0.986c0.729-0.431,1.238-1.17,1.516-2.2
                  C23.914,15.928,24,12.001,24,12.001S23.914,8.073,23.498,6.186z M9.545,15.568V8.434l6.78,3.567L9.545,15.568z"
                />
              </svg>
              Watch Video
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectWebsite;
