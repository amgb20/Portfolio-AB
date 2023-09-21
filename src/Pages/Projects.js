import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Project from "../Components/Project";
import ProjectBelieth from "../Components/ProjectBeliethLayout";
import ProjectSTC from "../Components/ProjectSTC";
import ScrollSpySidebar from '../Components/ScrollSpySidebar'; // make sure to import ScrollSpySidebar here

import { projectDetailsUni1, projectDetailsSTC, projectDetailsBelieth, projectDetailsPP, projectDetailsUni2, projectDetailsUni3, projectDetailsCV, projectDetailsGym } from "../Details";

function Projects() {
  const [activeSection, setActiveSection] = useState('university_project');

  const [activeYear, setActiveYear] = useState('year1');

  const yearSections = [
    { id: 'year1', label: 'Year 1' },
    { id: 'year2', label: 'Year 2' },
    { id: 'year3', label: 'Year 3' },
  ]

  // Define the sections here
  const sections = [
    { id: 'university_project', label: 'University Projects' },
    { id: 'personal_projects', label: 'Personal Projects' },
    { id: 'publications', label: 'Publications' },
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

  // useEffect(() => {
  //   updateSectionOpacity();
  //   // updateSectionOpacityUP(); // call initially to set the class of the sections
  // }, []); // Empty dependency array means it will run once at the beginning

  // useEffect(() => {
  //   updateSectionOpacity();
  //   handleSectionClick(activeSection);
  //   handleYearClick(activeYear);
  // }, [activeSection, activeYear]);

  const handleSectionClick = (id) => {
    setActiveSection(id);
    // updateSectionOpacity(); // call the opacity update function


    const pointer = document.getElementById("countrySelector");
    const button = document.querySelector(`li[id='${id}']`);
    const rect = button.getBoundingClientRect();
    const parentRect = button.parentElement.getBoundingClientRect();
    const wrapper = document.getElementById("countrySelection-wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const parentScroll = button.parentElement.scrollLeft;

    // Calculate the position relative to the parent scrolling container
    const totalelement = rect.left - parentRect.left + (rect.width / 2);

    // GSAP animation to move the pointer
    gsap.to(pointer, { duration: 1, left: `${totalelement + parentScroll}px`, ease: "easeOutQuad" });
  };

  const handleYearClick = (id) => {
    setActiveYear(id);
    // updateSectionOpacityUP(); // call the opacity update function


    const pointer = document.getElementById("yearSelector");
    const button = document.querySelector(`li[id='${id}']`);
    const rect = button.getBoundingClientRect();
    const parentRect = button.parentElement.getBoundingClientRect();
    const wrapper = document.getElementById("yearSelection-wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const parentScroll = button.parentElement.scrollLeft;

    // Calculate the position relative to the parent scrolling container
    const totalelement = rect.left - parentRect.left + (rect.width / 2);

    // GSAP animation to move the pointer
    gsap.to(pointer, { duration: 1, left: `${totalelement + parentScroll}px`, ease: "easeOutQuad" });
  };

  // const updateSectionOpacity = () => {
  //   sections.forEach(({ id }) => {
  //     const elem = document.getElementById(id);
  //     if (id === activeSection) {
  //       elem.classList.add("active");
  //       elem.classList.remove("non-active");
  //     } else {
  //       elem.classList.remove("active");
  //       elem.classList.add("non-active");
  //     }
  //   });
  // };

  // const updateSectionOpacityUP = () => {
  //   sections.forEach(({ id }) => {
  //     const elem = document.getElementById(id);
  //     if (id === activeYear) {
  //       elem.classList.add("active");
  //       elem.classList.remove("non-active");
  //     } else {
  //       elem.classList.remove("active");
  //       elem.classList.add("non-active");
  //     }
  //   });
  // };

  // useEffect to handle the changes when activeSection or activeYear changes
  useEffect(() => {
    // Function to update the opacity for main sections
    const updateSectionOpacity = () => {
      sections.forEach(({ id }) => {
        const elem = document.getElementById(id);
        if (elem) { // Check if the element exists
          if (id === activeSection) {
            elem.classList.add("active");
            elem.classList.remove("non-active");
          } else {
            elem.classList.remove("active");
            elem.classList.add("non-active");
          }
        }
      });
    };

    // Function to update the opacity for year sections
    const updateYearOpacity = () => {
      yearSections.forEach(({ id }) => {
        const elem = document.getElementById(id);
        if (elem) { // Check if the element exists
          if (id === activeYear) {
            elem.classList.add("active");
            elem.classList.remove("non-active");
          } else {
            elem.classList.remove("active");
            elem.classList.add("non-active");
          }
        }
      });
    };

    // Updating the opacity
    updateSectionOpacity();
    updateYearOpacity();

  }, [activeSection, activeYear]); // Dependencies


  return (
    <div>
      <main className="container mx-auto max-width pt-10 mb-20">

        {/* Updated Horizontal scrolling menu */}
        <div id="countrySelection">
          <div id="countrySelection-wrapper">
            <ul id="countrySelection-items">
              <div id="countrySelector">
                <svg viewBox="0 0 10 10" width="20px" height="20px">
                  <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                      <stop offset="0%" stop-color="rgba(19, 163, 234, 255)" />
                      <stop offset="100%" stop-color="rgba(176, 51, 145, 255)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,1 h10 L5,9.66Z" fill="url('#gradient')" />
                </svg>

              </div>
              {sections.map(({ id, label }) => (
                <li
                  id={id}
                  key={id}
                  className={`text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-2xl xl:leading-tight font-bold countrySelection-item ${id === activeSection ? "active" : ""}`}
                  onClick={() => handleSectionClick(id)}
                >
                  <a href="#">{label}</a>
                </li>
              ))}
            </ul>
            <div className="countrySelection-paddles">
              <button className="countrySelection-paddle-left icon-chevronleft"></button>
              <button className="countrySelection-paddle-right icon-chevronright"></button>
            </div>
          </div>
        </div>

        <br />

        {activeSection === 'university_project' && (
          <section id="university_project">
            {/* New Horizontal Scrolling Menu for Years */}
            <div id="yearSelection">
              <div id="yearSelection-wrapper">
                <ul id="yearSelection-items">
                  <div id="yearSelector">
                    <svg viewBox="0 0 10 10" width="20px" height="20px">
                      <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                          <stop offset="0%" stop-color="rgba(19, 163, 234, 255)" />
                          <stop offset="100%" stop-color="rgba(176, 51, 145, 255)" />
                        </linearGradient>
                      </defs>
                      <path d="M0,1 h10 L5,9.66Z" fill="url('#gradient')" />
                    </svg>

                  </div>
                  {yearSections.map(({ id, label }) => (
                    <li
                      id={id}
                      key={id}
                      className={`text-xl ${id === activeYear ? "active" : ""}`}
                      onClick={() => handleYearClick(id)}
                    >
                      <a href="#">{label}</a>
                    </li>
                  ))}
                </ul>
                <div className="yearSelection-paddles">
                  <button className="yearSelection-paddle-left icon-chevronleft"></button>
                  <button className="yearSelection-paddle-right icon-chevronright"></button>
                </div>
              </div>
            </div>

            {activeYear === 'year1' && (
              <>
                <div ref={addTech} id="year1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
                  {React.Children.toArray(
                    projectDetailsUni1.map(({ title, image, description, techstack, previewLink, githubLink }) => (
                      <Project title={title} image={image} description={description} techstack={techstack} previewLink={previewLink} githubLink={githubLink} />
                    ))
                  )}
                </div>
                <br />
              </>
            )}

            {activeYear === 'year2' && (
              <>
                <div ref={addTech} id="year2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
                  {React.Children.toArray(
                    projectDetailsUni2.map(({ title, image, description, techstack, previewLink, githubLink }) => (
                      <Project title={title} image={image} description={description} techstack={techstack} previewLink={previewLink} githubLink={githubLink} />
                    ))
                  )}
                </div>
                <br />
              </>
            )}

            {activeYear === 'year3' && (
              <>
                <div ref={addTech} id="year3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
                  {React.Children.toArray(
                    projectDetailsUni3.map(({ title, image, description, techstack, previewLink, githubLink }) => (
                      <Project title={title} image={image} description={description} techstack={techstack} previewLink={previewLink} githubLink={githubLink} />
                    ))
                  )}
                </div>
                <br />
              </>
            )}


          </section>
        )}

        <br />

        {activeSection === 'personal_projects' && (
          <section id="personal_projects">
            <p ref={addTech} className="text-content py-2 lg:max-w-3xl text-xl font-bold">
              <span className="name-logo1">Computer Vision  </span>👁️
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

            <br />

            <p ref={addTech} className="text-content py-2 lg:max-w-3xl text-xl font-bold">
              <span className="name-logo1">Gymanisum Machine Learning Projects  </span> 🏋️‍♀️
            </p>
            <div ref={addTech} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
              {React.Children.toArray(
                projectDetailsGym.map(
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
        )}

        <br />

        {activeSection === 'publications' && (
          <section id="personal_projects">
            <p ref={addTech} className="text-content py-2 lg:max-w-3xl text-xl font-bold">
              <span className="name-logo1">Publications  </span> ✍
            </p>
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
            <br />
          </section>
        )}

        {activeSection === 'start_ups' && (
          <section id="start_ups">
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
                  ({ title, image, description, techstack, githubLink }) => (
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
        )}

      </main>
    </div>

  );
}

export default Projects;
