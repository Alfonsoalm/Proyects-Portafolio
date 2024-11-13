import React, {useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { icons } from '../data/icons';

export const ProjectView = () => {
  const { techName } = useParams();
  const location = useLocation();

  // Efecto para mover el scroll al inicio cuando la ubicación cambia
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
