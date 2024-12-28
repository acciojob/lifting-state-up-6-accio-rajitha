// TodoList.js
import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {/* Loop through todos and render each task */}
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            {/* Conditional rendering for the "Complete" button */}
            {!todo.completed && (
              <button
                data-testid={`complete-${todo.id}`}
                onClick={() => handleComplete(todo.id)}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
