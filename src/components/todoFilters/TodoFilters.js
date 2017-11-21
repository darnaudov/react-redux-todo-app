import React from 'react';
import TodoFilter from '../TodoFilter';
import './TodoFilters.css';
import { VisibilityFilter } from '../../constants';

const TodoFilters = () => {
    const filterElements = Object.values(VisibilityFilter).map((filter, i) => {
        return (
            <TodoFilter key={i} filter={filter} />
        );
    });

    return (
        <div className="todo-filters">
            {filterElements}
        </div>
    );
};

export default TodoFilters;
