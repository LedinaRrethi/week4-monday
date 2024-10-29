import React from 'react';
import { ToDoProvider } from './context/ToDoContext';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <div>
      <h1>To-Do-App</h1>
    <ToDoProvider>
        <ToDoForm />
        <ToDoList />
    </ToDoProvider>
    </div>
  );
};

export default App;
