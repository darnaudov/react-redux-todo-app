import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoActions';

class AddTodo extends React.Component {
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
            this.props.addTodo(this.state.todoText);
            this.setState({
                todoText: ""
            });
        }   
    }

    render() {
        return (
            <div>
                <input value={this.state.todoText} onChange={this.todoTextChange}/>
                <button onClick={this.addTodo} className="add-todo-btn">{"Add To Do"}</button>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text))
});

export default connect(null, mapDispatchToProps)(AddTodo);
