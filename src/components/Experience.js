import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2022 - Present",
    role: "Senior Software Engineer",
    company: "iTwine Technologies PVT Ltd.",
    desc: "Working on scalable financial reconciliation systems, improving performance and ensuring compliance-driven architectures."
  },
  {
    year: "2021 - 2022",
    role: "Graduate Trainee",
    company: "Cognizant"
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
