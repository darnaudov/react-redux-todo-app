import React from 'react';
import Header from '../header/Header';
import TodoListContainer from '../todoListContainer/TodoListContainer';
import TodoFilters from '../todoFilters/TodoFilters';
import AddTodoContainer from '../addTodoContainer/AddTodoContainer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <AddTodoContainer />
        <TodoFilters />
        <TodoListContainer />
      </div>
    </div>
  );
}

export default App;
