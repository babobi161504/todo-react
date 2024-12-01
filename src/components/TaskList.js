import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleCompleted, editTask, deleteTask }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <TaskItem
        key={task._id}
        task={task}
        toggleCompleted={toggleCompleted}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    ))}
  </ul>
);

export default TaskList;

