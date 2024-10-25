import './App.css';
// import { Curriculum } from './components/curriculum';
// import { Contacto } from './components/contacto';
// import { Inicio } from './components/inicio';
// import { Portafolio } from './components/portafolio';
// import { Servicios } from './components/servicios';
import { MisRutas } from './router/MisRutas';

function App() {
  return (
      <div className='layout'>
        <MisRutas/>
      </div>   
  );
}

export default App;
