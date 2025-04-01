import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Resume />
      <Contact />
    </>
  );
};

export default App;
