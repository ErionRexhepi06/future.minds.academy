import React, { useState } from 'react';

const ToDoForm = ({ addTask, filterTasks }) => {
    const [task, setTask] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [color, setColor] = useState('#000000');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim() && dateTime) {
        addTask({ task, dateTime, isImportant, color, isCompleted: false });
        setTask('');
        setDateTime('');
        setIsImportant(false);
        setColor('#000000');
      }
    };

  return (
    <form id="todo-form m-1 p-1" onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="task">Task</label>
        <input type="text" id="task" name="task" placeholder="Enter your task..." value={task} onChange={(e) => setTask(e.target.value)} />
      </div>
      <div class="form-group">
        <label for="datetime">Date and Time</label>
        <input type="datetime-local" id="datetime" name="datetime" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
      </div>
      <div class="row form-group-row">
        <div class="form-group checkbox-wrapper">Important
          <input type="checkbox" id="important" name="important" checked={isImportant} onChange={(e) => setIsImportant(e.target.checked)} />
          <label for="important">
            <span class="tick_mark"></span>
          </label>
        </div>
        <div class="form-group">
          <label for="color">Color</label>
          <input type="color" id="color" name="color"  value={color} onChange={(e) => setColor(e.target.checked)}/>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">ADD NEW TASK</button>
      <div class="button-group">
        <button type="button" class="btn btn-primary-outline btn-all" onClick={() => filterTasks('all')}>All</button>
        <button type="button" class="btn btn-primary-outline btn-all" onClick={() => filterTasks('yesterday')}>Today</button>
        <button type="button" class="btn btn-primary-outline btn-all" onClick={() => filterTasks('today')}>Tomorrow</button>
        <button type="button" class="btn btn-primary-outline btn-all" onClick={() => filterTasks('tomorrow')}>Yesterday</button>
      </div>
    </form>
  );
};

export default ToDoForm;
