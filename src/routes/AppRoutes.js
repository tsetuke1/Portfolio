// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
