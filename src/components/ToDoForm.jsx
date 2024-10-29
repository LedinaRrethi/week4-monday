import React from 'react';
import { useState } from 'react';
import { useToDo } from '../context/ToDoContext';

const ToDoForm = () => {
    const [task , setTask] = useState('');
    const {addTask} = useToDo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim()) {
            addTask(task);
            setTask('')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value = {task}
            onChange={(e) => setTask(e.target.value)}
            placeholder='task'
        />
        <button type='submit'>Add task</button>
    </form>
  )
}

export default ToDoForm
