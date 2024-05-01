import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <List
      sx={{
        background:"#e0736e",
        borderRadius: '10px',
        
      }}
    >
      {tasks.map((task, index) => (
        <ListItem key={index}>
          <ListItemText primary={task.name} secondary={task.description} />
          <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;