import React from "react";
import "../index.css";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  const fileName = image ? image.split('/').pop() : '';
  const isVideo = fileName.endsWith('.mp4');

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
          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M81.7,50A31.7,31.7,0,0,1,50,81.7M81.7,50A31.7,31.7,0,0,0,50,18.3M81.7,50H18.3M50,81.7A31.7,31.7,0,0,1,18.3,50M50,81.7c5.8,0,10.6-14.2,10.6-31.7S55.8,18.3,50,18.3m0,63.4c-5.8,0-10.6-14.2-10.6-31.7S44.2,18.3,50,18.3M18.3,50A31.7,31.7,0,0,1,50,18.3"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Report
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-dark-heading dark:text-light-heading bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z"
                />
              </svg>
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;
