function todosReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    name: action.name,
                    id: action.id,
                    completed: false
                }
            ];
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }

                return todo;
            });
        default:
            return state;
    }
}

export default todosReducer;