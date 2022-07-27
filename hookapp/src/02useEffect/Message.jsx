import { useEffect, useState } from "react";


export const Message = () => {

  const [ coords, setCoords] = useState({x:0, y:0});

  useEffect(() => {

    //creo  una función a parte para que es la que se ejecutará cuando se monte el componente 
    //debe ser a parte para que sea el mismo espacio en memoria al montar y desmontar el componenete
    const onMouseMove = ({x, y})=>{
      // capturo las cordenadas del mouse desde el evento(event.x, event.y) y desestructuro
      setCoords({x, y});
    }

    //se crea el listener y llamo a la función 
    window.addEventListener('mousemove', onMouseMove)
  
    //se desmonta el componente y la función 
    return () => {
    window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  

  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}

    </>
  )
}
