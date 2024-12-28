// TodoList.js
import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
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
