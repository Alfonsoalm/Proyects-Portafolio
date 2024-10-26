import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBrain, faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sections = [
  { title: 'Experiencia', description: 'Haz clic para ver más detalles sobre experiencia', icon: faBriefcase, link: '/curriculum/experiencia' },
  { title: 'Conocimientos', description: 'Haz clic para ver más detalles sobre conocimientos', icon: faBrain, link: '/curriculum/conocimientos' },
  { title: 'Educacion', description: 'Haz clic para ver más detalles sobre educación', icon: faGraduationCap, link: '/curriculum/educacion' },
  { title: 'Reconocimientos', description: 'Haz clic para ver más detalles sobre reconocimientos', icon: faTrophy, link: '/curriculum/reconocimientos' },
];

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
