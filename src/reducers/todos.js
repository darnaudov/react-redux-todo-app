import { combineReducers } from 'redux';
import _ from 'lodash';
import todo from './todo';
import actionTypes from '../actions/actionTypes';
import { VisibilityFilter } from '../constants';

function byId(state = {}, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
        case actionTypes.TOGGLE_TODO:
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            };
        case actionTypes.DELETE_TODO:
            return _.omit(state, action.id);
        default:
            return state;
    }
}

function allIds(state = [], action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                action.id
            ];
        case actionTypes.DELETE_TODO:
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
