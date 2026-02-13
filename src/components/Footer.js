import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <p className="footer-copy">
          © {new Date().getFullYear()} Gourav Moger
        </p>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/gourav-moger-734263211"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

      </div>

      <p className="footer-note">
        Built with React & Passion
      </p>

    </footer>
  );
};

export default Footer;
