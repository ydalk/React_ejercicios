import { useState } from "react";
//para poder hacer uso en caulquier lugar declaro parametros iniciales como un objeto vacio
export const useForm = (initialForm = {}) => {
//creo el estado a usar
    const [formState, setFormState] = useState(initialForm);
    //función que captura los dataos a través del evento
    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setFormState({
            ...formState,
            // propiedades computadas de los objetos se colocan en llaves [] asignando el valor que va a tomar
            [ name ]: value
        })
    }

    const onResetForm = ()=>{
        setFormState(initialForm)
    }
    

//retorno el estado del formulario y la función 
  return {
   ...formState,
   formState,
   onInputChange,
   onResetForm,
  }
}
