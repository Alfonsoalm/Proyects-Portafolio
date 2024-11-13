import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { sections } from '../data/sections';

export const Curriculum = () => {
  const location = useLocation(); 
  // Efecto para mover el scroll al inicio cuando la ubicación cambia
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
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
