
const retornaArreglo =() =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const state = (valor ) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
}

const [nombre, setNombre] = state ('Goku');

console.log( nombre );
setNombre();
