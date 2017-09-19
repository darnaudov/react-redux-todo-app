import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoFilter from '../todoFilter/TodoFilter';
import { setVisibilityFilter } from "../../actions/actions";

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
}

const TodoFilterContainer = connect(mapStateToProps, mapDispatchToProps)(TodoFilter);

TodoFilterContainer.propTypes = {
    text: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired
};

export default TodoFilterContainer;
