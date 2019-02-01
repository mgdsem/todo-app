import React, { Component } from 'react';

import Input from './Input';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.onTodoChange = this.onTodoChange.bind(this);

        this.state = {
            todos: [],
            currentTodoValue: '',
        }
    }

    onTodoChange(e) {
        this.setState({ currentTodoValue: e.target.value })
    }

    render() {
        console.log(this.state);

        return (
            <div className="todos">
                <Input
                    id="todo-input"
                    placeholderText="What should I do?"
                    labelText="to-do"
                    value={this.state.currentTodoValue}
                    onChange={this.onTodoChange}
                />
            </div>
        )
    }
}

export default Todos;