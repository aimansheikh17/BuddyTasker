import React, { useEffect, useState } from 'react'
import ProgressTracker from './Components/ProgressTracker'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import './style.css'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task)=> {
    setTasks([...tasks, task])
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  };

  const clearAllTasks = () => {
    setTasks([]);
  };
  

  return (
    <div className='App'>
      <header className="bg-gray-900 py-6 px-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">
          Buddy<span className="text-yellow-400">Tasker</span>
        </h1>
        <p className="text-gray-400 italic">Your friendly task manager</p>
      </div>
    </header>
      <ProgressTracker tasks={tasks}/>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}/>
     
     {tasks.length>0 && (
    <button className="clear-btn" onClick={clearAllTasks}>Clear All</button>
  )}
   </div>
  )
}

