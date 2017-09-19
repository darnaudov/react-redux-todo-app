import { connect } from 'react-redux';
import TodoList from '../todoList/TodoList';
import { VisibilityFilter } from '../../constants/constants';
import { toggleTodo, deleteTodo } from '../../actions/actionCreators';

const filterTodos = (todos, visibilityFilter) => {
    return todos.filter((todo) => {
        if (visibilityFilter !== VisibilityFilter.SHOW_ALL) {
            if (todo.completed && visibilityFilter === VisibilityFilter.SHOW_ACTIVE) {
                return false;
            }
    
            if (!todo.completed && visibilityFilter === VisibilityFilter.SHOW_COMPLETED) {
                return false;
            }
        }
    
        return true;
    });
};

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todos, state.visibilityFilter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        }
    };
};

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer;
