import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { VisibilityFilter } from '../../constants';
import "./TodoFilter.css";

const TodoFilter = ({filter}) => {
    const toPath = filter === VisibilityFilter.ALL ? "" : "/" + filter;

    return (
        <NavLink to={"/home" + toPath} exact className={'todo-filter'}>{filter}</NavLink>
    );
};

TodoFilter.PropTypes = {
    filter: PropTypes.string.isRequired
};

export default TodoFilter;
