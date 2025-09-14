 import React, { useState } from "react";

const AddTask = ({ onTaskAdded }) => {
  const [newTaskText, setNewTaskText] = useState("");
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!newTaskText.trim()) {
      setError("Please enter a task.");  
      return;  
    }
 
    setError("");

 
    try {
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newTaskText }),
      });

      if (response.ok) {
        const addedTask = await response.json();
        onTaskAdded(addedTask); 
        setNewTaskText(""); 
      } else {
        console.error("Failed to add task");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add Task</button>
 
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default AddTask;
