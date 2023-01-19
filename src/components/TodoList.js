import React, { useState } from 'react';
import TodoTable from './TodoTable';
import './TodoList.css';

function TodoList() {
  const [todo, setTodo] = useState({ date: "", desc: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = event => setTodo({ ...todo, [event.target.name]: event.target.value });

  const addTodo = event => {
    event.preventDefault();
    if (
      todos.find(item => item.desc === todo.desc && item.date === todo.date) &&
      window.confirm("The entry is identical with an existing todo. Do you want to keep it?")
    ) {
      setTodos([...todos, todo]);
    }
  }

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
    </div>
  );
};

export default TodoList;