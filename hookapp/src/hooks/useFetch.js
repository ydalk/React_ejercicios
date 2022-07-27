import { useEffect, useState } from "react";

//pido por parametro la url que voy a usar
export const useFetch = (url) => {

    const [state, setState] = useState({
        data : null,
        isLoading: true,
        error : null
    })
    

    //funcion para hacer la consuta a la API
    const getFetch = async()=>{

        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            error: null,
        })

    }

//no puedo usar async en un useEffect porque eso implica que sea una promesa y 
//useEffect esta esperando funciones puras, por lo que genera error
    useEffect(() => {
        //llamo la funcion que ejecutara el useEffect
        getFetch();
        //como dependencia paso la url, de forma que se renderice cada vez que la url cambie
    }, [url])
    

  return{
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,

  }
}
