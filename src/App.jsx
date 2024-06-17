import './App.css';
import { Routes, Route } from 'react-router-dom';

import React from 'react'
import Landing from './Pages/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import Artwork from './Pages/Artwork/Artwork';

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/artwork/:id" element={<Artwork />}/>
      </Routes>
      <Footer />
    </div>
  )
}