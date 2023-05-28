import React from "react"

function InputListEnter({ onAdd }) {
    const [inputValue, setInputValue] = React.useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onAdd(inputValue);
            setInputValue('');
        }
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
      </div>
    );

  }

  export default InputListEnter
  
//inputValue es el valor actual
// setInputValue es el valor actualizado
//handleInputValue es digamos quien actualiza el inputValue  utilizando el setInputValue
  