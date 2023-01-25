import "../styles/task-list.css";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updateTask = [ ...tasks ,task];
      setTasks(updateTask);
    }
  };

  const completeTask = id =>{
    const updateTask = tasks.map(task =>{
        if(task.id === id){
            task.complete = !task.complete;
        }
        return task;
    });
    setTasks(updateTask);
  }

  const deleteTask = id =>{
    const updateTask = tasks.filter(task => task.id !== id);
    setTasks(updateTask);
}


  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="task-list-container">
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} text={task.text} complete={task.complete} completeTask={completeTask} deleteTask={deleteTask}/>
        ))}
      </div>
    </>
  );
}
