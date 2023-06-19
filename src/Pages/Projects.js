import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Project from "../Components/Project";
import ProjectBelieth from "../Components/ProjectBeliethLayout";
import ProjectSTC from "../Components/ProjectSTC";
import ScrollSpySidebar from '../Components/ScrollSpySidebar'; // make sure to import ScrollSpySidebar here

import { projectDetailsUni1, projectDetailsSTC, projectDetailsBelieth, projectDetailsPP, projectDetailsUni2, projectDetailsUni3, projectDetailsCV  } from "../Details";

function Projects() {
  // Define the sections here
  const sections = [
    { id: 'university_project', label: 'University Project' },
    { id: 'personal_projects', label: 'Personal Project' },
    { id: 'start_ups', label: 'Start-up' },
  ];
  const elementsRef = useRef([]);
  const addTech = el => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
  
  const getRandomValue = (min, max) => Math.random() * (max - min) + min;
  
  useEffect(() => {
    const tl = gsap.timeline();
  
    elementsRef.current.forEach((el, i) => {
      const randomX = getRandomValue(-200, 200) + '%';
      const randomY = getRandomValue(-200, 200) + '%';
      const randomDelay = getRandomValue(0.2, 0.5);
      const randomDuration = getRandomValue(1, 2);
      
  
      tl.from(
        el,
        {
          x: randomX,
          y: randomY,
          delay: randomDelay,
          opacity: 0,
          duration: randomDuration,
          ease: "Power3.easeOut",
        },
        "<"
      );
    });
  
    return () => tl.kill();
  }, []);

  return (
    <div>
      <ScrollSpySidebar sections={sections} />
      <main className="container mx-auto max-width pt-10 mb-20">
      <section id="university_project">
          <h1 ref={addTech} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          <span ref={addTech} className="name-logo2">University Projects</span>
          <br/>
          <p ref={addTech} className="text-content py-2 lg:max-w-3xl text
          -xl font-bold">
            <span className="name-logo1">Year 1 </span>
          </p>
            
          </h1>
          <div ref={addTech} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
            {React.Children.toArray(
              projectDetailsUni1.map(
                ({ title, image, description, techstack, previewLink, githubLink }) => (
                  <Project
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                  />
                )
              )
            )}
          </div>
          <br/>

          <p ref={addTech} className="text-content py-2 lg:max-w-3xl text-xl font-bold">
            <span className="name-logo1">Year 2 </span>
          </p>
          <div ref={addTech} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
            {React.Children.toArray(
              projectDetailsUni2.map(
                ({ title, image, description, techstack, previewLink, githubLink }) => (
                  <Project
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                  />
                )
              )
            )}
          </div>
          <br/>

          <p ref={addTech} className="text-content py-2 lg:max-w-3xl text-xl font-bold">
            <span className="name-logo1">Year 3 </span>
          </p>
          <div ref={addTech} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
            {React.Children.toArray(
              projectDetailsUni3.map(
                ({ title, image, description, techstack, previewLink, githubLink }) => (
                  <Project
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                  />
                )
              )
            )}
          </div>

          
        </section>
        <br/>

        <section id="personal_projects">
          <h1 ref={addTech} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          <span ref={addTech} className="name-logo2">Personal Projects</span>
          <p ref={addTech} className="text-content py-2 lg:max-w-3xl text-xl font-bold">
            <span className="name-logo1">Publications  </span>🏫 
          </p>
            
          </h1>
          <div ref={addTech} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
            {React.Children.toArray(
              projectDetailsPP.map(
                ({ title, image, description, techstack, previewLink, githubLink }) => (
                  <Project
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                  />
                )
              )
            )}
          </div>
          <br/>

          <p ref={addTech} className="text-content py-2 lg:max-w-3xl text-xl font-bold">
            <span className="name-logo1">Computer Vision  </span>🏫 
          </p>
          <div ref={addTech} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
            {React.Children.toArray(
              projectDetailsCV.map(
                ({ title, image, description, techstack, previewLink, githubLink }) => (
                  <ProjectSTC
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                  />
                )
              )
            )}
          </div>
        </section>
        <br/>

        <section id="start_ups"> 
          <h1 ref={addTech} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          <span ref={addTech} className="name-logo2">Personal Start-Ups</span>
            
          </h1>
          <div ref={addTech} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
            {React.Children.toArray(
              projectDetailsBelieth.map(
                ({ title, image, description, techstack, previewLink, pitchdecklink }) => (
                  <ProjectBelieth
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    pitchdecklink={pitchdecklink}
                  />
                )
              )
            )}
            {React.Children.toArray(
              projectDetailsSTC.map(
                ({ title, image, description, techstack, githubLink  }) => (
                  <ProjectSTC
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    githubLink={githubLink}
                  />
                )
              )
            )}
          </div>
        </section>

        
      </main>
      </div>
      
  );
}

export default Projects;
