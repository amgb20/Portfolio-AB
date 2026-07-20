// Maps a tech-stack label to a logo image. Used by TechPill so project,
// experience and education tech chips can show an icon next to the label.
// If a label has no known icon, getTechIcon returns null and the pill
// renders text-only.

import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import python from "./assets/techstack/python.png";
import c from "./assets/techstack/c.png";
import cplusplus from "./assets/techstack/c++.png";
import django from "./assets/techstack/django.png";
import numpy from "./assets/techstack/numpy.png";
import pandas from "./assets/techstack/Pandas_logo.png";
import tensorflow from "./assets/techstack/tensorflow.png";
import pytorch from "./assets/techstack/pytorch.png";
import solidity from "./assets/techstack/solidity.png";
import anaconda from "./assets/techstack/Anaconda_Logo.png";
import arduino from "./assets/techstack/Arduino_Logo.png";
import arm from "./assets/techstack/arm.png";
import npm from "./assets/techstack/npm.png";
import vscode from "./assets/techstack/vscode.png";
import git from "./assets/techstack/git.png";
import github from "./assets/techstack/github.png";
import figma from "./assets/techstack/figma.png";
import autodesk from "./assets/techstack/autodesk.png";
import comsol from "./assets/techstack/comsol.png";
import googlecolab from "./assets/techstack/Google_Colaboratory_SVG_Logo.png";
import microsoft from "./assets/techstack/icons8-microsoft-48.png";
import jupyter from "./assets/techstack/jupyter.png";
import matlab from "./assets/techstack/matlab.png";
import orcad from "./assets/techstack/OrCAD_Logo.png";
import pycharm from "./assets/techstack/PyCharm_Icon.png";
import overleaf from "./assets/techstack/Overleaf.png";
import typescript from "./assets/techstack/typescript.png";
import sql from "./assets/techstack/sql.png";
import tailwindcss from "./assets/techstack/tailwindcss.jpg";
import jax from "./assets/techstack/jax.png";
import simulink from "./assets/techstack/simulink.png";
import fastapi from "./assets/techstack/fastapi.svg";
import docker from "./assets/techstack/docker.png";
import azure from "./assets/techstack/azure.png";
import postgresql from "./assets/techstack/PostgreSQL.png";
import mongodb from "./assets/techstack/mongodb.png";
import redis from "./assets/techstack/redis.png";
import langchain from "./assets/techstack/langchain.png";
import langgraph from "./assets/techstack/langgraph.png";
import langfuse from "./assets/techstack/langfuse.png";
import openai from "./assets/techstack/openai.png";
import anthropic from "./assets/techstack/anthropic.png";
import weightsAndBiases from "./assets/techstack/weightnbiases.png";

// Normalized (lowercased) label -> icon. Aliases point at the same asset.
const iconMap = {
  html,
  "html/css": html,
  css,
  javascript: js,
  js,
  react,
  python,
  c,
  "c++": cplusplus,
  cpp: cplusplus,
  django,
  numpy,
  pandas,
  tensorflow,
  pytorch,
  "pytorch geometric": pytorch,
  gpytorch: pytorch,
  solidity,
  anaconda,
  arduino,
  arm,
  npm,
  "vs code": vscode,
  vscode,
  git,
  github,
  figma,
  autodesk,
  "autodesk inventor": autodesk,
  inventor: autodesk,
  comsol,
  colab: googlecolab,
  "google colab": googlecolab,
  microsoft,
  jupyter,
  "jupyter notebook": jupyter,
  matlab,
  orcad,
  pycharm,
  overleaf,
  typescript,
  sql,
  tailwindcss,
  "tailwind css": tailwindcss,
  jax,
  simulink,
  fastapi,
  docker,
  azure,
  postgresql,
  "postgres": postgresql,
  mongodb,
  redis,
  langchain,
  langgraph,
  langfuse,
  openai,
  anthropic,
  "weights & biases": weightsAndBiases,
  wandb: weightsAndBiases,
  publisher: microsoft,
};

export function getTechIcon(label) {
  if (!label) return null;
  const key = label.trim().toLowerCase();
  return iconMap[key] || null;
}

export default iconMap;
