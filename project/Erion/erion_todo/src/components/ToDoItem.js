import React, { useState } from 'react';

const ToDoItem = ({ task, index, toggleCompleted, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.task);
    const [editedDateTime, setEditeddateTime] = useState(task.dateTime);
    const [editedIsImportant, setEditedIsImportant] = useState(task.isImportant);
    const [editedColor, setEditedColor] = useState(task.color);

    const handleSave = () => {
        updateTask(index, {
            task: editedTask,
            dateTime: editedDateTime,
            isImportant: editedIsImportant,
            color: editedColor,
            isCompleted: task.isCompleted,
        });
        setIsEditing(false);
    };
    return (

        <li style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.color }}>
            {isEditing ? (
                <div class="row">
                    <div class="form-group">
                        <label for="task">Task</label>
                        <input type="text" id="task" name="task" placeholder="Enter your task..." value={editedTask}
                            onChange={(e) => setEditedTask(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="datetime">Date and Time</label>
                        <input type="datetime-local" id="datetime" name="datetime" value={editedDateTime}
                            onChange={(e) => setEditeddateTime(e.target.value)} />
                    </div>
                    <div class="row form-group-row">
                        <div class="form-group checkbox-wrapper">Important
                            <input type="checkbox" id="important" name="important" checked={editedIsImportant}
                                onChange={(e) => setEditedIsImportant(e.target.checked)} />
                            <label for="important">
                                <span class="tick_mark"></span>
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="color">Color</label>
                            <input type="color" id="color" name="color" value={editedColor}
                                onChange={(e) => setEditedColor(e.target.value)} />
                        </div>
                    </div>
                    <div class="task-icones">
                        <span class="material-icons cancel" onClick={() => setIsEditing(false)}>block</span>
                        <span class="material-icons save" onClick={handleSave}>save</span>
                    </div>
                </div>
            ) : (
                <div>
                    {task.task} - {task.dateTime}
                    {task.isImportant && <strong> (Important) </strong>}
                    <div class="task-icones">
                        <span class="material-icons verified" onClick={() => toggleCompleted(index)} >verified</span>
                        <span class="material-icons edit" onClick={() => setIsEditing(true)}>edit</span>
                    </div>
                </div>
            )}
        </li>

    );
};

export default ToDoItem;
