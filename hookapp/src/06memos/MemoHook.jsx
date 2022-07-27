import { useMemo, useState } from 'react'
import {useCounter} from '../hooks'

//si no quiero que una función se reprocese y no se vuelva asignar en memoria se crea fuera del componente
//util si requiero memorizar valores de tareas pesadas y evitar que se vuelva a renderizar
const heavyStuff = ( iterationNumber = 100)=>{
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...');
    
  }
  return `${ iterationNumber} iteraciones realizadas`;
}




export const MemoHook = () => {

    const {counter, increment} = useCounter()
    const [show, setShow] = useState(true)

    //memoriza un valor (primer argumento), la dependecia es el valor en función del cual se va a renderizar
    const valorMemorizado = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />

        <h4> { valorMemorizado } </h4>

        <button 
            className='btn btn-primary'
            onClick={()=>{increment()}}
        > + 1 
        </button>

        <button 
            className='btn btn-outline-primary'
            // de esta forma alterno el valor del booleano al hacer click
            onClick={()=>{setShow( !show )}}
            //se pasa por stringify ya que al ser un valor booleano no lo puedo mostrar
        > hide/show { JSON.stringify(show)}
        </button>

    </>
  )
}

