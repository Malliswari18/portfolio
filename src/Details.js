// Enter all your details in this file
// Logo images
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import python from "./assets/techstack/python.png";
import c from "./assets/techstack/c.png";
import java from "./assets/techstack/java.png";
import googlecloud from "./assets/techstack/googlecloud.png";
import flutter from "./assets/techstack/flutter.png";
import jupyter from "./assets/techstack/jupyter.png";
import github from "./assets/techstack/github.png";
import vscode from "./assets/techstack/vscode.png";
// Project Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";

// Personal Details
export const personalDetails = {
  name: "Boggavarapu Malleswari",
  tagline: "Tech Enthusiast",
  img: profile,
  about: `
  I am Boggavarapu Malleswari, currently pursuing my final year B.Tech in Computer Science (Allied branch: Artificial Intelligence and Machine Learning). 
  I am interested in Java programming and full-stack Java development. 
  I enjoy building projects and exploring new technologies.
  `
};

// Education Details
export const eduDetails = [
  {
    Position: "Bachelor of Engineering-BE",
    college: "Geethanjali Institute of Science and Technology",
    Location: "Nellore-524137",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Intermediate",
    College: "Jagan's Junior college",
    Location: "Nellore",
    Duration: "Aug 2020 - Mar 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html,
  css,
  js,
  python,
  c,
  java,
  googlecloud,
  flutter,
  github,
  jupyter,
  vscode,
};

// Project Details
export const projectDetails = [
  {
    title: "Editprofile app",
    image: projectImage1,
    description: `I developed a Flutter application as part of a one-week workshop at my college, conducted by APSSDC. This project showcases my ability to quickly learn new technologies and apply them effectively.`,
    techstack: "HTML/CSS, js, dart",
    githubLink: "https://github.com/Malliswari18",
    previewLink: "https://malliswari18.github.io/editprofile-app/",
  },
  {
    title: "Mental Health Prediction System",
    image: projectImage2,
    description: "Developed a web interface to predict mental health risk scores using Python, Streamlit, and Flask.",
    techstack: "python, streamlit, flask",
    githubLink: "https://github.com/Malliswari18",
    previewLink: "https://prediction-model-qzbtkfsewcmtcn3otgdx64.streamlit.app/",
  },
  {
    title: "Profile",
    image: projectImage3,
    description: "A profile card project for my portfolio, designed using HTML & CSS. It showcases my personal details and skills interactively.",
    techstack: "Html, Css",
    githubLink: "https://github.com/Malliswari18/profilecard",
    previewLink: "https://profilecard222u1a3317.netlify.app/",
  },
];

// Contact Details
export const contactDetails = {
  email: "malliswarimahendra@gmail.com",
};

// Social Media Links (new)
export const socialMediaUrl = {
  github: "https://github.com/Malliswari18",
  linkedin: "https://www.linkedin.com/in/manojboggavarapu/",
  instagram: "",
  twitter: ""
};
