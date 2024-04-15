import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './components/Counter';
import ChangeColor from './components/ChangeColor';
import CompanyRender from './components/CompanyRender';
import NoContext from './components/NoContext';
import WithContext from './components/WithContext';
import CounterEffect from './components/CounterEffect';
import CounterReducer from './components/CounterReducer';

const companies = [
  { id: '1', name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { id: '2', name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { id: '3', name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { id: '4', name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { id: '5', name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { id: '6', name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { id: '7', name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { id: '8', name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { id: '9', name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

function App() {
  return (
    <div>
      <Counter />
      <ChangeColor />
      <CompanyRender companies={companies} />
      <NoContext name='Ellie' />
      <WithContext name='London' />
      <CounterEffect />
      <CounterReducer />
    </div>
  );
}
export default App;
