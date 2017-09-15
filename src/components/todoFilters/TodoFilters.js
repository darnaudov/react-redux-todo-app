import React from 'react';
import PropTypes from 'prop-types';
import TodoFilter from '../todoFilter/TodoFilter';
import './TodoFilters.css';

const TodoFilters = ({filters, setFilter}) => {
    const filterElements = filters.map((filter, i) => {
        const onSetFilter = () => {
            setFilter(filter.filter);
        };

        return (
            <TodoFilter key={i} onFilterClick={onSetFilter} text={filter.text} />
        );
    });

    return (
        <div className="todo-filters">
            {filterElements}
        </div>
    );
};

TodoFilters.propTypes = {
    filters: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            filter: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    setFilter: PropTypes.func.isRequired
};

export default TodoFilters;
