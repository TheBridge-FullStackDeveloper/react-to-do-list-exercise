// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        name: newTask,
        checked: false,
      };

      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const handleItemClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  const handleItemClose = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a task..."
      />
      <button className="button" onClick={handleAddTask}>
        Add a Task
      </button>

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        handleItemClick={handleItemClick}
        handleItemClose={handleItemClose}
      />
    </div>
  );
};

export default App;
