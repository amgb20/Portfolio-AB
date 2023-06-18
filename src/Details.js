// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile1.png";
import profile1 from "./assets/aboutme.png";
import profile3 from "./assets/1.png";
import profile4 from "./assets/2.png";
import profile5 from "./assets/3.png";
import profile6 from "./assets/4.png";
import profile7 from "./assets/5.png";
import profile8 from "./assets/6.png";
import profile9 from "./assets/7.png";
import profile10 from "./assets/8.png";
import profile11 from "./assets/9.png";
import profile12 from "./assets/10.png";
import uob from "./assets/uoblogo.png";

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
import overleaf from "./assets/techstack/Overleaf.png";

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
import belieth from "./assets/projects/belieth.png";
import stc from "./assets/projects/stc.png";
import dcmotor from "./assets/projects/DC motor.png";
import state from "./assets/projects/state.png";
import prop from "./assets/projects/prop.png";
import airjet from "./assets/projects/airjet.png";
import harvester from "./assets/projects/harvester.png";
import converter from "./assets/projects/converter.png";
import venus from "./assets/projects/venus.png";
import modulation from "./assets/projects/modulation.png";
import heatshield from "./assets/projects/heatshield.png";
import mouse from "./assets/projects/mouse.png";
import em from "./assets/projects/em.png";
import shaft from "./assets/projects/shaft.png";
import endeavour from "./assets/projects/endeavour.png";
import coming from "./assets/projects/coming.png";
import fan  from "./assets/projects/fan.png";
import ai from "./assets/projects/ai.png";
import cr from "./assets/projects/cr.png";
import romie from "./assets/projects/website.gif";
import romie1 from "./assets/projects/romie1.png";
import romie2 from "./assets/projects/romie2.png";
import poster from "./assets/projects/poster.png";
import { findRenderedComponentWithType } from "react-dom/test-utils";

import "./index.css";

// Enter your Personal Details here
export const personalDetails = {
  name: "Alexandre Benoit",
  tagline: "I am a future Mechanical and Electrical Engineer, self-taught software developer, web developer and entrepreneur.",
  img: profile,
  img1: profile1,
  img2: uob,
  img3: profile3,
  img4: profile4,
  img5: profile5,
  img6: profile6,
  img7: profile7,
  img8: profile8,
  img9: profile9,
  img10: profile10,
  img11: profile11,
  img12: profile12,
  about: `I am a Mechanical and Electrical Engineering student at the University of Bath, originally from France and now living in London since 2017. I have a strong passion for software development, the automotive industry, robotics and Machine Learning. I find great joy in exploring new ideas within the field of engineering and related areas that I am working on during my free time and challenging myself to transform them into viable business ventures.`,

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
        <span className="name-logo1">Predicted First Class</span>. <br />
        <b>1st year</b>: Upper 2.1 – 66% - GPA: 3.7. <br />
        <b>2nd year</b>: Upper 2.1 – 66% - GPA: 3.7. <br />
        <b>3rd year</b>: First 1.0 – 74% - GPA 4.0.<br />
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
        <span className="name-logo1">French Scientific Bac with Honours</span>. <br />
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
        <span className="name-logo1">French Brevet with Honours</span>. <br />
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
  overleaf: overleaf,
};

// Enter your Project Details here
export const projectDetailsUni1 = [
  {
    title: "Robotic Design - DC motor control on Arduino",
    image: dcmotor,
    description: `An experiment was conducted using a Micro metal gear DC motor with a magnetic encoder, along with an H-Bridge circuit, all connected and tested using an Arduino. The objective was to develop an Arduino program that measures voltage variations and controls the speed of the DC motor.`,
    techstack: "Arduino",
    previewLink: "https://drive.google.com/file/d/1lsAxlZuUWlgzRfnnc_2ev2VCg5M10HMX/view?usp=sharing",
    githubLink: "https://drive.google.com/file/d/1lsAxlZuUWlgzRfnnc_2ev2VCg5M10HMX/view?usp=sharing",
  },
  {
    title: "Robotics & Mechatronic Systems: Propeller Stability Challenge",
    image: state,
    description: `Process to design a Finite State Machine (FSM)`,
    techstack: "None",
    previewLink: "https://drive.google.com/file/d/1pqE7aMGYEESQdnteuDWkSeh_8-7BQcZI/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "Digital Electronics: Finite State Machine",
    image: prop,
    description: `This report illustrates the theory, results and the manufacturing of a specific
    control system. It put forward three tasks in order to achieve the control challenge:
    
    - It shows the functioning of an MPU-6050
    
    - It shows the control of a DC motor by controlling its speed and rotation
    - It shows the control of a propeller which stays at a given position and levitates`,
    techstack: "C++, Arduino",
    previewLink: "https://drive.google.com/file/d/1BxxKjN1YiL5hY_oVnbLkWEhxFjpH58rR/view?usp=sharing",
    githubLink: "https://github.com/amgb20/EE10170-Robotics-Mechatronic-Systems-Propeller-Stability-Challenge",
  },
  {
    title: "Fluid Dynamics - Air Jet Functioning",
    image: airjet,
    description: `This report highlights the velocity distribution of a circular air jet at several stations along
    the length to reveal how a uniform jet interacts with its surroundings. The experience is conducted thanks to a pitot-static probe linked to a manometer. The local velocity was measured,
    and the height of the fluid moving along an inclined manometer allows us to have the velocity
    values at different position of the pitot-static tube positioned either in an x or y-axis. The volumetric flow rate is computed by increasing the downstream of the jet.`,
    techstack: "None",
    previewLink: "https://drive.google.com/file/d/1l8PsnIqrUjLmMmMKIJCI0EZpo5D-XU6X/view?usp=sharing",
    githubLink: "none",
  },
];

// Enter your Project Details here
export const projectDetailsUni2 = [
  {
    title: "Design and manufacture of electromechanical systems - PCB of an energy harvester",
    image: harvester,
    description: `An experiment was conducted using a Micro metal gear DC motor with a magnetic encoder, along with an H-Bridge circuit, all connected and tested using an Arduino. The objective was to develop an Arduino program that measures voltage variations and controls the speed of the DC motor.`,
    techstack: "OrCAD, Autodesk Inventor", 
    previewLink: "https://drive.google.com/file/d/1Idb_Ey_EATDszTLaMFTcDqn1vIxndTg0/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "Design and Manufacture of Electromechanical Systems: Thermal Management of a DC-DC converter",
    image: converter,
    description: `This lab aims to design a PCB that manages the thermal behavior of a DC-DC converter installed in an electronic control system for a fuel tank. Heat dissipation and the role of a DC-DC converter are explained, highlighting their relevance in real-life applications such as phones and computers. The lab involves using tools like Orcad, PCB Orcad Design, and Padstack to create the final PCB design. The report provides a description of the design process and a discussion of the findings..`,
    techstack: "OrCAD, Autodesk Inventor", 
    previewLink: "https://drive.google.com/file/d/1lhBMB5whaipRIuu7sRi1x8aXihQbDeYN/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "Numerical Modelling of Aerocapture for a Scientific Mission to Venus",
    image: venus,
    description: `This report covers the modelling of the aerocapture method of space travel on MATLAB. The position
    at which a spacecraft would have to enter Venus’ atmosphere in order to loop around the planet was
    determined by running a series of functions which solved the underlying boundary value problem through
    a shooting method. The task was taken further, attempting to put the spacecraft in orbit. Furthermore,
    a GUI application was generated for optimised user experience.`,
    techstack: "Matlab", 
    previewLink: "https://drive.google.com/file/d/1PvzXmXBFEjzHZcATGY2hMh6EO-5FDGxs/view?usp=sharing",
    githubLink: "https://github.com/amgb20/Modelling-Techniques-Numerical-Modelling-of-Aerocapture-for-a-Scienti-c-Mission-to-Venus",
  },
  {
    title: "Amplitude Modulation/Demodulation",
    image: modulation,
    description: `This lab will go through a various range of modulation operation to simulate certain properties of communication system. Several graphs will be shown to illustrate the idea of AM
    modulation and demodulation. We will therefore use Matlab Simulink that will help us simulate modulation, demodulation and noise issues.`,
    techstack: "Matlab", 
    previewLink: "https://drive.google.com/file/d/1wGa9pvHVJHOK_zwk9IGCbe1JBwkNYxPA/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "Modelling of a spacecraft heat shield tile ",
    image: heatshield,
    description: `The report highlights the simulation of heat equations that define the heat flow through a
    space shuttle’s insulation tile. Matlab was used to implement 4 different methods relying on
    Fourier’s heat equations.
    The program showed that the best method is Crank-Nicolson as it has the smallest inaccuracies (O(∆x
    2
    , ∆t
    2
    )). We could conclude that this method is unconditionally stable [4] and
    has the smallest divergence from the given temperature of 450 Kelvin. Therefore, the time
    step stability nt and spatial step stability nx were found being respectively 941 number of
    timesteps and 4 number of spatial steps. A shooting method, studied during the first semester,
    was created to have the maximum thickness required for the desired temperature; a maximum
    thickness of 0.568mm was computed for a temperature of 450K which is the one we are not
    allowed to exceed.`,
    techstack: "Matlab", 
    previewLink: "https://drive.google.com/file/d/1dFO8TGxsjVa1j0Apulb_v81wew8PO6He/view?usp=sharing",
    githubLink: "https://github.com/amgb20/Modelling-of-a-spacecraft-heat-shield-tile",
  },
  {
    title: "Mouse Design",
    image: mouse,
    description: `This report focuses on the design of an electronic control system for an AGV (automated guided vehicle), commonly known as a "mouse". The AGV follows a taped-down wire as a guide. Due to the pandemic, physical construction of the mouse was not possible, so a detailed circuit simulation and mechanical analysis will be provided instead. In the past, students would run their mouse in a real-life environment and participate in a race with other teams. However, for this project, the emphasis is on simulating the mouse's performance, recognizing the importance of cost-effective testing in real-life applications. The mouse relies on two magnetic sensors to steer and follow the track. Its objective is to successfully complete the course.`,
    techstack: "OrCAD", 
    previewLink: "https://drive.google.com/file/d/1Sg4Nd7n21684VQCeQa4YX0xzS-LA4eMO/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "Electromagnetic eld behavior of simple current carrying wires and interacting charges",
    image: em,
    description: `This report details the use of electromagnetic modelling using the finite element program pdetool
    in Matlab. Most electrical and electromagnetic devices are designed using numerical modelling techniques such as that of finite elements. An outline of how this technique is implemented for different
    electromagnetic applications is presented and discussed.`,
    techstack: "Matlab", 
    previewLink: "https://drive.google.com/file/d/1VIJIECT57VnQNQcCKKmi0zlbclLX_fKS/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "SHAFT DESIGN: Design and Manufacture of Electromechanical Systems",
    image: shaft,
    description: `This report details the design process undertaken in creating a solution for a wind turbine
    shaft assembly. The task involved a preliminary loading analysis, following an iterative
    design process and finally technical drawings of the proposed design solution on CAD.`,
    techstack: "Inventor", 
    previewLink: "https://drive.google.com/file/d/1w9QMZDM6OgtQWDrQXD__ORGZQTOnlZ-f/view?usp=sharing",
    githubLink: "",
  },
];

export const projectDetailsUni3 = [
  {
    title: "Endeavour Mining Business Case Study",
    image: endeavour,
    description: `This year, COP 27 and COP 15 addressed environmental and biodiversity decisions, including financial assistance from developed nations and conservation efforts. Industries, including mining, are embracing ESG initiatives aligned with UNEP/COP 15 principles. Despite some perceptions, the mining sector shows progress in climate strategies and data disclosure. This essay focuses on the environmental dimension of the mining industry's ESG plan, evaluating Endeavour Mining's performance and identifying improvement areas. It concludes with the industry's overall mindset towards environmental progress.`,
    techstack: "None", 
    previewLink: "https://drive.google.com/file/d/1vr2tvY04tQHvPofuIx55ZLN3ZaMxoKAH/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "Fan Control Design Document",
    image: fan,
    description: `This design document highlights a strategy for developing a variable speed fan control
    software. The software is written in C on the MBED IDE. An executable file (.exe) is provided
    to run the fan. The code is imported to an ST Nucleo board F070RB with an STM32. The
    user is able to interact with the fan via the extension board and the Nucleo Board. Further
    instructions or input from the user are communicated via the LCD. The use is able to choose
    the pre-set fan speed (open-loop control) or rotate the encoder and potentiometer to vary the
    fan’s speed (closed-loop control). Optimization of the fan response and precision in user input
    1
    and error feedback constitutes the main challenge of this product. A minimal viable product
    (MVP) and prioritization diagrams is presented, determining our fallback.`,
    techstack: "Mbed, C++, KiCAD", 
    previewLink: "https://drive.google.com/file/d/1gWpS9EzCWez_HmLEPss8VjdJIzaudpGX/view?usp=sharing",
    githubLink: "https://github.com/amgb20/fan-control/tree/main",
  },
  {
    title: "AI Formula Student DDT Car API Software Integration",
    image: ai,
    description: `TBReAI test platform for the DDT car.`,
    techstack: "C, Python ", 
    previewLink: "https://drive.google.com/file/d/1vr2tvY04tQHvPofuIx55ZLN3ZaMxoKAH/view?usp=sharing",
    githubLink: "https://github.com/amgb20/DDT",
  },
  {
    title: "Clearpath Robotics Business Case Study",
    image: cr,
    description: `Clearpath Robotics ("CR") is a leading autonomous robotics company founded in 2009 in Kitchener, Ontario. With 300 employees, it is the world's first robotic research platform. CR is recognized as one of the top 50 influential companies in robotics. They manufacture robots for various applications by integrating multiple OEM technologies. CR also offers their own mapping software for outdoor GPS navigation and provides customizable platforms and software tools to assist robotics developers. Their goal is to enable autonomous mobile robotics and support developers in achieving their objectives.`,
    techstack: "None ", 
    previewLink: "https://drive.google.com/file/d/1Al1tniYjOkmM-vN3TJLMxD0DvSmIt-_k/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "Global Path Planning for ROMIE an autonomous sampling robot",
    image: romie,
    description: `This report examines the global path planning subsystem within the autonomous software pipeline

    of PR’s cutting-edge robot, ROMIE . We dive into a comprehensive analysis of several methodolo-
    gies for tackling the renowned computational challenge, the Travelling Salesman Problem (TSP).
    
    Our focus centers on three primary solution strategies: traditional algorithms, meta-heuristics, and
    machine learning techniques.`,
    techstack: "HTML/CSS, JavaScript, Python, Jupyter Notebook ", 
    previewLink: "https://drive.google.com/file/d/1fSQ5WVSkfPHMhnmsKh10vxncjEJYJSJ8/view?usp=sharing",
    githubLink: "https://github.com/amgb20/ROMIE---Global-Path-Planning",
  },
  {
    title: "Prospector Robotics - ROMIE Feasibility Study",
    image: romie1,
    description: `Prospector Robotics Limited (PRltd) is a UK-based start-up revolutionizing the
    mining industry with cutting-edge autonomous robotic solutions.`,
    techstack: "None",  
    previewLink: "https://drive.google.com/file/d/1txg8kE3X87f7v4lWhgMc5u7F7_FSDQxM/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "Prospector Robotics - ROMIE Commercial Viability",
    image: romie2,
    description: `Prospector Robotics Limited (PRltd) is a UK-based start-up revolutionizing the
    mining industry with cutting-edge autonomous robotic solutions.`,
    techstack: "None", 
    previewLink: "https://drive.google.com/file/d/121U_yFT-wGYO1wBdlO935tlNEDSIyh5i/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "Prospector Robotics - ROMIE Poster",
    image: poster,
    description: `Prospector Robotics Limited (PRltd) is a UK-based start-up revolutionizing the
    mining industry with cutting-edge autonomous robotic solutions.`,
    techstack: "Publisher", 
    previewLink: "https://drive.google.com/file/d/1HvaDMtRq_7k44bPHkVRS-SXYCOl33X1e/view?usp=sharing",
    githubLink: "",
  },

]

// Enter your Project Details here
export const projectDetailsPP = [
  {
    title: "A novel way to apply global path planning for an autonomous sampling robot: Reinfocement Learning - Q-Leaning",
    image: coming,
    description: `Coming soon...`,
    techstack: "HTML/CSS, JavaScript, Python, Jupyter Notebook, Machine Learning, Reinforcement Learning, Q-Learning",
    previewLink: "",
    githubLink: "",
  },
];

export const projectDetailsSTC = [
  {
    title: "STC: Second Thoughts Club",
    image: stc,
    description: `The objective is to develop an AI generative arts algorithm and establish a 
    community around the project by offering the generated artworks as NFTs. The concept revolves 
    around merging renowned political figures with high fashion garments inspired by different eras. 
    A dedicated landing page has been designed to promote the project and facilitate the sale of NFTs 
    using our custom ERC721 contract, which I personally coded. Additionally, a DAO 
    (Decentralized Autonomous Organization) has been established to oversee the management of community 
    funds and determine the future direction of the project. `,
    techstack: "HTML/CSS, JavaScript, Solidity, ERC721",
    githubLink: "https://github.com/amgb20/websiteSTC",
  },
]

// Enter your Project Details here
export const projectDetailsBelieth = [
  {
    title: "Belieth - NFT for Good",
    image: belieth,
    description: `Belieth solves many of the problems facing modern charities today. 
    NFTs represent a donation through investment, creating a potentially profitable donation. 
    A win-win for charities and donors. Community building in the Metaverse builds donor-to-charity 
    trust and makes the participants feel included. NFT owners can also allocate the community fund 
    within the charity, giving owners a real impact on the beneficiaries. `,
    techstack: "HTML/CSS, JavaScript, Solidity, ERC721",
    previewLink: "https://www.linkedin.com/company/belieth",
    pitchdecklink: "https://drive.google.com/file/d/1gmGHIL5GyYJ8Yw6X2HMpiyDMdc6sy9Jt/view?usp=sharing",
  },

];

// Enter your Contact Details here
export const contactDetails = {
  email: "amgb20@bath.ac.uk",
  phone: "+33631045318",
};
