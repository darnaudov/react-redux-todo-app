import React from 'react';
import PropTypes from 'prop-types';
import store from '../../store/store';
import TodoFilter from '../todoFilter/TodoFilter';
import { setVisibilityFilter } from "../../actions/actions";

class TodoFilterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.setFilter = this.setFilter.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    setFilter() {
        store.dispatch(setVisibilityFilter(this.props.filter));
    }

    render() {
        const {text, filter} = this.props;
        const state = store.getState();

        return (
            <TodoFilter
                active={filter === state.visibilityFilter}
                text={text}
                onClick={this.setFilter}
            >
            </TodoFilter>
        );
    }
};

TodoFilterContainer.propTypes = {
    text: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired
};

export default TodoFilterContainer;
