import { useEffect, useReducer } from "react"
import { todoReducer } from "../08useReducer/todoReducer"

export const useTodos = ( initialState ) => {
  

    const init =()=>{
        return JSON.parse( localStorage.getItem('todos') || [])
    }
    
    //si solo hay un reducer se pude dejar solo dispatch, si tengo mas de uno le coloco un nombre representartivo todoDispacth
    //la funcion init (initializer) inicializa el reducer, permite  persistir los datos en el localstorage
    const [todos, dispatch] = useReducer( todoReducer, initialState, init)

    //cada vez que cambie se almacena y persiste datos en el localstorage
    useEffect(() => {
    
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])


    const handleNewTodo = (todo)=>{
        
        const action = {
            type: 'Add todo',
            payload: todo
        }
        // es la funcion a través de la que envio el action 
        dispatch(action);
    }

    const handleDeleteTodo = (id)=>{

        dispatch({
            type: 'Remove todo',
            payload: id
        });
    }


    const handleToggleTodo = (id)=>{
        
        dispatch({
            type: 'Toggle todo',
            payload: id
        });
    }
    
    return {
        ...todos,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount : todos.length,
        pendingTodosCount: todos.filter(todo=>!todo.done).length
    }

}
