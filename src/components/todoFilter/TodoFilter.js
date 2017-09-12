import React from 'react';
import './TodoFilter.css';

class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const filterTypes = ['all', 'active', 'completed'];
        const filters = filterTypes.map((filter, i) => {
            const setFilter = () => {
                this.props.setFilter(filter);
            };

            return <a href='#' className='todo-filter' key={i} onClick={setFilter}>{filter}</a>
        });

        return (
            <div>
                {filters}
            </div>
        );
    }
}

export default TodoFilter;
