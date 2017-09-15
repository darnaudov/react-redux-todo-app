import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Todo.css';

const Todo = ({todo, deleteTodo, toggleTodo}) => {
    const onDelete = (event) => {
        deleteTodo(todo.id);
    };

    const onToggleTodo = (event) => {
        toggleTodo(todo.id);
    };

    const spanClass = classNames('todo', {
        completed: todo.completed
    });

    return (
        <li>
            <span onClick={onToggleTodo} className={spanClass}>{todo.text}</span> <button onClick={onDelete}>{'Remove'}</button>
        </li>
    );
};

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default Todo;
