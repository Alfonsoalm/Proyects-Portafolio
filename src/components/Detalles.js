import React from 'react';
import { trabajos } from '../data/trabajos'; // Asegúrate de tener esta importación correcta

export const Detalles = ({ id }) => {
    const proyecto = trabajos.find(trabajo => trabajo.id === id);

    if (!proyecto) {
        return <div>Proyecto no encontrado</div>;
    }

    return (
        <div className="detalle-proyecto">
            <h1>{proyecto.nombre}</h1>
            <p>{proyecto.descripcion}</p>

            <h2>Objetivos</h2>
            <ul>
                <li>{proyecto.objetivos.principal}</li>
                {proyecto.objetivos.secundarios.map((sub, index) => (
                    <li key={index}>{sub}</li>
                ))}
            </ul>

            <div className="proceso-y-imagenes">
                <p>{proyecto.proceso}</p>
                <div className="imagenes-proceso">
                    {proyecto.imagenes.map((img, index) => (
                        <img key={index} src={`/images/${img}`} alt={`Imagen de ${proyecto.nombre}`} />
                    ))}
                </div>
            </div>

            <h2>Esquema</h2>
            <img src={`/images/${proyecto.esquema}`} alt="Esquema del proyecto" />

            <h2>Desafíos y Soluciones</h2>
            <table>
                <thead>
                    <tr>
                        <th>Desafío</th>
                        <th>Solución</th>
                    </tr>
                </thead>
                <tbody>
                    {proyecto.desafios.map((desafio, index) => (
                        <tr key={index}>
                            <td>{desafio}</td>
                            <td>{proyecto.soluciones[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Estado</h2>
            <p>{proyecto.estado}</p>

            <h2>Lecciones Aprendidas</h2>
            <p>{proyecto['lecciones aprendidas']}</p>
        </div>
    );
};
