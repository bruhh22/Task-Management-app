import React, { useState } from 'react';
import TaskForm from '../Components/TaskForm';
import StatusLanes from '../Components/StatusLanes';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const handleSave = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), status: 'todo' }]);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleMove = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div>
      <TaskForm onSave={handleSave} />
      <StatusLanes tasks={tasks} onDelete={handleDelete} onMove={handleMove} />
    </div>
  );
};

export default HomePage;