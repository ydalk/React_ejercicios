import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
        <h2>Counter Custom Hook { counter } </h2>
        <hr/>

        {/* cuando envio parametros a un función la convierto en función de flecha, en caso contrario solo la envio desestructurada*/}
        <button className='btn btn-primary' onClick={() => increment(2)}>Add 1</button>
        <button className='btn btn-primary' onClick={reset}>Reset</button>
        <button className='btn btn-primary' onClick={decrement}>Sub 1</button>
    </>
  )
}
