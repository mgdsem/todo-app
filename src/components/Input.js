import React from 'react';

const Input = (props) => (
    <div>
        <label htmlFor={props.id}>{props.labelText}</label>
        <input
            id={props.id}
            placeholder={props.placeholderText}
            value={props.value}
            onChange={props.onChange}
        />
    </div>
)

export default Input;