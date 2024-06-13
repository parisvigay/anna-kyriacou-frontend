import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import React from 'react'
import Landing from './Pages/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </div>
  )
}