import React from 'react';
import { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };
    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <div>
                <h1>
                    To-Do list
                </h1>
                <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Enter New Task' />
                <button onClick={handleAddTask}> Add Task</button>
            </div>
            <ul>
                {tasks.map((task, index) =>(
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;