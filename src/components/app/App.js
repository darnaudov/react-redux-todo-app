import React, { Component } from 'react';
import store from '../../store/store';
import Header from '../header/Header';
import TodoList from '../todoList/TodoList';
import TodoFilters from '../todoFilters/TodoFilters';
import AddTodo from '../addTodo/AddTodo';
import { VisibilityFilter } from '../../constants/constants';
import { addTodo, toggleTodo, deleteTodo, setVisibilityFilter } from "../../actions/actions";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: "",
      filters: [{
        text: 'all',
        filter: VisibilityFilter.SHOW_ALL
      }, {
        text: 'active',
        filter: VisibilityFilter.SHOW_ACTIVE
      }, {
        text: 'completed',
        filter: VisibilityFilter.SHOW_COMPLETED
      }]
    };

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });

    this.nextId = 1;

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.todoTextChange = this.todoTextChange.bind(this);
  }

  getId() {
    return this.nextId++;
  }

  addTodo() {
    if (this.state.todoText !== "") {
      store.dispatch(addTodo(this.state.todoText, this.getId()));

      this.setState({
        todoText: ""
      });
    }
  }

  toggleTodo(id) {
    store.dispatch(toggleTodo(id));
  }

  deleteTodo(id) {
      store.dispatch(deleteTodo(id));
  }

  setFilter(filter) {
    store.dispatch(setVisibilityFilter(filter));
  }

  todoTextChange(event) {
    this.setState({
      todoText: event.target.value
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { addTodo, deleteTodo, toggleTodo, setFilter, todoTextChange } = this;
    const { todoText, filters } = this.state;
    const storeState = store.getState();
    const { todos, visibilityFilter } = storeState;
    const filteredTodos = todos.filter((todo) => {
      if (visibilityFilter !== VisibilityFilter.SHOW_ALL) {
        if (todo.completed && visibilityFilter === VisibilityFilter.SHOW_ACTIVE) {
          return false;
        }

        if (!todo.completed && visibilityFilter === VisibilityFilter.SHOW_COMPLETED) {
          return false;
        }
      }

      return true;
    });

    return (
      <div className="app">
        <Header />
        <div className="content">
          <AddTodo text={todoText} onTextChange={todoTextChange} addTodo={addTodo} />
          <TodoFilters filters={filters} setFilter={setFilter} />
          <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
