import React from 'react';
import './TodoTable.css';

function TodoTable({ todos, remove }) {

  return (
    todos?.length ? (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo, index) =>
              <tr key={index}>
                <td>{todo.desc}</td>
                <td>{new Date(todo.date).toLocaleDateString()}</td>
                <td><button onClick={() => remove(index)} >Delete</button></td>
              </tr>)
          }
        </tbody>
      </table>
    ) : (
      <p>No todos</p>
    )
  )
};

export default TodoTable;