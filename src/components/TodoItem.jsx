

const TodoItem = ({ task, onDelete, onToggle }) => {
   //props para mostrar la información de la tarea, manejar su eliminación y cambio de estado, respectivamente.

  const { id, description, isDone } = task;

  return (
    <li>
      <input className={isDone ? "task-done" : ""}
        type="text"
        value={description}
        readOnly
      />
      <button className='button_click' onClick={() => onDelete(id)}>
        Eliminar
      </button>
      <input className="round-button" type="checkbox"
        onClick={() => onToggle(id)}
      ></input>
    </li>
  );
};

export default TodoItem;