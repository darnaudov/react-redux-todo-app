import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({text, onChange, onClick}) => {
    return (
        <div>
            <input value={text} onChange={onChange}/>
            <button onClick={onClick} className="add-todo-btn">{"Add To Do"}</button>
        </div>
    );
};

AddTodo.propTypes = {
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}

export default AddTodo;
