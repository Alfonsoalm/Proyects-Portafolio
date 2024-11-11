import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const [imagenActual, setImagenActual] = useState(0);
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Asegura que la página se desplace hacia arriba al cargar un proyecto
    }, [location]);

    useEffect(() => {
        const proyectoSeleccionado = trabajos.find(trabajo => trabajo.id === params.id);
        if (proyectoSeleccionado) {
            setProyecto(proyectoSeleccionado);
            setImagenActual(0); // Resetea el índice de imagen al cargar un nuevo proyecto
        }
    }, [params.id]);

    function calcularPorcentaje(estado) {
        const estados = {
            "En pruebas iniciales": 25,
            "En desarrollo": 50,
            "Casi terminado": 75,
            "Completado": 100
        };
        return estados[estado] || 0;  // Return 0 if the state is not defined
    }

    // Calculating progress percentage based on project status
    const porcentaje = calcularPorcentaje(proyecto.estado);

    return (
        <div className="project-page">
            <div className="project-card">
                
                <div className="project-mask">
                    <img src={"/images/" + proyecto.id + ".jpg"} alt={proyecto.nombre || 'Project Image'} />
                </div>

                <h1 className="project-title">{proyecto.nombre}</h1>
                <p className="project-technologies">{proyecto.tecnologias}</p>
                <p className="project-text">{proyecto.descripcion}</p>
                
                <h2>Objectives</h2>
                <p><strong>Principal:</strong> {proyecto.objetivos?.principal}</p>
                <ul>
                    {proyecto.objetivos?.secundarios?.map((objetivo, index) => (
                        <li key={index}>{objetivo}</li>
                    ))}
                </ul>

                <h2>Process</h2>
                <p className="project-text">{proyecto.proceso}</p>
                
                <h2>Challenges and Solutions</h2>
                <table className="project-table">
                    <thead>
                        <tr>
                            <th>Challenge</th>
                            <th>Solution</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proyecto.desafios?.map((desafio, index) => (
                            <tr key={index} className="project-table-row">
                                <td>{desafio}</td>
                                <td>{proyecto.soluciones[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h2>Project Status</h2>
                <p className="project-text">{proyecto.estado}</p>

                <div className="project-progress-container">
                    <div className="project-progress" style={{ width: `${porcentaje}%` }}>
                        {porcentaje}%
                    </div>
                </div>

                <a className="project-link" href={proyecto.url} target="_blank" rel="noopener noreferrer">View Repository</a>
            </div>
        </div>
    );
};
