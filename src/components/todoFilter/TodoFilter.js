import React from 'react';
import PropTypes from 'prop-types';

const TodoFilter = ({text, onFilterClick}) => {
    return (
        <a href='#' className='todo-filter' onClick={onFilterClick}>{text}</a>
    );
};

TodoFilter.PropTypes = {
    text: PropTypes.string.isRequired,
    onFilterClick: PropTypes.func.isRequired
};

export default TodoFilter;
