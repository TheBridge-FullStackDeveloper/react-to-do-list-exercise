import { useState } from 'react'
import logo from './logo.svg'
import './App.css'



function App() {
  let [tasks, setTasks] = useState([
    { name: "Test1", status: false },
    { name: "Test2", status: false },
    { name: "Test3", status: false },
    { name: "Test4", status: false }
  ]);

  return (
    <div className="App">
      <h1>React to do list</h1>
      <input
        className='enterTask'
        placeholder="Enter a new task"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            tasks.push({ name: e.target.value, status: false });
            const newState = tasks.map((element) => {
              return element;
            });
            e.target.value = "";
            setTasks(newState);
          }
          
        }}
      />


       {tasks.map((task) => {
         let textDeco = ""
         if(task.status === false){
          textDeco = "none"
         }else {
           textDeco = "line-through"
         }
        return (
          <div className='toDoItem'>
            <p style={{ textDecoration: textDeco }}>{task.name}</p>
            <div className='toDoOptions'>
              <input
                type="checkbox"
                value={task.status}
                onChange={(e) => {
                  const newState = tasks.map((element) => {
                    if (element.name === task.name) {
                      return { name: element.name, status: !element.status };
                    }
                    return element;
                  });
                  setTasks(newState);
                  console.log(newState)
                }}
              />
              <div className="cancelItem" onClick={(e)=> {
                    const newState = tasks.filter((element)=> {
                      if (element.name !== task.name) {
                        return { name: element.name, status: !element.status };
                      }
                     
                    });
                    
                    setTasks(newState);
                    console.log(newState)
                  }
              }>X</div> 
            </div>
          </div>
        );
      })}
    </div>
  
     
    
    
  ) 
}

export default App
