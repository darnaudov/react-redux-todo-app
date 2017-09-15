import actionTypes from "../constants/actionTypes";

function todo(state = {}, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                text: action.text,
                id: action.id,
                completed: false
            };
        case actionTypes.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}

export default todo;