import { useState } from 'react'
import {useCounter} from '../hooks'
import { Small } from './Small'

export const Memorize = () => {

    const {counter, increment} = useCounter()
    const [show, setShow] = useState(true)

  return (
    <>
        <h1>Counter: <Small value={counter}/> </h1>
        <hr />

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

