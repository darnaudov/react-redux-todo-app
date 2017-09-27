import React from 'react';
import TodoListContainer from '../todoListContainer/TodoListContainer';
import TodoFilters from '../todoFilters/TodoFilters';
import AddTodoContainer from '../addTodoContainer/AddTodoContainer';

const Home = () => {
    return (
        <div>
            <AddTodoContainer />
            <TodoFilters />
            <TodoListContainer />
        </div>
    );
};

export default Home;
