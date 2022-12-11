import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { MainPage } from './Pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/homePage' element = {<HomePage/>}/>
        <Route path='/mainPage' element = {<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
