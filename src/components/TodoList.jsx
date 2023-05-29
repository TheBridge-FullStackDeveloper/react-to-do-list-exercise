
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDeleteTask, onToggleTask }) => { //props para mostrar las tareas, manejar la eliminación de tareas y el cambio de estado de las tareas,
  //Funcion para mostrar lista de tareas 
  return (
    <ul className='ul'>
      {tasks.map((task) => (
        <TodoItem             // mapea el array tasks y por cada tarea, renderiza un componente TodoItem pasando las propiedades necesarias
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;