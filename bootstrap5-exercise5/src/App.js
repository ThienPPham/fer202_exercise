import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import Exercise1 from './pages/Exercise1';
import Exercise2 from './pages/Exercise2';
import Exercise3 from './pages/Exercise3';
import Exercise4 from './pages/Exercise4';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Exercise1/>}/>
      <Route path='/Exercise2' element={<Exercise2/>}/>
      <Route path='/Exercise3' element={<Exercise3/>}/>
      <Route path='/Exercise4' element={<Exercise4/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
