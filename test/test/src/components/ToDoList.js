import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleCompleted, updateTask }) => {
  return (
    <div className="list-wrapper">
      <div className="row just-between top-list">
        <h2>Tasks List</h2>
        <div className="circle">.</div>
      </div>
      <ul className="list row-direction gap-1 just-center">
        {tasks.map((task, index) => (
          <ToDoItem 
            key={index} 
            task={task} 
            index={index} 
            toggleCompleted={toggleCompleted} 
            updateTask={updateTask} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
