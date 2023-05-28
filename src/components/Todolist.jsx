import { useState } from "react";

function Todolist() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleKeyPress = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      addTaskToList();
    }
  };
  const addTaskToList = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
    
  };
  const removeTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };
  
  return (
    <>
      {/* <p>Task name :{task}</p> */}
      <input
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={() => {
          setTaskList([...taskList, task]);
        }}
      >
        Add task to the list{" "}
      </button>

      <ul>
        Tasks to do:{" "}
        {taskList.map((task,index) => (
          <li>{task} <button onClick={() => removeTask(index)}>Remove</button></li>
        ))}
      </ul>
      {/* <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default Todolist;
