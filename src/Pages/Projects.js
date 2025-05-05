import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Project from "../Components/Project";
import ProjectBelieth from "../Components/ProjectBeliethLayout";
import ProjectSTC from "../Components/ProjectSTC";
import ProjectWebsite from "../Components/ProjectWebsite";
// import ScrollSpySidebar from '../Components/ScrollSpySidebar'; // make sure to import ScrollSpySidebar here

import { projectDetailsUni1, projectDetailsSTC, projectDetailsBelieth, projectDetailsPP, projectDetailsUni2, projectDetailsUni3,projectDetailsUni4,projectDetailsUni5, projectDetailsCV, projectDetailsGym, projectDetailsWebPortfolio, projectDetailsWeb } from "../Details";

function Projects() {
  const [activeSection, setActiveSection] = useState('university_project');

  const [activeYear, setActiveYear] = useState('year1');

  const [activePP, setActivePP] = useState('gym');

  const yearSections = [
    { id: 'year1', label: 'Year 1' },
    { id: 'year2', label: 'Year 2' },
    { id: 'year3', label: 'Year 3' },
    { id: 'year4', label: 'Year 4' }
  ]

  // Define the sections here
  const sections = [
    { id: 'university_project', label: 'Univ of Bath' },
    { id: 'university_project_cam', label: 'Univ of Cambridge' },
    { id: 'personal_projects', label: 'Personal' },
    { id: 'publications', label: 'Publications' },
    { id: 'start_ups', label: 'Start-up' },
  ];

  const PPsections = [
    { id: 'gym', label: 'Machine Learning' },
    { id: 'cv', label: 'Computer Vision' },
    { id: 'website', label: 'Website' }
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

  useEffect(() => {
    // updateSectionOpacity();
    handleSectionClick(activeSection);
  }, [activeSection]);

  useEffect(() => {
    // updateSectionOpacity();
    handleYearClick(activeYear);
  }, [activeYear]);

  useEffect(() => {
    handlePPClick(activePP);
  }, [activePP]);

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

  const handlePPClick = (id) => {
    setActivePP(id);
    // updateSectionOpacityUP(); // call the opacity update function


    const pointer = document.getElementById("PPSelector");
    const button = document.querySelector(`li[id='${id}']`);
    if (!button) return 1;
    const rect = button.getBoundingClientRect();
    const parentRect = button.parentElement.getBoundingClientRect();
    const wrapper = document.getElementById("PPSelection-wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const parentScroll = button.parentElement.scrollLeft;

    // Calculate the position relative to the parent scrolling container
    const totalelement = rect.left - parentRect.left + (rect.width / 2);

    // GSAP animation to move the pointer
    gsap.to(pointer, { duration: 1, left: `${totalelement + parentScroll}px`, ease: "easeOutQuad" });
  };

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

    // Function to update the opacity for year sections
    const updatePPOpacity = () => {
      PPsections.forEach(({ id }) => {
        const elem = document.getElementById(id);
        if (elem) { // Check if the element exists
          if (id === activePP) {
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
    updatePPOpacity();

  }, [activeSection, activeYear, activePP]); // Dependencies

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div>
      <main className="container mx-auto max-width pt-10 mb-20">

        {/* Updated Horizontal scrolling menu */}
        <div id="countrySelection">
          <div className="cursor-pointer hamburger-menu" onClick={toggleMobileMenu}>
            <div className="centerHam ">
              <svg
                className="stroke-dark-heading dark:stroke-white "
                width="25"
                height="20"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

          </div>
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
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <ul >
                {sections.map(({ id, label }) => (
                  <li key={id} onClick={() => handleSectionClick(id)}>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

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
                <div ref={addTech} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
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

            {activeYear === 'year4' && (
              <>
                <div ref={addTech} id="year4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
                  {React.Children.toArray(
                    projectDetailsUni4.map(({ title, image, description, techstack, previewLink, githubLink }) => (
                      <Project title={title} image={image} description={description} techstack={techstack} previewLink={previewLink} githubLink={githubLink} />
                    ))
                  )}
                </div>
                <br />
              </>
            )}


          </section>
        )}

        {activeSection === 'university_project_cam' && (
          <section id="university_project_cam">
            {/* Render all projects directly without year selection */}
            <>
              <div
                ref={addTech}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap"
              >
                {React.Children.toArray(
                  projectDetailsUni5.map(
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
            </>
          </section>
        )}


        {activeSection === 'personal_projects' && (
          <section id="personal_projects">
            {/* New Horizontal Scrolling Menu for Years */}
            <div id="PPSelection">
              <div id="PPSelection-wrapper">
                <ul id="PPSelection-items">
                  <div id="PPSelector">
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
                  {PPsections.map(({ id, label }) => (
                    <li
                      id={id}
                      key={id}
                      className={`text-xl ${id === activeYear ? "active" : ""}`}
                      onClick={() => handlePPClick(id)}
                    >
                      <a href="#">{label}</a>
                    </li>
                  ))}
                </ul>
                <div className="PPSelection-paddles">
                  <button className="PPSelection-paddle-left icon-chevronleft"></button>
                  <button className="PPSelection-paddle-right icon-chevronright"></button>
                </div>
              </div>
            </div>

            {activePP === 'gym' && (
              <>
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
              </>
            )}

            {activePP === 'cv' && (
              <>
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
              </>
            )}

            {activePP === 'website' && (
              <>
                <div ref={addTech} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 flex flex-wrap">
                  {React.Children.toArray(
                    projectDetailsWebPortfolio.map(
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

                  {React.Children.toArray(
                    projectDetailsWeb.map(
                      ({ title, image, description, techstack, previewLink, website }) => (
                        <ProjectWebsite
                          title={title}
                          image={image}
                          description={description}
                          techstack={techstack}
                          previewLink={previewLink}
                          website={website}
                        />
                      )
                    )
                  )}
                </div>
              </>
            )}





          </section>
        )}

        {activeSection === 'publications' && (
          <section id="publications">
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
