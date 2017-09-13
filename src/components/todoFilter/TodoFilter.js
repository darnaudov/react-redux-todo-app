import React from 'react';
import { VisibilityFilter } from "../../constants/constants";
import './TodoFilter.css';

class TodoFilter extends React.Component {
    render() {
        const filters = [{
            text: 'all',
            filter: VisibilityFilter.SHOW_ALL
        }, {
            text: 'active',
            filter: VisibilityFilter.SHOW_ACTIVE
        }, {
            text: 'completed',
            filter: VisibilityFilter.SHOW_COMPLETED
        }];

        const filterElements = filters.map((filter, i) => {
            const setFilter = () => {
                this.props.setFilter(filter.filter);
            };

            return <a href='#' className='todo-filter' key={i} onClick={setFilter}>{filter.text}</a>
        });

        return (
            <div>
                {filterElements}
            </div>
        );
    }
}

export default TodoFilter;
