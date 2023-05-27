import { useState } from 'react';
import "./MyActivities.css"

function MyActivities() {
    const [ item, setItem ] = useState(''); 
    const [ todoList, setTodoList ] = useState([]); 
    
    // Función para el cambio el input para mostrar mientras edito
    const handleItemChange = ( e ) => {
      setItem( e.target.value )
    }

    //Función que tacha la actividad una vez es seleccionada como realizada
    const manageMarkDone = ( index ) => {
      const newTodos = [ ...todoList ]
      newTodos[ index ] = <del> { newTodos[ index ] } </del>
      setTodoList( newTodos )
    } 


    // Función que me permite eliminar un item
    const handleDeleteTodo = ( index ) => {
      const newTodos = [ ...todoList ];
      newTodos.splice( index, 1 );
      setTodoList( newTodos );
    };
  
    return(<>
      <section className="main-container">

        <p className="margin-text">Actividad - Item: <strong><i>{ item }</i></strong></p>
        
        {/* Para meter los datos */}
        <input 
          type="text"
          onChange={ handleItemChange } 
          className="margin-text input-text"
          placeholder="¿Qué harás?"
        />

        <ul className="align-left">

          <h2>Lista de tareas:</h2> { ' ' }
          {todoList.map(( item, index ) => ( 

            <div className='form-contain'>

              <section className="item-flex " key={ index }>
                <label htmlFor={ item }>{ item }</label>
                <section className="check-add-rmv">

                  <input type="checkbox" 
                         value="task"
                         onClick={ () => manageMarkDone( index ) } 
                  />

                  <button className="btn-delete"
                    onClick={ () => handleDeleteTodo( index ) }
                  >X</button>

                </section>
              </section>

            </div>

          ))}

        </ul>

        <br />

        <button onClick={() => { setTodoList( [ ...todoList, item ])}} className="btn-addTask">
          Añadir tarea
        </button>

      </section>
    </>
    )
  }


export default MyActivities