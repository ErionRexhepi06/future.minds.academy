import React, { useState } from 'react';

const ToDoItem = ({ task, index, toggleCompleted, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);
  const [editedDate, setEditedDate] = useState(task.date);
  const [editedTime, setEditedTime] = useState(task.time);
  const [editedIsImportant, setEditedIsImportant] = useState(task.isImportant);
  const [editedColor, setEditedColor] = useState(task.color);

  const handleSave = () => {
    updateTask(index, {
      task: editedTask,
      date: editedDate,
      time: editedTime,
      isImportant: editedIsImportant,
      color: editedColor,
      isCompleted: task.isCompleted,
    });
    setIsEditing(false);
  };

  return (
    <li className="row gap-1" style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.color }}>
      {isEditing ? (
        <div className="edit-cont row-direction p-2 just-between gap-2">
          <input
            className="input-text p-0"
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <input
            type="date"
            value={editedDate}
            onChange={(e) => setEditedDate(e.target.value)}
            className="pointer height-2-5em"
          />
          <input
            type="time"
            value={editedTime}
            onChange={(e) => setEditedTime(e.target.value)}
            className="pointer height-2-5em"
          />
          <label className="pointer">
            Important
            <input
              type="checkbox"
              checked={editedIsImportant}
              onChange={(e) => setEditedIsImportant(e.target.checked)}
              className="pointer"
            />
          </label>
          <input
            type="color"
            value={editedColor}
            onChange={(e) => setEditedColor(e.target.value)}
            className="pointer height-2-5em"
          />
          <button className="save-btn pointer" onClick={handleSave}>Save</button>
          <button className="cancel-btn pointer" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="col-1 align-center row-nowrap just-between" style={{ overflowX: 'auto' }}>
          <div>
            {task.task} - {task.date} {task.time}
            {task.isImportant && <strong> (Important) </strong>}
          </div>

          <div>
            <button className="done-btn" onClick={() => toggleCompleted(index)}>
            </button>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default ToDoItem;
