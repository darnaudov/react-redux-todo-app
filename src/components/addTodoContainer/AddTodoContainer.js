import React from 'react';
import store from '../../store/store';
import AddTodo from '../addTodo/AddTodo';
import { addTodo } from '../../actions/actions';

class AddTodoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: ""
        };

        this.addTodo = this.addTodo.bind(this);
        this.todoTextChange = this.todoTextChange.bind(this);
    }

    componentDidMount() {
        this.unsubscripbe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscripbe();
    }

    todoTextChange(event) {
        this.setState({
            todoText: event.target.value
        });
    }

    addTodo() {
        if (this.state.todoText !== "") {
            store.dispatch(addTodo(this.state.todoText));
    
            this.setState({
                todoText: ""
            });
        }   
    }

    render() {
        return (
            <AddTodo text={this.state.todoText} onChange={this.todoTextChange} onClick={this.addTodo} />
        );
    }
};

export default AddTodoContainer;
