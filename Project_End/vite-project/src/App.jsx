import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import StarAlignment from './pages/StarAlignment.jsx';
import AboutUniverse from './pages/AboutUniverse.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/star-alignment" element={<StarAlignment />} />
        <Route path="/about" element={<AboutUniverse />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
