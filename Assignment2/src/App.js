import React, { useState, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from './components/TaskList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<TaskList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;