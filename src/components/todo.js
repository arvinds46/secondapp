import React, { useState } from 'react';
import TodoList from './todoList';

function ToDo() {
    const [newTask,setNewTask]= useState('');
    const [todos, setTodos] = useState([
        {id:1,text:'Learn React', completed:false},
        {id:2,text:'Build React Project', completed:false}
    ]);

    const tickTodo = (id) => {
        setTodos((prevTodo) => prevTodo.map((todo) => 
            todo.id === id ? {...todo,completed:!todo.completed} : todo
        ));
    };
    const deleteTodo=(id)=>{
        setTodos((prevTodo)=>prevTodo.filter(todo=>todo.id!==id));
    }
    const addtodo=()=>{
        if(newTask.trim()!==""){
        setTodos([...todos,{id:Date.now(),text:newTask,completed:false}]);
        setNewTask('');
        }
        else{
            alert("Task Can not be Empty");
            setNewTask('');
        }
    }
    return ( <>
    <h2>TO DO APP</h2>
    <input type='text' placeholder='Add New Task' className='form-control' value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
    <button className='btn btn-success' onClick={addtodo}>Add Todo</button>
    <TodoList todos={todos} tickTodo={tickTodo} deleteTodo={deleteTodo} />
    </> );
}

export default ToDo;