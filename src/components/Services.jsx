import React from "react";
import { FaLaptopCode, FaServer, FaCode, FaPalette } from "react-icons/fa";

const services = [
  {
    title: "Full Stack Developer",
    description:
      "Developing end-to-end web applications, integrating both frontend and backend technologies for seamless user experiences.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Backend Developer",
    description:
      "Building and optimizing server-side logic, databases, and APIs to ensure scalable and efficient web applications.",
    icon: <FaServer />,
  },
  {
    title: "Frontend Developer",
    description:
      "Crafting responsive and interactive user interfaces using modern frameworks and best UI/UX design principles.",
    icon: <FaPalette />,
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2 className="heading">
        My <span>Services</span>
      </h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="services-box" key={index}>
            <div className="icon">
              <i>{service.icon}</i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
