import React from 'react';
import store from '../../store/store';
import TodoList from '../todoList/TodoList';
import { VisibilityFilter } from '../../constants/constants';
import { toggleTodo, deleteTodo } from "../../actions/actions";

class TodoListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    toggleTodo(id) {
        store.dispatch(toggleTodo(id));
    }

    deleteTodo(id) {
        store.dispatch(deleteTodo(id));
    }

    render() {
        const state = store.getState();
        const {todos, visibilityFilter} = state;
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
            <TodoList 
                todos={filteredTodos} 
                toggleTodo={this.toggleTodo}
                deleteTodo={this.deleteTodo}
            />
        );
    }
}

export default TodoListContainer;
