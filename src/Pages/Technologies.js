import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
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
      <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        <span className="name-logo2">Technologies</span>
      </h1>
      <br/>
      <p className="text-content py-2 lg:max-w-3xl text-xl font-bold">
        <span className="name-logo1">Programming</span>
      </p>
        <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={html} title="html" alt="" />
          <img src={css} title="CSS" alt="" />
          <img src={js} title="JavaScript" alt="" />
          <img src={react} title="React" alt="" />
          <img src={anaconda} title="Anaconda" alt="" />
          <img src={arduino} title="Arduino" alt="" />
          <img src={arm} title="ARM" alt="" />
          <img src={c} title="C" alt="" />
          <img src={cplusplus} title="C++" alt="" />
          <img src={python} title="Python" alt="" />
          <img src={solidity} title="Solidity" alt="" />
          <img src={django} title="Django" alt="" />
          <img src={numpy} title="Numpy" alt="" />
          <img src={pandas} title="Pandas" alt="" />
          <img src={npm} title="NPM" alt="NPM" />
        </section>
        <br/>
        <div className="border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20"></div> {/* This line will add a border */}
          <p className="text-content py-2 lg:max-w-3xl text-xl font-bold">
            <span className="name-logo1">Software</span>
          </p>
          <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={vscode} title="Visual Studio Code" alt="" />
          <img src={git} title="Git" alt="Git" />
          <img src={github} title="Github" alt="Github" />
          <img src={figma} title="Figma" alt="Figma" />
          <img src={autodesk} title="Autodesk" alt="Autodesk" />
          <img src={comsol} title="COMSOL" alt="COMSOL" />
          <img src={googlecolab} title="Google Colab" alt="Google Colab" />
          <img src={microsoft} title="Microsoft" alt="Microsoft" />
          <img src={jupyter} title="Jupyter" alt="Jupyter" />
          <img src={matlab} title="Matlab" alt="Matlab" />
          <img src={orcad} title="Orcad" alt="Orcad" />
          <img src={pycharm} title="Pycharm" alt="Pycharm" />
        </section>
      </section>
    </main>
  );
}

export default Technologies;
