import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { techStackDetails } from "../Details";

function Technologies() {
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

  const {
    html,
    css,
    js,
    react,
    vscode,
    git,
    github,
    npm,
    figma,
    anaconda,
    arduino,
    arm,
    autodesk,
    c,
    cplusplus,
    comsol,
    django,
    googlecolab,
    microsoft,
    jupyter,
    matlab,
    numpy,
    orcad,
    pandas,
    pycharm,
    python,
    solidity,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
            <section>
      <h1 ref={addTech} className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        <span ref={addTech} className="name-logo2">Technologies</span>
      </h1>
      <br/>
      <p ref={addTech} className="text-content py-2 lg:max-w-3xl text-xl font-bold">
        <span className="name-logo1">Programming</span>
      </p>
        <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img ref={addTech} src={html} title="html" alt="" />
          <img ref={addTech} src={css} title="CSS" alt="" />
          <img ref={addTech} src={js} title="JavaScript" alt="" />
          <img ref={addTech} src={react} title="React" alt="" />
          <img ref={addTech} src={anaconda} title="Anaconda" alt="" />
          <img ref={addTech} src={arduino} title="Arduino" alt="" />
          <img ref={addTech} src={arm} title="ARM" alt="" />
          <img ref={addTech} src={c} title="C" alt="" />
          <img ref={addTech} src={cplusplus} title="C++" alt="" />
          <img ref={addTech} src={python} title="Python" alt="" />
          <img ref={addTech} src={solidity} title="Solidity" alt="" />
          <img ref={addTech} src={django} title="Django" alt="" />
          <img ref={addTech} src={numpy} title="Numpy" alt="" />
          <img ref={addTech} src={pandas} title="Pandas" alt="" />
          <img ref={addTech} src={npm} title="NPM" alt="NPM" />
        </section>
        <br/>
        <div className="border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20"></div> {/* This line will add a border */}
          <p ref={addTech} className="text-content py-2 lg:max-w-3xl text-xl font-bold">
            <span className="name-logo1">Software</span>
          </p>
          <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img ref={addTech} src={vscode} title="Visual Studio Code" alt="" />
          <img ref={addTech} src={git} title="Git" alt="Git" />
          <img ref={addTech} src={github} title="Github" alt="Github" />
          <img ref={addTech} src={figma} title="Figma" alt="Figma" />
          <img ref={addTech} src={autodesk} title="Autodesk" alt="Autodesk" />
          <img ref={addTech} src={comsol} title="COMSOL" alt="COMSOL" />
          <img ref={addTech} src={googlecolab} title="Google Colab" alt="Google Colab" />
          <img ref={addTech} src={microsoft} title="Microsoft" alt="Microsoft" />
          <img ref={addTech} src={jupyter} title="Jupyter" alt="Jupyter" />
          <img ref={addTech} src={matlab} title="Matlab" alt="Matlab" />
          <img ref={addTech} src={orcad} title="Orcad" alt="Orcad" />
          <img ref={addTech} src={pycharm} title="Pycharm" alt="Pycharm" />
        </section>
      </section>
    </main>
  );
}

export default Technologies;
