import React, { useState } from 'react';
import './App.css';

function App() {
  // useState para las tareas actuales
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  // onKeyDown
  const onKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim() !== '') {
      addTask();
    }
  };
  
  // onClick Add Task
  const onClick = () => {
        addTask();
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

  // Alternar Tarea
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

  // Eliminar Tarea
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
          >
            {task.description}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
