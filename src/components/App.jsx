import React, { useState } from "react";
import "../styles/App.css";

function App() {
  //  almacenar las tareas
  const [tasks, setTasks] = useState([]);

  // almacenar el valor del input de texto
  const [inputValue, setInputValue] = useState("");

  // Función para manejar el cambio en el input de texto
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Función para agregar una nueva tarea
  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        description: inputValue,
        isDone: false,
        _id: tasks.length + 1,
      };

      // Agregar la nueva tarea al array de tareas
      setTasks([...tasks, newTask]);

      // Limpiar el valor del input de texto
      setInputValue("");
    }
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (taskId) => {
    // Filtrar las tareas y eliminar la tarea con el ID proporcionado
    const updatedTasks = tasks.filter((task) => task._id !== taskId);
    setTasks(updatedTasks);
  };

  // Función para marcar/desmarcar una tarea como completada
  const handleToggleTask = (taskId) => {
    // Mapear las tareas y actualizar el estado de isDone de la tarea con el ID proporcionado
    const updatedTasks = tasks.map((task) =>
      task._id === taskId ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };

  // Función para manejar la pulsación de tecla (Enter) en el input de texto
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Agregar una nueva tarea al presionar Enter
      handleAddTask();
    }
  };

  return (
    <div className="app-container">
      <div className="App">
        {/* Título de la lista de tareas */}
        <h1>Lista De Tareas Con "REACT"</h1>

        <div>
          {/* Input de texto para agregar tareas */}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Add a task"
          />
          {/* Botón para agregar tareas */}
          <button onClick={handleAddTask} className="add-button">Add</button>

        </div>

        <ul>
          {/* Renderizar cada tarea */}
          {tasks.map((task) => (
            <div className="task-container" key={task._id}>
              <li>
                {/* Texto de la tarea */}
                <input
                  type="text"
                  value={task.description}
                  readOnly
                  className={task.isDone ? "task-done" : ""}
                />
                {/* Botón para eliminar la tarea */}
                <button
                  onClick={() => handleDeleteTask(task._id)}
                  className="delete-button"
                >
                  X
                </button>
                {/* Botón para marcar/desmarcar como completada la tarea */}
                <button
                  onClick={() => handleToggleTask(task._id)}
                  className={`toggle-button ${task.isDone ? "blue" : ""}`}
                ></button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
