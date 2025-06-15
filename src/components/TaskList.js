import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>All Quotes</h2>
      {tasks.length === 0 ? (
        <p>No quotes available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.author}</strong>: {task.text} <em>({task.category})</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

