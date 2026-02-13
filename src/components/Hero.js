import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">

      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>

      <motion.div
        className="hero-container"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >

        <motion.div
          className="hero-glass"
          variants={itemVariant}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="hero-badge"
            variants={itemVariant}
            transition={{ duration: 0.5 }}
          >
            🚀 Open for Opportunities
          </motion.span>

          <motion.h1 variants={itemVariant} transition={{ duration: 0.5 }}>
            Hi, I'm <span className="highlight">Gourav Moger</span>
          </motion.h1>

          <motion.h2 variants={itemVariant} transition={{ duration: 0.5 }}>
            <Typewriter
              words={[
                "Senior Software Engineer",
                ".NET Full Stack Developer",
                "ReactJS Specialist"
              ]}
              loop={0}
              cursor
            />
          </motion.h2>

          <motion.p variants={itemVariant} transition={{ duration: 0.5 }}>
            I build scalable enterprise applications using
            .NET, ReactJS and SQL Server.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={itemVariant}
            transition={{ duration: 0.5 }}
          >
            <a href="#projects" className="primary-btn">
              View My Work
            </a>
            <a href="#contact" className="secondary-btn">
              Let's Connect
            </a>
          </motion.div>
        </motion.div>

        <motion.img
          src={profile}
          alt="Gourav"
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

      </motion.div>

    </section>
  );
};

export default Hero;
