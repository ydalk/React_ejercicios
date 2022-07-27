import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

  const [counter, setCounter]= useState(10);

  //sirve para memorizar funciones que se ejecutaran en función de la dependencia
  const increment = useCallback(
    //se envia el argumento que deseo pasarle si es necesario, tantos como necesite
    (value) => {
        //dentro de los set tambien puedo llamar un callbakc y asignarle el valor actual del couter y modificarlo
        setCounter((c)=> c + value)
    },
    [],
  )
  
   
    return (
    <>
        <h1> use Callback Hook: { counter } </h1>
        <hr/>

        <ShowIncrement increment={increment}/>

    </>
  )
}
