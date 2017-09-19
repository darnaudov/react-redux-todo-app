import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Todo.css';

const Todo = ({todo, deleteTodo, toggleTodo}) => {
    const spanClass = classNames('todo', {
        completed: todo.completed
    });

    return (
        <li>
            <span onClick={toggleTodo} className={spanClass}>{todo.text}</span> <button onClick={deleteTodo}>{'Remove'}</button>
        </li>
    );
};

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default Todo;
