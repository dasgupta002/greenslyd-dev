import React, { useState, useEffect } from 'react';
import Form from './form.js';
import TodoList from './todolist.js';
import './App.css';


function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className = "container">
      <div className = "app-wrapper">
        <div className = "header">
          <h1>To-do's List</h1>
        </div>
        <Form  input = { input }
               setInput = { setInput }
               todos = { todos }
               setTodos = { setTodos }
               editTodo = { editTodo }
               setEditTodo = { setEditTodo }
        >
        </Form>
        <TodoList todos = { todos } 
                  setTodos = { setTodos }
                  setEditTodo = { setEditTodo }
        >
        </TodoList>
      </div>
    </div>
  );
}

export default App;