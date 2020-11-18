import React, { useState } from 'react';
import TodoForm from './TodoForm';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className="list"
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <button
          onClick={() => removeTodo(todo.id)}
          className='delete btn'
        >X</button>
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit btn'
        >edit</button>
      </div>
    </div>
  ));
};

export default Todo;