import React from 'react';
import { NavLink } from 'react-router-dom';
import { RedesSociales } from '../components/RedesSociales';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <h3>Alfonso Almenara
            </h3> 
            <p className='header-subtitle'>R & D Engineer | Cetemet
            </p>
        </div>

        <RedesSociales />
        
        <nav className="nav">
            <ul>
                <li><NavLink to="/inicio" className={({isActive}) => isActive ? "active" :""}>Home</NavLink></li>
                <li><NavLink to="/portafolio" className={({isActive}) => isActive ? "active" :""}>Portfolio</NavLink></li>
                <li><NavLink to="/curriculum" className={({isActive}) => isActive ? "active" :""}>Curriculum</NavLink></li>
                <li><NavLink to="/aboutme" className={({isActive}) => isActive ? "active" :""}>About Me</NavLink></li>
                <li><NavLink to="/contacto" className={({isActive}) => isActive ? "active" :""}>Contact</NavLink></li>
            </ul>
        </nav>

    </header>
  )
}
