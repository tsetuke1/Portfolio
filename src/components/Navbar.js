import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark glass-navbar fixed-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white" to="/">
          Tshepo Setuke
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link glow-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link glow-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link glow-link" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link glow-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
