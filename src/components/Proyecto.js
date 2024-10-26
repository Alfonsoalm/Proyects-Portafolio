import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const params = useParams();

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
                <h1 className="project-title">Proyecto: {proyecto.nombre}</h1>
                <p className="project-tecnologies">{proyecto.tecnologias}</p>
                <p className="project-description">{proyecto.descripcion}</p>
                <a className="project-repository" href={proyecto.url}>Repositorio</a>
            </div>
        </div>
    );
};
