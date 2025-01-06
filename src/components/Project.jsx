import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { trabajos } from '../data/projects';

export const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Asegura que la página se desplace hacia arriba al cargar un proyecto
    }, [location]);

    useEffect(() => {
        const proyectoSeleccionado = trabajos.find(trabajo => trabajo.id === params.id);
        if (proyectoSeleccionado) {
            setProyecto(proyectoSeleccionado);
            console.log("Selected project state:", proyectoSeleccionado.estado); // Add this line
        }
    }, [params.id]);

    function calcularPorcentaje(estado) {
        const estados = {
            "In initial tests": 25,
            "In development": 50,
            "Almost finished": 75,
            "Completed": 100,
        };
        return estados[estado] || 0;  // Return 0 if the state is not defined
    }

    // Calculating progress percentage based on project status
    const porcentaje = calcularPorcentaje(proyecto.estado);

    // Página inicial
    const [currentPage, setCurrentPage] = useState(0); 
    
    return (
        <div className="project-page">
            <div className="project-card">
                
                <div className="project-mask">
                    <img 
                        className="project-image" 
                        src={"/images/" + proyecto.id + ".jpg"} 
                        alt={proyecto.nombre || 'Project Image'} 
                    />
                </div>
             
                <h1 className="project-title">{proyecto.nombre}</h1>
                <p className="project-technologies">{proyecto.tecnologias}</p>
                <p className="project-text">{proyecto.descripcion}</p>
                
                <h2 className="project-objectives-title">Objectives</h2>
                <p className="project-objectives-principal"><strong>Principal:</strong> {proyecto.objetivos?.principal}</p>
                <ul className="project-objectives-secondaries">
                    {proyecto.objetivos?.secundarios?.map((objetivo, index) => (
                        <li key={index}>{objetivo}</li>
                    ))}
                </ul>

                <h2 className="project-process-title">Process</h2>
                <ul className="project-process-list">
                    {proyecto.proceso?.split('\n').map((line, index) => (
                        <li key={index}>{line.trim()}</li>
                    ))}
                </ul>

                <div className="project-images-container">
                    {proyecto.imagenes && proyecto.imagenes.length > 0 ? (
                        <>
                            {/* Imagen visible */}
                            <div className="image-full-width">
                                <img
                                    className="project-image-item"
                                    src={`/images/proyectos/${proyecto.id}/${proyecto.imagenes[currentPage]}`}
                                    alt={proyecto.imagenes[currentPage]
                                        .split('/')
                                        .pop()
                                        .replace(/_/g, ' ')
                                        .replace(/-/g, ' ')
                                        .replace(/\.[^/.]+$/, '')}
                                />
                            </div>

                            {/* Controles de navegación */}
                            <div className="pagination-controls">
                                <button
                                    disabled={currentPage === 0}
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                >
                                    Previous
                                </button>
                                <span>
                                    Image {currentPage + 1} of {proyecto.imagenes.length}
                                </span>
                                <button
                                    disabled={currentPage === proyecto.imagenes.length - 1}
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    ) : (
                        <p>No images available for this project.</p>
                    )}
                </div>

                
                <h2 className="project-process-title">Challenges and Solutions</h2>
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

                <h2 className="project-process-title">Project Status</h2>
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
