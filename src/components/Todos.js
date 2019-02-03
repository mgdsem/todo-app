import React, { Component } from 'react';
import moment from 'moment';
import uuid from 'uuid/v1';

import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.onTodoChange = this.onTodoChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onRemoveAll = this.onRemoveAll.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.onCrossItem = this.onCrossItem.bind(this);


        this.state = {
            todos: [],
            currentTodoValue: '',
        }
    }

    onTodoChange(e) {
        this.setState({ currentTodoValue: e.target.value })
    }

    onAddTodo(e) {
        e.preventDefault();
        const newTodo = {
            text: this.state.currentTodoValue,
            isDone: false,
            id: uuid(),
            createdAt: moment()
        }

        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo],
            currentTodoValue: ''
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

    onRemoveAll() {
        this.setState({ todos: [] })
    }

    onRemoveItem(id) {
        console.log(id);
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => {
                return id !== todo.id;
            })
        }))
    }

    onCrossItem(id) {
        console.log('onCrossItem');
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                return {
                    id: todo.id,
                    text: todo.text,
                    createdAt: todo.createdAt,
                    isDone: id === todo.id
                }
            })
        }))
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
                <Button onClick={this.onRemoveAll}>Remove All</Button>

                <form onSubmit={this.onAddTodo}>
                    <Input
                        id="todo-input"
                        placeholderText="What should I do?"
                        labelText="to-do"
                        value={this.state.currentTodoValue}
                        onChange={this.onTodoChange}
                    />

                    <Button>Add</Button>
                </form>

                <TodoList todos={this.state.todos} removeItem={this.onRemoveItem} crossItem={this.onCrossItem} />
            </div>
        )
    }
}

export default Todos;