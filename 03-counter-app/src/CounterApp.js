//rafcp  crea la estructura de un comp fun con props
//rafce  crea la estructura de un comp fun con exportacion por defecto

import React, { useState } from 'react';
import PropTypes from 'prop-types'


const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value); // retora [] con 2 valores

    //handleAdd
    const handleAdd = (e) => {
        //setCounter ( counter + 1);
        setCounter((c) => c + 1);
    }

    const handleSub = (e) => {
        //setCounter ( counter + 1);
        setCounter((c) => c - 1);
    }

    const handleReset = (e) => {
        //setCounter ( counter + 1);
        setCounter((c) => value);
    }

    return (
        <>
            <h1> CounterApp </h1>
            <h2> {counter} </h2>

            <button onClick={handleAdd} > +1 </button>
            <button onClick={handleReset}> Reset </button>
            <button onClick={handleSub}> -1 </button>
        </>
    )
}

CounterApp.propType = {

    value: PropTypes.number.isRequired
}

export default CounterApp;