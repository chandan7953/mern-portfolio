import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
