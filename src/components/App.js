import React, { useState, useRef, useEffect } from 'react';
import "./../styles/App.css";
import TodoList from './TodoList';


function App() {

	return (
	<div id="main">
		<h1>TodoList</h1>
      	<input ref={todoName} type="text" />
      	<button onClick={addTodo}>Add</button>
      	<TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
	</div>
	);
}


export default App;
