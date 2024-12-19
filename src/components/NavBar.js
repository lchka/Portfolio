import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import toggleDisplayMode from "../animations/DisplayMode";
import "../styles/NavBar.scss"; // Import custom styles for the Navbar

const MyNavbar = () => {
  // Initialize the mode state from localStorage or default to 'light'
  const [mode, setMode] = useState(() => localStorage.getItem("displayMode") || "light");

  // Apply the mode on component mount
  useEffect(() => {
    toggleDisplayMode(mode); // Apply the current mode
  }, [mode]);

  // Handle the mode toggle
  const handleToggle = () => {
    const newMode = mode === "light" ? "dark" : "light"; // Toggle between light and dark
    setMode(newMode); // Update state
    toggleDisplayMode(newMode); // Apply changes
    localStorage.setItem("displayMode", newMode); // Save the mode in localStorage
  };

  return (
    <Navbar bg={mode === "light" ? "light" : "dark"} expand="lg" className={`navbar ${mode}`}>
      {/* Brand */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Collapsible Content */}
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex mx-auto px-4 justify-content-between align-items-center">
        {/* Left-Aligned Button */}
        <div>
          <Button
            className="fw-semibold neon-button"
            variant={mode === "light" ? "outline-dark" : "outline-light"}
            onClick={handleToggle}
          >
            {mode === "light" ? <span className="blue-moon fw-semibold">🌜 Dark Mode</span> : "🌞 Light Mode"}
          </Button>
        </div>

        {/* Centered Nav Links */}
        <Nav className="text-center fs-5 pe-5 neon-nav">
          <Nav.Link as={Link} to="/" className="neon-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="neon-link">About</Nav.Link>
          <Nav.Link as={Link} to="/projects" className="neon-link">Projects</Nav.Link>
          <Nav.Link as={Link} to="/education" className="neon-link">Education</Nav.Link>
        </Nav>

        {/* Right-Aligned Button */}
        <div>
          <button className={`btn neon-btn btn-${mode === "light" ? "primary" : "secondary"}`}>
            <Link to="/contact" className="text-white text-decoration-none">
              Contact
            </Link>
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
