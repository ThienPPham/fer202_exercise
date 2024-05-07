// App.js
import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductReducer from './components/ProductReducer';
import Create from './components/Create';

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
          <Route path='/chatroom' element={<Create />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  );
};

export default App;