import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Reserve from './components/Reserve/Reserve'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
