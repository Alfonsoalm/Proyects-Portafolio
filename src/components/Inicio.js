import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
        <h3 className='heading'>
            Hola, soy Alfonso Almenara, un humilde <strong>Ingeniero Electronico. </strong>
            Tengo conocimientos en:
            <ul>
              <li>Lenguajes programacion: <strong>Python, JavaScript, C++, C</strong></li>
              <li>Robotica y sensorica: <strong>ROS</strong></li>
              <li>Placas de desarrollo IOT: <strong>Esp32, Arduino, Raspberry</strong></li>
              <li>Diseño e Impresion 3D: <strong>Cura, Solidworks</strong></li>
              <li>Prototipado de placas: <strong>EasyEDA, KiCAD</strong></li>
              <li>Herramientas de trabajo grupal: <strong>Github, Notion</strong></li>
              <li>Dominio otros softwares: <strong>Excel, Power Point, Word</strong></li>
            </ul>
        </h3>

        <hr/>

        <h2 className='title'>
            Dejame guiarte a traves de los proyectos que he desarrollado
        </h2>

        <div className='div_link'>
          <Link className="link" to="/contacto"> Contacta conmigo</Link>
        </div>

        <section className='lasts-works'>
            <h2 className='heading'>Proyectos desarrollados</h2>
            <ListadoTrabajos limite="2" /> 
        </section>
    </div>
  )
}
