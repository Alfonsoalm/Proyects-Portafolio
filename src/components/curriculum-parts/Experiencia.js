import React, { useState } from 'react';
import { experiencias } from '../../data/experiencias';
import { FaArrowRight } from 'react-icons/fa'; // Importamos el icono de flecha

export const Experiencia = () => {
  const [selectedExperience, setSelectedExperience] = useState(1);
  const [showPeriod, setShowPeriod] = useState(1); 

  const handlePeriodClick = (id) => {
    setSelectedExperience(id);
    setShowPeriod(id); 
  };

  const handleKeyDown = (e) => {
    const currentIndex = experiencias.findIndex((exp) => exp.id === selectedExperience);
    if ((e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') && currentIndex < experiencias.length - 1) {
      const newIndex = experiencias[currentIndex + 1].id;
      setSelectedExperience(newIndex);
      setShowPeriod(newIndex);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      const newIndex = experiencias[currentIndex - 1].id;
      setSelectedExperience(newIndex);
      setShowPeriod(newIndex);
    }
  };

  const calculateDuration = (start, end) => {
    if (!start) return '';
    const now = end || new Date();
    const months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return `${years > 0 ? `${years} año${years > 1 ? 's' : ''} ` : ''}${remainingMonths > 0 ? `${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}` : ''}`;
  };

  return (
    <div className="page">
      <h1 className="heading">Experiencia</h1>
      <hr />

      <p className="keyboard-instruction">
        Usa la tecla derecha, Enter o Espacio para avanzar entre periodos.
      </p>

      <div
        className="timeline-container"
        tabIndex="0"
        onKeyDown={handleKeyDown}
        role="listbox"
        aria-label="Timeline navigation"
      >
        <div className="timeline-line"></div>
        <div className="timeline">
          {experiencias.map((exp) => (
            <button
              key={exp.id}
              id={`timeline-point-${exp.id}`}
              className={`timeline-point ${selectedExperience === exp.id ? 'active' : ''}`}
              onClick={() => handlePeriodClick(exp.id)}
              onMouseEnter={() => setShowPeriod(exp.id)}
              onMouseLeave={() => setShowPeriod(showPeriod)}
              title={exp.period}
              role="option"
              aria-selected={selectedExperience === exp.id}
            >
              {showPeriod === exp.id && <span className="period-label">{exp.period}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="experience-details">
        {experiencias
          .filter((exp) => exp.id === selectedExperience)
          .map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="icon-container">
                <img className="experience-icon" src={exp.icon} alt="logo" />
              </div>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-location">{exp.location}</p>
              <p className="experience-duration">Duración: {calculateDuration(exp.startDate, exp.endDate)}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
