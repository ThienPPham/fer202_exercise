import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPosts from './components/DataFetching';
import CountdownTimer from './components/CountDownTimer';
import WindowSize from './components/WindowResizeListener';

function App() {
  const data = ['Apple', 'Banana', 'Orange', 'Pear', 'Pineapple'];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<UserPosts />} />
          <Route path='/ex2' element={<CountdownTimer />} />
          <Route path='/ex3' element={<WindowSize />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
