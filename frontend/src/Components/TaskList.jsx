import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onDelete, onMove }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} onMove={onMove} />
      ))}
    </div>
  );
};

export default TaskList;