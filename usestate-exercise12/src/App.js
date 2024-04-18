import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Count from './components/Count';
import Input from './components/Input';
import Show from './components/Show';
import TodoApp from './components/ToDoList';
import SearchFilter from './components/Search';
import ChangeColor from './components/ChangeColor';
import DragAndDropList from './components/DragAndDropList';

function App() {
  const data = ['Apple', 'Banana', 'Orange', 'Pear', 'Pineapple'];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Count />} />
          <Route path='/input' element={<Input />} />
          <Route path='/show' element={<Show />} />
          <Route path='/todolist' element={<TodoApp />} />
          <Route path='/search' element={
            <>
              <h1>Search Filter Example</h1>
              <SearchFilter data={data} />
            </>
          } />
          <Route path='/changeColor' element={<ChangeColor />} />
          <Route path='/DragAndDrop' element={<DragAndDropList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
