import '../styles/checkbox.css';

function Checkbox({task, deleteTask, updateTask}) {
    return (
        <div className="checkboxContainer">
            <p className={task.isChecked ? "taskTitle taskDone" : "taskTitle"}>{task.name}</p>
            <div>
                <input type="checkbox" className='checkbox' onClick={() => updateTask(task.name)}/><p className='delete' onClick={() => deleteTask(task)}>X</p>    
            </div>
        </div>
    )
}

export default Checkbox;