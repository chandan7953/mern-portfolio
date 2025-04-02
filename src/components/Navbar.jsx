import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isMenuOpen ? "active" : ""}>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="logo"
        spy={true}
        onClick={toggleMenu}
      >
        Chandan
      </Link>

      {/* Toggle between Menu and Cross Icon */}
      <i id="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <BiX /> : <BiMenu />}
      </i>

      {/* Navigation Links */}
      <nav className={isMenuOpen ? "active" : ""}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
          spy={true}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
          spy={true}
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          to="resume"
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
          spy={true}
          onClick={toggleMenu}
        >
          Resume
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
          spy={true}
          onClick={toggleMenu}
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
          spy={true}
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
