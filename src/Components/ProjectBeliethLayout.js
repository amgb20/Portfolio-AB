import React from "react";
import "../index.css";

function ProjectBelieth({ title, image, description, techstack, previewLink, pitchdecklink }) {
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
                viewBox="0 0 30 30" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z"
                />
              </svg>
              LinkedIn 
            </a>
          )}
          {pitchdecklink && (
            <a
              href={pitchdecklink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-dark-heading dark:text-light-heading bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
            >
              <svg 
                className="w-4 h-4"
                viewBox="0 0 64 64" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M60,3.999H35v-1c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4c-2.211,0-4,1.789-4,4v38c0,2.211,1.789,4,4,4h19.888 l-5.485,9.5c-0.829,1.435-0.338,3.27,1.098,4.098s3.27,0.337,4.098-1.098l7.217-12.5h2.37l7.217,12.5 c0.829,1.436,2.663,1.927,4.099,1.098c1.436-0.828,1.926-2.662,1.098-4.098l-5.485-9.5H60c2.211,0,4-1.789,4-4v-38 C64,5.788,62.211,3.999,60,3.999z M31,2.999c0-0.553,0.447-1,1-1s1,0.447,1,1v1h-2V2.999z M21.866,61.499 c-0.276,0.479-0.888,0.643-1.366,0.365c-0.479-0.275-0.643-0.887-0.365-1.365l6.062-10.5h2.309L21.866,61.499z M43.865,60.499 c0.277,0.479,0.113,1.09-0.365,1.366s-1.09,0.112-1.366-0.366l-6.64-11.5h2.309L43.865,60.499z M62,45.999c0,1.104-0.896,2-2,2H4 c-1.104,0-2-0.896-2-2v-38c0-1.104,0.896-2,2-2h56c1.104,0,2,0.896,2,2V45.999z"/>
                <path d="M35,17.999h-6c-0.553,0-1,0.447-1,1v25h8v-25C36,18.446,35.553,17.999,35,17.999z M34,41.999h-4v-8h4 V41.999z M34,31.999h-4v-12h4V31.999z"/>
                <path d="M47,9.999h-6c-0.553,0-1,0.447-1,1v33h8v-33C48,10.446,47.553,9.999,47,9.999z M46,41.999h-4v-10h4V41.999z M46,29.999h-4v-18h4V29.999z"/>
                <path d="M23,25.999h-6c-0.553,0-1,0.447-1,1v17h8v-17C24,26.446,23.553,25.999,23,25.999z M22,41.999h-4v-6h4 V41.999z M22,33.999h-4v-6h4V33.999z"/>
              </svg>
              Pitch Deck
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectBelieth;
