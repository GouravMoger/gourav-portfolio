import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I am a Full Stack Developer with strong expertise in 
            .NET (C#, VB.NET), ReactJS and SQL Server.
          </p>

          <p>
            I specialize in building scalable enterprise systems,
            designing clean architecture, and delivering performant
            user-focused applications.
          </p>

          <p>
            Passionate about solving complex business problems
            with simple and maintainable solutions.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Quick Info</h3>

          <ul className="about-list">
            <li><strong>Location:</strong> Bengaluru</li>
            <li><strong>Hometown:</strong> Bhatkal, Karnataka</li>
            <li className="education-block">
                <strong>Education</strong>
                
                <div className="education-card">
                
                  <div className="edu-item">
                    <div className="edu-left">
                      <h4>Master of Computer Applications (MCA)</h4>
                      <p>Full Stack Development</p>
                      <span>Jain (Deemed-to-be University)</span>
                    </div>
                    <div className="edu-year">2022 – 2024</div>
                  </div>
                
                  <div className="edu-divider"></div>
                
                  <div className="edu-item">
                    <div className="edu-left">
                      <h4>Bachelor of Computer Applications (BCA)</h4>
                      <span>Shree Guru Sudhindra Degree College</span>
                    </div>
                    <div className="edu-year">2018 – 2021</div>
                  </div>
                
                </div>
              </li>
                
            <li><strong>Specialization:</strong> Enterprise Systems</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
