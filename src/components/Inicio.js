import React from "react";
import { Link } from "react-router-dom";
import { icons } from '../data/icons';
import { ListadoTrabajos } from "./ListadoTrabajos";

export const Inicio = () => {
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
        <h2 className="heading">Some proyects developed</h2>
        <ListadoTrabajos limite="2" />
      </section>
    </div>
  );
};
