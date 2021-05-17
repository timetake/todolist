import React from 'react';

export default function ListItem({
  isComplete,
  text,
  handleDleteTodo,
  handleCompleteTodo,
  handleUnCompleteTodo,
  todo,
}) {
  return (
    <div className={isComplete ? 'completed' : ''}>
      <button
        onClick={() => {
          if (todo.isComplete) {
            handleUnCompleteTodo(todo._id);
          } else {
            handleCompleteTodo(todo._id);
          }
        }}
      >
        Complete
      </button>
      <span>{text}</span>
      <button onClick={() => handleDleteTodo(todo._id)}>X</button>
    </div>
  );
}
