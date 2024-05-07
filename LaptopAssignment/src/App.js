// App.js
import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import UserReducer from './components/UserReducer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import Update from './components/Update';

const store = configureStore({
  reducer: {
    users: UserReducer
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>

    </Provider>
  );
};

export default App;