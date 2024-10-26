import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
        <h1 className='heading'>Contacto</h1>
        <hr />
        
        <form className='contact' action='mailto:alfonsoalm34@gmail.com'>
            <input type="text" placeholder='Nombre'></input>
            <input type="text" placeholder='Apellidos'></input>
            <input type="text" placeholder='Email'></input>
            <textarea placeholder='Motivo de contacto'/>
            <input type="submit" value='Enviar'></input>
        </form>
    </div>
  )
}
