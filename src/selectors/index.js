import * as todos from '../reducers/todos';

export const getVisibleTodos = (state, filter) => {
    return todos.getVisibleTodos(state.todos, filter);
};
