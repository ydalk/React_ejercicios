//desestructuro desde el archivo de barril creado en la carpeta hooks
import { useFetch, useCounter } from "../hooks"
import { LoadingQuote } from "../03Example/LoadingQuote";
import { Quote } from "../03Example/Quote";

export const Layout = () => {

    //para usar otro hook, lo importo y desestructuro los valores que requiero 
    const {counter, increment, decrement } = useCounter(1);

    const { data, isLoading, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    //  !!data valida si el valor de data es true va a ejecutar lo indicado después del && en este caso trae la data en la posición [0]
    //  de esta forma puedo desestructurar los valores para llamarlos en el componente
    const {author, quote} = !!data && data[0]; 

    console.log(data, isLoading, error);


  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
          isLoading 

          ? <LoadingQuote/> 
          : <Quote author={author}  quote ={quote} />
        }

        {/* a través del evento del boton utilizo la función requerida del hook a utilizar */}
      <button 
        className="btn btn-primary" 
        disabled ={isLoading}
        onClick={decrement}
      >Prev quote
      </button>
      <button 
        className="btn btn-primary" 
        disabled ={isLoading}
        onClick={ ()=> {increment()}}
      >Next quote
      </button>
    </>
  )
}
