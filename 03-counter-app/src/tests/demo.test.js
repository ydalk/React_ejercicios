

describe('Pruebas en el archivo demo.test.js', () => {
    
    test('deben ser iguales los string', () => {

        //1. Inicializacion
        const mensaje = 'Hola Mundo';
    
        //2. estímulo
        const mensaje2 = "Hola Mundo";
    
        //3. confirmar conportamiento
        expect( mensaje ).toBe( mensaje2 ); // valids equidad ===
    
    
    })
})


