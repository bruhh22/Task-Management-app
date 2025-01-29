import React from 'react';

const TaskCard = ({ task, onDelete, onMove }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <select onChange={(e) => onMove(task.id, e.target.value)}>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default TaskCard;