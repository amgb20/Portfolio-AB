import React, { useRef, useEffect, useState } from "react";
import Work from "../Components/Work";
import Language from "../Components/Language";
import Education from "../Components/Education";
import {
  personalDetails,
  workDetails,
  eduDetails,
  languageDetails,
  charitiesDetails,
} from "../Details";
import "../index.css";
import { Link } from "react-router-dom";
import { fadeIn } from "../utils/gsapReducedMotion";

function SectionHeading({ label, title }) {
  return (
    <div className="mb-6">
      <p className="section-label">{label}</p>
      <h2 className="section-heading">{title}</h2>
    </div>
  );
}
function About() {
  const [currentImg, setCurrentImg] = useState(personalDetails.img);
  const [imgIndex, setImgIndex] = useState(0);
  const elementsRef = useRef([]);

  const images = useRef([
    personalDetails.img,
    personalDetails.img1,
    personalDetails.img3,
    personalDetails.img4,
    personalDetails.img5,
    personalDetails.img6,
    personalDetails.img7,
    personalDetails.img8,
    personalDetails.img9,
    personalDetails.img10,
    personalDetails.img11,
    personalDetails.img12,
  ]).current;

  useEffect(() => {
    let i = 0;
    const changeImage = () => {
      setCurrentImg(images[i]);
      setImgIndex(i);
      i = (i + 1) % images.length;
    };
    const intervalId = setInterval(changeImage, 1500);
    return () => clearInterval(intervalId);
  }, [images]);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = fadeIn(elementsRef.current);
    return () => tl?.kill();
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section className="mb-16">
        <div ref={addToRefs}>
          <SectionHeading label="// about" title="About Me" />
        </div>
        <div className="md:flex justify-between items-start gap-8">
          <div>
            <p
              ref={addToRefs}
              className="text-content lg:max-w-xl mb-4 text-justify leading-relaxed"
            >
              {personalDetails.about}
            </p>
            <p
              ref={addToRefs}
              className="text-content lg:max-w-xl text-justify leading-relaxed"
            >
              {personalDetails.about1}
            </p>
          </div>
          <div ref={addToRefs} className="md:w-1/2 shrink-0">
            <div className="card-engineering p-2">
              <img
                className="w-full rounded-md"
                src={currentImg}
                alt="About me"
              />
            </div>
            <div className="flex justify-center gap-1.5 mt-3">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    idx === imgIndex ? "bg-accent-cyan" : "bg-bg-elevated"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div ref={addToRefs}>
          <SectionHeading label="// education" title="Education" />
        </div>
        {eduDetails.map(
          ({ Position, Company, Location, Type, Duration, Grade, Logo }) => (
            <Education
              key={`${Position}-${Company}`}
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
              grade={Grade}
              logo={Logo}
            />
          )
        )}
      </section>

      <section className="mb-16 text-center">
        <div ref={addToRefs}>
          <SectionHeading label="// projects" title="Projects" />
        </div>
        <Link to="/projects" className="btn-primary">
          View My Projects
        </Link>
      </section>

      <section className="mb-16">
        <div ref={addToRefs}>
          <SectionHeading label="// languages" title="Language" />
        </div>
        {languageDetails.map(({ Position, Type, Company }) => (
          <Language
            key={Position}
            position={Position}
            type={Type}
            company={Company}
          />
        ))}
      </section>

      <section className="mb-16 text-center">
        <div ref={addToRefs}>
          <SectionHeading label="// stack" title="Technologies" />
        </div>
        <Link to="/technologies" className="btn-primary">
          Technologies I Use
        </Link>
      </section>

      <section className="mb-16">
        <div ref={addToRefs}>
          <SectionHeading label="// experience" title="Work Experience" />
        </div>
        {workDetails.map(({ Position, Company, Location, Type, Duration }) => (
          <Work
            key={`${Position}-${Company}-${Duration}`}
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
          />
        ))}
      </section>

      <section>
        <div ref={addToRefs}>
          <SectionHeading label="// volunteer" title="Charities" />
        </div>
        {charitiesDetails.map(({ Position, Company, Location, Type, Duration }) => (
          <Work
            key={`${Position}-${Company}`}
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
          />
        ))}
      </section>
    </main>
  );
}

export default About;
