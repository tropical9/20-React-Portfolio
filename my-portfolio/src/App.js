import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Project from './components/Project';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <div className="container">
            < AboutMe />
            < Portfolio />
            < Project />
            < Resume />
            < Contact />
           
           
            {/* <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes> */}
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
