import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import GeneratePage from './components/GeneratePage/GeneratePage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<GeneratePage />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App