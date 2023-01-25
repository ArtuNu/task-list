import "../styles/task.css";
export default function Task({ id,text,complete,completeTask,deleteTask }) {

  return (
    <div className={`task-container ${complete ? "complete" : ""}`}>
      <div>
        <ul>
          <li>{text}</li>
        </ul>
      </div>
      <button onClick={()=> completeTask(id)} className="complete-button">
        <i className="fa-regular fa-circle-check"></i>
      </button>
      <button onClick={()=> deleteTask(id)} className="delete-button">
      <i className="fa-solid fa-circle-minus"></i>
      </button>
    </div>
  );
}
