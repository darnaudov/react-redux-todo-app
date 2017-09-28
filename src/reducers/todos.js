import todo from './todo';
import actionTypes from '../actions/actionTypes';
import { VisibilityFilter } from '../constants';

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

export const getVisibleTodos = (state, filter) => {
    switch (filter) {
        case VisibilityFilter.All:
            return state;
        case VisibilityFilter.ACTIVE:
            return state.filter((todo) => {
                return !todo.completed;
            });
        case VisibilityFilter.COMPLETED:
            return state.filter((todo) => {
                return todo.completed;
            });
        default:
            return state;
    }
}
