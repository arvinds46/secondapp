import React from 'react';
import TodoItem from './todoItem';

function TodoList({todos,tickTodo,deleteTodo}) {
    return ( <>
    {
        todos.map((todo) => <TodoItem todo={todo} tickTodo={tickTodo} deleteTodo={deleteTodo} />)
    }
    </> );
}

export default TodoList;