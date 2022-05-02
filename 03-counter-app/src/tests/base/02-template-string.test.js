import '@testing-library/jest-dom'
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string', () => {

    test('prueba en el metodo getSaludo', () => {
        
        const nombre = 'Ariadna';

        const saludo = getSaludo( nombre );

        //puedo validar sin el expect
        expect( saludo ).toBe( 'Hola ' + nombre );
    })

    // getSaludo debe retornar Hola Miguel si no hay argumento

    test('prueba en el metodo getSaludo sin argumento', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Miguel');
    })
})