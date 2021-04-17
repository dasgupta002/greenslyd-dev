import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';


function TodoList ({todos, setTodos, setEditTodo}) {
    
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    } 

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    } 

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    return(
        <div>
            { todos.map((todo) => (
                <li className = "list-item" key = { todo.id }>
                    <input type = "text"
                           value = { todo.title }
                           className = { `list ${todo.completed ? "complete" : ""}` }
                           onChange = { (event) => event.preventDefault() }
                    >
                    </input>
                    <button className = "button-complete task-button" onClick = { () => handleComplete(todo) }> 
                    <FontAwesomeIcon icon = { faCheckCircle } />
                    </button>
                    <button className = "button-edit task-button" onClick = { () => handleEdit(todo) }>
                    <FontAwesomeIcon icon = { faEdit } />
                    </button>
                    <button className = "button-delete task-button" onClick = { () => handleDelete(todo) }>
                    <FontAwesomeIcon icon = { faTrashAlt } />
                    </button>       
                </li>
            )) }
        </div>
    );
}

export default TodoList;