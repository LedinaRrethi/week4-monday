import React from 'react';
import { useToDo } from '../context/ToDoContext';

const ToDoList = () => {
  const { tasks, clearTasks , clearOneTask} = useToDo();

  return (
    <div>
      <h2>To-Do List</h2>
      {tasks.length === 0 ? (
        <p>No task added.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>''
                {task.task}
                <button onClick={() => clearOneTask(task.id)}>Clear </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearTasks}>Clear all</button>

    </div>
  );
};

export default ToDoList;
