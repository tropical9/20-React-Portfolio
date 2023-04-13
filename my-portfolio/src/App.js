
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.css';


function App() {
	const [pages] = useState([
		  { name: "aboutme", path: "/aboutme" },
		  { name: "portfolio", path: "/portfolio" },
		  { name: "contact", path: "/contact" },
		  { name: "resume", path: "/resume" }
	]);
	const [current, setCurrentPage] = useState("aboutme");

	
	const activePage = () => {
		switch (current) {
			case "aboutme":
				return <AboutMe />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};
	
return (
    <div>
      <Router>
        <div>
          <Header pages={pages} currentPage={current} setCurrentPage={setCurrentPage} />
        </div>
        <div>
          <Routes>
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Router>
      <div>
        {activePage()}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
