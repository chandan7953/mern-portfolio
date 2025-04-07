import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiSpring,
  SiHibernate,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("skills");

  // Resume Sections Data
  const resumeData = {
    experience: {
      heading: "My Experience",
      description:
        "I have experience in both frontend and backend development, building dynamic, scalable, and user-friendly applications. My expertise includes React, Node.js, MongoDB, and Express, focusing on seamless and high-performing web solutions.",

      items: [
        {
          year: "Mar 2024 – Apr 2024",
          role: "Full Stack Developer",
          company: "CCA-Techno Pvt. Ltd.",
          details:
            "Gained hands-on experience with Tailwind, React, Axios, React Hooks, Node.js, Express, MongoDB, and Multer.",
        },
        {
          year: "Mar 2022 – Apr 2022",
          role: "Web Developer Intern",
          company: "Twowaits Technologies Pvt. Ltd.",
          details:
            "Worked on frontend development with React JS, creating responsive UIs and improving user experience functionality.",
        },
      ],
    },
    education: {
      heading: "My Education",
      description:
        "I have studied software development, computer engineering, and core sciences, gaining expertise in programming frameworks, algorithms, and data structures. My education has provided hands-on experience in backend development and problem-solving, building a solid foundation for my career.",

      items: [
        {
          year: "2024",
          course: "MERN Stack",
          institution: "Acciojob",
          details:
            "Specialized in backend, database management with Node.js, Express.",
        },
        {
          year: "2019 - 2023",
          course: "BE Computer",
          institution: "R.H Sapat College of Engineering",
          details:
            "Focused on computer engineering, algorithms, data structures ",
        },
        {
          year: "2017 - 2018",
          course: "12th Science",
          institution: "Jamshedpur Co-operative College",
          details:
            "Learned the basics of Physics, Chemistry, and Mathematics in depth.",
        },
        {
          year: "2015 - 2016",
          course: "SSC",
          institution: "Holy Family Convent High School",
          details:
            "Completed SSC with a focus on Mathematics, Science, and English.",
        },
      ],
    },
    about: {
      heading: "About Me",
      description:
        "I am a passionate software developer dedicated to creating robust and high-performance applications. With a focus on both backend and frontend development, I strive to build user-friendly and scalable solutions. I am constantly exploring new technologies to improve my skill set and deliver efficient, reliable software.",

      items: [
        { label: "Name", value: "Chandan Singh" },
        { label: "Gender", value: "Male" },
        { label: "Status", value: "Unmarried" },
        { label: "Nationality", value: "Indian" },
        { label: "Full Time", value: "Available" },
        { label: "Phone", value: "9113142147" },
        { label: "Languages", value: "English, Hindi" },
      ],
    },
  };

  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "MySQL", icon: <SiMysql /> },
    // { name: "Spring", icon: <SiSpring /> },
    // { name: "Hibernate", icon: <SiHibernate /> },
    // { name: "Spring Boot", icon: <SiSpringboot /> },
  ];

  const sections = [
    { key: "skills", label: "Skills" },
    { key: "experience", label: "Experience" },
    { key: "education", label: "Education" },
    { key: "about", label: "About Me" },
  ];

  return (
    <section className="resume">
      <div className="resume-container">
        {/* Left Side (Buttons) */}
        <div className="resume-box">
          <h2>Why Hire Me?</h2>
          <p className="desc">
            A dedicated developer with expertise in modern web technologies.
          </p>
          {sections.map((section) => (
            <button
              key={section.key}
              className={`resume-btn ${
                activeSection === section.key ? "active" : ""
              }`}
              onClick={() => setActiveSection(section.key)}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Right Side (Content) */}
        <div className="resume-box">
          <div className={`resume-detail ${activeSection} active`}>
            <h2 className="heading">
              {resumeData[activeSection]?.heading ? (
                <>
                  {`${resumeData[activeSection]?.heading.split(" ")[0]} `}
                  <span>
                    {resumeData[activeSection]?.heading.split(" ")[1] || ""}
                  </span>
                </>
              ) : (
                <>
                  My <span>Skills</span>
                </>
              )}
            </h2>

            <p className="desc">
              {resumeData[activeSection]?.description ||
                "Technical skills acquired over years of experience."}
            </p>

            <div className="resume-list">
              {activeSection === "skills"
                ? skills.map((skill, index) => (
                    <div className="resume-item" key={index}>
                      <i>{skill.icon}</i>
                      <span>{skill.name}</span>
                    </div>
                  ))
                : resumeData[activeSection].items.map((item, index) => (
                    <div className="resume-item" key={index}>
                      {item.year && <p className="year">{item.year}</p>}
                      {item.role && <h3>{item.role}</h3>}
                      {item.course && <h3>{item.course}</h3>}
                      {item.company && (
                        <p className="company">{item.company}</p>
                      )}
                      {item.institution && (
                        <p className="company">{item.institution}</p>
                      )}
                      {item.details && <p>{item.details}</p>}
                      {item.label && (
                        <p>
                          {item.label} <span>{item.value}</span>
                        </p>
                      )}
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
