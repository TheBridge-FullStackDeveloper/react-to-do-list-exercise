/* Use chatGPT para realizar esta comparación con lo que hice, pero no entendi del todo, por eso lo comento aquí. 
Para crear un input en React que guarde las entradas cuando se presione Enter 
o se haga clic en un botón, puedes utilizar el siguiente código:

Copiar
import React, { useState } from 'react';

function InputComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      saveInputValue();
    }
  };

  const handleButtonClick = () => {
    saveInputValue();
  };

  const saveInputValue = () => {
    // Aquí puedes guardar la entrada en tu estado global o enviarla a tu servidor
    console.log(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <button onClick={handleButtonClick}>Guardar</button>
    </div>
  );
}

export default InputComponent;
Este componente de entrada utiliza el hook useState para manejar el valor de entrada 
y los métodos handleInputChange, handleKeyPress y handleButtonClick para manejar los eventos de entrada,
 tecla y clic del botón respectivamente. Cuando se presiona Enter o se hace clic en el botón "Guardar",
  se llama al método saveInputValue, donde puedes guardar la entrada en tu estado global
   o enviarla a tu servidor.*/