import React, {useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import { icons } from '../data/icons';
import { Stars } from './Stars'; // Make sure to import Stars component

export const TechnoPage = () => {
  const location = useLocation(); 
  // Efecto para mover el scroll al inicio cuando la ubicación cambia
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="page">
      <h1 className="heading">All Technologies I Worked With</h1>
      <hr />
      <section className='tech-grid'>
        {icons.map(icon => (
          <div key={icon.nombre} className='tech-item'>
            <Link to={`/project/${icon.nombre}`} className='tech-item-a'>
              <div>
                <img src={"/images/icons/" + icon.imagen} alt={icon.nombre} />
              </div>
              <div>
                <p>{icon.nombre}</p>
                <Stars rating={icon.valoracion} />  {/* Display star ratings */}
              </div>
            </Link>
          </div>
        ))}
      </section>
      <div className="div_link">
        <Link className="link" to="/inicio">
          Back to Home
        </Link>
      </div>
    </div>
  );
};
