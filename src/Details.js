// Central content for the portfolio. Pure data (no JSX) so it can be shared
// between card grids and detail/reading views.

// --- Profile & institution images ---
import profile from "./assets/profile picture.jpg";
import galleryAbout from "./assets/aboutme.png";
import gallery1 from "./assets/1.png";
import gallery2 from "./assets/2.png";
import gallery3 from "./assets/3.png";
import gallery4 from "./assets/4.png";
import gallery5 from "./assets/5.png";
import gallery6 from "./assets/6.png";
import gallery7 from "./assets/7.png";
import gallery8 from "./assets/8.png";
import gallery9 from "./assets/9.png";
import gallery10 from "./assets/10.png";
import uniCambridge from "./assets/uni-logo/university_of_cambridge_logo.jpg";
import uniBath from "./assets/uni-logo/university_of_bath_logo.jpg";
import uniLycee from "./assets/uni-logo/lycee_francais_de_londres_logo.jpg";
import uniStJean from "./assets/uni-logo/saint_jean_de_passy_logo.jpg";
import uniUCL from "./assets/uni-logo/university_college_london_logo.jpg";
import logoSavanta from "./assets/experience-logo/savanta.jpg";
import logoTBR from "./assets/experience-logo/team_bath_racing_electric_logo.jpg";
import logoJaguar from "./assets/experience-logo/j_tcs_racing_logo.jpg";
import logoFFHandball from "./assets/experience-logo/ffhandball_logo.jpg";
import logoRolandGarros from "./assets/experience-logo/rollangarros.jpg";
import logoSubath from "./assets/experience-logo/subath.jpg";
import logoBelieth from "./assets/experience-logo/belieth.png";
import logoImperial from "./assets/experience-logo/imperial.jpg";
import logoM3M from "./assets/experience-logo/m3m.jpg";

// --- Project / publication images ---
import fypabstract from "./assets/fypabstract.png";
import goldmining from "./assets/goldminings.png";
import mnist from "./assets/mnist.png";
import ga from "./assets/ga.png";
import skinpic from "./assets/skinpic.png";
import rl from "./assets/rl.png";
import halfcarmodel from "./assets/halfcardmodel.png";
import gat from "./assets/GAT.png";
import graphrewiring from "./assets/graphrewiring.png";
import graphsage from "./assets/GraphSage.jpg";
import flicker from "./assets/flicker.png";
import hybridFlicker from "./assets/publications/hybrid_method_flicker.jpg";
import maceMolecule from "./assets/publications/mace_molecule.gif";
import sestCertificate from "./assets/publications/Presentation Attendance Certification.pdf";
import iemdcLogo from "./assets/publications/IEMDC.png";
import romiePublication from "./assets/publications/romie.png";
import robot from "./assets/projects/robot.png";
import architecture from "./assets/projects/overall architecutre.png";
import tokyo from "./assets/projects/tokyo.jpg";
import coming from "./assets/projects/coming.png";
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
import fan from "./assets/projects/fan.png";
import ai from "./assets/projects/ai.png";
import cr from "./assets/projects/cr.png";
import romie from "./assets/projects/website.gif";
import romie1 from "./assets/projects/romie1.png";
import romie2 from "./assets/projects/romie2.png";
import poster from "./assets/projects/poster.png";
import cctvcar from "./assets/projects/cctvcar.png";
import cctvpeople from "./assets/projects/cctvpeople.png";
import coco from "./assets/projects/coco.png";
import romiepeople from "./assets/projects/romiepeople.png";
import romiestone from "./assets/projects/romiestone.png";
import moonlander from "./assets/projects/moonlander.gif";
import atari from "./assets/projects/atari.gif";
import taxi from "./assets/projects/taxi.gif";
import website from "./assets/projects/website.png";
import cs5050 from "./assets/projects/cs5050.png";
import stc from "./assets/projects/stc.png";
import belieth from "./assets/projects/belieth.png";
import etfiq from "./assets/projects/etfiq.png";
import parableweb from "./assets/projects/websiteargentparser.png";
import goldnewsletter from "./assets/projects/goldnewsletter.png";
import mppinspector from "./assets/projects/mppinspetor.png";
import cyd from "./assets/projects/cyd.jpg";

// --- Accreditation images ---
import ffh from "./assets/techstack/ffh.svg";
import deeplearningai from "./assets/techstack/deeplearningai.png";
import udemy from "./assets/techstack/udemy.png";
import harvardcs50 from "./assets/techstack/harvardcs50.png";
import harvardx from "./assets/techstack/harvardx.jpeg";
import google from "./assets/techstack/icons8-google.svg";
import libf from "./assets/techstack/LIBF.jpg";
import aefe from "./assets/techstack/aefe.png";
import ielts from "./assets/techstack/IELTS_logo.png";
import brevet from "./assets/techstack/Ministère de la Culture.svg";
import redcross from "./assets/techstack/malt.png";

const PUBLIC = process.env.PUBLIC_URL || "";

// -----------------------------------------------------------------------------
// Identity
// -----------------------------------------------------------------------------
export const personalDetails = {
  name: "Alexandre Benoit",
  suffix: "MEng, MPhil",
  role: "Machine Learning Engineer & Scientist",
  location: "London · New York",
  tagline:
    "Machine Learning Engineer & Scientist from the University of Cambridge (MPhil), working on agentic systems and physical-world problems, with a growing focus on forward-deployed AI — shipping models and agents directly into client-facing production systems.",
  img: profile,
  intro:
    "I build efficient machine learning models for energy-management systems and physical-world problems, with a focus on model interpretability, graph neural networks, and inference efficiency.",
  about: `I am studying Machine Learning and Machine Intelligence (MPhil) at the University of Cambridge and hold a Master's (MEng) in Integrated Mechanical & Electrical Engineering from the University of Bath. Originally from France and living in London since 2017, I am deeply passionate about developing efficient Machine Learning models for energy-management systems, such as batteries and charging stations, and equally committed to model interpretability. My current research interests include Graph Neural Networks and inference efficiency.`,
  about1: `Outside of research I am an active, sporty person: tennis is my primary sport, and I compete in the British University Karting Championship. I also enjoy handball, golf, surfing, snowboarding, boxing, calisthenics and triathlons, play the guitar and am a huge fan of jazz.`,
};

export const galleryImages = [
  { src: galleryAbout, alt: "Alexandre Benoit" },
  { src: gallery1, alt: "Off the clock" },
  { src: gallery2, alt: "Off the clock" },
  { src: gallery3, alt: "Off the clock" },
  { src: gallery4, alt: "Off the clock" },
  { src: gallery5, alt: "Off the clock" },
  { src: gallery6, alt: "Off the clock" },
  { src: gallery7, alt: "Off the clock" },
  { src: gallery8, alt: "Off the clock" },
  { src: gallery9, alt: "Off the clock" },
  { src: gallery10, alt: "Off the clock" },
];

export const offTheClock = {
  intro:
    "I have a builder's mind — a CTO at heart. I love shipping apps and solving real-life problems I have run into myself, turning ideas into working products. I'm a researcher at heart, endlessly curious, and always up for a good collaboration.",
  collaborate:
    "If you're working on something interesting — or just want to swap ideas — I'd love to hear from you.",
  travel:
    "Travelling is a real passion of mine: I've explored more than 37 countries and counting, and every trip feeds my curiosity and the way I approach problems.",
  countries: "37+",
  sports: [
    { name: "Tennis", emoji: "🎾" },
    { name: "Karting", emoji: "🏎️" },
    { name: "Guitar", emoji: "🎸" },
    { name: "Boxing", emoji: "🥊" },
    { name: "Skating", emoji: "🛹" },
  ],
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/alexandre-benoit-cam/",
  github: "https://github.com/amgb20?tab=repositories",
  googlescholar: "https://scholar.google.com/citations?user=jiiTDvcAAAAJ&hl=en",
};

export const contactDetails = {
  email: "ab3149@cam.ac.uk",
  email_2: "alexandre.benoit4000@gmail.com",
};

export const languageDetails = [
  { name: "French", flag: "🇫🇷", level: "Native", cefr: "C2" },
  { name: "English", flag: "🇬🇧", level: "Fluent", cefr: "C2" },
  { name: "Spanish", flag: "🇪🇸", level: "Advanced", cefr: "B2" },
  { name: "Greek", flag: "🇬🇷", level: "Beginner", cefr: "" },
];

// -----------------------------------------------------------------------------
// Education
// -----------------------------------------------------------------------------
export const eduDetails = [
  {
    university: "University of Cambridge",
    course: "MPhil in Machine Learning & Machine Intelligence — Clare College",
    location: "Cambridge, UK",
    duration: "2024 – 2025",
    badge: "GPA A-",
    logo: uniCambridge,
    dissertation: [
      "Speeding Up MACE: Low-Precision Tricks for Equivariant Force Fields — profiled the MACE SO(3)-equivariant GNN end-to-end, compared the e3nn and NVIDIA cuEquivariance backends, and developed a low-precision execution policy (BF16/FP16 linear layers with FP32 accumulation) delivering up to ~12x combined inference speedup while preserving physical fidelity. Published as arXiv:2510.23621.",
    ],
    modules: [
      "Introduction to Machine Learning (MLMI1)",
      "Probabilistic Machine Learning",
      "Machine Learning and the Physical World (L48)",
      "Speech Recognition (MLMI2)",
      "Deep Learning and Structured Data (4F10)",
      "Ethical Considerations in ML & MI (MLMI3)",
      "Advanced Machine Learning (MLMI4)",
      "Reinforcement Learning and Decision Making (MLMI7)",
      "Geometric Deep Learning (L65)",
    ],
    researchFocus: [
      "Low-precision & mixed-precision deep learning on accelerators",
      "Equivariant graph neural networks for molecular dynamics",
      "Inference efficiency & model interpretability",
    ],
    techstack: ["Python", "PyTorch", "NumPy", "JAX", "Weights & Biases"],
  },
  {
    university: "University of Bath",
    course: "MEng in Integrated Mechanical & Electrical Engineering",
    location: "Bath, UK",
    duration: "2019 – 2024",
    badge: "First Class — Top 2 of cohort",
    logo: uniBath,
    dissertation: [
      "Master's Thesis: A Semi-Supervised Deep Kernel Learning framework for Lithium-Ion Battery State-of-Health estimation — established a new state of the art on the NASA randomised battery dataset (24% MAPE improvement). Accepted at Energy and AI.",
      "Autonomous Mining Path Planning via Machine Learning (ROMIE global path planning).",
    ],
    modules: [
      "EE10168 Circuit Theory",
      "EE10213 Mathematics 1",
      "EE10239 Robotics Design",
      "ME10003 Thermodynamics",
      "ME10004 Solid Mechanics 1",
      "EE10169 Digital Electronics",
      "EE10170 Robotics & Mechatronic Systems",
      "EE10214 Mathematics 2",
      "EE10240 Integrated Design and Materials",
      "ME10010 Solid Mechanics 2",
      "EE20004 Electronic Devices & Circuits",
      "EE20021 Digital Systems Design",
      "EE20085 Electromagnetics",
      "EE20223 Design and Manufacture of Electromechanical Systems",
      "ME20014 Modelling Techniques 1",
      "EE10135 Signals, Systems and Communications",
      "EE20099 Electrical Systems & Power Electronics",
      "EE20100 Integrated Control System Design",
      "ME10009 Fluid Mechanics",
      "ME20021 Modelling Techniques 2",
      "EE20062 Industrial Placement",
      "EE20083 Signal Processing",
      "EE30041 Control Engineering",
      "EE30123 Power Electronics & Drives",
      "EE30186 Integrated Engineering",
      "ME30197 Business Processes",
      "EE30147 Group Design and Business Project I",
      "EE40148 Group Design and Business Project II",
      "EE40098 Computational Intelligence",
      "ME40055 Energy & the Environment",
      "ME40064 System Modelling & Simulation",
      "ME40212 Biomimetics",
      "ME40331 Robotics Engineering",
      "XX40197 Integrated Engineering Final Year Project",
    ],
    researchFocus: [
      "Machine learning for energy-management systems",
      "Autonomous systems & path planning",
      "Time-series prediction & deep learning",
    ],
    activities: [
      "Academic Representative — University of Bath Student Union",
      "Treasurer — University of Bath Skydiving Society",
    ],
    results: [
      "Overall: First Class Honours — 73% — GPA 4.0/4.0 (ranked 2nd of cohort)",
      "Year 1: Upper 2:1 — 66%",
      "Year 2: Upper 2:1 — 66%",
      "Year 3: First — 74%",
      "Year 4: First — 73%",
    ],
    techstack: [
      "Python",
      "Matlab",
      "Simulink",
      "C++",
      "Arduino",
      "OrCAD",
      "Autodesk Inventor",
      "COMSOL",
    ],
  },
  {
    university: "Lycée Français Charles de Gaulle",
    course: "French Scientific Baccalauréat",
    location: "London, UK",
    duration: "2017 – 2019",
    badge: "Awarded with Honours",
    logo: uniLycee,
    results: [
      "Science stream — Mathematics (A), Physics (A), Chemistry (A).",
    ],
  },
  {
    university: "Saint Jean de Passy",
    course: "French Brevet",
    location: "Paris, France",
    duration: "2012 – 2017",
    badge: "Awarded with Honours",
    logo: uniStJean,
  },
];

export const awardsDetails = [
  {
    title: "Group Business Design Project EEE Award",
    issuer: "University of Bath",
    note: "1st Prize for most innovative Engineering Project",
    location: "Bath, Somerset, UK",
    date: "Jun 2023",
  },
];

export const accreditationsDetails = [
  {
    Position:
      "CS50's Web Programming with Python and JavaScript (incl. 6 projects)",
    Company: "Harvard Computer Science Department",
    Img: harvardcs50,
    Duration: "June 2023",
    Credential_ID: "6652fa39-4234-4f78-910b-aa388a37a675",
    Hyperlink:
      "https://cs50.harvard.edu/certificates/6652fa39-4234-4f78-910b-aa388a37a675",
  },
  {
    Position: "Convolutional Neural Networks",
    Company: "DeepLearning.AI",
    Img: deeplearningai,
    Duration: "August 2023",
    Credential_ID: "TA27A2WN5XSP",
    Hyperlink: "https://coursera.org/verify/TA27A2WN5XSP",
  },
  {
    Position: "Data Science: Machine Learning",
    Company: "HarvardX",
    Img: harvardx,
    Duration: "August 2023",
    Credential_ID: "861747a8bf3d48e3965678ca0b6bf4f3",
    Hyperlink:
      "https://courses.edx.org/certificates/861747a8bf3d48e3965678ca0b6bf4f3",
  },
  {
    Position:
      "Introduction to TensorFlow for AI, Machine Learning, and Deep Learning",
    Company: "DeepLearning.AI",
    Img: deeplearningai,
    Duration: "August 2023",
    Credential_ID: "J9HJ4M63K5V4",
    Hyperlink: "https://coursera.org/share/fbc3f40dded89cc8c181926726b97988",
  },
  {
    Position: "Neural Networks and Deep Learning",
    Company: "DeepLearning.AI",
    Img: deeplearningai,
    Duration: "August 2023",
    Credential_ID: "T23U4VZRSH7M",
    Hyperlink: "https://coursera.org/verify/T23U4VZRSH7M",
  },
  {
    Position: "Convolutional Neural Networks in TensorFlow",
    Company: "DeepLearning.AI",
    Img: deeplearningai,
    Duration: "July 2023",
    Credential_ID: "ZG79GLZMBHTC",
    Hyperlink: "https://coursera.org/verify/ZG79GLZMBHTC",
  },
  {
    Position: "Hill Climbing and Simulated Annealing AI Algorithms",
    Company: "Udemy",
    Img: udemy,
    Duration: "April 2023",
    Credential_ID: "UC-1de9dfdd-1103-4099-befb-f2acc4803fe9",
    Hyperlink: "https://ude.my/UC-1de9dfdd-1103-4099-befb-f2acc4803fe9",
  },
  {
    Position: "ROS2 For Beginners (ROS Foxy, Humble — 2023)",
    Company: "Udemy",
    Img: udemy,
    Duration: "April 2023",
    Credential_ID: "UC-9a036c6b-7519-47a2-8cd9-42d2f0b940ab",
    Hyperlink:
      "https://www.udemy.com/certificate/UC-9a036c6b-7519-47a2-8cd9-42d2f0b940ab/",
  },
  {
    Position: "ROS2 Nav2 [Navigation 2 Stack] — with SLAM and Navigation",
    Company: "Udemy",
    Img: udemy,
    Duration: "April 2023",
    Credential_ID: "UC-b8f8136f-9f3a-4065-9d3f-c694d75bc8cc",
    Hyperlink: "https://ude.my/UC-b8f8136f-9f3a-4065-9d3f-c694d75bc8cc",
  },
  {
    Position: "Google Machine Learning Foundational Courses",
    Company: "Google Developers Student Club",
    Img: google,
    Duration: "March 2023",
  },
  {
    Position:
      "Advanced Level 6 Diploma in Trading and Financial Market Analysis",
    Company: "The London Institute of Banking & Finance",
    Img: libf,
    Duration: "September 2020",
    Hyperlink: `${PUBLIC}/pdf/Advanced_Level_6_Diploma.pdf`,
  },
  {
    Position: "French Scientific Baccalauréat — Honours",
    Company: "AEFE — Agence pour l'enseignement français à l'étranger",
    Img: aefe,
    Duration: "June 2019",
  },
  {
    Position: "IELTS Official Diploma",
    Company: "IELTS",
    Img: ielts,
    Duration: "November 2017",
  },
  {
    Position: "Brevet des Collèges — Honours",
    Company: "France's Ministry of National Education",
    Img: brevet,
    Duration: "June 2016",
  },
  {
    Position: "First Aid Certificate",
    Company: "French Red Cross Foundation",
    Img: redcross,
    Duration: "April 2016",
  },
  {
    Position: "Handball Referee",
    Company: "Fédération Française de Handball 🇫🇷",
    Img: ffh,
    Duration: "September 2013",
  },
];

// -----------------------------------------------------------------------------
// Experience
// -----------------------------------------------------------------------------
export const workDetails = [
  {
    Company: "Savanta",
    Position: "ML/AI Engineer & Solution Architect",
    Location: "London, UK",
    Type: "Full Time",
    Duration: "Jan 2026 – Present",
    logo: logoSavanta,
    bullets: [
      "Architect and build Virtual Personas, Synthetic Personas and ACMD (Automatic Clustering of Market Data) — production AI agentic orchestration and unsupervised machine-learning platforms for market research.",
      "Built an unsupervised clustering market-segmentation pipeline replacing 1-3 months of work in hours, a synthetic-respondent generation engine, and a society-simulation system, all driven by LLM agents.",
      "Own the full stack across six microservices (FastAPI, React, TypeScript, PostgreSQL, MongoDB, Redis) on Azure, with agent pipelines on LangChain, LangGraph and Langfuse routing across OpenAI and Anthropic models.",
      "Built evaluation harnesses validating outputs against ground-truth distributions, ran 100+ prompt-fidelity benchmarks, and led a full security audit.",
      "Products generated just under £1M in client revenue in their first 5 months; present findings to C-suite stakeholders (JP Morgan, Chase, FTI, MBooth, BPP).",
    ],
    techstack: [
      "Python",
      "TypeScript",
      "React",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Langfuse",
      "Azure",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "OpenAI",
      "Anthropic",
    ],
    projects: [
      {
        title: "Virtual Personas — Synthetic Market-Research Platform",
        private: false,
        description:
          "A production AI platform for market research that turns real audience-segment data into rich, queryable synthetic personas and virtual survey respondents, and runs LLM-driven focus-group simulations on them. Helped in architecting and building part of the full system: a React + TypeScript front end over six Python (FastAPI) microservices — an API gateway, persona builder, focus-group simulator, file storage and a data connector — deployed on Azure. The core is a wave-based virtual-respondent generation pipeline combining LLM agents orchestration (ingestion, archetype/'flavour' generation, batch generation). Data is persisted in a hybrid PostgreSQL + MongoDB store with per-project access control and Langfuse tracing on every LLM call.",
        techstack:
          "React, TypeScript, Python, FastAPI, LangChain, LangGraph, Langfuse, Google Gemini, OpenAI, Anthropic, PostgreSQL, MongoDB, Redis, Azure Blob Storage, Docker, Azure App Service, Auth0",
        deliverables: [
          "Microservice architecture",
          "Agentic LLM orchestration",
          "Distributed systems",
          "Statistical calibration",
          "Streaming UX",
        ],
        links: [
          { label: "Open live app", url: "https://virtualpersonas.savanta.com/login" },
        ],
      },
      {
        title: "Synthetic Respondents — Grounded LLM Digital-Twin Generation for Society Simulation",
        private: true,
        description:
          "A research and insight tool that lets analysts explore real respondent survey panels (a world of millions of respondents across many variables) and build LLM-simulated respondents grounded in that data. A user describes an audience in plain English; a Gemini agent performs retrieval over the data dictionary to translate it into structured SQL filters (a two-pass pipeline: database filtering, then LLM 'impersonation' screening for traits the survey never asked) and is cross-checked with real census data to make sure the distribution of the cohort fits real-life distributions, with indications of statistical drift displayed. Selected cohorts feed an OASIS Reddit-style multi-agent simulation, which I analyse for sentiment, engagement and network/community structure. I also built the proprietary-dataset upload path with a two-pass PII-detection gate and irreversible pseudonymisation, saved populations/segments, a full test suite (32 test files), and led the security and compliance documentation.",
        techstack:
          "Python, FastAPI, React, Express, PostgreSQL, MongoDB, Neo4j, Google Gemini, Docker, Azure",
        deliverables: [
          "RAG",
          "LLM screening",
          "Data engineering",
          "PII / compliance engineering",
          "Graph analysis",
          "Testing",
        ],
        links: [],
      },
      {
        title: "ACMD — Automatic Clustering of Market Data",
        private: true,
        description:
          "An unsupervised machine-learning pipeline that automates customer/market segmentation — replacing 1–3 months of manual analysis with a reproducible run. It benchmarks ~10 clustering algorithms (K-Means, Agglomerative, GMM/Bayesian GMM, Spectral, HDBSCAN, OPTICS, UMAP→HDBSCAN) across four feature spaces, scoring each on five metrics plus a bootstrap-stability score and an 'actionability' gate, then deterministically selects the top segmentations. For each winning cluster it computes a statistical signature (z-scored deltas, percentiles, distinguishing features, representative customers) and generates a Gemini persona report under a strict citation contract — every numeric claim must cite a field in the signature, validated post-hoc to reject hallucinations.",
        techstack:
          "Python, scikit-learn, HDBSCAN, UMAP, PCA, Google Gemini, Pydantic, Jupyter, Docker",
        deliverables: [
          "Unsupervised ML",
          "Cluster-validity evaluation",
          "Reproducibility / determinism",
          "Structured LLM output with hallucination guardrails",
        ],
        links: [],
      },
    ],
  },
  {
    Company: "University of Cambridge",
    Position:
      "ML Engineer & Research Assistant — Lab of Prof. José Miguel Hernández-Lobato",
    Location: "Cambridge, UK",
    Type: "Research",
    Duration: "May 2025 – Sep 2025",
    logo: uniCambridge,
    bullets: [
      "Developed low-precision execution policies for the MACE SO(3)-equivariant graph neural network used in molecular-dynamics force fields.",
      "Profiled MACE end-to-end and per-block; compared the e3nn and NVIDIA cuEquivariance backends; assessed FP64/FP32/BF16/FP16 (with FP32 accumulation) for inference, NVT/NPT water simulations and training.",
      "Showed cuEquivariance reduces inference latency ~3x, with a further ~4x from casting linear layers to BF16/FP16, while preserving energies and thermodynamic observables. Published as arXiv:2510.23621.",
    ],
    techstack: ["Python", "PyTorch", "cuEquivariance", "NumPy", "Weights & Biases"],
  },
  {
    Company: "University College London (UCL)",
    Position: "ML Engineer & Research Assistant — e-Motion Lab, Dr. Pedram Asef",
    Location: "London, UK",
    Type: "Research",
    Duration: "Jun 2023 – Present",
    logo: uniUCL,
    bullets: [
      "Led empirical ML research on energy systems with publications in Energy and AI.",
      "Designed a novel semi-supervised deep kernel learning framework for battery state-of-health estimation (Encoder-T + GRU + Gaussian Process Regression with a custom composite LIN kernel) — new state of the art on the NASA randomised battery dataset (24% MAPE improvement).",
      "Co-developed an AI-driven hybrid method for flicker estimation in power systems. Trained models on GPU clusters (RTX 3080 Ti) with Bayesian hyperparameter optimisation via Weights & Biases.",
    ],
    techstack: ["Python", "PyTorch", "GPyTorch", "Weights & Biases"],
  },
  {
    Company: "University of Bath",
    Position: "Machine Learning Engineer — Research Assistant",
    Location: "Bath, UK",
    Type: "Research",
    Duration: "Jun 2023 – Sep 2024",
    logo: uniBath,
    bullets: [
      "Conducted ML research on energy management and autonomous systems, resulting in three peer-reviewed publications.",
      "Survey of Google OR-Tools and ML for global path planning in autonomous vehicles (Advanced Intelligent Systems, 2024); multi-agent RL for scheduling commercial EV charging stations (UPEC 2024); AI-driven hybrid flicker estimation (SEST 2024).",
      "Built end-to-end ML pipelines for time-series prediction, RL environment design and deep-learning model evaluation.",
    ],
    techstack: ["Python", "Matlab", "Simulink", "TensorFlow"],
  },
  {
    Company: "Team Bath Racing Electric",
    Position: "Software Engineer — Autonomous Driving",
    Location: "Bath, UK",
    Type: "Full Time",
    Duration: "Sep 2022 – Jun 2023",
    logo: logoTBR,
    bullets: [
      "Developed and integrated software components for the autonomous-driving stack in C++ and Python, including Model Predictive Control (MPC) algorithms.",
      "MCP integration of AI computer-vision tools for the perception pipeline, and API integration with the Dynamic Driving Task system for real-time vehicle control.",
    ],
    techstack: ["C++", "Python", "MCP"],
  },
  {
    Company: "Jaguar TCS Formula E",
    Position: "Software Engineer",
    Location: "Grove, Oxfordshire, UK",
    Type: "Full Time",
    Duration: "Sep 2021 – May 2022",
    logo: logoJaguar,
    bullets: [
      "Built and maintained large-scale real-time driving-simulation environments in C++ and MATLAB for Formula E race-strategy R&D.",
      "Developed telemetry-driven feedback systems, contributed to torque-vectoring control logic, and extended the simulation toolchain with a custom web interface for engineers.",
    ],
    techstack: ["C++", "Matlab"],
  },
];

export const charitiesDetails = [
  {
    Position: "Academic Representative",
    Company: "University of Bath Student Union",
    Location: "Bath, UK",
    Type: "Part Time",
    Duration: "Oct 2023 – Jun 2024",
    logo: logoSubath,
    description: "Academic representative of Final Year IMEE students.",
  },
  {
    Position: "CEO & Co-Founder",
    Company: "Belieth",
    Type: "Startup",
    Duration: "Jan 2022 – Oct 2022",
    logo: logoBelieth,
    description:
      "Belieth solves many of the problems facing modern charities today using the power of Web 3.0 and AI regenerative-art models to create NFTs. NFTs represent a donation through investment, creating a potentially profitable donation — a win-win for charities and donors. Community building in the Metaverse builds donor-to-charity trust and makes participants feel included. NFT owners can also allocate the community fund within the charity, giving owners a real impact on the beneficiaries.",
  },
  {
    Position: "Race Strategy Engineer",
    Company: "M3M — Motorsport Marketing Management",
    Duration: "Aug 2020 – Sep 2022",
    logo: logoM3M,
  },
  {
    Position: "Volunteer Chef Assistant",
    Company: "Notre Dame de France Church Charity",
    Location: "London, UK",
    Type: "Part Time",
    Duration: "Sep 2017 – Jul 2019",
  },
  {
    Position: "Research Assistant",
    Company: "Imperial College London",
    Location: "Greater London, England, United Kingdom",
    Type: "Internship",
    Duration: "Jul 2018 · 1 mo",
    logo: logoImperial,
    description:
      "Imperial College, department of electric, electrical and robotics engineering.\n\nWorking with Dr. Antoine Cully. Coding in C++. I was solving coding issues of an Artificial Intelligence program called PAL; a medical program which helps children with diseases such as diabetes. This application needs to be utilized on a daily basis in order to catch the patient's feelings. Children sometimes have emotional breakdowns because of their sickness; they interact with the robot (the underlying AI), which learns patient behaviour and detects the patient's feelings, so the hospital staff know when the patient is in a good mood or not.\n\n- Manipulating the PAL app and running fake users that interact with the robot.\n- Going through error messages in the code which led to the app crashing.\n- Reporting and solving the issue by programming.\n\nExtremely enjoyed the research universe. Really captivating and frustrating job.",
  },
  {
    Position: "Volunteer",
    Company: "Mama Love's Childcare Centre",
    Location: "Cape Town, South Africa",
    Type: "Part Time",
    Duration: "Feb 2017",
  },
  {
    Position: "Official French Handball Referee",
    Company: "French Handball Federation",
    Location: "France",
    Type: "Part Time",
    Duration: "Sep 2013 – Jul 2017",
    logo: logoFFHandball,
  },
  {
    Position: "Ball Boy — French Open, Roland Garros",
    Company: "French Tennis Federation",
    Location: "Stade Roland Garros, Paris, France",
    Type: "Seasonal",
    Duration: "May 2014 – Jul 2014",
    logo: logoRolandGarros,
  },
];

// -----------------------------------------------------------------------------
// Publications & talks (highlight)
// category: "journal" | "conference" | "preprint" | "colloquium"
// image resolves from public/publications/<file> and falls back to a bundled
// figure via `fallbackImage` if the file has not been added yet.
// -----------------------------------------------------------------------------
export const publications = [
  // --- Journal papers ---
  {
    category: "journal",
    title:
      "Navigating Intelligence: A Survey of Google OR-Tools and Machine Learning for Global Path Planning in Autonomous Vehicles",
    authors: "A. Benoit, P. Asef",
    venue: "Advanced Intelligent Systems (Wiley), 6(9), 2300840",
    year: "2024",
    image: romiePublication,
    fallbackImage: robot,
    citedBy: 10,
    abstract:
      "A survey comparing Google OR-Tools and machine-learning approaches for global path planning in autonomous vehicles, benchmarking traditional, meta-heuristic and learning-based strategies for the Travelling Salesman Problem.",
    doi: "10.1002/aisy.202300840",
    links: [
      { label: "Read paper", url: "https://doi.org/10.1002/aisy.202300840" },
      {
        label: "GitHub",
        url: "https://github.com/amgb20/ROMIE---Global-Path-Planning",
      },
    ],
  },
  {
    category: "journal",
    title:
      "A Hybrid Artificial Intelligence Method for Estimating Flicker in Power Systems",
    authors: "J. Enayati, P. Asef, A. Benoit",
    venue: "Energy and AI (Elsevier), vol. 22, 100614",
    year: "2025",
    image: hybridFlicker,
    fallbackImage: flicker,
    citedBy: 2,
    abstract:
      "A hybrid method combining H-infinity filtering with an ADALINE neural network to estimate voltage-flicker components in power distribution systems, outperforming FFT and DWT-based estimators.",
    doi: "10.1016/j.egyai.2025.100614",
    links: [
      { label: "Read paper", url: "https://doi.org/10.1016/j.egyai.2025.100614" },
    ],
  },
  {
    category: "journal",
    title:
      "Semi-Supervised Learning with Physicochemical Health Indicators Using an Encoder–Gaussian Process Framework for Battery State of Health Estimation under Dynamic Discharge Conditions",
    authors: "A. Benoit, P. Asef, H. Yuan, R. Jafari",
    venue: "Energy and AI (Elsevier), 100748",
    year: "2026",
    image: `${PUBLIC}/publications/battery-soh-energy-ai.jpg`,
    fallbackImage: fypabstract,
    abstract:
      "A semi-supervised Encoder–GRU + Gaussian Process Regression framework that estimates lithium-ion battery state of health from only 15% labelled dynamic-discharge data, setting a new state of the art on the NASA randomised battery dataset.",
    doi: "10.1016/j.egyai.2026.100748",
    links: [
      { label: "Read paper", url: "https://doi.org/10.1016/j.egyai.2026.100748" },
      { label: "GitHub", url: "https://github.com/amgb20/FYP" },
    ],
  },

  // --- Conference papers ---
  {
    category: "conference",
    title:
      "Intelligent Energy Management Using Multi-Agent Dynamic Learning for Scheduling Commercial Electric Vehicle Charging Stations",
    authors: "K. Chan, P. Asef, A. Benoit",
    venue:
      "59th International Universities Power Engineering Conference (UPEC), Cardiff, UK",
    year: "2024",
    image: `${PUBLIC}/publications/upec-ev-charging.jpg`,
    fallbackImage: architecture,
    citedBy: 1,
    abstract:
      "A multi-agent reinforcement-learning approach for scheduling commercial electric-vehicle charging stations, using actor-critic networks to optimise energy management under dynamic demand.",
    doi: "10.1109/UPEC61344.2024.10892506",
    links: [
      {
        label: "Read paper",
        url: "https://doi.org/10.1109/UPEC61344.2024.10892506",
      },
    ],
  },
  {
    category: "conference",
    title:
      "A Novel AI-driven Hybrid Method for Flicker Estimation in Power Systems",
    authors:
      "J. Enayati, P. Asef, A. Yousefi, M. B. Asadpourahmadchali, A. Benoit",
    venue:
      "2024 International Conference on Smart Energy Systems and Technologies (SEST)",
    year: "2024",
    image: `${PUBLIC}/publications/sest-flicker.jpg`,
    fallbackImage: flicker,
    citedBy: 3,
    abstract:
      "A hybrid H-infinity filter and artificial-neural-network method for accurate flicker estimation in power systems, validated through Monte-Carlo simulation and real-world data.",
    doi: "10.1109/SEST61601.2024.10694472",
    links: [
      {
        label: "Read paper",
        url: "https://doi.org/10.1109/SEST61601.2024.10694472",
      },
      { label: "Attendance certificate", url: sestCertificate },
    ],
  },

  // --- Preprints ---
  {
    category: "preprint",
    title: "Speeding Up MACE: Low-Precision Tricks for Equivariant Force Fields",
    authors: "A. Benoit",
    venue: "arXiv preprint (cs.LG), arXiv:2510.23621",
    year: "2025",
    image: maceMolecule,
    fallbackImage: coming,
    citedBy: 1,
    abstract:
      "Low-precision execution policies for the MACE SO(3)-equivariant graph neural network: profiling e3nn vs NVIDIA cuEquivariance backends and BF16/FP16 casts to reach up to ~12x combined inference speedup while preserving physical fidelity.",
    doi: "10.48550/arXiv.2510.23621",
    links: [
      { label: "Read paper", url: "https://arxiv.org/abs/2510.23621" },
    ],
  },
  {
    category: "preprint",
    title:
      "Structural Invariance Matters: Rethinking Graph Rewiring through Graph Metrics",
    authors: "A. Benoit, C. Aitken, Y. He",
    venue: "arXiv preprint (cs.LG), arXiv:2510.20556",
    year: "2025",
    image: `${PUBLIC}/publications/structural-invariance.jpg`,
    fallbackImage: graphrewiring,
    citedBy: 1,
    abstract:
      "Investigates how graph-rewiring techniques affect structural properties and GNN performance, showing that successful methods preserve local structure while altering global connectivity to mitigate over-squashing.",
    doi: "10.48550/arXiv.2510.20556",
    links: [
      { label: "Read paper", url: "https://arxiv.org/abs/2510.20556" },
      { label: "GitHub", url: "https://github.com/amgb20/L65-Mini-Project" },
    ],
  },

  // --- Colloquium (kept) ---
  {
    category: "colloquium",
    title:
      "Colloquium & Seminar — University of Tokyo: Evaluative Comparison of Google OR-Tools and ML Algorithms for Global Path Planning in UGVs",
    authors: "A. Benoit, P. Asef",
    venue: "Invited talk — University of Tokyo",
    year: "2023",
    image: `${PUBLIC}/publications/tokyo-colloquium.jpg`,
    fallbackImage: tokyo,
    abstract:
      "Invited colloquium and seminar presentation of an evaluative comparison between Google OR-Tools and machine-learning algorithms for global path planning in unmanned ground vehicles.",
    links: [
      {
        label: "View slides",
        url: "https://1drv.ms/p/s!AmHRT2msrAMArf1MtlZUSpuPhfjCGw?e=sHcTBG",
      },
    ],
  },
];

export const publicationSections = [
  { id: "journal", label: "Journal Papers" },
  { id: "conference", label: "Conference Papers" },
  { id: "preprint", label: "Preprints" },
  { id: "colloquium", label: "Colloquia & Talks" },
];

export const reviewerService = [
  {
    role: "Invited Peer Reviewer — Machine Learning",
    venue:
      "IEEE International Electric Machines and Drives Conference (IEMDC 2025)",
    location: "Houston, Texas, USA",
    date: "May 18–21, 2025",
    logo: iemdcLogo,
  },
];

export const featuredPublications = publications
  .filter((p) => p.category === "journal" || p.category === "conference")
  .slice(0, 3);

// -----------------------------------------------------------------------------
// Projects (university + side) — normalized
// -----------------------------------------------------------------------------
const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 60);

const splitTech = (tech) => {
  if (!tech) return [];
  return tech
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t && t.toLowerCase() !== "none");
};

const isReal = (url) =>
  url && url.trim() !== "" && url.trim().toLowerCase() !== "none";

const buildLinks = (raw) => {
  const links = [];
  if (isReal(raw.previewLink)) {
    links.push({ label: raw.previewLabel || "Read report", url: raw.previewLink });
  }
  if (isReal(raw.githubLink)) {
    if (raw.githubLink.includes("github.com")) {
      links.push({ label: "GitHub", url: raw.githubLink });
    } else if (raw.githubLink !== raw.previewLink) {
      links.push({ label: "View link", url: raw.githubLink });
    }
  }
  if (isReal(raw.website)) {
    links.push({ label: "Watch video", url: raw.website });
  }
  if (isReal(raw.pitchdecklink)) {
    links.push({ label: "Pitch deck", url: raw.pitchdecklink });
  }
  return links;
};

// Raw project groups. category: "university" | "side".
const projectGroups = [
  {
    category: "university",
    group: "University of Cambridge",
    groupKey: "cambridge",
    institution: "University of Cambridge",
    items: [
      {
        title:
          "Bayesian Optimization of Nonlinear Half-Car Models for Passenger Comfort",
        image: halfcarmodel,
        description:
          "Used Bayesian Optimization and Simulink modelling to optimise half-car suspension design for maximising passenger comfort over realistic road disturbances.",
        techstack:
          "Simulink, Matlab, Control Systems, Machine Learning (Bayesian Optimization)",
        previewLink: `${PUBLIC}/pdf/L48___ICML2025_Version.pdf`,
      },
      {
        title: "Reinforcement Learning and Decision Making",
        image: rl,
        description:
          "Implements and evaluates foundational Reinforcement Learning algorithms — Value Iteration, Policy Iteration, SARSA, Expected-SARSA and Q-Learning — on discrete grid-world tasks, analysing performance, hyperparameter sensitivity, and the potential of neural networks for scaling to more complex problems.",
        techstack: "Python",
        previewLink:
          "https://drive.google.com/file/d/1nKHmCfQGtKqgRx3ldgP19nsgrpQyDRK_/view?usp=drive_link",
        githubLink:
          "https://github.com/amgb20/MLMI7-Reinforcement-Learning---University-of-Cambridge/tree/main",
      },
      {
        title: "Graph Attention Network — Replication Paper",
        image: gat,
        description:
          "Replicates and extends the evaluation of Graph Attention Networks by comparing GAT and GATv2 across multiple benchmarks, revealing that while GATv2 offers slight performance gains, GAT remains more computationally efficient on large-scale datasets — highlighting key trade-offs between attention complexity and efficiency.",
        techstack: "Python, PyTorch Geometric",
        previewLink:
          "https://drive.google.com/file/d/14-I1q7fyFhCsTiU2KPKsfWQi7lL57cum/view?usp=drive_link",
        githubLink:
          "https://github.com/amgb20/MLMI7-Reinforcement-Learning---University-of-Cambridge",
      },
      {
        title: "Role of Structural Invariance in GNNs and Graph Transformers",
        image: graphrewiring,
        description:
          "Investigates how graph-rewiring techniques impact structural properties and GNN performance, revealing that successful methods typically preserve local structure while altering global connectivity to mitigate over-squashing.",
        techstack: "Python, GNNs, Graph Rewiring",
        previewLink:
          "https://drive.google.com/file/d/15DKfm_eUdcWSWm5kwwQn4wp5B7he3ucK/view?usp=drive_link",
        githubLink: "https://github.com/amgb20/L65-Mini-Project",
      },
      {
        title:
          "Exploratory Paper Analysis: Graph Neural Networks Use Graphs When They Shouldn't",
        image: graphsage,
        description:
          "Highlights two essential practices for approaching a new research topic — understanding its historical context (backward-thinking) and identifying future directions (forward-thinking) — using the paper 'Graph Neural Networks Use Graphs When They Shouldn't' as a case study.",
        techstack: "Python, PyTorch Geometric",
        previewLink:
          "https://drive.google.com/file/d/1tSIYPBaePfWZt0F8zrKBylZU2-GvrjH0/view?usp=drive_link",
        githubLink:
          "https://github.com/mayabechlerspeicher/Graph_Neural_Networks_Overfit_Graphs",
      },
    ],
  },
  {
    category: "university",
    group: "University of Bath — Year 4",
    groupKey: "bath-y4",
    institution: "University of Bath",
    items: [
      {
        title:
          "Master's Thesis — Deep Learning for Lithium-Ion Battery State of Health Estimation",
        image: fypabstract,
        description:
          "Proposes a semi-supervised deep kernel-learning approach for accurately estimating Lithium-ion battery State of Health under dynamic conditions — outperforming state-of-the-art methods using minimal labelled data and advanced models like bi-GRU, Transformers and TCNs — while offering interpretable insights via SHAP and gradient-based analysis.",
        techstack:
          "Python, Machine Learning, Matlab, Deep Learning, Neural Networks",
        previewLink:
          "https://drive.google.com/file/d/1tFR-VUoPFBXxIdMz16cviU8nvCNToBOj/view?usp=drive_link",
        githubLink: "https://github.com/amgb20/FYP",
      },
      {
        title: "Energy and Environment: Decarbonizing the Gold Mining Industry",
        image: goldmining,
        description:
          "Explores the gold mining industry's carbon footprint, energy consumption and environmental impact, proposing strategies for decarbonization and sustainable practice.",
        techstack: "",
        previewLink:
          "https://drive.google.com/file/d/10jiFqyWCRchEf-jzOQpXEssg4VMc-8kB/view?usp=drive_link",
      },
      {
        title: "Introduction to Machine Learning — MNIST Dataset",
        image: mnist,
        description:
          "Classifies handwritten digits using the MNIST dataset (70,000 images) through data preprocessing, feature extraction and machine-learning algorithms for accurate digit recognition.",
        techstack: "Python, Machine Learning",
        previewLink:
          "https://drive.google.com/file/d/1BqNyIVIwV2alOeWu8oq8PjTVLggKZB_6/view?usp=drive_link",
        githubLink: "https://github.com/amgb20/EE40098-Computational-Intelligence",
      },
      {
        title: "Computational Intelligence — Exploring the Genetic Algorithm",
        image: ga,
        description:
          "A comprehensive exploration of Genetic Algorithms as adaptive, nature-inspired optimizers — from basic numerical targets to advanced neural-network hyperparameter tuning — through systematic analysis of selection, crossover, mutation and encoding strategies.",
        techstack: "Python",
        previewLink:
          "https://drive.google.com/file/d/1ududlfypjSCEDZI56LTFfiQ6C2qPDarr/view?usp=drive_link",
        githubLink: "https://github.com/amgb20/EE40098-Computational-Intelligence",
      },
      {
        title: "Static MATLAB-Based FEM Modelling",
        image: skinpic,
        description:
          "Applies the Finite Element Method to solve the transient diffusion-reaction equation for modelling drug delivery through skin, enabling precise dosage estimation by discretizing complex skin geometry into finite elements.",
        techstack: "Matlab, FEM",
        previewLink:
          "https://drive.google.com/file/d/1uKz1DdsNb4PonddW7OXTrJk68fXI0ixx/view?usp=drive_link",
      },
    ],
  },
  {
    category: "university",
    group: "University of Bath — Year 3",
    groupKey: "bath-y3",
    institution: "University of Bath",
    items: [
      {
        title: "Global Path Planning for ROMIE, an Autonomous Sampling Robot",
        image: romie,
        description:
          "Examines the global path-planning subsystem within the autonomous software pipeline of Prospector Robotics' robot, ROMIE, analysing traditional algorithms, meta-heuristics and machine-learning techniques for the Travelling Salesman Problem.",
        techstack: "Python, Jupyter Notebook, Machine Learning",
        previewLink:
          "https://drive.google.com/file/d/1fSQ5WVSkfPHMhnmsKh10vxncjEJYJSJ8/view?usp=sharing",
        githubLink: "https://github.com/amgb20/ROMIE---Global-Path-Planning",
      },
      {
        title: "AI Formula Student DDT Car — API Software Integration",
        image: ai,
        description: "TBReAI test platform for the driverless (DDT) car.",
        techstack: "C, Python",
        previewLink:
          "https://drive.google.com/file/d/1vr2tvY04tQHvPofuIx55ZLN3ZaMxoKAH/view?usp=sharing",
        githubLink: "https://github.com/amgb20/DDT",
      },
      {
        title: "Fan Control Design Document",
        image: fan,
        description:
          "A strategy for developing variable-speed fan control software written in C on the MBED IDE, deployed to an ST Nucleo F070RB board. Supports open-loop preset speeds and closed-loop control via encoder and potentiometer, with LCD feedback.",
        techstack: "Mbed, C++, KiCAD",
        previewLink:
          "https://drive.google.com/file/d/1gWpS9EzCWez_HmLEPss8VjdJIzaudpGX/view?usp=sharing",
        githubLink: "https://github.com/amgb20/fan-control/tree/main",
      },
      {
        title: "Endeavour Mining — Business Case Study",
        image: endeavour,
        description:
          "Evaluates the environmental dimension of the mining industry's ESG plan through Endeavour Mining's performance, aligned with UNEP / COP 15 principles, and identifies improvement areas.",
        techstack: "",
        previewLink:
          "https://drive.google.com/file/d/1vr2tvY04tQHvPofuIx55ZLN3ZaMxoKAH/view?usp=sharing",
      },
      {
        title: "Clearpath Robotics — Business Case Study",
        image: cr,
        description:
          "A business case study of Clearpath Robotics, a leading autonomous-robotics company, examining its platforms, mapping software and developer tooling for autonomous mobile robotics.",
        techstack: "",
        previewLink:
          "https://drive.google.com/file/d/1Al1tniYjOkmM-vN3TJLMxD0DvSmIt-_k/view?usp=sharing",
      },
      {
        title: "Prospector Robotics — ROMIE Feasibility Study",
        image: romie1,
        description:
          "Feasibility study for Prospector Robotics Limited, a UK-based start-up revolutionising the mining industry with autonomous robotic solutions.",
        techstack: "",
        previewLink:
          "https://drive.google.com/file/d/1txg8kE3X87f7v4lWhgMc5u7F7_FSDQxM/view?usp=sharing",
      },
      {
        title: "Prospector Robotics — ROMIE Commercial Viability",
        image: romie2,
        description:
          "Commercial-viability analysis for Prospector Robotics Limited's autonomous mining robot, ROMIE.",
        techstack: "",
        previewLink:
          "https://drive.google.com/file/d/121U_yFT-wGYO1wBdlO935tlNEDSIyh5i/view?usp=sharing",
      },
      {
        title: "Prospector Robotics — ROMIE Poster",
        image: poster,
        description:
          "Summary research poster for Prospector Robotics Limited's autonomous mining robot, ROMIE.",
        techstack: "Publisher",
        previewLink:
          "https://drive.google.com/file/d/1HvaDMtRq_7k44bPHkVRS-SXYCOl33X1e/view?usp=sharing",
      },
    ],
  },
  {
    category: "university",
    group: "University of Bath — Year 2",
    groupKey: "bath-y2",
    institution: "University of Bath",
    items: [
      {
        title: "Numerical Modelling of Aerocapture for a Mission to Venus",
        image: venus,
        description:
          "Models the aerocapture method of space travel in MATLAB, determining the entry position for a spacecraft to loop around Venus via a shooting method, extending to orbit insertion, with a GUI for optimised user experience.",
        techstack: "Matlab",
        previewLink:
          "https://drive.google.com/file/d/1PvzXmXBFEjzHZcATGY2hMh6EO-5FDGxs/view?usp=sharing",
        githubLink:
          "https://github.com/amgb20/Modelling-Techniques-Numerical-Modelling-of-Aerocapture-for-a-Scienti-c-Mission-to-Venus",
      },
      {
        title: "Modelling of a Spacecraft Heat Shield Tile",
        image: heatshield,
        description:
          "Simulates the heat equations defining heat flow through a space shuttle's insulation tile using four Fourier-based methods in MATLAB, finding Crank-Nicolson to be unconditionally stable with the smallest inaccuracies.",
        techstack: "Matlab",
        previewLink:
          "https://drive.google.com/file/d/1dFO8TGxsjVa1j0Apulb_v81wew8PO6He/view?usp=sharing",
        githubLink:
          "https://github.com/amgb20/Modelling-of-a-spacecraft-heat-shield-tile",
      },
      {
        title:
          "Design & Manufacture of Electromechanical Systems — PCB of an Energy Harvester",
        image: harvester,
        description:
          "Design and manufacture of a PCB for an energy harvester as part of the electromechanical systems module.",
        techstack: "OrCAD, Autodesk Inventor",
        previewLink:
          "https://drive.google.com/file/d/1Idb_Ey_EATDszTLaMFTcDqn1vIxndTg0/view?usp=sharing",
      },
      {
        title:
          "Thermal Management of a DC-DC Converter",
        image: converter,
        description:
          "Designs a PCB that manages the thermal behaviour of a DC-DC converter in a fuel-tank control system, using OrCAD, PCB Orcad Design and Padstack.",
        techstack: "OrCAD, Autodesk Inventor",
        previewLink:
          "https://drive.google.com/file/d/1lhBMB5whaipRIuu7sRi1x8aXihQbDeYN/view?usp=sharing",
      },
      {
        title: "Amplitude Modulation / Demodulation",
        image: modulation,
        description:
          "Explores a range of modulation operations to simulate properties of a communication system using MATLAB Simulink, covering AM modulation, demodulation and noise issues.",
        techstack: "Matlab, Simulink",
        previewLink:
          "https://drive.google.com/file/d/1wGa9pvHVJHOK_zwk9IGCbe1JBwkNYxPA/view?usp=sharing",
      },
      {
        title: "Mouse Design — Automated Guided Vehicle",
        image: mouse,
        description:
          "Designs an electronic control system for an AGV ('mouse') that follows a taped-down wire using two magnetic sensors, with detailed circuit simulation and mechanical analysis.",
        techstack: "OrCAD",
        previewLink:
          "https://drive.google.com/file/d/1Sg4Nd7n21684VQCeQa4YX0xzS-LA4eMO/view?usp=sharing",
      },
      {
        title:
          "Electromagnetic Field Behaviour of Current-Carrying Wires and Charges",
        image: em,
        description:
          "Uses electromagnetic modelling with the finite-element program pdetool in MATLAB, outlining how the technique is implemented for different electromagnetic applications.",
        techstack: "Matlab, FEM",
        previewLink:
          "https://drive.google.com/file/d/1VIJIECT57VnQNQcCKKmi0zlbclLX_fKS/view?usp=sharing",
      },
      {
        title: "Shaft Design — Wind Turbine Assembly",
        image: shaft,
        description:
          "Details the design process for a wind-turbine shaft assembly, involving preliminary loading analysis, an iterative design process and technical CAD drawings.",
        techstack: "Autodesk Inventor",
        previewLink:
          "https://drive.google.com/file/d/1w9QMZDM6OgtQWDrQXD__ORGZQTOnlZ-f/view?usp=sharing",
      },
    ],
  },
  {
    category: "university",
    group: "University of Bath — Year 1",
    groupKey: "bath-y1",
    institution: "University of Bath",
    items: [
      {
        title: "Robotic Design — DC Motor Control on Arduino",
        image: dcmotor,
        description:
          "An experiment using a micro metal-gear DC motor with a magnetic encoder and an H-Bridge circuit, controlled with an Arduino. The goal was to develop an Arduino program that measures voltage variations and controls the motor's speed.",
        techstack: "Arduino",
        previewLink:
          "https://drive.google.com/file/d/1lsAxlZuUWlgzRfnnc_2ev2VCg5M10HMX/view?usp=sharing",
      },
      {
        title: "Robotics & Mechatronic Systems — Propeller Stability Challenge",
        image: prop,
        description:
          "Illustrates the theory, results and manufacturing of a control system across three tasks: operating an MPU-6050, controlling a DC motor's speed and rotation, and controlling a propeller that levitates and holds position.",
        techstack: "C++, Arduino",
        previewLink:
          "https://drive.google.com/file/d/1BxxKjN1YiL5hY_oVnbLkWEhxFjpH58rR/view?usp=sharing",
        githubLink:
          "https://github.com/amgb20/EE10170-Robotics-Mechatronic-Systems-Propeller-Stability-Challenge",
      },
      {
        title: "Digital Electronics — Finite State Machine",
        image: state,
        description: "The process of designing a Finite State Machine (FSM).",
        techstack: "",
        previewLink:
          "https://drive.google.com/file/d/1pqE7aMGYEESQdnteuDWkSeh_8-7BQcZI/view?usp=sharing",
      },
      {
        title: "Fluid Dynamics — Air Jet Functioning",
        image: airjet,
        description:
          "Measures the velocity distribution of a circular air jet along its length using a pitot-static probe and manometer, revealing how a uniform jet interacts with its surroundings and computing volumetric flow rate.",
        techstack: "",
        previewLink:
          "https://drive.google.com/file/d/1l8PsnIqrUjLmMmMKIJCI0EZpo5D-XU6X/view?usp=sharing",
      },
    ],
  },
  {
    category: "side",
    group: "Agentic Projects",
    groupKey: "agentic",
    items: [
      {
        title: "ETF IQ — Agentic ETF Portfolio Manager",
        image: etfiq,
        description:
          "A full-stack, AI-powered ETF portfolio manager. Eight Gemini agents run in a weekly orchestrated pipeline with a memory-reflection loop and a Judge that scores past predictions before each new run. Includes 'Charles', a LangChain ReAct chat assistant with five tools (web search, pgvector RAG over past research, price alerts, and natural-language trade open/close), interactive charting, and automated PDF report generation. Built on FastAPI + React 19 + PostgreSQL/pgvector with Auth0 passwordless OTP, Redis-backed token revocation and rate limiting, all Dockerised.",
        techstack:
          "Python, FastAPI, React, TypeScript, Google Gemini, LangChain, pgvector, PostgreSQL, Redis, Docker",
      },
      {
        title: "Gold Newsletter — AI Market Intelligence",
        image: goldnewsletter,
        description:
          "An AI-powered weekly gold-market newsletter generator. Nine specialised agents run across five waves — Google Search grounding, two-pass URL Context enrichment, and Gemini Deep Research — combined with structured market data (FRED real yields, CFTC COT positioning, ETF flows, cross-asset ratios, LBMA spot) to compile a professional PDF report with candlestick charts and a sentiment gauge. Built with FastAPI + React microservices, Jinja2/WeasyPrint reporting, and Auth0 OTP.",
        techstack:
          "Python, FastAPI, React, TypeScript, Google Gemini, mplfinance, WeasyPrint, PostgreSQL, Docker",
      },
      {
        title: "ParableWeb CRM — Website Audit Agent Swarm",
        image: parableweb,
        description:
          "A local-first lead-generation CRM that finds businesses via the Google Places API, scores the opportunity, and runs a Gemini visual-audit swarm — up to ten concurrent Playwright screenshot + Gemini reviews that write strict structured JSON back into the CRM. Exports a ready-to-use Excel CRM with leads, audit results and an outreach queue. Built with FastAPI + React + SQLite, fully Dockerised.",
        techstack:
          "Python, FastAPI, React, Google Gemini, Playwright, Google Places API, SQLite, Docker",
      },
      {
        title: "MPP Inspector — Machine Payments Protocol Devtool",
        image: mppinspector,
        description:
          "A CLI tool and web dashboard for inspecting, testing and debugging Machine Payments Protocol (MPP) flows — 'Postman for HTTP 402'. It visualises the full challenge-response-receipt cycle and lets developers simulate agent-driven payment interactions. Published as an npm package and available as a Claude marketplace plugin.",
        techstack: "TypeScript, Node.js, MCP, Blockchain, CLI",
        githubLink: "https://github.com/amgb20/MPP-Inspector",
      },
      {
        title: "Claude Monitor CYD",
        image: cyd,
        description:
          "A Cheap Yellow Display (ESP32) build for monitoring Claude usage and activity in real time — a small hardware companion that surfaces agent/monitoring status on a dedicated screen.",
        techstack: "Python, ESP32, IoT",
        githubLink: "https://github.com/amgb20/claude-monitor-cyd",
      },
    ],
  },
  {
    category: "side",
    group: "Computer Vision",
    groupKey: "computer-vision",
    items: [
      {
        title: "CCTV Vehicle Counter and Speed Limiter",
        image: cctvcar,
        description:
          "Counts the different types of vehicles present in traffic (motorcycle, bus, truck, car) and determines the speed of each vehicle.",
        techstack: "Computer Vision, Python, YOLOv8",
        githubLink: "https://github.com/amgb20/Computer-Vision-Projects",
      },
      {
        title: "CCTV People Counter",
        image: cctvpeople,
        description:
          "Counts how many people are going up or down an escalator.",
        techstack: "Computer Vision, Python, YOLOv8",
        githubLink: "https://github.com/amgb20/Computer-Vision-Projects",
      },
      {
        title: "COCO Dataset — YOLO Object Detection",
        image: coco,
        description:
          "Analyses all 80 default classes trained by YOLOv8 on the COCO dataset.",
        techstack: "Computer Vision, Python, YOLOv8",
        githubLink: "https://github.com/amgb20/Computer-Vision-Projects",
      },
      {
        title: "ROMIE — Detecting Mining Workers",
        image: romiepeople,
        description:
          "Vision recognition for ROMIE's autonomous pipeline: detects staff nearby and determines whether they are wearing a protective helmet, mask and hi-vis jacket.",
        techstack: "Computer Vision, Python, YOLOv8",
        githubLink: "https://github.com/amgb20/Computer-Vision-Projects",
      },
      {
        title: "ROMIE — Detecting Rocks & Stones",
        image: romiestone,
        description:
          "Detects different types of rocks and stones during ROMIE's journey, trained using YOLOv8's training function.",
        techstack: "Computer Vision, Python, YOLOv8",
        githubLink: "https://github.com/amgb20/Computer-Vision-Projects",
      },
    ],
  },
  {
    category: "side",
    group: "Machine Learning & Reinforcement Learning",
    groupKey: "ml-rl",
    items: [
      {
        title: "Atari Game with DQN",
        image: atari,
        description:
          "A Deep Q-Network agent trained to play an Atari game using OpenAI Gym.",
        techstack: "Python, Reinforcement Learning, DQN",
      },
      {
        title: "Lunar Lander — Deep RL",
        image: moonlander,
        description:
          "A reinforcement-learning agent solving the OpenAI Gym Lunar Lander environment, achieving a score of 200.",
        techstack: "Python, Reinforcement Learning",
      },
      {
        title: "Taxi — Tabular RL",
        image: taxi,
        description:
          "A tabular reinforcement-learning agent solving the OpenAI Gym Taxi environment.",
        techstack: "Python, Reinforcement Learning",
      },
    ],
  },
  {
    category: "side",
    group: "Web",
    groupKey: "web",
    items: [
      {
        title: "This Portfolio",
        image: website,
        description:
          "This portfolio site — an editorial, tab-based design with responsive layouts, built with React and Tailwind CSS.",
        techstack: "React, Tailwind CSS, JavaScript",
        githubLink: "https://github.com/amgb20/Portfolio-AB",
      },
      {
        title: "CS50 Web Projects",
        image: cs5050,
        description:
          "Rebuilt the interfaces and functionality for six major platforms — Google, Wikipedia, eBay, Twitter, an email service and a personal project — as part of Harvard's CS50 Web.",
        techstack: "Django, HTML, CSS, JavaScript, Python, SQL",
        website:
          "https://www.youtube.com/watch?v=mmppEF4Gkbw&list=PLeUc4fopb8YN-3fRlRJRMKxDlF4lKjUt8",
      },
    ],
  },
  {
    category: "side",
    group: "Start-ups",
    groupKey: "startups",
    items: [
      {
        title: "Belieth — NFT for Good",
        image: belieth,
        description:
          "Belieth reimagines charitable giving: NFTs represent a donation through investment, creating a potentially profitable donation — a win-win for charities and donors. Community building in the metaverse builds donor-to-charity trust, and NFT owners can allocate the community fund within the charity, giving them real impact on beneficiaries.",
        techstack: "HTML/CSS, JavaScript, Solidity, ERC721",
        previewLink: "https://www.linkedin.com/company/belieth",
        previewLabel: "LinkedIn",
        pitchdecklink:
          "https://drive.google.com/file/d/1gmGHIL5GyYJ8Yw6X2HMpiyDMdc6sy9Jt/view?usp=sharing",
      },
      {
        title: "STC — Second Thoughts Club",
        image: stc,
        description:
          "An AI generative-art project with a community built around it via NFTs. The concept merges renowned political figures with high-fashion garments inspired by different eras. Includes a landing page, a custom ERC721 contract I coded, and a DAO to manage community funds and the project's direction.",
        techstack: "HTML/CSS, JavaScript, Solidity, ERC721",
        githubLink: "https://github.com/amgb20/websiteSTC",
      },
    ],
  },
];

const usedSlugs = new Set();
const uniqueSlug = (title) => {
  let base = slugify(title) || "project";
  let slug = base;
  let i = 2;
  while (usedSlugs.has(slug)) {
    slug = `${base}-${i}`;
    i += 1;
  }
  usedSlugs.add(slug);
  return slug;
};

export const projects = projectGroups.flatMap((g) =>
  g.items.map((raw) => ({
    slug: uniqueSlug(raw.title),
    category: g.category,
    group: g.group,
    groupKey: g.groupKey,
    institution: g.institution || null,
    title: raw.title,
    image: raw.image,
    description: raw.description,
    techstack: splitTech(raw.techstack),
    links: buildLinks(raw),
  }))
);

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug);

// Ordered group metadata for building sub-tabs / sections.
export const projectGroupsMeta = projectGroups.map((g) => ({
  category: g.category,
  group: g.group,
  groupKey: g.groupKey,
  institution: g.institution || null,
}));
