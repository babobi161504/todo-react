import React from 'react';

const TaskItem = ({ task, toggleCompleted, editTask, deleteTask }) => (
  <li key={task._id} className="task-item">
    <div className="task-header">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task)}
        className="task-checkbox"
      />
      <h3 className={`task-title ${task.completed ? 'completed' : ''}`}>{task.title}</h3>
    </div>
    <p className="task-description">{task.description}</p>
    <div className="task-actions">
      <button onClick={() => editTask(task)} className="edit-button">Edit</button>
      <button onClick={() => deleteTask(task._id)} className="delete-button">Delete</button>
    </div>
  </li>
);

export default TaskItem;

