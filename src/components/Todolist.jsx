import { useState } from "react";

function Todolist() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
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
      <div className="container">
        <div className="todo">
          {/* <p>Task name :{task}</p> */}
          <div className="NewList">
            <label className="LabelList">Add new Task</label>
            <input
              type="text"
              className="task-input"
              value={task}
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
              Add task to the list
            </button>
          </div>

          <div className="list">
            <ul className="task-list">
              {/* Tasks to do:{" "} */}
              {taskList.map((task, index) => (
                <li>
                  {task}{" "}
                  <button onClick={() => removeTask(index)}>&#10007;</button>
                </li>
              ))}
            </ul>
          </div>
          {/* <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul> */}
        </div>
      </div>
    </>
  );
}

export default Todolist;
