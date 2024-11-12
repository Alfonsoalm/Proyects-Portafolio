import React, { useEffect, useState, useRef } from 'react';
import { experiencias } from '../../data/experiencias';

export const Experiencia = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiencias[0].id);
  const [showPeriod, setShowPeriod] = useState(experiencias[0].id);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const currentIndex = experiencias.findIndex(exp => exp.id === selectedExperience);
      const nextIndex = (currentIndex + 1) % experiencias.length;
      setSelectedExperience(experiencias[nextIndex].id);
      setShowPeriod(experiencias[nextIndex].id);
    }, 3000); // Cambia cada 4 segundos

    return () => clearInterval(intervalRef.current); // Limpia el intervalo al desmontar el componente
  }, [selectedExperience]);

  const handlePeriodClick = (id) => {
    clearInterval(intervalRef.current); // Usa la ref para limpiar el intervalo
    setSelectedExperience(id);
    setShowPeriod(id);
  };

  const handleKeyDown = (e) => {
    const currentIndex = experiencias.findIndex(exp => exp.id === selectedExperience);
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

  return (
    <div className="page">
      <h1 className="heading">Experience</h1>
      <hr />

      <div
        className="timeline-container"
        tabIndex="0"
        onKeyDown={handleKeyDown}
        aria-label="Timeline navigation"
      >
        <div className="timeline-line"></div>
        <div className="timeline">
          {experiencias.map((exp) => (
            <button
              key={exp.id}
              className={`timeline-point ${selectedExperience === exp.id ? 'active' : ''}`}
              onClick={() => handlePeriodClick(exp.id)}
              onMouseEnter={() => setShowPeriod(exp.id)}
              onMouseLeave={() => setShowPeriod(selectedExperience)}
              title={exp.period}
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
                <img className="experience-icon" src={exp.icon} alt={`${exp.title} logo`} />
              </div>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-location">{exp.location}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
