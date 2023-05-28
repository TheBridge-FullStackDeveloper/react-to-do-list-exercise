import React from "react"

function InputListClick({ onAdd }) {
    const [inputValue, setInputValue] = React.useState('');
  
    const handleInputChange = (event) => {
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

//inputValue es el valor actual
// setInputValue es el valor actualizado
//handleInputChange es digamos quien actualiza el inputValue  utilizando el setInputValue
