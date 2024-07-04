import React, { useState, useEffect } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import Sidebar from './components/Sidebar';
import './styles/App.css';
import './styles/fma-general.css';
import './styles/fma-responsive.css';
import './styles/main.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    filterTasks(filter);
  }, [tasks, filter]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleCompleted = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return updatedTask;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const filterTasks = (filter) => {
    setFilter(filter);
    const today = new Date().toISOString().split('T')[0];
    let filtered = tasks;

    switch (filter) {
      case 'yesterday':
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        filtered = tasks.filter(task => task.date === yesterday);
        break;
      case 'today':
        filtered = tasks.filter(task => task.date === today);
        break;
      case 'tomorrow':
        const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
        filtered = tasks.filter(task => task.date === tomorrow);
        break;
      case 'all':
      default:
        filtered = tasks;
        break;
    }

    setFilteredTasks(filtered);
  };

  return (
    <div className="row p-0 min-height100vh gap-1">
      <button id="toggleButton" className="show-aside pointer block-tablet" onClick={() => document.querySelector('aside').classList.toggle('remove-tablet')}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#black">
          <path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"/>
        </svg>
      </button>
      
      <Sidebar filterTasks={filterTasks} />

      <main className="col-4 row-direction p-2 gap-2">
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={filteredTasks} toggleCompleted={toggleCompleted} updateTask={updateTask} />
      </main>
    </div>
  );
}

export default App;
