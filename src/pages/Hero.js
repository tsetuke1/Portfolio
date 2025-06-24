import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import PlanetParticles from "./PlanetParticles";

const Hero = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section
      className="position-relative text-white"
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Starry Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#000000" },
          particles: {
            number: { value: 120, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.9,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false,
              },
            },
            size: {
              value: 1.5,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              outMode: "out",
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Planet Forming Animation (3D) */}
      <PlanetParticles />

      {/* Hero Content with Glassmorphism */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center p-5"
        style={{
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: "2rem",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <h1 className="display-4 fw-bold mb-3">Welcome to My Portfolio</h1>
          <p className="lead mb-4">
            I’m <strong>Tshepo Setuke</strong> — Developer, Tech Enthusiast, and
            Creator.
          </p>
          <Link to="/projects" className="btn btn-light btn-lg">
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
