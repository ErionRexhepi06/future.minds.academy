import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [color, setColor] = useState('#000000');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && date && time) {
      addTask({ task, date, time, isImportant, color, isCompleted: false });
      setTask('');
      setDate('');
      setTime('');
      setIsImportant(false);
      setColor('#000000');
    }
  };

  return (
    <form className="row gap-2 align-center" onSubmit={handleSubmit}>
      <input 
        className="input-text p-0"
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add Task Here..." 
      />
      <label htmlFor="checkbox" className="pointer">Important?
        <input 
          type="checkbox" 
          checked={isImportant} 
          onChange={(e) => setIsImportant(e.target.checked)} 
          className="pointer" 
        />
      </label>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        className="pointer height-2-5em" 
      />
      <input 
        type="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        className="pointer height-2-5em" 
      />
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
        className="pointer height-2-5em" 
      />
      <button className="add-btn pointer" type="submit">ADD</button>
    </form>
  );
};

export default ToDoForm;
