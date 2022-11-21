import AppState from '../State';
import { TodoActionType } from '../Actions/todo';

//function that takes care of store data calls
const reducer = (state=AppState,action)=>{
    const type =action.type
    const payload = action.payload
    let newTodo
    switch(type){
        case TodoActionType.ADD_TODO:
            newTodo = [...state.todos];
            newTodo.push(payload);
            break;

        // case TodoActionType.UPDATE_TODO:
        //     newTodo = [...state.todos];
        //     newTodo[payload].status="close";
        //     //newTodo.push(payload);
        //     break;

        case TodoActionType.DELETE_TODO:
            const filtered = state.todos.filter(c=> c!==payload);
            newTodo = [...filtered];
            break;

        default:
            newTodo = [...state.todos];
            break;
    }

    return Object.assign({},state,{todos: newTodo});
}

export default reducer;