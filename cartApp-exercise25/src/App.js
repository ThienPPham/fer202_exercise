// App.js
import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import ProductReducer from './components/ProductReducer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import Update from './components/Update';

const store = configureStore({
  reducer: {
    products: ProductReducer
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>

    </Provider>
  );
};

export default App;