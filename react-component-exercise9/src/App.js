import './App.css';
import MyInfor from './components/ex1';
import React, { Component } from 'react';
import HelloWorld from './components/ex2';
import Counter from './components/ex3';
import FPTCard from './components/ex4';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/ex5-header';
import Body1 from './components/ex5-body1';
import Body2 from './components/ex5-body2';
import Footer from './components/ex5-footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<>
            <MyInfor />
            <HelloWorld />
            <Counter />
            <div style={{ marginTop: '50px' }}>
              <FPTCard />
            </div>
          </>}></Route>

          <Route path='/ex5' element={
            <>
              <div>
                <Header></Header>
                <div className='content'>
                  <Body1></Body1>
                  <Body2></Body2>
                </div>
                <Footer></Footer>
              </div>
            </>
          }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
