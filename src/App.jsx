import React from "react"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App