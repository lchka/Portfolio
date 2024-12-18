import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/DisplayMode.scss";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/Home.scss";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
