import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from '../todoList/TodoList';
import { VisibilityFilter } from '../../constants';
import { toggleTodo, deleteTodo } from '../../actions/actionCreators';

const filterTodos = (todos, visibilityFilter) => {
    return todos.filter((todo) => {
        if (visibilityFilter !== VisibilityFilter.ALL) {
            if (todo.completed && visibilityFilter === VisibilityFilter.ACTIVE) {
                return false;
            }
    
            if (!todo.completed && visibilityFilter === VisibilityFilter.COMPLETED) {
                return false;
            }
        }
    
        return true;
    });
};

const mapStateToProps = (state, ownProps) => {
    return {
        todos: filterTodos(state.todos, ownProps.match.params.filter || VisibilityFilter.ALL)
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

const TodoListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
export default TodoListContainer;
