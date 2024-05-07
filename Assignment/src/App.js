import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DemoApi from './components/ProductList';
import TodoApp from './components/TodoList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<DemoApi />}></Route>
        <Route path='/todoList' element={<TodoApp />} />
      </Routes>
    </Router>
  );
};

export default App;