export const TodoActionType = {
    ADD_TODO : '[Todo] Add Todo',
    ADD_MANY_TODO: '[Todo] Add Many Todo',
    UPDATE_TODO : '[Todo] Update Todo',
    DELETE_TODO : '[Todo] Delete Todo'
}

export const addTodoAction = (payload) =>({type: TodoActionType.ADD_TODO,payload})

export const addManyTodoAction = (payload) =>({type: TodoActionType.ADD_MANY_TODO,payload})

export const updateTodoAction = (payload) =>({type: TodoActionType.UPDATE_TODO,payload})

export const deleteTodoAction = (payload) =>({type: TodoActionType.DELETE_TODO,payload})
