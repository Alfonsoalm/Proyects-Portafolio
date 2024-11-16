import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../data/icons';
import { Stars } from './Stars'; // Make sure to import Stars component

export const TechnoPage = () => {
  return (
    <div className="page">
      <h1 className="heading">All Technologies I Worked With</h1>
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
