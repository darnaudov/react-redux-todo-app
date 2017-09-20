import actionTypes from '../actions/actionTypes';
import { v4 } from 'uuid';

export function addTodo(text) {
    return {
        type: actionTypes.ADD_TODO,
        text: text,
        id: v4()
    };
}

export function deleteTodo(id) {
    return {
        type: actionTypes.DELETE_TODO,
        id: id
    };
}

export function toggleTodo(id) {
    return {
        type: actionTypes.TOGGLE_TODO,
        id: id
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: actionTypes.SET_VISIBILITY_FILTER,
        filter: filter
    };
}
