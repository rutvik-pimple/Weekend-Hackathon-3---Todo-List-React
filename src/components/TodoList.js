import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <List>
      {todos.map(todo => (
        <Todo
          className="list"
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default TodoList;
