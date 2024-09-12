import React from 'react';

const ToDoItem = ({ task }) => {
  return (
    <li className="row gap-1" style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.color }}>
      <div className="col-1 align-center row-nowrap just-between" style={{ overflowX: 'auto' }}>
        <div>
          {task.task} - {task.date} {task.time}
          {task.isImportant && <strong> (Important) </strong>}
        </div>
      </div>
    </li>
  );
};

export default ToDoItem;
