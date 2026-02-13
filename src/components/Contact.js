import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Let's Connect</h2>

      <div className="contact-card">

        <p className="contact-text">
          I'm open to new opportunities, collaborations, and exciting
          enterprise projects.
        </p>

        <div className="contact-links">

          <a
            href="mailto:gouravmoger@gmail.com"
            className="contact-btn"
          >
            <FaEnvelope /> Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/gourav-moger-734263211"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaGithub /> GitHub
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
