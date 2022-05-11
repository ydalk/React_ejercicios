// imr shortcut para importar React 
import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';


const divRoot = document.querySelector('#app');

//A. ReactDOM.render(<PrimeraApp saludo="Hola soy Caro"/>, divRoot); //permite enviar el saludo como parametro
//renderiza o muestra le envio el mensje qeu quiero mostrar y la equiqueta 
ReactDOM.render(<CounterApp value={10} />, divRoot);

//console.log(divRoot);

