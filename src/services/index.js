import axios from 'axios';

export const getAlltodos = () => {
  return axios.get('http://localhost:8000/todos');
};

export const createTodo = (title) => {
  return axios.post('http://localhost:8000/todos', {
    title,
  });
};

export const complete = (todoId) => {
  return axios.put('http://localhost:8000/todos/completed', {
    todoId,
  });
};

export const unComplete = (todoId) => {
  return axios.put('http://localhost:8000/todos/incomplete', {
    todoId,
  });
};

export const deleteTodo = (todoId) => {
  return axios.delete('http://localhost:8000/todos', {
    data: {
      todoId,
    },
  });
};
