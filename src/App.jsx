import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title">
        <h1>
          Lista de tareas<i className="fa-solid fa-list-check"></i>
        </h1>
        </div>
        <div className="tasks-container">
          <TaskList/>
        </div>
      </div>
    </div>
  );
}

export default App;
