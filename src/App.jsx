import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import ProjectGrid from './components/ProjectGrid'
import { projects } from './data.js'
import { Routes, Route } from 'react-router-dom';
import './styles/App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectGrid projects={projects} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
