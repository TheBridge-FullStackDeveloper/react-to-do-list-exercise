import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim() !== '') {
      addTask();
    }
  };

  const handleClick = () => {
    if (task.trim() !== '') {
      addTask();
    }
  };

  const addTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, task]);
    setTask('');
  };

  return (
    <div className="App">
      <h1>React to do list</h1>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Add Task</button>
      <ul>
        {taskList.map((taskItem, index) => (
          <li key={index}>{taskItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
