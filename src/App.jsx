import React, { useState } from 'react';
import './App.css';

function App() {
  // useState para las tareas actuales
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  // onKeyDown
  const onKeyDown = (event) => {
    // Verificar si se presionó Enter y la tarea no está vacía
    if (event.key === 'Enter' && task.trim() !== '') {
      addTask();
    }
  };

  // onClick Add Task
  const onClick = () => {
    // Verificar si la tarea no está vacía
    if (task.trim() !== '') {
      addTask();
    }
  };

  // Agregar nueva tarea
  const addTask = () => {
    const newTask = {
      description: task,
      isDone: false,
      _id: Date.now(),
    };
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    setTask('');
  };

  // Alternar estado de tarea
  const toggleTask = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => {
        if (task._id === taskId) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      })
    );
  };

  // Eliminar tarea
  const deleteTask = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task._id !== taskId)
    );
  };

  return (
    <div className="App">
      <h1>React To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Enter a task..."
      />
      <button onClick={onClick}>Add Task</button>
      <ul>
        {taskList.map((task) => (
          <li
            key={task._id}
            className={task.isDone ? 'completed' : ''}
            onClick={() => toggleTask(task._id)}
            style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
          >
            <span className="icon">{task.isDone ? '⚫' : '⚪'}</span>
            <span>{task.description}</span>
            <button className="delete-btn" onClick={() => deleteTask(task._id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
