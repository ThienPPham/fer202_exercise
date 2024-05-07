// TaskList.js
import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from './actionCreators';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.name}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  deleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);