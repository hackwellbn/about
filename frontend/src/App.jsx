import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './Pages/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App