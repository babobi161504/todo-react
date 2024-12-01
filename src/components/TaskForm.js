import React from 'react';

const TaskForm = ({ task, setTask, onSubmit, editing }) => (
  <form onSubmit={onSubmit} className="task-form">
    <input
      type="text"
      placeholder="Enter Task Title"
      value={task.title}
      onChange={(e) => setTask({ ...task, title: e.target.value })}
      className="input-field"
    />
    <input
      type="text"
      placeholder="Enter Task Description"
      value={task.description}
      onChange={(e) => setTask({ ...task, description: e.target.value })}
      className="input-field"
    />
    <button type="submit" className="submit-button">
      {editing ? 'Update Task' : 'Add Task'}
    </button>
  </form>
);

export default TaskForm;

