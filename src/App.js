import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/DisplayMode.scss";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GiphyViewer from "./pages/giphy/GiphyViewer"; // Import GiphyViewer
import "./styles/Home.scss";
import Footer from "./components/Footer";

const App = () => {
  return (
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
        <Route path="/giphy-viewer" element={<GiphyViewer />} /> {/* Add GiphyViewer route */}
      </Routes>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;