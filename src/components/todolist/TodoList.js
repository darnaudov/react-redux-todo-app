import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Todo from '../Todo';
import { VisibilityFilter } from '../../constants';
import { toggleTodo, deleteTodo } from '../../actions/todoActions';
import { getVisibleTodos } from '../../selectors';
import './TodoList.css';

function TodoList({todos, toggleTodo, deleteTodo}) {
    const todoListItems = todos.map((todo, i) => {
        return (
            <Todo 
                key={todo.id} 
                todo={todo} 
                toggleTodo={() => toggleTodo(todo.id)} 
                deleteTodo={() => deleteTodo(todo.id)}
            />
        );
    });

    return (
        <div className='todo-list'>
            <ol>
                <lh>{'TODO List'}</lh>
                {todoListItems}
            </ol>
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
