// import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
// import Project from './components/Project';
import './App.css';


function App() {
	const [pages] = useState([
		{name: "aboutme"},
		{name: "portfolio"},
		{name: "contact"},
		{name: "resume"}
	]);
	const [current, setCurrentPage] = useState("aboutme");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const selectPage = () => {
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
			<div>
				<Header pages={pages} currentPage={current} setCurrentPage={setCurrentPage} />
			</div>
			<div>
				<main>{selectPage()}</main>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
