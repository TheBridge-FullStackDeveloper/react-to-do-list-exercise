import { useState } from 'react'

function MyActivities() {
  const [ item, setItem ] = useState('');
  const [ todoList, setTodoList ] = useState([]);

  return(<>
    <p>Actividad - Item: <strong><i>{item}</i></strong></p>

    <ul>
      <h2>Lista de tareas:</h2> { ' ' }
      { todoList.map(( item ) => (
        <li> {item} </li>
      ))}
    </ul>

    <input 
      type="text"
      onChange = {(e) => {setItem( e.target.value )}} 
    />

    <br />

    <button
      onClick={() => {
        setTodoList( [...todoList, item] )
      }}
    >
    Agrega una tarea:
    </button>
  
  </>
  )
}

function App() {

  return (
    <>
      <div className="App">
        <h1>React to do list</h1>
      </div>

      <MyActivities />
    </>
  )
}

export default App
