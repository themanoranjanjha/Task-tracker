import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), name: taskName, description: taskDescription };
    addTask(newTask);
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task Name"
        value={taskName}
      onChange={(e) => setTaskName(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        margin="normal"
        fullWidth
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;