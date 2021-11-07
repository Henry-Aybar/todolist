import React, { useState } from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  if (newTodo.length === 0){
      return
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }
  
  const handleNewTodoSubmit = (event) => {
    event.preventDefault()
    setTodos([...todos, todoItem])
    setNewTodo("")
  }

  const handleTodoDelete = ( deleteInx ) => {
    const filteredTodos = todos.filter((todos, i) => {
      return i !== deleteInx
    })

    setTodos(filteredTodos)
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todos, i) => {
      if ( idx === i ) {
        todos.complete = !todos.complete
        // const updatedTodo = {...todos, complete: !todos.complete}
        // return updatedTodo
      }
      return todos
    })

    setTodos(updatedTodos)
  }

  return (
    <div className="App">
      <form onSubmit={(event)=> { handleNewTodoSubmit(event) }} >

        <input onChange={(event) => { setNewTodo(event.target.value) }} 
        type="text" value={newTodo} />

        <div>
          <button> Add </button>
        </div>
        
      </form>

      {
        todos.map((todos, i) =>{
          
          const todoClasses = ["bold"];

          if (todos.complete) {
            todoClasses.push("line-through")
          }

          return <div key={i}>
            <input onChange={(event) => { handleToggleComplete(i) }} 
            checked={todos.complete} type="checkbox" />

            <span className={todoClasses.join(" ")}>{todos.text}</span>

            <button onClick={(event) => {handleTodoDelete(i)}} 
            style={{marginLeft: "10px"}}> Delete </button>

          </div>
        })
      }
    </div>
  );
}

export default App;
