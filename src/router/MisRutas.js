import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../layout/HeaderNav';
import { Footer } from '../layout/Footer';
import { Error } from '../components/Error';
import { Proyecto } from '../components/Proyecto';
import { Conocimientos } from '../components/curriculum-parts/Conocimientos';
import { Experiencia } from '../components/curriculum-parts/Experiencia';
import { Educacion } from '../components/curriculum-parts/Educacion';
import { Reconocimientos } from '../components/curriculum-parts/Reconocimientos';
import { Proyectos } from '../components/curriculum-parts/Proyectos';
import { ProjectView } from '../components/ProjectView';
import { RedesSociales } from '../components/RedesSociales';
import { Courses } from '../components/curriculum-parts/Courses';

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* HEADER Y NAVEGACION */}
        <HeaderNav />

        {/* CONTENIDO CENTRAL */}
        <section className="content">
            <Routes>
                <Route path='/' element={ <Navigate to="/inicio"/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/portafolio' element={<Portafolio/>}/>
                <Route path='/servicios' element={<Servicios/>}/>
                <Route path='/curriculum' element={<Curriculum/>}/>
                <Route path="/curriculum/experiencia" element={<Experiencia />} />
                <Route path="/curriculum/conocimientos" element={<Conocimientos />} />
                <Route path="/curriculum/educacion" element={<Educacion />} />
                <Route path="/curriculum/educacion/cursos" element={<Courses />} />
                <Route path="/curriculum/reconocimientos" element={<Reconocimientos />} />
                <Route path="/curriculum/proyectos" element={<Proyectos />} />
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/proyecto/:id' element={<Proyecto/>}/>
                <Route path='/project/:techName' element={<ProjectView />} /> {/* Ruta dinámica para la vista del proyecto */}
                <Route path='/redes_sociales' element={<RedesSociales />} /> {/* Ruta dinámica para la vista del proyecto */}
                <Route path='*' element={<Error/>}/>
            </Routes>
        </section>

        {/*FOOTER */}
        <Footer />
    </BrowserRouter>
  )
}
