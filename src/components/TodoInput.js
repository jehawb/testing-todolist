import './TodoInput.css';
import React, { useState } from 'react';

function TodoInput({ onValue }) {
  const [todo, setTodo] = useState({ date: "", desc: "" });

  const inputChanged = event => setTodo({ ...todo, [event.target.name]: event.target.value });

  const add = event => {
    event.preventDefault();
    onValue(todo);
  }

  return (
    <form onSubmit={add}>
      <fieldset>
        <legend>Add todo:</legend>
        <label>Description:</label>
        <input type="text" required name="desc" value={todo.desc} onChange={inputChanged} />
        <label>Date:</label>
        <input type="date" required name="date" value={todo.date} onChange={inputChanged} />
        <button type="submit">Add</button>
      </fieldset>
    </form>
  );
};

export default TodoInput;