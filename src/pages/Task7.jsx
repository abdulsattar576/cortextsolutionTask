 import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
 
const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

 
  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);
 
  const handleTaskAdded = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  };

  return (
    <div>
      <h1>My Task App</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskApp;
