// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "./TaskList.css";

const TaskList = ({ tasks, setTasks }) => {
  const handleItemClick = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          checked: !task.checked,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };
  const handleItemCLose = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span
            className={`task-item ${task.checked ? "checked" : ""}`}
            onClick={() => handleItemClick(index)}
          >
            {task.name}
          </span>
          <button
            className="close-button"
            onClick={() => handleItemCLose(index)}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskList;
