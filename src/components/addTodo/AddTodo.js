import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({text, onTextChange, addTodo}) => {
    return (
        <div>
            <input value={text} onChange={onTextChange}/>
            <button onClick={addTodo} className="add-todo-btn">{"Add To Do"}</button>
        </div>
    );
};

AddTodo.propTypes = {
    text: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
