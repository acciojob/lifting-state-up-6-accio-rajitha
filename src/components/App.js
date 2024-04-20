import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Build a Todo App', completed: false },
    { id: 3, task: 'Deploy to Heroku', completed: false }
  ]);

  const handleComplete = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    }));
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;

