import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false); // 🔥 auto close menu
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {"<Gourav Moger />"}
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a onClick={handleLinkClick} className={active === "hero" ? "active" : ""} href="#hero">Home</a></li>
        <li><a onClick={handleLinkClick} className={active === "about" ? "active" : ""} href="#about">About</a></li>
        <li><a onClick={handleLinkClick} className={active === "skills" ? "active" : ""} href="#skills">Skills</a></li>
        <li><a onClick={handleLinkClick} className={active === "projects" ? "active" : ""} href="#projects">Projects</a></li>
        <li><a onClick={handleLinkClick} className={active === "experience" ? "active" : ""} href="#experience">Experience</a></li>
        <li><a onClick={handleLinkClick} className={active === "contact" ? "active" : ""} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
