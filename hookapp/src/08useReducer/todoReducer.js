export const todoReducer = (initialState, action)=>{

    switch( action.type){
        case 'Add todo':
            //opcion para usar en caso de no tener una implemetacion definda y probar el código
            //throw new Error('Action.type = ABC no esta implementada');
            return[...initialState, action.payload ];

        case 'Remove todo':
            //el filter genera un nuevo array por esta razón lo puedo usar en el reducer
            //le pido que filtre y devuelva la lista de objetos del array menos el id que enviaré a través del payload
            return initialState.filter( todo => todo.id !== action.payload);

        case 'Toggle todo':
            
        ///genero una nuevo arreglo con los todo que existen
            return initialState.map( todo => {
                //valido si el id del todo que estoy eligiendo es el mismo del payload
                if(todo.id === action.payload){
                    return {
                        //tomo los valores del todo y solo modifico el que necesito, en este caso el don
                        ...todo,
                        done : !todo.done
                    };
                }
                //si no retorno los todo tal como estan
                return todo;
            });
        
        default:
            return initialState;
    }
}