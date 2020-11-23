import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleComplete, editTodo }) {
  return (
    <>
      {todos.map(todo => (
        <Todo
          className="list"
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </>
  );
}

export default TodoList;
