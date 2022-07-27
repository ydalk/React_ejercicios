import { useLayoutEffect, useRef } from "react";

export const Quote = ({author, quote}) => {

  //genero una referencia al elemento que necesito
  const pRef = useRef();

  useLayoutEffect(() => {
    //con esta funcion getBoun... capturo la medida del elemento p 
    //el cual varia de acuerdo con el tamaño del mensaje generado desde la API
    console.log(pRef.current.getBoundingClientRect());
  
  }, [])


  return (
    <blockquote 
      className="blockquote text-end"
      style={{display:'flex'}}>
      <p
      ref={pRef}
      className="mb-1">{quote}
      </p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  )
}
