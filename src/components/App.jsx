import { useList } from '../hooks/useList';
import Checkbox from './Checkbox';

function App() {
  const [taskList, setTaskList] = useList();

  const handleOnKeyDown = (event, text) => {
    if(event.code === "Enter"){
      const task = {name: text, isChecked: false}
      setTaskList([...taskList, task]);
    }
  }

  const updateTask = (text) => {
    const updatedTasks = taskList.map(task => {
      if(task.name === text){
        return { name: task.name, isChecked: !task.isChecked };
      } else {
        return task;
      }
    });

    console.log(updatedTasks);
    setTaskList(updatedTasks);
  }

  const deleteTask = (deletedTask) => {
    const updatedList = taskList.filter((task) => task !== deletedTask);
    setTaskList(updatedList);
  }

  return (
    <div className="App">
      <input type="text" onKeyDown={(event) => {
        handleOnKeyDown(event, event.target.value);
      }}/>
      
      {taskList.map((task) => {
        return <Checkbox task={task} deleteTask={deleteTask} updateTask={updateTask} key={taskList.indexOf(task)} />
      })}
    </div>
  )
}

export default App;
