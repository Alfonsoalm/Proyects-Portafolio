// src/components/SocialNetwork.js
import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importamos los íconos

export const RedesSociales = () => {
  return (
    <div className="social-network">
      <a href="https://www.linkedin.com/in/alfonso-almenara-l%C3%B3pez-136509238/" // Sustituye con tu URL de LinkedIn
        target="_blank"
        rel="noopener noreferrer"
        className="social-link linkedin">
        <FaLinkedin className="social-icon" />
        <span>LinkedIn</span>
      </a>

      <a href="mailto:alfonsoalm34@gmail.com" // Sustituye con tu dirección de Gmail
        className="social-link gmail">
        <FaEnvelope className="social-icon" />
        <span>alfonsoalm34
              @gmail.com</span>
      </a>
    </div>
  );
};

