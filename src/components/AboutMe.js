import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMicrochip, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";

export const AboutMe = () => {
  const [language, setLanguage] = useState('es'); // Controla el idioma actual
  const bio = {
    es: "Soy ingeniero electrónico nacido en Córdoba. Me gusta desarrollar proyectos de software y hardware. Me considero autodidacta y creativo, prueba de ello es este portafolio. Desde pequeño he tenido mucha curiosidad por el mundo, viendo documentales de canal Historia, y conforme he ido creciendo la ingeniería me ha ayudado a resolver esas dudas. Estudié hace ya unos años la carrera de Ingeniería electrónica, pero he seguido aprendiendo hasta hoy todo tipo de áreas, desde impresión 3D hasta ámbitos como el IoT e Informática.",
    en: "I am an electronic engineer born in Córdoba. I enjoy developing both software and hardware projects. I consider myself a self-taught and creative individual, which is evidenced by this portfolio. From a young age, I was very curious about the world, watching documentaries on the History channel, and as I grew up, engineering helped me answer those questions. I studied Electronic Engineering a few years ago, but I have continued learning in all sorts of areas, from 3D printing to fields like IoT and Computer Science."
  };
  const location = useLocation(); // Obtener la ubicación actual

  // Efecto para mover el scroll al inicio cuando la ubicación cambia
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Lista de áreas de especialización con iconos, puedes agregar traducciones aquí también si lo deseas
  const especializaciones = [
    {
      id: 1,
      title: 'Desarrollo de Software',
      description: 'Contribuyo eficientemente al desarrollo de software en un entorno de equipo colaborativo.',
      icon: faCode,
    },
    {
      id: 2,
      title: 'Desarrollo de Hardware',
      description: 'Diseño y prototipo placas de desarrollo a medida para pruebas y evaluaciones.',
      icon: faMicrochip,
    },
    {
      id: 3,
      title: 'Gestión de Proyectos',
      description: 'Coordinación y gestión de proyectos de software y hardware.',
      icon: faProjectDiagram,
    },
  ];

  return (
    <div className="page">
      <h1 className="heading">About Me</h1>
      {/* <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>Change Language</button> */}
      <hr />
      <div className="services">
        <p className="bio">{bio[language]}</p>
        <div className="services-grid">
          {especializaciones.map((especializacion) => (
            <div key={especializacion.id} className="service-card">
              <FontAwesomeIcon icon={especializacion.icon} className="service-icon" />
              <h3>{especializacion.title}</h3>
              <p>{especializacion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
