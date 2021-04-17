import React, { useEffect } from 'react';
import { v4 as uuidV4} from 'uuid';


function Form ({input, setInput, todos, setTodos, editTodo, setEditTodo}) {
  
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
      setInput(event.target.value);
  }

  const onFormSubmit = (event) => {
      event.preventDefault();
      if (!editTodo) {
          setTodos([...todos, {id: uuidV4(), title: input, completed: false}]);
          setInput("");
      } else {
        updateTodo(input, editTodo.id, editTodo.completed);
      }
  }

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  }

    return(
      <div>
      <form onSubmit = { onFormSubmit }>
        <input type = "text"
               className = "task-input"
               placeholder = "Enter a to-do..."
               value = { input }
               onChange = { onInputChange }
        >
        </input>
        <button type = "submit" className = "button-add">
          { editTodo ? "OK" : "Add" }
        </button>
      </form>
      </div>
  );
}

export default Form;