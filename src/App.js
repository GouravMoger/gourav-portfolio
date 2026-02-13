import './App.css';
import { useState, useEffect } from "react";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from "./components/BackToTop";
function App() {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = document.querySelector(".cursor-glow");
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* 🔥 Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #8b5cf6, #6366f1)",
          zIndex: 3000,
          transition: "width 0.2s ease-out",
        }}
      />
      <div className="cursor-glow"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
