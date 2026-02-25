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


  const handleSectionClick = (id) => {
    setActiveSection(id);
  };

  const handleYearClick = (id) => {
    setActiveYear(id);
  };

  const handlePPClick = (id) => {
    setActivePP(id);
  };


  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div>
      <main className="container mx-auto max-width pt-8 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-dark-heading dark:text-light-heading font-bold">
            My <span className="text-gradient">Projects</span>
          </h1>
        </div>
        
        {/* Category Selection */}
        <div className="mb-8">
          {/* Mobile Dropdown */}
          <div className="md:hidden relative">
            <button 
              onClick={toggleMobileMenu}
              className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-dark-card rounded-xl shadow-md text-dark-heading dark:text-light-heading font-medium"
            >
              <span>{sections.find(s => s.id === activeSection)?.label || 'Select Category'}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-dark-card rounded-xl shadow-xl z-50 overflow-hidden">
                {sections.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => { handleSectionClick(id); setMobileMenuOpen(false); }}
                    className={`w-full px-4 py-3 text-left transition-colors duration-200 ${
                      id === activeSection 
                        ? 'bg-gradient text-white font-semibold' 
                        : 'text-dark-heading dark:text-light-heading hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Desktop Tabs */}
          <div className="hidden md:flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 p-2 bg-white dark:bg-dark-card rounded-2xl shadow-md">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  id={id}
                  onClick={() => handleSectionClick(id)}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    id === activeSection
                      ? 'bg-gradient text-white shadow-md transform scale-105'
                      : 'text-dark-heading dark:text-light-heading hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeSection === 'university_project' && (
          <section id="university_project">
            {/* Year Selection */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-xl">
                {yearSections.map(({ id, label }) => (
                  <button
                    key={id}
                    id={id}
                    onClick={() => handleYearClick(id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      id === activeYear
                        ? 'bg-white dark:bg-dark-card text-dark-heading dark:text-light-heading shadow-md'
                        : 'text-dark-content dark:text-light-content hover:bg-white/50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
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
            {/* Personal Projects Category Selection */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-xl">
                {PPsections.map(({ id, label }) => (
                  <button
                    key={id}
                    id={id}
                    onClick={() => handlePPClick(id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      id === activePP
                        ? 'bg-white dark:bg-dark-card text-dark-heading dark:text-light-heading shadow-md'
                        : 'text-dark-content dark:text-light-content hover:bg-white/50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
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
