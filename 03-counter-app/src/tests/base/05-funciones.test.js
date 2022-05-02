import {getUser} from '../../base/05-funciones'
import {getUsuarioActivo} from '../../base/05-funciones'


describe( 'Pruebas en 05-funciones' , ()=> {

    test('getUser debe retornar un objeto', () => {
        
        const userTest ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user).toEqual( userTest )
    })

    test('getUserTest debe retornar un objeto', () => {
        
        const nombre = 'Carolina'
        
        const userActivoTest ={
            uid: 'ABC567',
            username: nombre
        }

        const user2 = getUsuarioActivo( nombre );

        expect( user2).toEqual( userActivoTest )
    })
    
})