import { combineReducers } from 'redux';
import _ from 'lodash';
import todo from './todo';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/todoActions';
import { VisibilityFilter } from '../constants';

function byId(state = {}, action) {
    switch (action.type) {
        case ADD_TODO:
        case TOGGLE_TODO:
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            };
        case DELETE_TODO:
            return _.omit(state, action.id);
        default:
            return state;
    }
}

function allIds(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.id
            ];
        case DELETE_TODO:
            return state.filter((id) => {
                return id !== action.id;
            })
        default:
            return state;
    }
}

const todos = combineReducers({
    byId,
    allIds
});

export default todos;

function getAllTodos(state) {
    return state.allIds.map((id) => {
        return state.byId[id];
    });
}

export const getVisibleTodos = (state, filter) => {
    const allTodos = getAllTodos(state);
    
    switch (filter) {
        case VisibilityFilter.All:
            return allTodos;
        case VisibilityFilter.ACTIVE:
            return allTodos.filter((todo) => {
                return !todo.completed;
            });
        case VisibilityFilter.COMPLETED:
            return allTodos.filter((todo) => {
                return todo.completed;
            });
        default:
            return allTodos;
    }
}
