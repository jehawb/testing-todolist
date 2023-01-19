import React, { useState, useRef } from 'react';
import TodoTable from './TodoTable';
import './TodoList.css';
import Confirm from './Confirm';

function TodoList() {
  const [todo, setTodo] = useState({ date: "", desc: "" });
  const [todos, setTodos] = useState([]);
  const modal = useRef(null);

  const inputChanged = event => setTodo({ ...todo, [event.target.name]: event.target.value });

  const addTodo = event => {
    console.log('addTodo')
    event.preventDefault();
    if (todos.find(item => item.desc === todo.desc && item.date === todo.date)) {
      modal.current.showModal();
    } else {
      setTodos([...todos, todo]);
    }
  };

  const confirmAdd = (response) => {
    console.log(response)
    if (response) {
      setTodos([...todos, todo]);
    }
  };

  const removeTodo = (index) => setTodos(todos.filter((todo, i) => i !== index));

  return (
    <div>
      <form onSubmit={addTodo}>
        <fieldset>
          <legend>Add todo:</legend>
          <label>Description:</label>
          <input type="text" required name="desc" value={todo.desc} onChange={inputChanged} />
          <label>Date:</label>
          <input type="date" required name="date" value={todo.date} onChange={inputChanged} />
          <button type="submit">Add</button>
        </fieldset>
      </form>
      <TodoTable todos={todos} remove={removeTodo} />
      <Confirm ref={modal} onConfirm={confirmAdd} />
    </div>
  );
};

export default TodoList;