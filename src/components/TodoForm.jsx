
import React, { useState } from 'react';

//Formulario para añadir nuevas tareas 

const TodoForm = ({ setTasks, tasks }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {  // función que se ejecuta cuando el valor del input cambia
        setInputValue(e.target.value);
      };


    const handleAdd = () => { //funcion que se ejecuta cuando se pulsa al boton añadir
        if (inputValue.trim() !== '') { // inputValue si no esta vacio crea un nuevo objeto a la tarea
          const newTask = {
            description: inputValue,
            isDone: false,
            id: tasks.length + 1,
          };
          setTasks([...tasks, newTask]); //agregando el nuevo objeto de tarea al array existente y luego se queda vacio 
          setInputValue('');
        }
      };


  return (
    <div className='div_ul'>
      <input className='input_task'
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Añadir Tarea"
      />
      <button className='button_task' onClick={handleAdd}>Añadir</button>
    </div>
  );
};

export default TodoForm;
