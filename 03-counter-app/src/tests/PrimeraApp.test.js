import React from 'react';
import { shallow } from 'enzyme'

import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <Primera App />', () => {


    // test('debe mostrar el mensaje "Hola soy Caro"', () => {

    //     const saludo = "Hola soy Caro";

    //     //const wrapper = render(<PrimeraApp saludo = {saludo} />);
    //     //wrapper.getByText(saludo);

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })

    test('debe mostrar <primeraApp /> correctamente', () => {

        const saludo = 'Hola soy Ari';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();

    });
    //sirve para hacer evlluaciones en el html
    test('debe mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola soy Ari';
        const subtitulo = 'Soy el subtitulo'

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />)

        const textoParrafo = wrapper.find('p').text();
        //console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);
    });



})
