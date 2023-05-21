import React from "react"

function InputListClick({ onAdd }) {
    const [inputValue, setInputValue] = React.useState('');
  
    const handleInputChange = () => {
      setInputValue(event.target.value);
    };

    const handleAddClick = (event) => {
        onAdd(inputValue);
        setInputValue('');
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddClick}>Agregar </button>
      </div>
    );
  }

  export default InputListClick

  /*        <ul>
            Tareas: {" "}
            {inputValue.map((Tarea)=> (
                <li>{Tarea}</li>
            ))}
        </ul>
        */

