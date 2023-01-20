import React, { useState, useRef } from 'react';
import TodoTable from './TodoTable';
import TodoInput from './TodoInput';

import Confirm from './Confirm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [pending, setPending] = useState(null);

  const modal = useRef(null);

  const addTodo = todo => {
    if (todos.find(item => item.desc === todo.desc && item.date === todo.date)) {
      modal.current.showModal();
      setPending(todo);
    } else {
      setTodos([...todos, todo]);
    }
  };

  const confirmAdd = (response) => {
    if (response) {
      setTodos([...todos, pending]);
      setPending(null);
    }
  };

  const removeTodo = (index) => setTodos(todos.filter((todo, i) => i !== index));

  return (
    <div>
      <TodoInput onValue={addTodo} />
      <TodoTable todos={todos} remove={removeTodo} />
      <Confirm ref={modal}
        onConfirm={confirmAdd}
        text={'The entry is identical with an existing todo. Do you want to keep it?'}
        okLabel={'Keep it'}
        cancelLabel={'Cancel'} />
    </div>
  );
};

export default TodoList;