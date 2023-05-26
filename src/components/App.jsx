import { useState } from 'react'

function TodoList() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const newTask = {
      description: task,
      isDone: false,
      isDeleted: false,
      _id: tasks.length + 1,
    }
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompletion(id) {
    const updatedTasks = tasks.map((task) => {
      if (task._id === id) {
        return {...task, isDone: !task.isDone}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function removeTask(id, event) {
    event.stopPropagation()
    const updatedTasks = tasks.filter((task) => task._id !== id)
    setTasks(updatedTasks)
}

  function handleKeydown(event) {
    if(event.keyCode === 13) {
      addTask(inputTask);
      setInputTask('')
    }
  }

  return (
    <div className="App">
      <input type="text" value={inputTask} onChange={(event) => setInputTask(event.target.value)} onKeyDown={handleKeydown}/>
      <ul>
        {tasks.map((task) => {
          if (task.isDeleted) {
            return null
          }
          return (
            <li
            key={task._id}
            style={{ textDecoration: task.isDone ? 'line-through' : "none"}}
            onClick={() => toggleTaskCompletion(task._id)}
            >
              {task.description}
              <button onClick={(event) => removeTask(task._id, event)}>Remove</button>
            </li>
          )
          })}
      </ul>
    </div>
  )
}



function App() {
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App
