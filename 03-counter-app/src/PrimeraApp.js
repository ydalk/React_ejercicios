//import React, {Fragment} from 'react';
import React from 'react';
import PropTypes from 'prop-types'
import { propsOfNode } from 'enzyme/build/Utils';


// A. se puede enviar datos a través de las props desde el index
//const PrimeraApp = ( props ) => {

//puede tener varios argumentos, desestructurados desde los props {saludo}
const PrimeraApp = ({saludo, subtitulo}) => {
    
    //no imprime booleano ni objetos
    //const saludo = 'Hola Mundo';

    return (
        // <> equivale al colocar un <Fragment></Fragment>
        /*para mostrar objetos debo usar la etiqueta <pre></pre> y 
        pasarle un objeto JSON.stringify 
         */

       <>
            {/*A.  <h1> { props.saludo } </h1> */}
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3)} </pre> */}
            <p>{ subtitulo }</p>
       </>
               
    )
    
}

//valida que se envie un props de tipo string en el componente
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//crear propiedades por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

//permite que se use el componente en otros lugares
export default PrimeraApp;