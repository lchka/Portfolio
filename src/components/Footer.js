import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/Footer.scss"; // Make sure the styles are linked
import CV from "../assets/CV.pdf";
const Footer = () => {
  
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Social Media Section */}
        <div className="footer-section">
          <h3 className="footer-heading py-2">Social Media</h3>
          <ul className="footer-links">
            <li className="social-item ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} />
                <span className=" ps-2 social-text"> Facebook</span>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} />
                <span className="social-text ps-2"> Twitter</span>
              </a>
            </li>
            <li className="social-item">
              <a
                href="www.linkedin.com/in/laura-hofmanova-35268a295"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
                <span className="social-text ps-2"> LinkedIn</span>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://github.com/lchka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
                <span className="social-text ps-2"> GitHub</span>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
                <span className="social-text ps-2"> Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Me Section */}
        <div className="footer-section">
          <h3 className="footer-heading py-2">Contact Me</h3>
          <ul className="footer-links">
            <li>
              <a href="mailto:N00222003@iadt.ie">Email Me</a>{" "}
            </li>
            <li>
            <a href="/contact">Contact Form</a>

            </li>
          </ul>
        </div>

        {/* Other Info Section */}
        <div className="footer-section">
          <h3 className="footer-heading py-2">Other Info</h3>
          <ul className="footer-links">
            <li>
              <a href="/about">About Me</a>
            </li>
            <li>
              <a href={CV}>CV Download</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Laura Hofmanova | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
