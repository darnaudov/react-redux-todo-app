import React from 'react';
import './TodoFilter.css';

class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const filters = [{
            text: 'all',
            filter: 'SHOW_ALL'
        }, {
            text: 'active',
            filter: 'SHOW_ACTIVE'
        }, {
            text: 'completed',
            filter: 'SHOW_COMPLETED'
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
