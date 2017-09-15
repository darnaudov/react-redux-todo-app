import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo/Todo';
import './TodoList.css';

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
    const todoListItems = todos.map((todo, i) => {
        return (
            <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
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
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
