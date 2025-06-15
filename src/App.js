import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskService from "./services/TaskService";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    TaskService.getAllTasks()
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>🧠 MoodBoard</h1>
      <AddTask onTaskAdded={fetchTasks} /> {/* ✅ VERY IMPORTANT */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
