import actionTypes from "../constants/actionTypes";

function todo(state = {}, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                name: action.name,
                id: action.id,
                completed: false
            };
        case actionTypes.TOGGLE_TODO:
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}

export default todo;