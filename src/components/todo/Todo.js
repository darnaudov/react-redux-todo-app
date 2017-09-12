import React from 'react';
import classNames from 'classnames';
import './Todo.css';

const Todo = ({todo, handleDelete, toggleTodo}) => {
    const onDelete = (event) => {
        handleDelete(todo.id);
    };

    const onToggleTodo = (event) => {
        toggleTodo(todo.id);
    };

    const spanClass = classNames('todo', {
        completed: todo.completed
    });

    return (
        <li>
            <span onClick={onToggleTodo} className={spanClass}>{todo.name}</span> <button onClick={onDelete}>{'Remove'}</button>
        </li>
    );
};

export default Todo;
