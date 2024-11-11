import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const params = useParams();   
    const location = useLocation(); 
    // Efecto para mover el scroll al inicio cuando la ubicación cambia
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        const proyectoSeleccionado = trabajos.find(trabajo => trabajo.id === params.id);
        setProyecto(proyectoSeleccionado);
    }, [params.id]);

    return (
        <div className="page page-work">
            <div className="project-card">
                <div className="project-mask">
                    <img src={"/images/" + proyecto.id + ".jpg"} alt={proyecto.nombre || 'Project Image'} />
                </div>
                <h1 className="project-title">Project: {proyecto.nombre}</h1>
                <p className="project-tecnologies">{proyecto.tecnologias}</p>
                <p className="project-description">{proyecto.descripcion}</p>
                <a className="project-repository" href={proyecto.url}>Repositorio</a>
            </div>
        </div>
    );
};
