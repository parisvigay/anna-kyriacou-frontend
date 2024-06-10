import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import React from 'react'
import Landing from './Pages/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />}/>
      </Routes>
    </div>
  )
}