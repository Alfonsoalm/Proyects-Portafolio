import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMicrochip, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export const Servicios = () => {
  // Lista de servicios con iconos
  const servicios = [
    {
      id: 1,
      title: 'Software Development Projects',
      description: 'I efficiently contribute to software development in a collaborative team environment.',
      icon: faCode,
    },
    {
      id: 2,
      title: 'Hardware Development Projects',
      description: 'I design and prototype development boards tailored for testing and evaluation.',
      icon: faMicrochip,
    },
    {
      id: 3,
      title: 'Project Management',
      description: 'Coordination and management of commercial software and hardware projects.',
      icon: faProjectDiagram,
    },
  ];

  return (
    <div className="page">
      <h1 className="heading">Services</h1>
      <hr />

      <div className="services-grid">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="service-card">
            <FontAwesomeIcon icon={servicio.icon} className="service-icon" />
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
