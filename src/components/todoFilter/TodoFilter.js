import React from 'react';
import PropTypes from 'prop-types';

const TodoFilter = ({text, active, onClick}) => {
    if (active) {
        return (
            <span className='todo-filter'>{text}</span>
        );
    }

    return (
        <a href='#' className='todo-filter' onClick={onClick}>{text}</a>
    );
};

TodoFilter.PropTypes = {
    text: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default TodoFilter;
