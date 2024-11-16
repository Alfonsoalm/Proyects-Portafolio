import React from 'react';
import { LinkIcons } from "./LinkIcons";

const icons = [
  {
    link: "https://www.linkedin.com/in/alfonso-almenara-l%C3%B3pez-136509238/",
    icon: "bx bxl-linkedin"
  },
  {
    link: "https://github.com/Alfonsoalm",
    icon: "bx bxl-github"
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <LinkIcons icons={icons} />
      <p className="copyright">
        © 2024 Alfonso Almenara Lopez | Todos los Derechos Reservados
      </p>
    </footer>
  );
};
