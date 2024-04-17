import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from './components/ToDoList';
import Caculator from './components/Calculator';
import SearchFilter from './components/Search';

function App() {
  const data = ['Apple', 'Banana', 'Orange', 'Pear', 'Pineapple'];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<TodoApp />} />
          <Route path='/caculator' element={<Caculator />} />
          <Route path='/search' element={
            <>
              <h1>Search Filter Example</h1>
              <SearchFilter data={data} />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
