import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, updateTask } from './ActionTypes';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function TodoApp({ tasks, addTask, deleteTask, updateTask }) {
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    deleteTask(index);
  };

  const handleEditClick = (index, task) => {
    setEditingIndex(index);
    setEditedTask(task);
  };

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSaveEdit = (index) => {
    updateTask(index, editedTask);
    setEditingIndex(null);
  };

  return (
    <div className='toDoList'>
      <Row>
        <Col md='8'>
          <div className='addTask'>
            <input
              type='text'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder='Please input a task'
            />
            <button onClick={handleAddTask} style={{ textAlign: 'center' }}>
              {' '}
              Add Task
            </button>
          </div>
        </Col>
        <Col md='4'>
          <div className='list'>
            <ul>
              <h1>To-Do list</h1>
              {tasks.map((task, index) => (
                <li key={index}>
                  {editingIndex === index ? (
                    <div>
                      <input
                        type='text'
                        value={editedTask}
                        onChange={handleEditChange}
                      />
                      <button onClick={() => handleSaveEdit(index)}>Save</button>
                    </div>
                  ) : (
                    <div>
                      {task}
                      <button onClick={() => handleDeleteTask(index)}>
                        Delete
                      </button>
                      <button onClick={() => handleEditClick(index, task)}>
                        Edit
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  deleteTask,
  updateTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);