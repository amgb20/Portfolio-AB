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
    overleaf,
    tensorflow,
    pytorch,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width py-12 pb-20">
      <section>
        <div className="text-center mb-12">
          <h1 ref={addTech} className="text-3xl sm:text-4xl md:text-5xl text-dark-heading dark:text-light-heading font-bold">
            <span className="text-gradient">Technologies</span>
          </h1>
          <p ref={addTech} className="text-dark-content dark:text-light-content mt-4 text-lg max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </div>
        
        <div className="space-y-12">
          <div>
            <h2 ref={addTech} className="text-xl md:text-2xl font-bold text-dark-heading dark:text-light-heading mb-6 flex items-center gap-3">
              <span className="p-2 bg-gradient rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Programming Languages & Frameworks
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
              {[
                { src: html, title: "HTML" },
                { src: css, title: "CSS" },
                { src: js, title: "JavaScript" },
                { src: react, title: "React" },
                { src: anaconda, title: "Anaconda" },
                { src: arduino, title: "Arduino" },
                { src: arm, title: "ARM" },
                { src: c, title: "C" },
                { src: cplusplus, title: "C++" },
                { src: python, title: "Python" },
                { src: solidity, title: "Solidity" },
                { src: django, title: "Django" },
                { src: numpy, title: "NumPy" },
                { src: pandas, title: "Pandas" },
                { src: npm, title: "NPM" },
                { src: tensorflow, title: "TensorFlow" },
                { src: pytorch, title: "PyTorch" },
              ].map((tech, index) => (
                <div 
                  key={tech.title}
                  ref={addTech}
                  className="group flex flex-col items-center p-3 md:p-4 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <img 
                    src={tech.src} 
                    title={tech.title} 
                    alt={tech.title}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="mt-2 text-xs md:text-sm text-dark-content dark:text-light-content font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <h2 ref={addTech} className="text-xl md:text-2xl font-bold text-dark-heading dark:text-light-heading mb-6 flex items-center gap-3">
              <span className="p-2 bg-gradient rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Software & Tools
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
              {[
                { src: vscode, title: "VS Code" },
                { src: git, title: "Git" },
                { src: github, title: "GitHub" },
                { src: figma, title: "Figma" },
                { src: autodesk, title: "Autodesk" },
                { src: comsol, title: "COMSOL" },
                { src: googlecolab, title: "Colab" },
                { src: microsoft, title: "Microsoft" },
                { src: jupyter, title: "Jupyter" },
                { src: matlab, title: "MATLAB" },
                { src: orcad, title: "OrCAD" },
                { src: pycharm, title: "PyCharm" },
                { src: overleaf, title: "Overleaf" },
              ].map((tech, index) => (
                <div 
                  key={tech.title}
                  ref={addTech}
                  className="group flex flex-col items-center p-3 md:p-4 bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <img 
                    src={tech.src} 
                    title={tech.title} 
                    alt={tech.title}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="mt-2 text-xs md:text-sm text-dark-content dark:text-light-content font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Technologies;
