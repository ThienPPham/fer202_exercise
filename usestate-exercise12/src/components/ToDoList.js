import React from 'react';
import { useState } from 'react';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
        <div className='toDoList'>
                <Row>
                    <Col md = '8'>
                        <div className='addTask'>

                            <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Please input a task' />
                            <button onClick={handleAddTask} style={{ textAlign: 'center' }}> Add Task</button>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className='list'>
                            <ul>
                                <h1>
                                    To-Do list
                                </h1>
                                {tasks.map((task, index) => (
                                    <li key={index}>
                                        {task}
                                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
        </div>
    );
}

export default TodoApp;