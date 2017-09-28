import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from '../todoList/TodoList';
import { VisibilityFilter } from '../../constants';
import { toggleTodo, deleteTodo } from '../../actions/actionCreators';
import { getVisibleTodos } from '../../reducers/todoApp';

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state, ownProps.match.params.filter || VisibilityFilter.ALL)
    }
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
