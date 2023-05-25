import "./MyActivities.css"
import { useState } from 'react';

function MyActivities() {
    const [ item, setItem ] = useState('');
    const [ todoList, setTodoList ] = useState([]);
  
    return(<>
      <p>Actividad - Item: <strong><i>{item}</i></strong></p>
  
      <input 
        type="text"
        onChange = {(e) => { setItem( e.target.value ) }} 
        />
  
        <ul>
          <h2>Lista de tareas:</h2> { ' ' }
          { todoList.map(( item ) => ( <li> {item} </li> ))}
        </ul>
  
      <br />
  
      <button
        onClick={() => {
          setTodoList( [...todoList, item] )
        }}
      >
  
      Añadir task
      
      </button>
    
    </>
    )
  }


export default MyActivities