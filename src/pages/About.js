import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import spaceman from "../assets/spaceman.webp";
import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.jpg";
import rocket from "../assets/rocket.jpg";

const About = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const combinedOptions = {
    fullScreen: { enable: false },
    background: { color: "#000" },
    particles: {
      number: { value: 160 },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.3,
        },
      },
      color: {
        value: ["#ffffff", "#ff4ecd", "#4ea1ff", "#aaff4e", "#ff4e4e"],
      },
      shape: { type: "circle" },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" },
      },
      modes: {
        bubble: {
          distance: 100,
          duration: 2,
          size: 4,
          opacity: 1,
        },
      },
    },
  };

  return (
    <section
      className="position-relative text-white"
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* Particle Background */}
      <Particles
        id="aboutParticles"
        init={particlesInit}
        options={combinedOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Floating Planets */}
      <motion.img
        src={planet1}
        alt="Planet 1"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          zIndex: 0,
        }}
        animate={{ y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src={planet2}
        alt="Planet 2"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "120px",
          zIndex: 0,
        }}
        animate={{ y: [0, 15, 0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rocket flying horizontally */}
      <motion.img
        src={rocket}
        alt="Rocket"
        style={{
          position: "absolute",
          top: "20%",
          left: "-150px",
          width: "80px",
          zIndex: 0,
        }}
        animate={{ x: ["-150px", "110%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div
        className="container position-relative"
        style={{
          paddingTop: "6rem",
          paddingBottom: "2rem",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <h2 className="mb-4 display-5 fw-bold">About Me</h2>
        <p className="lead">
          I’m <strong>Tshepo Setuke</strong>, a passionate software developer skilled in technologies like
          React, Node.js, and JavaScript. I love building engaging web experiences and continuously learning
          new tools that push the boundaries of creativity and performance.
        </p>
        
        <p className="lead">
          Built by Tshwane University of Technology, Trsuted by ICEP!
        </p>

        {/* Floating Spaceman */}
        <motion.img
          src={spaceman}
          alt="Spaceman"
          style={{
            maxWidth: "250px",
            height: "auto",
            marginTop: "3rem",
            position: "relative",
            zIndex: 2,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default About;
