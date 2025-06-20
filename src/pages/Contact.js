import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Contact = () => {
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
      style={{ minHeight: "100vh", backgroundColor: "#000", overflow: "hidden" }}
    >
      {/* Particles Background */}
      <Particles
        id="contactParticles"
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

      {/* Content */}
      <div
        className="container position-relative text-center"
        style={{ paddingTop: "6rem", paddingBottom: "2rem", zIndex: 1 }}
      >
        <h2 className="mb-4 display-5 fw-bold">Contact Me</h2>
        <p className="lead">
          You can email me at:{" "}
          <a
            href="mailto:tshepo@example.com"
            className="text-warning"
            style={{ textDecoration: "underline" }}
          >
            tsetuke@gmail.com
          </a>
        </p>
                <p className="lead">
          My cellphone numbers are:{" "}
          <a
            href="mailto:tshepo@example.com"
            className="text-warning"
            style={{ textDecoration: "underline" }}
          >
            0659204567
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
