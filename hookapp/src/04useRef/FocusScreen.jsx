// useRef sirve para cambiar valores sin dispara la renderizacion

import { useRef } from "react"

export const FocusScreen = () => {

//va a hacer referencia unicamente al elemento que lo tenga referenciado 
const inputRef = useRef();

const onClick = ()=>{
  //va a hacer foco y seleccionar el valor del input 
  inputRef.current.select();
}

  return (
    <>
      <h1>Focus Screen</h1>
      <hr/>

      <input 
        ref={inputRef}
        type='text'
        placeholder='Ingrese su nombre'
        className="form-control"
      />
      <button 
        className="btn btn-primary mt-2"
        onClick={onClick}
      >Set focus
      </button>

    </>
  )
}
