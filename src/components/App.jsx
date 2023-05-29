import React, { useState } from 'react';
import '../styles/App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  
  const handleDelete = (taskId) => { //filtrar para obtener un nuevo array sin la tarea que se va a eliminar.
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggle = (taskId) => { //Evento de cambio de estado de  isDone  dela tarea seleccionada y devuelve array actualizado
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };


  return (
    <div className="App">
      <h1 className='h1'>React to do list</h1>
     <TodoForm 
     setTasks={setTasks} tasks={tasks}/>
      <TodoList 
        tasks={tasks}
        onDeleteTask={handleDelete}
        onToggleTask={handleToggle}
      />
    </div>
  );
};

export default App;