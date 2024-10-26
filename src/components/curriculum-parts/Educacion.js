// src/components/Educacion.js
import React, { useState } from 'react';
import { education } from '../../data/education';
import { Link } from 'react-router-dom';

export const Educacion = () => {
  return (
    <div className="page">
      <h1 className="heading">Education</h1>
      <hr />
      <div className="education-container">
        {education.map((data, index) => (
          <FlippableCard key={index} data={data} />
        ))}
      </div>
      <div className="button-container">
        <Link to="/curriculum/educacion/cursos" className="view-courses-button">View Courses</Link>
      </div>
    </div>
  );
};

const FlippableCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  // Función para generar estrellas basadas en la calificación
  const renderStars = (grade) => {
    const fullStars = Math.floor(grade / 2);
    const halfStar = grade % 2 >= 0.5;
    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="star full">★</span>
        ))}
        {halfStar && <span className="star half">★</span>}
      </div>
    );
  };

  return (
    <div className={`education-item ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">
        <img
          src="/images/companies/logo_uco.png"
          alt="Institution logo"
          className="institution-logo"
        />
        <h3>{data.degree}</h3>
        <p><strong>Institution:</strong> {data.institution}</p>
        <p><strong>Period:</strong> {data.startDate} - {data.endDate}</p>
        <p><strong>Grade:</strong> {data.grade} {renderStars(data.grade)}</p>
        <button className="toggle-button" onClick={handleFlip}>Show Skills</button>
      </div>
      <div className="back" onClick={handleFlip}>
        <h4>Skills:</h4>
        <ul className="skills">
          {data.skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
        <button className="toggle-button" onClick={handleFlip}>Back</button>
      </div>
    </div>
  );
};
