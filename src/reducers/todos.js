import todo from './todo';
import actionTypes from "../constants/actionTypes";

function todos(state = [], action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                todo(null, action)
            ];
        case actionTypes.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case actionTypes.TOGGLE_TODO:
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
