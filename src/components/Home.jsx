import React from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaYoutube } from "react-icons/fa";
import profile from "../assets/profile.png";

const roles = [
  { text: "Full Stack Developer", i: 4 },
  { text: "Backend Developer", i: 3 },
  { text: "Frontend Developer", i: 2 },
  { text: "YouTuber", i: 1 },
];

const ResumeUrL =
  "https://drive.google.com/uc?export=download&id=1ppK9G3iJdE9mcTOlPk1rA5DIFNfGIpLK";

const socialLinks = [
  { href: "https://github.com/chandan7953", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/chandan7953/", icon: <FaLinkedin /> },
  { href: "#", icon: <FaDiscord /> },
  { href: "#", icon: <FaYoutube /> },
];

const Home = () => {
  return (
    <section className="home active">
      <div className="home-detail">
        <h1>Chandan Singh</h1>
        <h2>
          {"I'm a "}
          {roles.map((role, index) => (
            <span key={index} style={{ "--i": role.i }} data-text={role.text}>
              {role.text}
            </span>
          ))}
        </h2>

        <p>
          I'm a passionate MERN Stack Developer with a strong focus on building
          dynamic, scalable, and high-performance web applications. I specialize
          in developing full-stack solutions using MongoDB, Express.js, React,
          and Node.js. With a keen eye for clean code and user-friendly design,
          I strive to create seamless digital experiences. Constantly exploring
          new technologies, I aim to deliver innovative solutions that drive
          impact. Let's build something amazing together!
        </p>

        <div className="btn-sci">
          <a href={ResumeUrL} className="btn" download>
            Download CV
          </a>

          <div className="sci">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank">
                <i>{link.icon}</i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src={profile} alt="profile pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
