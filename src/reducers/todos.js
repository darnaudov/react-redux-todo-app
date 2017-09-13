import todo from './todo';

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(null, action)
            ];
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map((curTodo) => {
                if (curTodo.id === action.id) {
                    return todo(curTodo, action);
                }

                return curTodo;
            });
        default:
            return state;
    }
}

export default todos;
