import { useState } from 'react'
import InputListEnter from './InputListEnter'
import InputListClick from './InputListClick'


function App() {
  const [list, setList] = useState([]);

  const handleAddToList = (value) => {
    setList([...list, value]);
  };

  return (
    <div className="App">
      <h1>React to do list</h1>
      <InputListClick onAdd= {handleAddToList} />
      <InputListEnter onAdd= {handleAddToList} />
      <ul>
        {list.map((item, index) => (
          <li key={index} > {item}</li>
        ))}
      </ul>
    </div>
  );

}

export default App