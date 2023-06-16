// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile1.png";
import profile1 from "./assets/aboutme.png";
import profile2 from "./assets/uoblogo.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import figma from "./assets/techstack/figma.png";
import anaconda from "./assets/techstack/Anaconda_Logo.png";
import arduino from "./assets/techstack/Arduino_Logo.png";
import arm from "./assets/techstack/arm.png";
import autodesk from "./assets/techstack/autodesk.png";
import c from "./assets/techstack/c.png";
import cplusplus from "./assets/techstack/c++.png";
import comsol from "./assets/techstack/comsol.png";
import django from "./assets/techstack/django.png";
import googlecolab from "./assets/techstack/Google_Colaboratory_SVG_Logo.png";
import microsoft from "./assets/techstack/icons8-microsoft-48.png";
import jupyter from "./assets/techstack/jupyter.png";
import matlab from "./assets/techstack/matlab.png";
import numpy from "./assets/techstack/numpy.png";
import orcad from "./assets/techstack/OrCAD_Logo.png";
import pandas from "./assets/techstack/Pandas_logo.png";
import pycharm from "./assets/techstack/PyCharm_Icon.png";
import python from "./assets/techstack/python.png";
import solidity from "./assets/techstack/solidity.png";

// Accreditations Images
import ffh from "./assets/techstack/ffh.svg";
import udemy from "./assets/techstack/icons8-udemy.com-is-an-online-learning-and-teaching-platform.-32.png";
import google from "./assets/techstack/icons8-google.svg";
import libf from "./assets/techstack/LIBF.jpg";
import aefe from "./assets/techstack/aefe.png";
import ielts from "./assets/techstack/IELTS_logo.png";  
import brevet from "./assets/techstack/Ministère de la Culture.svg";
import redcross from "./assets/techstack/malt.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import { findRenderedComponentWithType } from "react-dom/test-utils";

import "./index.css";

// Enter your Personal Details here
export const personalDetails = {
  name: "Alexandre Benoit",
  tagline: "I am a future Mechanical and Electrical Engineer",
  img: profile,
  img1: profile1,
  img2: profile2,
  about: `I am a Mechanical and Electrical Engineering student at the University of Bath, originally from France and currently living in London. I have a strong passion for software development, the automotive industry, robotics and Machine Learning. I find great joy in exploring new ideas within the field of engineering and related areas that I am working on during my free time and challenging myself to transform them into viable business ventures.`,

  about1: `In addition to my technical interests, I am also a very active and sporty person. Tennis is my primary sport, and I actively compete in the British University Karting Championship. Additionally, I engage in a diverse range of activities, including handball, golf, surfing, snowboarding, boxing, callisthenics, and triathlons. Playing the guitar is another one of my hobbies, and I am a huge fan of jazz music.
  
  On this portfolio website, you will discover my projects, my different skillset, as well as my accomplishments. Feel free to reach out to me to discuss your projects or to learn more about my experiences and passions.
  
  Welcome to my portfolio!`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/alexandre-benoit-belieth/",
  github: "https://github.com/amgb20/",
};

 
export const languageDetails = [
  {
    Position: "French 🇫🇷",
    Type: "Native",
    Company: "C2",
  },
  {
    Position: "English 🇬🇧",
    Type: "Fluent",
    Company: "C2",
  },
  {
    Position: "Spanish 🇪🇸",
    Type: "Advanced",
    Company: "B2",
  },
]

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Autonomous Pipeline Engineer",
    Company: `Team Bath Racing Electric Artificial Intelliegence`,
    Location: "University of Bath, Bath, UK",
    Type: "Full Time",
    Duration: "Mars 2023 - Present",
  },
  {
    Position: "Vehicle Dynamics Lead Engineer",
    Company: `Team Bath Racing Electric`,
    Location: "University of Bath, Bath, UK",
    Type: "Full Time",
    Duration: "Sep 2022 - Mars 2023",
  },
  {
    Position: "Co-Founder",
    Company: `Belieth LTD`,
    Location: "London",
    Type: "Full Time",
    Duration: "Jan 2022 - Nov 2022",
  },
  {
    Position: "Vehicle Dynamics Engineer",
    Company: `Williams Advanced Engineering and Jaguar TCS Formula E`,
    Location: "Grove, Oxfordshire, UK ",
    Type: "Full Time",
    Duration: "Sep 2021 - May 2021",
  },
  {
    Position: "Powertrain and Aerodynamic Engineer",
    Company: `Team Bath Racing Electric`,
    Location: "University of Bath, Bath, UK",
    Type: "Full Time",
    Duration: "Sep 2020 - Mars 2021",
  },
  {
    Position: "Race Engineer for FunCup France and Belgium",
    Company: `Motorsports-Marketing-Management M3M`,
    Location: "French GP – Paul Ricard, Magny-Cours, Belgium GP – Spa-Francorchamps",
    Type: "Part Time",
    Duration: "Jul 2019 - Sep 2022",
  },
  {
    Position: "Summer Intern",
    Company: `Amplify Trading`,
    Location: "London, UK",
    Type: "Internship",
    Duration: "Aug 2020 - Sep 2020",
  },
  {
    Position: "Treasurer",
    Company: `University of Bath Skydiving Society`,
    Location: "University of Bath, Bath, UK",
    Type: "Full Time",
    Duration: "Sep 2020 - Jul 2021",
  },
  {
    Position: "Mechanic Assistant",
    Company: `Cycle Neaud Morind`,
    Location: "Ile de Ré, France ",
    Type: "Full Time",
    Duration: "Jul 2020 - Aug 2021",
  },
  {
    Position: "Research Assistant",
    Company: `Imperial College`,
    Location: "Imperial College, Dpt of Electrical and Robotics Engineering, South Kensington, London, UK",
    Type: "Intership",
    Duration: "Jul 2018 ",
  },
  {
    Position: "Mechanic Assistant",
    Company: `Garage du Moulin Bleu`,
    Location: "Ile de Ré, France ",
    Type: "Intership",
    Duration: "April 2018",
  },
  {
    Position: "Teacher Assistant",
    Company: `L'Ecole des Petits`,
    Location: "L’Ecole des Petits, London, UK ",
    Type: "Intership",
    Duration: "July 2017",
  },
  {
    Position: "Official French Handball Referee",
    Company: `French Handball Federetion`,
    Location: "France",
    Type: "PArt Time",
    Duration: "Sep 2013 - Jul 2017",
  },
  {
    Position: "French Open, Roland Garros Ball Boy",
    Company: `French Federation`,
    Location: "Stade of Roland Garros, Paris, France",
    Type: "Full Time",
    Duration: "May 2014 - Jul 2014",
  },
];

export const charitiesDetails = [
  {
    Position: "Volunteer Chef Assistant",
    Company: `Notre Dame De France Church Charity`,
    Location: "Notre Dame De France Church Charity, London, United Kingdom ",
    Type: "Part Time",
    Duration: "Sept 2017 - Jul 2019",
  },
  {
    Position: "Volunteer",
    Company: `Mama Love’s Childcare Centre`,
    Location: "Mama Love’s Childcare Centre, Cape Town, South-Africa ",
    Type: "Part Time",
    Duration: "Feb 2017",
  },
];

export const hobbiesDetails = [
  

];

export const accreditationsDetails = [
  {
    Position: "Hill Climbing and Simulated Annealing AI Algorithms",
    Company: "Udemy",
    Img: udemy,
    Duration: "Apr 2023",
  },
  {
    Position: "ROS2 For Beginners (ROS Foxy, Humble - 2023",
    Company: "Udemy",
    Img: udemy,

    Duration: "Apr 2023",

  },
  {
    Position: "ROS2 Nav2 [Navigation 2 Stack] - with SLAM and Navigation",
    Company: "Udemy",
    Img: udemy,

    Duration: "Apr 2023",

  },
  {
    Position: "Google Machine Learning Foundational courses",
    Company: "Google Developers Student Club",
    Img: google,
    Duration: "Mars 2023",

  },
  {
    Position: "Advanced Level 6 Diplima in Tradiing and Financial Market Analysis",
    Company: "The London Institute of Banking & Finance",
    Img: libf,
    Duration: "Sept 2020",

  },
  {
    Position: "French Scientific Baccalauréat - Honors",
    Company: "AEFE - Agence pour l'enseignement français à l'étranger",
    Img: aefe,
    Duration: "Jun 2019",

  },
  {
    Position: "IETS Official Diploma",
    Company: "IELTS",
    Img: ielts,
    Duration: "Nov 2017",

  },
  {
    Position: "Brevet des Colleges - Honors",
    Company: "France's Minister of national education Cabinet",
    Img: brevet,
    Duration: "Jun 2016",

  },
  {
    Position: "First Aid Certificate",
    Company: "French Red Cross Foundation",
    Img: redcross,
    Duration: "Apr 2016",

  },
  {
    Position: "Handball Referee",
    Company: "Federation Francaise de Handball 🇫🇷",
    Img: ffh,
    Duration: "Sep 2013",

  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Meng in Integrated Mechanical & Electrical Engineering",
    Company: "University of Bath",
    Location: "University of Bath, Bath, UK",
    Type: "Full Time",
    Duration: "Sept 2019 - Present",
    Grade: (
      <>
        <span className="name-logo1">Predicted First Class</span>. <br/>
        <b>1st year</b>: Upper 2.1 – 66% - GPA: 3.7. <br/>
        <b>2nd year</b>: Upper 2.1 – 66% - GPA: 3.7. <br/>
        <b>3rd year</b>: First 1.0 – 74% - GPA 4.0.<br/>
      </>
    ),
  },

  {
    Position: "French Scientific Baccalauréat",
    Company: `Lycée Français Charles de Gaulle`,
    Location: "Lycée Français Charles de Gaulle, South Kensington, Chelsea, London, UK",
    Type: "Full Time",
    Duration: "Sept 2017 - July 2019",
    Grade: (
      <>
        <span className="name-logo1">French Scientific Bac with Honours</span>. <br/>
        Lower 6th in Science section, focusing on Maths (A), Physics (A), Chemistry (A)
      </>
    ),
  },

  {
    Position: "French Brevet ",
    Company: `Saint Jean de Passy School`,
    Location: "Saint Jean de Passy School, Paris, France ",
    Type: "Full Time",
    Duration: "Sept 2012 - July 2017",
    Grade: (
      <>
        <span className="name-logo1">French Brevet with Honours</span>. <br/>
      </>
    ),
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  anaconda: anaconda,
  arduino: arduino,
  arm: arm,
  autodesk: autodesk,
  c: c,
  cplusplus: cplusplus,
  comsol: comsol,
  django: django,
  googlecolab: googlecolab,
  microsoft: microsoft,
  jupyter: jupyter,
  matlab: matlab,
  numpy: numpy,
  orcad: orcad,
  pandas: pandas,
  pycharm: pycharm,
  python: python,
  solidity: solidity,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Project title 1",
    image: projectImage1,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 2",
    image: projectImage2,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "amgb20@bath.ac.uk",
  phone: "+33631045318",
};
