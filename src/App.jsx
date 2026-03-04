import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import Footer from './components/Footer'
import About from './components/About'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
     
    </>
  )
}

export default App
