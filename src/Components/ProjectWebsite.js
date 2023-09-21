import React from "react";
import "../index.css";


function ProjectSTC({ title, image, description, techstack, website }) {
    return (
        <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 project-card">
            <img src={image} alt="" loading="lazy" />
            <div className="dark:bg-dark-card p-4 flex flex-col flex-grow">
                <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
                <p className="text-content pt-4 font-light text-justify">{description}</p>
                <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
                    Tech Stack : <span className="font-light">{techstack}</span>
                </h3>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center">
                        <svg
                            className="dark:fill-light-heading fill-dark-heading inline-block min-w-fit"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.498,6.186c-0.278-1.03-0.787-1.768-1.516-2.2C20.437,3.085,12.001,3,12.001,3S3.565,3.085,2.018,3.986
    c-0.73,0.431-1.239,1.17-1.518,2.2C0.086,8.073,0,12.001,0,12.001s0.086,3.927,0.5,5.815c0.28,1.03,0.787,1.768,1.518,2.2
    C3.565,20.915,12.001,21,12.001,21s8.437-0.085,9.982-0.986c0.729-0.431,1.238-1.17,1.516-2.2
    C23.914,15.928,24,12.001,24,12.001S23.914,8.073,23.498,6.186z M9.545,15.568V8.434l6.78,3.567L9.545,15.568z"
                            />
                        </svg>


                        <a
                            href={website}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline pl-2 font-light dark:text-white"
                        >
                            Video
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectSTC;
