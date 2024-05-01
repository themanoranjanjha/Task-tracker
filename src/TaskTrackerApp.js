import React from 'react';
import { TaskProvider } from './components/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Task Tracker</h1>
        <TaskForm />
        <div>
          <h2>Tasks</h2>
        </div> 
        <TaskList/>  
      </div>
    </TaskProvider>
  );
};

export default App;