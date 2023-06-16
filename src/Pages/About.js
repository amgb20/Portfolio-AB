import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Work from "../Components/Work";
import Language from "../Components/Language";
import Education from "../Components/Education";
import { personalDetails, workDetails, eduDetails, languageDetails, charitiesDetails } from "../Details";
import "../index.css";
import { Link } from "react-router-dom";

function About() {

  const elementsRef = useRef([]);
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
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 ref={addToRefs} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
      <span className="name-logo2">About Me</span>
        </h1>
        <div className="md:flex justify-between items-center py-8">
        <div>
            <p ref={addToRefs} className="text-content lg:max-w-xl mb-4 text-justify">{personalDetails.about}</p>
            <p ref={addToRefs} className="text-content lg:max-w-xl text-justify">{personalDetails.about1}</p>
          </div>
          <img ref={addToRefs}  className="md:w-1/2 md:ml-8 rounded-lg" src={personalDetails.img1} alt="About me" />
        </div>

      </section>

      <section>
        <h1 ref={addToRefs} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        <span className="name-logo2">Education</span>
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration, Grade }) => (
            <Education
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
              grade={Grade}
            />
          ))
        )}
      </section>

      <section>
        <h1 ref={addToRefs} className="text-2xl pt-10 mb-5 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        <span className="name-logo2">Projects</span>
        </h1>
        <center ref={addToRefs}>
          <Link to="/projects" className="gradient-button">View My Projects</Link>
        </center>
      </section>

   
      
      <section>
        <h1 ref={addToRefs} className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        <span className="name-logo2">Language</span>
        </h1>
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
      
      <section>
        <h1 ref={addToRefs} className="text-2xl pt-10 mb-5 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        <span className="name-logo2">Technologies</span>
        </h1>
        <center ref={addToRefs}>
          <Link to="/technologies" className="gradient-button">Technologies that I have used</Link>
        </center>
      </section>
      
      
      <section>
        <h1 ref={addToRefs} className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
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
      
      <section>
        <h1 ref={addToRefs} className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Charities
        </h1>
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
