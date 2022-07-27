import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'ydalk',
        email: 'carolina@mail.com'
    });

    const {username, email} = formState; 


    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setFormState({
            ...formState,
            // propiedades computadas de los objetos se colocan en llaves [] asignando el valor que va a tomar
            [ name ]: value
        })
    }

    // // el primer argumento que recibe un callback que determina la función que se va a ejecutar cada vez que se llame
    // // el segundo es un arreglo de dependencias, es la condición por la que se debe disparar
    // // si esta vacio, se disparará una sola vez al montarse
    // useEffect( () =>{
    //     console.log('formState cambió');
    // }, []);
    
    // // se recomienda hacer un useEffect por cada acción que se quiera llamar
    // // si colocamos un argumento en el arreglo de dependencias se disparará el useEffect cada vez que esta propiedad cambie
    // useEffect( () =>{
    //     console.log('formState cambió');
    // }, [formState]);

    // useEffect( () =>{
    //     console.log('email cambió');
    // }, [email]);


    //useEffect con snippet
    //tiene el callback con el cuerpo y en el retorno se maneja la limpiaza en caso de tener un observable o un listener
    // useEffect(() => {
    //     //acá se puede crear el observable o listener
    //   first
    
    //   //acá lo limpiamos para evitar que siga consumiendo memoria
    //   return () => {
    //     second
    //   }
    //   //arreglo de dependencias
    // }, [third])
    

  return (
   <>
    <h1> Formulario Simple </h1>
    <hr />

    <input 
        type='text'
        className='form-control mt-2'
        placeholder='Username'
        name= 'username'
        value={username}
        onChange = { onInputChange }
    />
    <input 
        type='email'
        className='form-control mt-2'
        placeholder='carolina@mail.com'
        name='email'
        value={email}
        onChange= { onInputChange }
    />

    {
        (username === 'ydalk') && <Message />
    }
   </>
  )
}
