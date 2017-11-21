import React from 'react';
import TodoList from '../TodoList';
import TodoFilters from '../TodoFilters';
import AddTodo from '../AddTodo';

function Home() {
    return (
        <div>
            <AddTodo />
            <TodoFilters />
            <TodoList />
        </div>
    );
};

export default Home;
