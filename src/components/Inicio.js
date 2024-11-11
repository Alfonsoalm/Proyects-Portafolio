import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { icons } from '../data/icons';
import { ListadoTrabajos } from "./ListadoTrabajos";
import {Stars} from "./Stars"; // Asegúrate de importar el componente Stars

export const Inicio = () => {
  const location = useLocation(); // Obtener la ubicación actual

  // Efecto para mover el scroll al inicio cuando la ubicación cambia
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="page">
      <h1 className='heading'>Home </h1>
      <p className="heading-explain">Some technologies I worked with</p>
      <hr />

      <section className='tech-grid'>
      {
        icons.map(icon => {
          return (
            <div key={icon.nombre} className='tech-item'>
              <Link to={`/project/${icon.nombre}`} className='tech-item-a'>
                <div>
                  <img src={"/images/icons/"+icon.imagen} alt={icon.nombre} />
                </div>
                <div>
                  <p>{icon.nombre}</p>
                  <Stars rating={icon.valoracion} />  {/* Añade la valoración en estrellas aquí */}
                </div>
              </Link>
            </div>
          );
        })
      }
      </section>

      <hr />
      <p className="guide-explain">
        Let me guide you through my project portfolio and my professional experience in engineering.
      </p>

      <div className="div_link">
        <Link className="link" to="/contacto">
          Contact me
        </Link>
      </div>
      <br/>

      <section className="lasts-works">
        <h2 className="heading">Some projects developed</h2>
        <ListadoTrabajos limite="2" />

        <div className="div_link">
          <Link className="link" to="/portafolio">
            See More Projects
          </Link>
        </div>
      </section>
    </div>
  );
};
