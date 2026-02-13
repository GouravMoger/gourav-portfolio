import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HRMS (Human Resource Management System)",
    desc: "Enterprise financial reconciliation platform handling wagering operations and settlement reporting.",
    tech: [".NET Web Api's","ReactJS", "MUI","AG Grid","SQL Server"]
  },
  {
    title: "Stables(New York Racing Association Finance System)",
    desc: "Enterprise financial reconciliation platform handling wagering operations and settlement reporting.",
    tech: ["ASP.NET MVC","Devexpress", "JavaScript","JQuery", "HTML", "CSS","SQL Server"]
  },
  {
    title: "Invoicing (Sub-project of Stables – NYRA Finance System)",
    desc: "Sub-module of the Stables financial system, this application focuses on report validation and processing.",
    tech: ["ASP.NET MVC","Devexpress", "JavaScript","JQuery", "HTML", "CSS","SQL Server"]
  },
  {
    title: "Ostler (Multi-Tenant)",
    desc: "Instances for the Stables application tailored to different organizations.",
    tech: ["ASP.NET MVC","Devexpress", "JavaScript","JQuery", "HTML", "CSS","SQL Server"]
  }
  ,
  {
    title: "KSIC (Mysore Silks)",
    desc: "Maintained and enhanced sales management web application focused on product configuration, invoicing, and inventory management.",
    tech: ["VB.Net,","Silverlight", "JavaScript","SQL Server"]
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
