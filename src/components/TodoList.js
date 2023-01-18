import React, { useState } from 'react';
import TodoTable from './TodoTable';
import './TodoList.css';

function TodoList() {
  const [todo, setTodo] = useState({ date: "", desc: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = event => setTodo({ ...todo, [event.target.name]: event.target.value });

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const removeTodo = (index) => setTodos(todos.filter((todo, i) => i !== index));

  return (
    <div>
      <form onSubmit={addTodo}>
        <fieldset>
          <legend>Add todo:</legend>
          <label>Description:</label>
          <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
          <label>Date:</label>
          <input type="text" name="date" value={todo.date} onChange={inputChanged} />
          <button type="submit">Add</button>
        </fieldset>
      </form>
      <TodoTable todos={todos} remove={removeTodo} />
    </div>
  );
};

export default TodoList;