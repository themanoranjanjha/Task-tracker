import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import TaskTrackerApp from './TaskTrackerApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskTrackerApp/>
  </React.StrictMode>
);


reportWebVitals();
