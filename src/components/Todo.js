import React from 'react'

export default function Todo({todo, deleteTodo, toggleTodo}) {
    function handleDelete(){
        deleteTodo(todo.id);
    }
    function handleChange(){
        toggleTodo(todo.id);
    }
    return (
        <div>
        <label>
        <input type="checkbox" checked={todo.complete} onChange={handleChange}/>
        {todo.task}
        <button onClick={handleDelete}>X</button>
        </label>
        </div>
    )
}
