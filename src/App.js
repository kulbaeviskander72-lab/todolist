import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    
    
    const newTask = {
      text: task,
      isActive: false 
    };

    setTasks([...tasks, {text: task, isActive: false}]);
    setTask("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function toggleActive(index) {
    setTasks(
      tasks.map((item, i) =>
        i === index ? { ...item, isActive: !item.isActive } : item
      )
    );
  }

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Todo List</h1>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder='Write your task...'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="add-btn" onClick={addTask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((item, index) => (
            <li key={index} className="task-item">
             
              <span className={item.isActive ? "active" : ""}>
                {item.text}
              </span>
              <button className='made-btn' onClick={() => toggleActive(index)}>
                Made
              </button>
              <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
