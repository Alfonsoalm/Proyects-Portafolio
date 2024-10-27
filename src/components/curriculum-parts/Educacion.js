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

  // Función para generar estrellas basadas en la calificación usando SVG
  const renderStars = (grade) => {
    const maxStars = 5;
    const starValue = Math.ceil(grade) / 2; // Calificación de 10 a 5 estrellas

    const fullStars = Math.floor(starValue); // Estrellas completas
    const remainder = starValue - fullStars; // Parte decimal

    let quarterStars = 0;
    let halfStars = 0;

    if (remainder >= 0.75) {
      quarterStars = 1; // Tres cuartos
    } else if (remainder >= 0.5) {
      halfStars = 1; // Media estrella
    } else if (remainder >= 0.25) {
      quarterStars = 1; // Un cuarto
    }

    const emptyStars = maxStars - fullStars - quarterStars - halfStars;

    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => (
          <FullStar key={`full-${i}`} />
        ))}
        {halfStars > 0 && <HalfStar />}
        {quarterStars > 0 && <QuarterStar />}
        {[...Array(emptyStars)].map((_, i) => (
          <EmptyStar key={`empty-${i}`} />
        ))}
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

// SVGs para las estrellas

const FullStar = () => (
  <svg className="star" viewBox="0 0 24 24" width="16" height="16" fill="#ffbf00">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const HalfStar = () => (
  <svg className="star" viewBox="0 0 24 24" width="16" height="16">
    <defs>
      <linearGradient id="halfGradient">
        <stop offset="50%" stopColor="#ffbf00" />
        <stop offset="50%" stopColor="#e0e0e0" />
      </linearGradient>
    </defs>
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill="url(#halfGradient)"
    />
  </svg>
);

const QuarterStar = () => (
  <svg className="star" viewBox="0 0 24 24" width="16" height="16">
    <defs>
      <linearGradient id="quarterGradient">
        <stop offset="25%" stopColor="#ffbf00" />
        <stop offset="25%" stopColor="#e0e0e0" />
      </linearGradient>
    </defs>
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill="url(#quarterGradient)"
    />
  </svg>
);

const EmptyStar = () => (
  <svg className="star" viewBox="0 0 24 24" width="16" height="16" fill="#e0e0e0">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
