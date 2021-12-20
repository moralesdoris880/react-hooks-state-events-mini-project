import React, {useState} from "react";
import Task from "./Task";

function TaskList({TASKS, CATEGORIES}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleDeleteTask(deleteTask){
    const updatedTasks = tasks.filter((task)=> task.text !== deleteTask.text)
    setTasks(updatedTasks);
  }

  const tasksToDisplay = tasks.filter((task)=>{
    if(selectedCategory === "All") return true;

    return task.category === selectedCategory;
  });

  return (
    <div className="tasks">
      {tasksToDisplay.map((task)=>(<Task task={task} onDeleteTask ={handleDeleteTask}/>))
      }
    </div>
  );
}

export default TaskList;
