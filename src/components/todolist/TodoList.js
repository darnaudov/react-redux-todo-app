import React from 'react';
import _ from 'lodash';
import Todo from '../todo/Todo';
import TodoFilter from '../todoFilter/TodoFilter';
import './TodoList.css';
import store from '../../store/store';



// TODO NExt
// Add filter to the store
// How to add multiple reducers?



class TodoList extends React.Component {
    constructor(props) {
        super(props);

        // for easier debugging
        this.store = store;

        this.state = {
            todoName: "",
            filter: "all"
        };

        store.subscribe(() => {
            this.forceUpdate();
        });

        this.nextId = 1;

        this.addTodo = this.addTodo.bind(this);
        this.todoNameChange = this.todoNameChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    getId() {
        return this.nextId++;
    }

    addTodo() {
        if (this.state.todoName !== "") {
            store.dispatch({
                type: 'ADD_TODO',
                name: this.state.todoName,
                id: this.getId()
            });

            this.setState({
                todoName: ""
            });
        }
    }

    todoNameChange(event) {
        this.setState({
            todoName: event.target.value
        });
    }

    toggleTodo(id) {
        store.dispatch({
            type: 'TOGGLE_TODO',
            id: id
        });
    }

    setFilter(filter) {
        this.setState({
            filter: filter
        })
    }

    deleteTodo(id) {
        store.dispatch({
            type: "DELETE_TODO",
            id: id
        });
    }

    render() {
        const filter = this.state.filter;
        const todos = store.getState();
        const todoListItems = todos.map((todo, i) => {
            if (filter !== 'all') {
                if (todo.completed && filter ==='active') {
                    return;
                }

                if (!todo.completed && filter === 'completed') {
                    return;
                }
            }

            return (
                <Todo key={i} todo={todo} handleDelete={this.deleteTodo} toggleTodo={this.toggleTodo}/>
            );
        });

        return (
            <div className='todo-list'>
                <input value={this.state.todoName} onChange={this.todoNameChange}/>
                <button onClick={this.addTodo} className="add-todo-btn">{"Add To Do"}</button>
                <TodoFilter setFilter={this.setFilter}/>
                <ol>
                    <lh>{'TODO List'}</lh>
                    {todoListItems}
                </ol>
            </div>
        );
    }
};

export default TodoList;