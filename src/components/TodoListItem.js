import React from 'react';
import Button from './Button';

const TodoListItem = (props) => (
    <div>
        <li className={`${props.isDone ? 'is-done' : ''}`}>{props.text}</li>
        <Button onClick={() => props.crossItem(props.id)}>Done</Button>
        <Button onClick={() => props.removeItem(props.id)}>Remove</Button>
    </div>
)

export default TodoListItem;