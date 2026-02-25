import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Work from "../Components/Work";
import Language from "../Components/Language";
import Education from "../Components/Education";
import { personalDetails, workDetails, eduDetails, languageDetails, charitiesDetails } from "../Details";
import "../index.css";
import { Link } from "react-router-dom";


function About() {

  const [currentImg, setCurrentImg] = useState(personalDetails.img);
  const elementsRef = useRef([]);

  useEffect(() => {
    const images = [personalDetails.img, personalDetails.img1, personalDetails.img3, personalDetails.img4, personalDetails.img5,
      personalDetails.img6, personalDetails.img7, personalDetails.img8, personalDetails.img9, personalDetails.img10, personalDetails.img11, personalDetails.img12];
    let i = 0;

    const changeImage = () => {
      setCurrentImg(images[i]);
      i = (i + 1) % images.length; // Cycle i between 0, 1, and 2
    };

    // Change image every 3 seconds
    const intervalId = setInterval(changeImage, 1500);

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  const addToRefs = el => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    elementsRef.current.forEach((el, i) => {
      tl.from(
        el,
        {
          x: i % 2 === 0 ? "-100%" : "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
    });
    return () => tl.kill();
  }, []);

  return (
    <main className="container mx-auto max-width py-12 pb-20">
      <section className="mb-16">
        <h1 ref={addToRefs} className="text-3xl sm:text-4xl md:text-5xl text-dark-heading dark:text-light-heading font-bold mb-8">
          <span className="text-gradient">About Me</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 space-y-4">
            <p ref={addToRefs} className="text-dark-content dark:text-light-content text-base md:text-lg leading-relaxed">
              {personalDetails.about}
            </p>
            <p ref={addToRefs} className="text-dark-content dark:text-light-content text-base md:text-lg leading-relaxed">
              {personalDetails.about1}
            </p>
          </div>
          <div ref={addToRefs} className="md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <img 
                className="relative w-full rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]" 
                src={currentImg} 
                alt="About me" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 ref={addToRefs} className="text-2xl sm:text-3xl md:text-4xl text-dark-heading dark:text-light-heading font-bold mb-6 flex items-center gap-3">
          <span className="p-2 bg-gradient rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </span>
          Education
        </h2>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration, Grade, Logo }) => (
            <Education
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
              grade={Grade}
              logo={Logo}
            />
          ))
        )}
      </section>

      <section className="mb-12 py-8 text-center">
        <h2 ref={addToRefs} className="text-2xl sm:text-3xl md:text-4xl text-dark-heading dark:text-light-heading font-bold mb-6">
          View My <span className="text-gradient">Projects</span>
        </h2>
        <p ref={addToRefs} className="text-dark-content dark:text-light-content mb-6 max-w-2xl mx-auto">
          Explore my work across various domains including machine learning, web development, and more.
        </p>
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          View Projects
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>

   
      
      <section className="mb-12">
        <h2 ref={addToRefs} className="text-2xl sm:text-3xl md:text-4xl text-dark-heading dark:text-light-heading font-bold mb-6 flex items-center gap-3">
          <span className="p-2 bg-gradient rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </span>
          Languages
        </h2>
        {React.Children.toArray(
          languageDetails.map(({ Position, Type, Company }) => (
            <Language
              position={Position}
              type={Type}
              company={Company}
            />
          ))
        )}
      </section>      
      
      <section className="mb-12 py-8 text-center">
        <h2 ref={addToRefs} className="text-2xl sm:text-3xl md:text-4xl text-dark-heading dark:text-light-heading font-bold mb-6">
          My <span className="text-gradient">Tech Stack</span>
        </h2>
        <p ref={addToRefs} className="text-dark-content dark:text-light-content mb-6 max-w-2xl mx-auto">
          Discover the technologies and tools I use to bring ideas to life.
        </p>
        <Link 
          to="/technologies" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          View Technologies
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
      
      
      <section className="mb-12">
        <h2 ref={addToRefs} className="text-2xl sm:text-3xl md:text-4xl text-dark-heading dark:text-light-heading font-bold mb-6 flex items-center gap-3">
          <span className="p-2 bg-gradient rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          Work Experience
        </h2>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>      
      
      <section className="mb-12">
        <h2 ref={addToRefs} className="text-2xl sm:text-3xl md:text-4xl text-dark-heading dark:text-light-heading font-bold mb-6 flex items-center gap-3">
          <span className="p-2 bg-gradient rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
          Charities
        </h2>
        {React.Children.toArray(
          charitiesDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
