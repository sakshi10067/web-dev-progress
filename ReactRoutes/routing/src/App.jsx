import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
