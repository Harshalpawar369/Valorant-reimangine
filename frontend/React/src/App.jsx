import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Landingpage from './Landingpage'
import Backsec from './Backsec'
import Footer from './component/Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
