import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectImg from "../assets/project.webp";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and experience.",
    image: projectImg, // Replace with your image path
    techStack: "React, Tailwind, Vite",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "E-Commerce Store",
    description:
      "A fully functional e-commerce platform with user authentication and payment integration.",
    image: projectImg, // Replace with your image path
    techStack: "React, Node.js, Express, MongoDB",
    github: "https://github.com/yourusername/ecommerce-store",
    live: "https://yourecommerce.com",
  },
  {
    title: "Blog App",
    description:
      "A full-stack blog application where users can create, read, update, and delete posts.",
    image: projectImg, // Replace with your image path
    techStack: "Next.js, Prisma, PostgreSQL",
    github: "https://github.com/yourusername/blog-app",
    live: "https://yourblog.com",
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
