import React from 'react';
import Navbar from './partials/navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Movie from './pages/movie';
import Home from './pages/home';
import Pokemon from './pages/pokemon';
import Welcome from './pages/welcome';

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/home' element={<Home/>} />
          {/* <Route path='/' element={<About/>} /> */}
          <Route path='/movie' element={<Movie/>} />
          <Route path='/pokemon' element={<Pokemon/>} />
        </Routes>
      </div>
    </>
  )
};

export default App;
