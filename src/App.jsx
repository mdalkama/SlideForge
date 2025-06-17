import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import GeneratePage from './components/GeneratePage/GeneratePage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Ppt from './components/Ppt'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<GeneratePage />} />
        <Route path="/about" element={<Ppt />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App