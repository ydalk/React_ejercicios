import {heroes} from '../data/heroes';

// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if( heroe.id === id){
//             return true;
//         }else {
//             return false;
//         }
//     });
// }

//funciona igual que la anterior pero está mas optimixada
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);


// console.log( getHeroeById(3) );


export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('DC') );

