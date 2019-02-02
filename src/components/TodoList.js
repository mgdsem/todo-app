import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = (props) => (
    <ul>
        {props.todos.map(todo => (
            <TodoListItem key={todo.id} text={todo.text} />
        ))}
    </ul>
)

export default TodoList;