import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {


    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() =>{

        // Crea array de proyecto cogiendo solo el proyecto con id de params
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);

        setProyecto(proyecto[0]);


    },[])


  return (
    <div className='page page-work'>
        <div className='mask'>
            <img src={"/images/"+proyecto.id+".jpg"}/>
        </div>
        <h1 className='heading'>Proyecto: {proyecto.nombre}</h1>
        <p className='tecnologies'>{proyecto.tecnologias}</p>
        <p className='description'>{proyecto.descripcion}</p>
        <a className="repository" href={proyecto.url}>Repositorio</a>
    </div>
  )
}
