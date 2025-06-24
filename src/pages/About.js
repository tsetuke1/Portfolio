import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion, useScroll, useTransform } from "framer-motion";
import spaceman from "../assets/spaceman.webp";
import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.webp";
import sideImage from "../assets/me.png"; // Make sure the image is in this path

const starMode = "constellation";

const About = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const { scrollY } = useScroll();
  const planet1Y = useTransform(scrollY, [0, 500], [0, 100]);
  const planet2Y = useTransform(scrollY, [0, 500], [0, 150]);
  const spacemanY = useTransform(scrollY, [0, 500], [0, 200]);

  const calmStars = {
    number: { value: 120, density: { enable: true, area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 0.6,
        minimumValue: 0.3,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 2.5 },
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.5,
        sync: false,
      },
    },
    links: { enable: false },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      random: false,
      straight: false,
      outModes: "out",
    },
  };

  const constellationStars = {
    number: { value: 100, density: { enable: true, area: 1000 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.6,
      random: true,
      animation: {
        enable: true,
        speed: 0.3,
        minimumValue: 0.2,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 2 },
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.4,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 130,
      color: "#4ea1ff",
      opacity: 0.4,
      width: 0.8,
    },
    move: {
      enable: true,
      speed: 0.25,
      direction: "none",
      random: true,
      straight: false,
      outModes: "out",
    },
  };

  const combinedOptions = {
    fullScreen: { enable: false },
    background: { color: "#000" },
    particles: starMode === "calm" ? calmStars : constellationStars,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" },
      },
      modes: {
        bubble: {
          distance: 100,
          size: 3,
          opacity: 1,
          duration: 2,
          speed: 2,
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
        overflowX: "hidden",
        overflowY: "visible",
        position: "relative",
      }}
    >
      {/* Left-side Background Image */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          width: "35vw",
          maxHeight: "80vh",
          overflow: "hidden",
          opacity: 0.25,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
        }}
      >
        <img
          src={sideImage}
          alt="Side Figure"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "blur(1px)",
          }}
        />
      </div>

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

      {/* Floating Planet 1 */}
      <motion.img
        src={planet1}
        alt="Planet 1"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          zIndex: 2,
          y: planet1Y,
        }}
        animate={{ y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Shooting Star Planet 2 */}
      <motion.img
        src={planet2}
        alt="Planet 2"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          zIndex: 2,
          y: planet2Y,
          opacity: 0.4,
        }}
        animate={{
          x: ["0%", "60vw"],
          y: [0, 10, -10, 0],
          opacity: [0.3, 0.5, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div
        className="container position-relative"
        style={{
          paddingTop: "6rem",
          paddingBottom: "2rem",
          zIndex: 3,
          textAlign: "center",
        }}
      >
        <h2 className="mb-4 display-5 fw-bold">About Me</h2>
        <p className="lead">
          I’m <strong>Tshepo Setuke</strong>, a passionate software developer
          skilled in technologies like React, Node.js, and JavaScript. I love
          building engaging web experiences and continuously learning new tools
          that push the boundaries of creativity and performance.
        </p>
        <p className="lead">
          Built by Tshwane University of Technology, Trusted by ICEP!
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
            zIndex: 4,
            y: spacemanY,
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

      {/* Bottom Constellation Net */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "220px",
          pointerEvents: "none",
          zIndex: 4,
        }}
      >
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>
          <g fill="url(#starGlow)" filter="url(#blur)">
            <circle cx="200" cy="150" r="4" />
            <circle cx="400" cy="100" r="4" />
            <circle cx="600" cy="160" r="4" />
            <circle cx="800" cy="110" r="4" />
            <circle cx="1000" cy="140" r="4" />
            <circle cx="1200" cy="120" r="4" />
            <circle cx="1400" cy="150" r="4" />
          </g>
        </svg>
      </div>

      {/* Twinkle Animation */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        svg g circle {
          animation: twinkle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
