import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Accreditations from "../Components/AccrediationText";
import { accreditationsDetails } from "../Details";
import "../index.css";
import { Link } from "react-router-dom";

function About() {
    const elementsRef = useRef([]);
    const addaccre = el => {
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
    <main className="container mx-auto max-width pt-10 pb-20 ">
      
      <section>
        <h1 ref={addaccre} className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        <span ref={addaccre} className="name-logo2">Accreditations</span>
          
        </h1>
        {React.Children.toArray(
          accreditationsDetails.map(({ Position, Company, Img, Duration }) => (
            <Accreditations
            position={Position}
            company={Company}
            accreditation={Img}
            duration={Duration}
            />
          ))
        )}
      </section>      
    </main>
  );
}

export default About;