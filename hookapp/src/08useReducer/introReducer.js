//estado inicial de la aplicacion
const initialState = [{
    id: 1,
    todo: 'Reolectar la piedra del alma',
    done: false,
}];

//funcion pura que recibe un estado inicial y una acción, debe retornar siempre un nuevo estado
const todoReducer =( state = initialState, action = {})=>{

    //valido el tipo de la accion para generar el cambio y devolver el nuevo estado
    if( action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Reolectar la piedra del poder',
    done: false,
}

//accion que se enviara al reducer
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction);


console.log({state: todos});
