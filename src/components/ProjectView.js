import React from 'react';
import { useParams } from 'react-router-dom';
import { icons } from '../data/icons';

export const ProjectView = () => {
  const { techName } = useParams();

  // Encuentra el icono correspondiente a la tecnología seleccionada
  const selectedIcon = icons.find(icon => icon.nombre === techName);

  return (
    <div className="project-view">v
      {selectedIcon ? (
        <iframe 
          src={selectedIcon.url}
          title={techName}
          className="project-iframe"
        />
      ) : (
        <p>Project not found.</p>
      )}
    </div>
  );
};
