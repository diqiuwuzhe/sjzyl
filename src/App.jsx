import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Institutions from './components/Institutions/Institutions';
import Videos from './components/Videos/Videos';
import About from './components/About/About';
import FloatingSocial from './components/FloatingSocial/FloatingSocial';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <FloatingSocial />
      </div>
    </Router>
  )
}

export default App
