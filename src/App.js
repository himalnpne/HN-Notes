import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import BCA from './Pages/BCA';
import BSCIT from './Pages/BSCIT';
import BIT from './Pages/BIT';
import BIM from './Pages/BIM';
import './App.css';

function App() {
  return (
    <Router basename="/HN-Notes">
      <div className="App">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bca" element={<BCA />} />
            <Route path="/bscit" element={<BSCIT />} />
            <Route path="/bit" element={<BIT />} />
            <Route path="/bim" element={<BIM />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;