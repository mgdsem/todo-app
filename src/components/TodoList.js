import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = (props) => (
    <ul>
        {props.todos.map(todo => (
            <TodoListItem key={todo.id} text={todo.text} removeItem={props.removeItem} id={todo.id} crossItem={props.crossItem} isDone={todo.isDone} />
        ))}
    </ul>
)

export default TodoList;