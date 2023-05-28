import { useState } from "react";

function Todolist () {
    const [task, setTask]=useState("");
    const [taskList, setTaskList]= useState([]);
    return (
    <>
        {/* <p>Task name :{task}</p> */}
        <input 
        type="text"
        value = "Task"
        onChange={(e)=>{}
            setTask(e.target.value);
        }}

    />
        <button 
        onClick={() => {
            setTaskList([...taskList,task]);
        }}
        >
            Add task to the list </button>
            
        <ul>
            Tasks to do: {taskList.map(task => <li>{task}</li> )}
        </ul>
        </>
        
    )
    ;
};

export default Todolist;