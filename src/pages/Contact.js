import React, { useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import profileImage from "../assets/me.png"; // Replace with your own image

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hy5u8h8", // <- Replace with your real IDs
        "template_rjjx4ms", // <- Replace with your real template ID
        formRef.current,
        "gI9-GRqIiI4Q__DtH" // <- Replace with your public key
      )
      .then(
        () => {
          setSent(true);
          formRef.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  const combinedOptions = {
    fullScreen: { enable: false },
    background: { color: "#000" },
    particles: {
      number: { value: 160 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.3, outModes: "out" },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        animation: { enable: true, speed: 0.5 },
      },
      color: {
        value: ["#ffffff", "#ff4ecd", "#4ea1ff", "#aaff4e", "#ff4e4e"],
      },
      shape: { type: "circle" },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "bubble" } },
      modes: { bubble: { distance: 100, duration: 2, size: 4, opacity: 1 } },
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

      <div
        className="container d-flex justify-content-center align-items-center flex-column"
        style={{
          minHeight: "100vh",
          zIndex: 1,
          position: "relative",
          padding: "2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
            padding: "2rem",
            maxWidth: "500px",
            width: "100%",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            color: "#fff",
          }}
        >
          <div className="text-center mb-4">
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid #4ea1ff",
                marginBottom: "1rem",
              }}
            />
            <h3>Tshepo Setuke</h3>
            <p style={{ opacity: 0.7 }}>Let's get in touch 👇</p>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="6"
                placeholder="Hi Tshepo, my name is [Your Name] from [Company Name]. You can reach me at [your.email@example.com]. I wanted to get in touch regarding..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#4ea1ff" }}
            >
              Send Message
            </button>
            {sent && (
              <div className="alert alert-success mt-3" role="alert">
                ✅ Message sent successfully!
              </div>
            )}
          </form>

          {/* Static Info */}
          <div className="mt-4 text-center">
            <p>
              Or email me at:{" "}
              <a
                href="mailto:tsetuke175@gmail.com"
                className="text-warning text-decoration-underline"
              >
                tsetuke@gmail.com
              </a>
            </p>
            <p>
              Call me:{" "}
              <span className="text-warning text-decoration-underline">
                065 920 4567
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
