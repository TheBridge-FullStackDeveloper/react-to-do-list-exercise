import { useState } from 'react'
//import logo from './logo.svg'
import '../styles/App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        description: inputValue,
        isDone: false,
        _id: tasks.length + 1,
      };

      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };


  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task._id !== taskId);
    setTasks(updatedTasks);
  };


  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task._id === taskId ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };


  return (
    <div className="App">
      <h1>React to do list</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Add a task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input
              type="text"
              value={task.description}
              readOnly
              className={task.isDone ? 'task-done' : ''}
            />
            <button
              onClick={() => handleDeleteTask(task._id)}
              className="delete-button"
            >
              x
            </button>
            <button
              onClick={() => handleToggleTask(task._id)}
              className={`toggle-button ${task.isDone ? 'blue' : ''}`}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

  


export default App
