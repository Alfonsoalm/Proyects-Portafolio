import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { sections } from '../data/secciones';

export const Curriculum = () => {
  return (
    <div className="page">
      <h1 className="heading">Curriculum</h1>
      <hr />
      <div className="curriculum-grid">
        {sections.map((section, index) => (
          <div key={index} className="curriculum-card">
            <FontAwesomeIcon icon={section.icon} className="curriculum-icon" />
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <Link to={section.link} className="curriculum-button">Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
