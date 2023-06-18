import React from "react";
import "../index.css";


function ProjectBelieth({ title, image, description, techstack, previewLink, pitchdecklink }) {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 project-card">
      <img src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card p-4 flex flex-col flex-grow">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
        <p className="text-content pt-4 font-light">{description}</p>
        <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
          Tech Stack : <span className="font-light">{techstack}</span>
        </h3>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 30 30" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" 
              fill="white"
            />
          </svg>
            <a
              href={previewLink}  // replace this with your LinkedIn profile URL
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white"
            >
              LinkedIn 
            </a>
          </div>
          <div className="flex items-center">
          <svg 
            version="1.0" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 64 64" 
            enable-background="new 0 0 64 64" 
            fill="#ffffff"
            className="dark:fill-light-heading fill-dark-heading inline-block min-w-fit"
            width="20"
            height="20"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
              <g> 
                <path fill="#ffffff" d="M60,3.999H35v-1c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4c-2.211,0-4,1.789-4,4v38c0,2.211,1.789,4,4,4h19.888 l-5.485,9.5c-0.829,1.435-0.338,3.27,1.098,4.098s3.27,0.337,4.098-1.098l7.217-12.5h2.37l7.217,12.5 c0.829,1.436,2.663,1.927,4.099,1.098c1.436-0.828,1.926-2.662,1.098-4.098l-5.485-9.5H60c2.211,0,4-1.789,4-4v-38 C64,5.788,62.211,3.999,60,3.999z M31,2.999c0-0.553,0.447-1,1-1s1,0.447,1,1v1h-2V2.999z M21.866,61.499 c-0.276,0.479-0.888,0.643-1.366,0.365c-0.479-0.275-0.643-0.887-0.365-1.365l6.062-10.5h2.309L21.866,61.499z M43.865,60.499 c0.277,0.479,0.113,1.09-0.365,1.366s-1.09,0.112-1.366-0.366l-6.64-11.5h2.309L43.865,60.499z M62,45.999c0,1.104-0.896,2-2,2H4 c-1.104,0-2-0.896-2-2v-38c0-1.104,0.896-2,2-2h56c1.104,0,2,0.896,2,2V45.999z"></path> 
                <path fill="#ffffff" d="M35,17.999h-6c-0.553,0-1,0.447-1,1v25h8v-25C36,18.446,35.553,17.999,35,17.999z M34,41.999h-4v-8h4 V41.999z M34,31.999h-4v-12h4V31.999z"></path> 
                <path fill="#ffffff" d="M47,9.999h-6c-0.553,0-1,0.447-1,1v33h8v-33C48,10.446,47.553,9.999,47,9.999z M46,41.999h-4v-10h4V41.999z M46,29.999h-4v-18h4V29.999z"></path> 
                <path fill="#ffffff" d="M23,25.999h-6c-0.553,0-1,0.447-1,1v17h8v-17C24,26.446,23.553,25.999,23,25.999z M22,41.999h-4v-6h4 V41.999z M22,33.999h-4v-6h4V33.999z"></path> 
              </g> 
            </g>
          </svg>
            <a
              href={pitchdecklink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white"
            >
              View Pitch Deck
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectBelieth;
