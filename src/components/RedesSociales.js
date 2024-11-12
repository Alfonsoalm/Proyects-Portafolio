import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons

export const RedesSociales = () => {
  return (
    <div className="social-network">
      <a href="https://www.linkedin.com/in/alfonso-almenara-l%C3%B3pez-136509238/" // Replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="social-link linkedin">
        <FaLinkedin className="social-icon" />
        <span>LinkedIn</span>
      </a>

      <a href="mailto:alfonsoalm34@gmail.com" // Replace with your Gmail address
        className="social-link gmail">
        <FaEnvelope className="social-icon" />
        <span>Gmail</span>
        <span className="tooltip">alfonsoalm34@gmail.com</span> {/* Add tooltip */}
      </a>
    </div>
  );
};
