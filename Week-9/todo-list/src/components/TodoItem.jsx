import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleComplete(todo.id)}
      />
      <label className={todo.isCompleted ? 'completed' : null}>{todo.text}</label>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
