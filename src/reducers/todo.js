function todo(state={}, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                name: action.name,
                id: action.id,
                completed: false
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}

export default todo;