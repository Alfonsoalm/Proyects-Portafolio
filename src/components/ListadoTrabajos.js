import React from 'react';
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

export const ListadoTrabajos = ({ limite }) => {

  function calcularPorcentaje(estado) {
    const estados = {
        "En pruebas iniciales": 25,
        "En desarrollo": 50,
        "Casi terminado": 75,
        "Terminado": 100
    };
    return estados[estado] || 0; 
  }

  return (
      <section className='works'>
      {
        trabajos.slice(0, limite).map(trabajo => {
          const porcentaje = calcularPorcentaje(trabajo.estado);
          return (
            <article key={trabajo.id} className='work-item'>
              <div className='mask'>
                  <img src={`/images/${trabajo.id}.jpg`} alt={trabajo.nombre} />
              </div>
              <span> {trabajo.categorias} </span>
              <div> 
                <Link className='project-title' to={`/proyecto/${trabajo.id}`}>{trabajo.nombre}</Link>
              </div>
              <div className='project-technologies'> {trabajo.tecnologias} </div>
              
              <div className="project-progress-container">
                    <div className="project-progress" style={{ width: `${porcentaje}%` }}>
                        {porcentaje}%
                    </div>
              </div>
            </article>
          );
        })
      }
      </section>
  )
}
