import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import chatAppImage from "../assets/chat-app.png";
import financeTracker from "../assets/financetracker.png";
import podcast from "../assets/podcast.png";

const projects = [
  {
    title: "Real-time Chat App",
    description:
      "Responsive chat app with real-time messaging, secure auth, and a sleek UI built using Socket.io and MongoDB.",
    image: chatAppImage,
    techStack: "MERN Stack, Socket.io",
    github: "https://github.com/chandan7953/real-chat-app",
    live: "https://real-chat-app7953.netlify.app/",
  },
  {
    title: "Finance Tracker App",
    description:
      "Track income and expenses with login via email or Google. Features charts, Firebase backend, and PapaParse.",
    image: financeTracker,
    techStack: "React, Firebase, Ant Design",
    github: "https://github.com/chandan7953/personal-finance-tracker",
    live: "https://personal-finance-tracker7953.netlify.app/",
  },
  {
    title: "Podcast Platform",
    description:
      "Podcast platform with Firebase auth, banner uploads, and audio player with full playback controls.",
    image: podcast,
    techStack: "React, React-Redux, Firebase",
    github: "https://github.com/chandan7953/Podcast",
    live: "https://podcast7953.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
