import { useState } from 'react'

export const useCounter = (initialValue = 10) => {
  

  const [counter, setCounter] = useState( initialValue)

  const increment = ( value = 1)=>{ //permite determinar la cantidad en la que se desea incrementar
    setCounter( counter + value );
  }
  const decrement = ()=>{
    if( counter === 0) return; //valida y no ejecuta nada
    setCounter( counter - 1 );
  }
  const reset = ()=>{
    setCounter( initialValue);
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
