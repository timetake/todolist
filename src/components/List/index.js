import React from 'react';
import ListItem from './Item';

export default function List({
  todos,
  handleDleteTodo,
  handleCompleteTodo,
  handleUnCompleteTodo,
}) {
  return (
    <div>
      {todos.map((todo, index) => (
        <ListItem
          handleUnCompleteTodo={handleUnCompleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleDleteTodo={handleDleteTodo}
          index={index}
          text={todo.title}
          isComplete={todo.isComplete}
          todo={todo}
        />
      ))}
    </div>
  );
}
