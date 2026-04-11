import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Certification from "./components/Certification";
import Work from "./components/Work";
import Experience from "./components/Experience";
import About from "./components/About";
import Insights from "./components/Insights";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      <Certification />
      <About />
      <Work />
      <Experience />
      <Insights />
      <Contact />
    </div>
  );
}

export default App;
