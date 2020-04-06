// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Item from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.tasks.map(item => (
            <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
        <button onClick={props.clear}> Clear completed tasks</button>
        </div>
    )
}

export default TodoList;