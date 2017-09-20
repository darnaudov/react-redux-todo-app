import todo from './todo';
import actionTypes from "../actions/actionTypes";

function todos(state = [], action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                todo(null, action)
            ];
        case actionTypes.TOGGLE_TODO:
            return state.map(curTodo => todo(curTodo, action));
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

export default todos;
