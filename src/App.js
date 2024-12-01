import React, { useState, useEffect } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from './api/tasks';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', completed: false });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddOrUpdateTask = async (event) => {
    event.preventDefault();
    if (!newTask.title || !newTask.description) {
      alert('Title và Description là bắt buộc!');
      return;
    }

    try {
      if (editingTask) {
        const response = await updateTask(editingTask._id, newTask);
        setTasks(tasks.map(task => task._id === editingTask._id ? response.data : task));
        setEditingTask(null);
      } else {
        const response = await addTask(newTask);
        setTasks([...tasks, response.data]);
      }
      setNewTask({ title: '', description: '', completed: false });
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const toggleCompleted = async (task) => {
    try {
      const updatedTask = { ...task, completed: !task.completed };
      await updateTask(task._id, updatedTask);
      setTasks(tasks.map(t => t._id === task._id ? updatedTask : t));
    } catch (error) {
      console.error('Error toggling task status:', error);
    }
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TaskForm
        task={newTask}
        setTask={setNewTask}
        onSubmit={handleAddOrUpdateTask}
        editing={!!editingTask}
      />
      <TaskList
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        editTask={setEditingTask}
        deleteTask={async (id) => {
          await deleteTask(id);
          setTasks(tasks.filter(task => task._id !== id));
        }}
      />
    </div>
  );
};

export default App;

