import React, { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {
    const [tasks , setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prevTasks) => [ ...prevTasks , {task , id : Date.now()}]);
    }

    const clearTasks = () => {
        setTasks([]);
    }

    const clearOneTask = (id) => {
        console.log("Call");
        setTasks( tasks.filter( (task) => task.id !== id))
    }

    return (
        <ToDoContext.Provider value = {{tasks , addTask , clearTasks , clearOneTask}}>
            {children}
        </ToDoContext.Provider>
    )
}


export const useToDo = () => {
    return useContext(ToDoContext);
};
