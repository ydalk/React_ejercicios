import { shallow } from "enzyme"
import CounterApp from "../CounterApp"

describe('pruebas para el <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    //ciclo de vida de las pruebas: inicializar antes de ejecutar cada una 
    beforeEach(() => {
        //console.log(beforeEach)
        wrapper = shallow(<CounterApp />);
    })


    test('mostrar <CounterApp /> correctamente (hacer match con un snapshot) y sus valores por defecto', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('mostrar valor por defecto de 100', () => {

        const wrapper = shallow(
            <CounterApp
                value={100}
            />
        )

        // al comparar con un elemento html la variable incluye los espacios que trae
        // por eso es importante el .trim para hacer la comparación correctamente

        const valueNew = wrapper.find('h2').text().trim();
        //console.log(valueNew);
        expect(valueNew).toBe('100');


    });

    test('debe incrementar con el boton +1', () => {
        //simulamos un click sobre el botón indicado
        wrapper.find('button').at(0).simulate('click');

        const valueNew = wrapper.find('h2').text().trim();

        expect(valueNew).toBe('11');


    });

    test('debe decrementar con el boton -1', () => {

        //simulamos un click sobre el botón indicado
        wrapper.find('button').at(2).simulate('click');

        const valueNew = wrapper.find('h2').text().trim();

        expect(valueNew).toBe('9');

    })


})
