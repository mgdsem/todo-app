import React, { Component } from 'react';
import moment from 'moment';
import uuid from 'uuid/v1';

import Input from './Input';
import Button from './Button';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.onTodoChange = this.onTodoChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);

        this.state = {
            todos: [],
            currentTodoValue: '',
        }
    }

    onTodoChange(e) {
        this.setState({ currentTodoValue: e.target.value })
    }

    onAddTodo(e) {
        const newTodo = {
            text: this.state.currentTodoValue,
            isDone: false,
            id: uuid(),
            createdAt: moment()
        }

        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo]
        }))

        // poniezj zla praktyka:

        // this.setState(prevState => {
        //     const prevTodos = prevState.todos;
        //     prevTodos.push(newTodo);

        //     return {
        //         todos: prevTodos
        //     }
        // })
    }

    render() {
        console.log(this.state);

        // const arr1 = [1, 2, 3];
        // const arr2 = arr1;
        // arr2.push(4);
        // console.log(arr1);
        // console.log(arr2);

        // const arr1 = [1, 2, 3];
        // const arr2 = [...arr1];
        // arr2.push(4);
        // console.log(arr1);
        // console.log(arr2);
        // console.log(...arr2);

        // const arr3 = [...arr2, 5];
        // console.log(arr3);

        return (
            <div className="todos">
                <Input
                    id="todo-input"
                    placeholderText="What should I do?"
                    labelText="to-do"
                    value={this.state.currentTodoValue}
                    onChange={this.onTodoChange}
                />

                <Button onClick={this.onAddTodo}>Add</Button>
            </div>
        )
    }
}

export default Todos;