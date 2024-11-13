import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { ListadoTrabajos } from './ProjectsList';

export const Portafolio = () => {
  const location = useLocation(); 
  // Efecto para mover el scroll al inicio cuando la ubicación cambia
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='page'>
      <h1 className='heading'>Portfolio</h1>
      <hr />
      <ListadoTrabajos/>
    </div>
  )
}
