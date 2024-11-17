import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from '../components/Home';
import { Portafolio } from '../components/Portfolio';
import { AboutMe } from '../components/AboutMe';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contact';
import { Footer } from '../layout/Footer';
import { Error } from '../components/Error';
import { Proyecto } from '../components/Project';
import { Conocimientos } from '../components/curriculum-parts/Knowledge';
import { Experiencia } from '../components/curriculum-parts/Experience';
import { Educacion } from '../components/curriculum-parts/Education';
import { Reconocimientos } from '../components/curriculum-parts/Recognitions';
import { ProjectView } from '../components/ProjectView';
import { Courses } from '../components/curriculum-parts/Courses';
import { TechnoPage } from '../components/TechnoPage';
import { HeaderNav } from '../layout/HeaderNav';

export const MisRutas = () => {
  return (
    <BrowserRouter >
    <HeaderNav />
    <div className='layout'>
        <section className="content">
            <Routes >
                <Route path='/' element={ <Navigate to="/inicio"/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/portafolio' element={<Portafolio/>}/>
                <Route path='/aboutme' element={<AboutMe/>}/>
                <Route path='/curriculum' element={<Curriculum/>}/>
                <Route path="/curriculum/experiencia" element={<Experiencia />} />
                <Route path="/curriculum/conocimientos" element={<Conocimientos />} />
                <Route path="/curriculum/educacion" element={<Educacion />} />
                <Route path="/curriculum/educacion/cursos" element={<Courses />} />
                <Route path="/curriculum/reconocimientos" element={<Reconocimientos />} />
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/proyecto/:id' element={<Proyecto/>}/>
                <Route path='/project/:techName' element={<ProjectView />} /> {/* Ruta dinámica para la vista del proyecto */}
                <Route path='/tecnologies' element={<TechnoPage />} /> {/* New route for all icons */}
                <Route path='*' element={<Error/>}/>
            </Routes>
        </section>
    </div>
    <Footer />
    </BrowserRouter>
  )
}
