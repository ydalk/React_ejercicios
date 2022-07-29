import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {

  const { user, setUser } = useContext( UserContext);

  return (
    <>
        <h1>Home Page {} </h1>
        <hr/>
        <pre>
          { JSON.stringify(user, null, 3)}
        </pre>

        <button
          className='btn btn-primary'
          onClick={()=>{ setUser({id: 124, name: 'caro', email: 'caro@mail.com'})}}
        >
          Establecer usuario
        </button>

    
    </>
  )
}
