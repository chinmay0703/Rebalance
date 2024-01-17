import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Contact from './components/Contact';
import Home from './components/Home';
import "./components/Gallery";
import Gallery from './components/Gallery';
import Aboutt from './components/Aboutt';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery></Gallery>} />
          <Route path="/aboutus" element={<Aboutt></Aboutt>} />
        </Routes>
        <Element name="contact" />
      </div>
    </Router>
  );
}
export default App;

