import React,{useState} from "react";

function Todo({ todo, toggleComplete, removeTodo, editTodo }) {
  const [enableEdit, setEnableEdit] = useState(false);
  const [newTask,setTask] = useState({task:""})

  function handleEditClick(){
    setEnableEdit(true);
  }

  function handleTaskEdit(e){
    setTask({task:e.target.value}) 
    
  }
  
  function submit(){
    editTodo(todo.id,newTask.task)
    setEnableEdit(false);
  }

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <>
    {enableEdit ? (
      <>
      <input
        label="Task"
        type="text"
        name="task"
        onChange={handleTaskEdit}
      />
      <button onClick={submit}>Edit</button>

      </>
    ):(
      <>
      <div style={{ display: "flex" }}>
      <input type="checkbox" checked={todo.completed} onClick={handleCheckboxClick} />
      <div
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </div>
      <button onClick={handleRemoveClick}>
        X
      </button>
      <button onClick={handleEditClick}>
        E
      </button>
    </div>
      </>
    )}
    </>
  );
}

export default Todo;

