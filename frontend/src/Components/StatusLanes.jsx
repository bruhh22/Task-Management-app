import React from 'react';
import TaskList from './TaskList';

const StatusLanes = ({ tasks, onDelete, onMove }) => {
  const lanes = {
    todo: tasks.filter((task) => task.status === 'todo'),
    inProgress: tasks.filter((task) => task.status === 'in-progress'),
    done: tasks.filter((task) => task.status === 'done'),
  };

  return (
    <div className="status-lanes">
      <div>
        <h2>To Do</h2>
        <TaskList tasks={lanes.todo} onDelete={onDelete} onMove={onMove} />
      </div>
      <div>
        <h2>In Progress</h2>
        <TaskList tasks={lanes.inProgress} onDelete={onDelete} onMove={onMove} />
      </div>
      <div>
        <h2>Done</h2>
        <TaskList tasks={lanes.done} onDelete={onDelete} onMove={onMove} />
      </div>
    </div>
  );
};

export default StatusLanes;