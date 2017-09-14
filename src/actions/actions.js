import actionTypes from "../constants/actionTypes";

export function addTodo(name, id) {
    return {
        type: actionTypes.ADD_TODO,
        name: name,
        id: id
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
