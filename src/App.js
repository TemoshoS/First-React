
import './App.css';
import React from 'react'
import Home from './Components/Home';
import Portfolio from './Components/Portfolio'
import About from './Components/About';
import Myblog from './Components/Myblog';
import Review from './Components/Review';
import Contact from './Components/Contact';
import {Routes, Route}  from 'react-router-dom'

function App() {
  return (
    <div>

    <Routes>
           <Route path='/Home' element={<Home/>}/>
           <Route path='/Portfolio' element={<Portfolio/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Myblog' element={<Myblog/>}/>
           <Route path='/Review' element={<Review/>}/>
           <Route path='/Contact' element={<Contact/>}/>
           
           
    </Routes>
    </div>
  );
}

export default App;
