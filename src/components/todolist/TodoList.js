import React from 'react';
import store from '../../store/store';
import Todo from '../todo/Todo';
import TodoFilter from '../todoFilter/TodoFilter';
import './TodoList.css';
import { VisibilityFilter } from "../../constants/constants";
import { addTodo, toggleTodo, deleteTodo, setVisibilityFilter } from "../../actions/actions";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        // for easier debugging
        this.store = store;

        this.state = {
            todoName: ""
        };

        const unsubscribe = store.subscribe(() => {
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

    todoNameChange(event) {
        this.setState({
            todoName: event.target.value
        });
    }

    addTodo() {
        if (this.state.todoName !== "") {
            store.dispatch(addTodo(this.state.todoName, this.getId()));

            this.setState({
                todoName: ""
            });
        }
    }

    toggleTodo(id) {
        store.dispatch(toggleTodo(id));
    }

    setFilter(filter) {
        store.dispatch(setVisibilityFilter(filter));
    }

    deleteTodo(id) {
        store.dispatch(deleteTodo(id));
    }

    render() {
        const storeState = store.getState();
        const filter = storeState.visibilityFilter;
        const todoListItems = storeState.todos.map((todo, i) => {
            if (filter !== VisibilityFilter.SHOW_ALL) {
                if (todo.completed && filter === VisibilityFilter.SHOW_ACTIVE) {
                    return null;
                }

                if (!todo.completed && filter === VisibilityFilter.SHOW_COMPLETED) {
                    return null;
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