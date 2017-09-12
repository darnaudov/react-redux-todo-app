import React, { Component } from 'react';
import logo from '../../resources/logo.svg';
import './App.css';
import TodoList from '../todolist/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reacccct</h2>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
