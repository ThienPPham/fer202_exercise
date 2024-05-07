import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from './components/ToDoList';
import { Provider } from 'react-redux';


function App() {
  const data = ['Apple', 'Banana', 'Orange', 'Pear', 'Pineapple'];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
