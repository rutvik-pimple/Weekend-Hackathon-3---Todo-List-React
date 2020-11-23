
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <>
      {todos.map(todo => (
        <Todo
          className="list"
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </>
  );
}

export default TodoList;
