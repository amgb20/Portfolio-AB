import React, { useRef, useEffect } from "react";
import { techStackDetails } from "../Details";
import { fadeIn } from "../utils/gsapReducedMotion";

function TechTile({ src, name }) {
  return (
    <div className="tech-tile" title={name}>
      <img src={src} alt={name} loading="lazy" />
      <span>{name}</span>
    </div>
  );
}

function Technologies() {
  const headingRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    const tl = fadeIn([headingRef.current, gridRef.current]);
    return () => tl?.kill();
  }, []);

  const {
    html, css, js, react, vscode, git, github, npm, figma, anaconda, arduino,
    arm, autodesk, c, cplusplus, comsol, django, googlecolab, microsoft,
    jupyter, matlab, numpy, orcad, pandas, pycharm, python, solidity, overleaf,
    tensorflow, pytorch,
  } = techStackDetails;

  const programming = [
    { src: html, name: "HTML" },
    { src: css, name: "CSS" },
    { src: js, name: "JavaScript" },
    { src: react, name: "React" },
    { src: python, name: "Python" },
    { src: c, name: "C" },
    { src: cplusplus, name: "C++" },
    { src: django, name: "Django" },
    { src: numpy, name: "NumPy" },
    { src: pandas, name: "Pandas" },
    { src: tensorflow, name: "TensorFlow" },
    { src: pytorch, name: "PyTorch" },
    { src: solidity, name: "Solidity" },
    { src: anaconda, name: "Anaconda" },
    { src: arduino, name: "Arduino" },
    { src: arm, name: "ARM" },
    { src: npm, name: "NPM" },
  ];

  const software = [
    { src: vscode, name: "VS Code" },
    { src: git, name: "Git" },
    { src: github, name: "GitHub" },
    { src: figma, name: "Figma" },
    { src: autodesk, name: "Autodesk" },
    { src: comsol, name: "COMSOL" },
    { src: googlecolab, name: "Colab" },
    { src: microsoft, name: "Microsoft" },
    { src: jupyter, name: "Jupyter" },
    { src: matlab, name: "MATLAB" },
    { src: orcad, name: "Orcad" },
    { src: pycharm, name: "PyCharm" },
    { src: overleaf, name: "Overleaf" },
  ];

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <div ref={headingRef} className="mb-10">
        <p className="section-label">{"// stack"}</p>
        <h1 className="section-heading">Technologies</h1>
      </div>

      <div ref={gridRef}>
        <section className="mb-12">
          <p className="section-label mb-4">{"// programming"}</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {programming.map(({ src, name }) => (
              <TechTile key={name} src={src} name={name} />
            ))}
          </div>
        </section>

        <div className="border-t border-border-subtle mb-12" />

        <section>
          <p className="section-label mb-4">{"// software"}</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {software.map(({ src, name }) => (
              <TechTile key={name} src={src} name={name} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Technologies;
