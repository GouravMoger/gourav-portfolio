import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaDatabase, FaMicrosoft } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";

const Skills = () => {

  const skillGroups = [
    {
      title: "Backend",
      icon: <SiDotnet size={28} />,
      skills: [".NET Core", "ASP.NET MVC", "Web API", "C#", "VB.NET"]
    },
    {
      title: "Frontend",
      icon: <FaReact size={28} />,
      skills: ["ReactJS", "JavaScript","JQuery", "HTML", "CSS"]
    },
    {
      title: "Database",
      icon: <FaDatabase size={28} />,
      skills: ["SQL Server", "Stored Procedures","Functions","ETL Operations"]
    }//,
    // {
    //   title: "Cloud",
    //   icon: <FaMicrosoft size={28} />,
    //   skills: ["Azure", "Agile", "Unit Testing"]
    // }
  ];

  return (
   <section id="skills">
  <h2 className="section-title">Tech Stack</h2>

  <div className="skills-grid">
    {skillGroups.map((group, index) => (
      <motion.div
        key={index}
        className="skill-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -5 }}
      >
        <div className="skill-header">
          <div className="skill-icon">{group.icon}</div>
          <h3>{group.title}</h3>
        </div>

        <div className="skill-tags">
          {group.skills.map((skill, i) => (
            <span key={i} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>

  );
};

export default Skills;
