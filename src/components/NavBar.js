import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import toggleDisplayMode from "../animations/DisplayMode";

const MyNavbar = () => {
  const [mode, setMode] = useState("light"); // Track the current display mode

  const handleToggle = () => {
    const newMode = mode === "light" ? "dark" : "light"; // Toggle between light and dark
    setMode(newMode); // Update state
    toggleDisplayMode(newMode); // Call the imported function to apply changes
  };

  return (
    <Navbar bg={mode === "light" ? "light" : "dark"} expand="lg" className={`px-5 align-items-center ${mode}`}>
      {/* Brand */}
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Collapsible Content */}
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex w-100 justify-content-between align-items-center">
        {/* Centered Nav Links */}
        <Nav className={`fs-6 d-flex align-items-center text-${mode === "light" ? "dark" : "light"}`}>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/education">Education</Nav.Link>
        </Nav>

        {/* Right-Aligned Button */}
        <div className="ms-auto">
          <Button
            variant={mode === "light" ? "outline-dark" : "outline-light"}
            onClick={handleToggle}
          >
            {mode === "light" ? <span className="blue-moon">🌜 Switch to Dark Mode</span> : "🌞 Switch to Light Mode"}
          </Button>
          <button className={`btn btn-${mode === "light" ? "primary" : "secondary"} ms-3`}>
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