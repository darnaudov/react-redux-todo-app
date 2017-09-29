import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../addTodo/AddTodo';
import { addTodo } from '../../actions/actionCreators';

class AddTodoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: ""
        };

        this.addTodo = this.addTodo.bind(this);
        this.todoTextChange = this.todoTextChange.bind(this);
    }

    todoTextChange(event) {
        this.setState({
            todoText: event.target.value
        });
    }

    addTodo() {
        if (this.state.todoText !== "") {
            this.props.dispatch(addTodo(this.state.todoText));
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

AddTodoContainer = connect()(AddTodoContainer);

export default AddTodoContainer;


