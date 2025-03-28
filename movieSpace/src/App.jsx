import React from 'react'
import './App.css'
import {  Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import MovieDetails from './component/MovieDetails';

const App = () => {

  const url = "http://www.omdbapi.com/?apikey=d839676&";
  return (
   <div>
      <Navbar/>
      <Routes>
<Route path="/" element={<Home/>} />
   <Route path="/movieDetails/:id" element={<MovieDetails/>}></Route>

    </Routes>
    </div>


  )
}

export default App