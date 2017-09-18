import React from 'react';
import TodoFilterContainer from '../todoFilterContainer/TodoFilterContainer';
import './TodoFilters.css';
import { VisibilityFilters } from '../../constants/constants';

const TodoFilters = () => {
    const filterElements = VisibilityFilters.map((filter, i) => {
        return (
            <TodoFilterContainer key={i} filter={filter.filter} text={filter.text} />
        );
    });

    return (
        <div className="todo-filters">
            {filterElements}
        </div>
    );
};

export default TodoFilters;
