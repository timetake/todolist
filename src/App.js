import './App.css';

import Form from './components/Form';
import List from './components/List';
import React from 'react';
import {
  complete,
  createTodo,
  getAlltodos,
  deleteTodo,
  unComplete,
} from './services/index';

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const getData = async () => {
    const response = await getAlltodos();
    if (response.data) {
      setTodos(response.data);
    }
  };

  const handleInputChange = (e) => {
    setInput(e);
  };

  const handleAddtodo = async () => {
    if (input) {
      const response = await createTodo(input);
      if (response.data) {
        getData();
        setInput('');
      }
    } else {
      alert('You need to enter something');
    }
  };

  const handleDleteTodo = async (todoId) => {
    console.log(todoId);
    const response = await deleteTodo(todoId);
    if (response.data) {
      getData();
    }
  };

  const handleCompleteTodo = async (todoId) => {
    const response = await complete(todoId);
    if (response.data) {
      getData();
    }
  };

  const handleUnCompleteTodo = async (todoId) => {
    const response = await unComplete(todoId);
    if (response.data) {
      getData();
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <List
        handleUnCompleteTodo={handleUnCompleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        todos={todos}
        handleDleteTodo={handleDleteTodo}
      />
      <Form
        handleAddtodo={handleAddtodo}
        input={input}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}
