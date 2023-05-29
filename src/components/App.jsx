import { useState } from 'react';

function InputText() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      if(inputText.trim() !== ""){
      setItems([...items, { text: inputText, checked: false }]);
      setInputText('');
    }
  }
  };

  const clickButton = () =>{
    if(inputText.trim() !== ""){
      setItems([...items, {text: inputText, checked:false}]);
      setInputText("")
    }
  }

  const toggleChecked = (index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = { ...newItems[index], checked: !newItems[index].checked };
      return newItems;
    });
  };

  const deleteItem = (index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        placeholder="ADD TO DO"
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={pressEnter}
      />
      <button onClick={clickButton}>INSERTA LA TAREA</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleChecked(index)}
              />
              <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.text}</span>
            </label>
            <button onClick={() => deleteItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>React to do list</h1>
      <InputText />
    </div>
  );
}

export default App;

